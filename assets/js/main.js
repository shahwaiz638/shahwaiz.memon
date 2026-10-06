const body = document.body;
const recruiterButton = document.querySelector('#recruiterMode');
const projectGrid = document.querySelector('.project-grid');
const projectData = [
    { name: 'AI-Based Intrusion Detection for IoT Systems', category: 'security', type: 'DIRECTED STUDIES / UVIC', description: 'ML-based intrusion detection using TON_IoT network, host, and IoT telemetry with a Raspberry Pi testbed.', tech: ['Python', 'PyTorch', 'scikit-learn', 'Raspberry Pi'], image: 'assets/img/intrusion_detection.jpg', url: 'https://github.com/shahwaiz638?tab=repositories' },
    { name: 'Battery Systems Optimization', category: 'systems', type: 'M.ENG PROJECT / UVIC', description: 'Lightweight models for battery state-of-health and remaining-useful-life prediction under hardware constraints.', tech: ['Python', 'MATLAB', 'PyTorch', 'NumPy'], image: 'assets/img/battery_optimizer.jpg', url: 'https://github.com/shahwaiz638/battery-optimizer' },
    { name: 'Automated Product Information Management', category: 'agentic', type: 'PROFESSIONAL PROJECT / SCALA TEAMS', description: 'RAG and multi-agent workflows for querying, creating, validating, and updating structured product data.', tech: ['Python', 'LangGraph', 'Vertex AI', 'MCP'], image: 'assets/img/automated_product_management.png', url: 'https://github.com/shahwaiz638?tab=repositories' },
    { name: 'CaptionCraft', category: 'ai', type: 'UNDERGRADUATE CAPSTONE / NUCES FAST', description: 'Multimodal image-to-description pipeline combining BLIP, Llama 2, fine-tuning, and knowledge distillation.', tech: ['PyTorch', 'BLIP', 'Llama 2', 'Flutter'], image: 'assets/img/caption_craft.png', url: 'https://github.com/shahwaiz638/caption_craft' },
    { name: 'SecureText', category: 'security', type: 'SECURITY PROJECT', description: 'A secure text project exploring protected message handling and practical security-focused application design.', tech: ['Python', 'Security', 'Text Processing'], image: 'assets/img/secure_text.jpg', url: 'https://github.com/shahwaiz638/SecureText' },
    { name: 'mass_hackathon_AI', category: 'agentic', type: 'HACKATHON PROJECT', description: 'Generative AI job price estimator built as a deployable agent application.', tech: ['Python', 'Google ADK', 'Docker', 'Fly.io'], image: 'assets/img/mass_hackathon.jpg', url: 'https://github.com/shahwaiz638/mass_hackathon_AI' },
    { name: 'Network-Emulator', category: 'security', type: 'NETWORKING PROJECT', description: 'Network simulator with routers, priority queues, dynamic routing tables, Dijkstra shortest paths, and delay simulation.', tech: ['C++', 'Dijkstra', 'Splay Trees', 'Data Structures'], image: 'assets/img/network_emulator.jpg', url: 'https://github.com/shahwaiz638/Network-Emulator' },
    { name: 'chess_AI', category: 'ai', type: 'AI GAME PROJECT', description: 'Command-line chess game where the computer plays with Min-Max and Alpha-Beta Pruning.', tech: ['Python', 'Min-Max', 'Alpha-Beta Pruning'], image: 'assets/img/ChessAI.png', url: 'https://github.com/shahwaiz638/chess_AI' },
    { name: 'FaceSwap', category: 'ai', type: 'COMPUTER VISION PROJECT', description: 'Face-swapping experiment using face analysis, image processing, and notebook-based experimentation.', tech: ['Python', 'InsightFace', 'OpenCV', 'Hugging Face'], image: 'assets/img/faceswap.jpg', url: 'https://github.com/shahwaiz638/FaceSwap' },
    { name: 'Mart_Managment_System', category: 'software', type: 'SOFTWARE ENGINEERING PROJECT', description: 'GoMart management system for sales, inventory, customers, suppliers, reporting, and authentication.', tech: ['Java', 'JavaFX', 'Inventory', 'Reporting'], image: 'assets/img/GoMart.png', url: 'https://github.com/shahwaiz638/Mart_Managment_System' },
    { name: 'Supply-Demand-Forecasting', category: 'systems', type: 'MACHINE LEARNING PROJECT', description: 'Forecasts ride-hailing supply-demand gaps by region and time using regression and tree-based models.', tech: ['Python', 'Pandas', 'Regression', 'Decision Trees'], image: 'assets/img/SupplyDemand.png', url: 'https://github.com/shahwaiz638/Supply-Demand-Forecasting' },
    { name: 'CafeSol', category: 'software', type: 'WEB3 PROJECT', description: 'Decentralized cafeteria system with smart contracts for menu management, orders, payments, rewards, and promotions.', tech: ['Solidity', 'JavaScript', 'Smart Contracts', 'Web3'], image: 'assets/img/cafe_sol.jpg', url: 'https://github.com/shahwaiz638/CafeSol' },
    { name: 'BloodBank', category: 'software', type: 'ANDROID PROJECT', description: 'Android app connecting blood donors and recipients with blood-group filtering and Firebase authentication.', tech: ['Java', 'Android', 'Firebase', 'Realtime Database'], image: 'assets/img/BloodBank_1.png', url: 'https://github.com/shahwaiz638/BloodBank' }
];

if (projectGrid) {
    projectGrid.innerHTML = projectData.map((project, index) => `<article class="project-card project-flip-card ${index === 0 ? 'featured' : ''} reveal" data-category="${project.category}" data-github="${project.url}" data-cursor="OPEN GITHUB"><div class="project-flip"><div class="project-face project-front"><div class="project-top"><span class="project-index">${String(index + 1).padStart(2, '0')}</span><span class="project-status"><i></i> ${index < 4 ? 'CV PROJECT' : 'ARCHIVE'}</span></div><div class="project-visual project-orb ${project.image ? 'has-image' : project.visual}">${project.image ? `<img src="${project.image}" alt="${project.name} project preview">` : `<div class="scene-art ${project.visual}" aria-hidden="true"></div><span>${project.name.split(' ')[0].toUpperCase()}</span><b>${String(index + 1).padStart(2, '0')}</b>`}</div><div class="project-body"><p class="project-type">${project.type}</p><h3>${project.name}</h3><p class="project-hint">Hover to inspect</p></div></div><div class="project-face project-back"><p class="project-type">${project.type}</p><h3>${project.name}</h3><p>${project.description}</p><div class="tag-row">${project.tech.map((item) => `<span>${item}</span>`).join('')}</div><span class="github-cta"><i class="bi bi-github"></i> OPEN REPOSITORY</span></div></div></article>`).join('');
}

const projectCards = document.querySelectorAll('.project-card');
const cursorTargets = document.querySelectorAll('a, button, .project-card, .timeline-item, .skill-row');
const projectFilters = document.querySelectorAll('[data-project-filter]');

const filterProjects = (filter) => {
    projectCards.forEach((card) => {
        card.hidden = filter !== 'all' && card.dataset.category !== filter;
    });
    projectFilters.forEach((button) => button.classList.toggle('active', button.dataset.projectFilter === filter));
};

projectFilters.forEach((button) => button.addEventListener('click', () => filterProjects(button.dataset.projectFilter)));
document.querySelectorAll('[data-filter-target]').forEach((pathway) => pathway.addEventListener('click', () => filterProjects(pathway.dataset.filterTarget)));

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
    card.addEventListener('click', () => {
        window.open(card.dataset.github, '_blank', 'noopener,noreferrer');
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
