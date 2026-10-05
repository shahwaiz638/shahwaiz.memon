const body = document.body;
const recruiterButton = document.querySelector('#recruiterMode');
const projectCards = document.querySelectorAll('.project-card');
const cursorTargets = document.querySelectorAll('a, button, .project-card, .timeline-item, .skill-row');

const avatarFrame = document.querySelector('.avatar-frame');
if (avatarFrame) {
    avatarFrame.classList.add('rocket-frame');
    const portrait = avatarFrame.querySelector('img');
    const rocketWindow = document.createElement('span');
    rocketWindow.className = 'rocket-window';
    if (portrait) rocketWindow.append(portrait);
    avatarFrame.append(rocketWindow);
    avatarFrame.insertAdjacentHTML('beforeend', '<span class="rocket-fin rocket-fin-left"></span><span class="rocket-fin rocket-fin-right"></span><span class="rocket-flame"></span>');
}

const dot = document.createElement('span');
dot.className = 'cursor-dot';
const ring = document.createElement('span');
ring.className = 'cursor-ring';
const note = document.createElement('span');
note.className = 'cursor-note';
body.append(dot, ring, note);

window.addEventListener('pointermove', (event) => {
    dot.style.left = `${event.clientX}px`;
    dot.style.top = `${event.clientY}px`;
    ring.style.left = `${event.clientX}px`;
    ring.style.top = `${event.clientY}px`;
    note.style.left = `${event.clientX + 22}px`;
    note.style.top = `${event.clientY - 18}px`;
});

cursorTargets.forEach((target) => {
    target.addEventListener('pointerenter', () => {
        const label = target.dataset.cursor || (target.classList.contains('project-card') ? 'OPEN WORLD' : 'EXPLORE');
        note.textContent = label;
        body.classList.add('cursor-active');
    });
    target.addEventListener('pointerleave', () => body.classList.remove('cursor-active'));
});

recruiterButton?.addEventListener('click', () => {
    body.classList.toggle('recruiter-mode');
    recruiterButton.classList.toggle('active');
    recruiterButton.innerHTML = body.classList.contains('recruiter-mode')
        ? '<i class="bi bi-check2"></i> QUICK READ ON'
        : '<i class="bi bi-lightning-charge-fill"></i> RECRUITER MODE';
    if (body.classList.contains('recruiter-mode')) document.querySelector('#work').scrollIntoView({ behavior: 'smooth' });
});

const worldModal = document.createElement('div');
worldModal.className = 'world-modal';
worldModal.innerHTML = '<div class="world-window"><button class="world-close" type="button" aria-label="Close project view">ESC / CLOSE</button><p class="world-kicker"></p><h3></h3><p class="world-description"></p><div class="world-meta"></div></div>';
body.append(worldModal);

const closeWorld = () => {
    worldModal.classList.remove('open');
    body.classList.remove('world-open');
};

worldModal.querySelector('.world-close').addEventListener('click', closeWorld);
worldModal.addEventListener('click', (event) => {
    if (event.target === worldModal) closeWorld();
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeWorld();
});

projectCards.forEach((card) => {
    card.dataset.cursor = 'ZOOM INTO WORLD';
    card.addEventListener('click', () => {
        const title = card.querySelector('h3')?.innerText.replace(/\n/g, ' ') || 'Project world';
        const description = card.querySelector('.project-body p:not(.project-type)')?.innerText || '';
        const type = card.querySelector('.project-type')?.innerText || 'PROJECT';
        const tags = [...card.querySelectorAll('.tag-row span')].map((tag) => `<span>${tag.innerText}</span>`).join('');
        worldModal.querySelector('.world-kicker').textContent = type;
        worldModal.querySelector('h3').textContent = title;
        worldModal.querySelector('.world-description').textContent = description;
        worldModal.querySelector('.world-meta').innerHTML = tags;
        worldModal.classList.add('open');
        body.classList.add('world-open');
    });
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
    });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));

const contactForm = document.querySelector('#contactForm');
const transmitStatus = document.querySelector('#transmitStatus');
// TODO: replace with your own Formspree endpoint — sign up free at https://formspree.io,
// create a form, and paste its endpoint URL below (looks like https://formspree.io/f/xxxxxxx)
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/your_form_id';

contactForm?.addEventListener('submit', async (event) => {
    event.preventDefault();
    const formData = new FormData(contactForm);
    transmitStatus.textContent = 'TRANSMITTING...';
    transmitStatus.className = 'transmit-status pending';
    try {
        const response = await fetch(FORMSPREE_ENDPOINT, {
            method: 'POST',
            body: formData,
            headers: { 'Accept': 'application/json' }
        });
        if (response.ok) {
            transmitStatus.textContent = 'SIGNAL RECEIVED // THANKS, REPLYING SOON';
            transmitStatus.className = 'transmit-status success';
            contactForm.reset();
        } else {
            throw new Error('Request failed');
        }
    } catch (err) {
        transmitStatus.textContent = 'TRANSMISSION FAILED // EMAIL ME DIRECTLY INSTEAD';
        transmitStatus.className = 'transmit-status error';
    }
});
