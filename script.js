// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Projects Data (Sorted by Date - Most Recent First)
const projectsData = [
    {
        title: "Pico – Interactive OLED Desk Companion",
        date: "Sep 2025 - Dec 2025",
        description: "Interactive desk companion built with ESP32-C3 and 1.3 inch SH1106 OLED display with touch gestures, animations, and Pomodoro timer.",
        skills: ["Embedded Systems", "Arduino", "ESP32-C3", "C/C++", "OLED Display", "Touch Sensor"],
        media: [
            { type: "image", src: "Projects/1 Pico/Media/IMG-20251216-WA0014.jpg" },
            { type: "video", src: "Projects/1 Pico/Media/VID-20251209-WA0029.mp4" }
        ]
    },
    {
        title: "OTTO DIY Robot",
        date: "Jun 2025 - Aug 2025",
        description: "ESP32-based bipedal robot with Bluetooth control, autonomous behavior, ultrasonic sensors, and predefined dance routines.",
        skills: ["ESP32", "Robotics", "BLE", "Embedded Systems", "Sensor Integration", "C++"],
        media: []
    },
    {
        title: "ENVIROGUARD AI",
        date: "Feb 2025 - Mar 2025",
        description: "Smart monitoring system with real-time environmental insights using IoT and AI. Features built-in AI anomaly detection for pH, TDS, temperature, humidity, air pressure, and wind speed.",
        skills: ["AI", "IoT", "MQTT", "Sensory Integration"],
        media: [
            { type: "image", src: "Projects/4  ENVIROGUARD AI/Media/1752264239624.jfif" },
            { type: "image", src: "Projects/4  ENVIROGUARD AI/Media/1752264279083.jfif" }
        ]
    },
    {
        title: "CardioCare-AI",
        date: "Nov 2024 - Jan 2025",
        description: "Innovative solution to monitor heart rate and oxygen levels using IoT device and AI module with mobile app integration.",
        skills: ["AIoT", "AI", "IoT", "Machine Learning", "Mobile Apps", "API Development"],
        media: []
    },
    {
        title: "BUSTRAX VISION",
        date: "Sep 2024 - Nov 2024",
        description: "All-encompassing transportation management solution integrating IoT devices with web and mobile apps for real-time vehicle tracking.",
        skills: ["IoT", "Web App", "Mobile Apps", "MQTT", "GPS", "Python", "C++", "ESP32", "Flutter"],
        media: []
    },
    {
        title: "Road Defect Detection Using AIoT",
        date: "Jul 2024 - Sep 2024",
        description: "Intelligent system for detecting road defects in real-time using GPS, MPU9250 sensors, and machine learning with mobile and web alerts.",
        skills: ["AI", "AIoT", "MQTT", "Python", "C++", "ESP32", "GPS", "Machine Learning"],
        media: [
            { type: "image", src: "Projects/6 Road Defect Detection Using AIoT/Media/1728579618615.jfif" },
            { type: "image", src: "Projects/6 Road Defect Detection Using AIoT/Media/1728579706551.jfif" }
        ]
    },
    {
        title: "Parking Space Monitoring",
        date: "Nov 2023 - Jan 2024",
        description: "Custom object detection system to automatically monitor parking spaces via video feeds with real-time vehicle detection.",
        skills: ["Computer Vision", "Python", "OpenCV", "AI", "TensorFlow"],
        media: []
    },
    {
        title: "Real-Time Vehicle Access Control",
        date: "Oct 2023 - Nov 2023",
        description: "Real-time car number plate recognition system for entry/exit management using computer vision and data analytics.",
        skills: ["Computer Vision", "Python", "AI", "YOLO"],
        media: []
    },
    {
        title: "Rice Disease Detection by IoT",
        date: "Jun 2023 - Jul 2023",
        description: "Rice disease detection using ESP32 Cam and YOLOv5 with LCD display, SMS notifications, and mobile app alerts via MQTT.",
        skills: ["Python", "IoT", "Computer Vision", "AI", "ESP32"],
        media: []
    },
    {
        title: "Enviro - Smart Dustbin",
        date: "Jun 2022",
        description: "Revolutionary smart dustbin with real-time fill level monitoring, GPS tracking, and automatic alerts for waste management.",
        skills: ["Sensors", "IoT", "GPS"],
        media: []
    },
    {
        title: "Leaf Disease Detection System",
        date: "Oct 2021",
        description: "AI-powered plant health analysis project using computer vision and Llama Vision models for disease detection and treatment recommendations.",
        skills: ["Python", "Computer Vision", "Deep Learning", "AI"],
        media: []
    },
    {
        title: "Nector Smart Switch",
        date: "2025",
        description: "Smart IoT-enabled electrical switch for remote power control via mobile and web apps with real-time monitoring and automation.",
        skills: ["IoT", "Embedded Systems", "ESP32", "Circuit Design", "Cloud Connectivity", "REST APIs"],
        media: [
            { type: "image", src: "Projects/0 Nector Smart Switch/Media/Nector Final.png" },
            { type: "image", src: "Projects/0 Nector Smart Switch/Media/Nector Final (1).png" },
            { type: "image", src: "Projects/0 Nector Smart Switch/Media/Nector Final (2).png" }
        ]
    },
];

// Awards Data (Sorted by Date - Most Recent First)
const awardsData = [
    {
        title: "Gold Medalist – Innovation World Cup 2026",
        issuer: "Innovation World Cup",
        date: "Nov 2025",
        description: "Received the Gold Medal in the Technology Category and recognized for Regional Innovation Excellence, honoring groundbreaking contributions by Team NECTOR.",
        associated: "Nector",
        media: [
            { type: "image", src: "Honors & awards/2/Media/1762540852935.jfif" },
            { type: "image", src: "Honors & awards/2/Media/1762540890796.jfif" },
            { type: "image", src: "Honors & awards/2/Media/1762540918439.jfif" }
        ]
    },
    {
        title: "Champion — Patent & Idea Competition 2025",
        issuer: "Daffodil International University (DIU)",
        date: "Nov 2025",
        description: "Awarded to Nector for innovation in IoT automation, recognizing our work in developing practical and scalable solutions for homes, agriculture, and industry across Bangladesh.",
        associated: "Nector",
        media: [
            { type: "image", src: "Honors & awards/1/Media/1764318649398.jfif" },
            { type: "image", src: "Honors & awards/1/Media/1764318650100.jfif" },
            { type: "image", src: "Honors & awards/1/Media/1764318651278.jfif" }
        ]
    },
    {
        title: "2nd Runner-Up – Patent & Idea Competition 2024",
        issuer: "Daffodil International University (DIU)",
        date: "Nov 2024",
        description: "Achieved 2nd Runner-Up in the prestigious DIU Project Showcasing event, presenting an innovative project highlighting integration of advanced technology and practical problem-solving.",
        media: [
            { type: "image", src: "Honors & awards/3/Media/1732721120585.jfif" },
            { type: "image", src: "Honors & awards/3/Media/1733771051339.jfif" }
        ]
    },
    {
        title: "Runner-Up – DIU Idea Contest",
        issuer: "DIU - Department Of Software Engineering",
        date: "May 2024",
        description: "National Data Science and AI Start-Up Bootcamp organized by A2i. Team HydroFam held 2nd place in the Idea Contest segment.",
        media: [
            { type: "image", src: "Honors & awards/4/Media/1716360399837.jfif" },
            { type: "image", src: "Honors & awards/4/Media/1716360434814.jfif" }
        ]
    },
    {
        title: "Daffodil AI Celebration 2023",
        issuer: "Daffodil International University (DIU)",
        date: "Dec 2023",
        description: "Showcased project at annual Daffodil Artificial Intelligence Celebration. Received Appreciation Certificate for demonstrated excellence in AI work.",
        associated: "DIU Data Science Club",
        media: [
            { type: "image", src: "Honors & awards/5/Media/1705764184274.jfif" }
        ]
    },
    {
        title: "4th Place in Datathon Contest",
        issuer: "DIU Computer & Programming Club",
        date: "Nov 2023",
        description: "Secured 4th place in the Datathon Contest, showcasing skills in data analysis, innovation, and problem-solving.",
        media: [
            { type: "image", src: "Honors & awards/6/Media/1705763688457.jfif" }
        ]
    },
    {
        title: "Certificate of Participation: Mindsparks 2023",
        issuer: "Ahsanullah University of Science and Technology",
        date: "Aug 2023",
        description: "Participated in Mindsparks 2023, a prestigious competition focused on IT and robotics, demonstrating skills and exploring innovative ideas.",
        media: [
            { type: "image", src: "Honors & awards/7/Media/1705681627542.jfif" }
        ]
    },
    {
        title: "Second Position at 44th Science Fair",
        issuer: "Deputy Commissioner of Chandpur",
        date: "Jun 2023",
        description: "Secured second place at the prestigious 44th Science Fair in Chandpur, earning recognition for exceptional scientific innovation and excellence.",
        media: [
            { type: "image", src: "Honors & awards/8/Media/1705672585252.jfif" },
            { type: "image", src: "Honors & awards/8/Media/1705677007646.jfif" }
        ]
    },
    {
        title: "Champion of 'Show Your Project' Contest",
        issuer: "Phitron",
        date: "Feb 2023",
        description: "Secured first position in the 'Show Your Project' Contest organized by Phitron, recognized for innovation and excellence.",
        media: [
            { type: "image", src: "Honors & awards/9/Media/1705677094707.jfif" }
        ]
    },
    {
        title: "2nd Runner-up at Digital Innovation Fair 2022",
        issuer: "Chandpur ICT division",
        date: "Nov 2022",
        description: "Secured second position at the Digital Innovation Fair in Chandpur, recognized for valuable contributions to the digital landscape.",
        associated: "Hajigonj Degree College",
        media: [
            { type: "image", src: "Honors & awards/10/Media/1705677241564.jfif" },
            { type: "image", src: "Honors & awards/10/Media/1705677337757.jfif" }
        ]
    },
    {
        title: "Champion of Science Fair",
        issuer: "UNO of Hajiganj",
        date: "Aug 2022",
        description: "Secured first position at Hajiganj Upazila Science Fair, demonstrating exceptional scientific acumen and innovative capabilities.",
        associated: "Hajigonj Degree College",
        media: [
            { type: "image", src: "Honors & awards/11/Media/1697730019642.jfif" },
            { type: "image", src: "Honors & awards/11/Media/1697730041311.jfif" }
        ]
    },
    {
        title: "Honor Award in Robotics",
        issuer: "Masud Principal of HDC",
        date: "Jul 2022",
        description: "Received Honor Award from Principal of HDC in acknowledgment of exceptional contributions and outstanding work in Robotics.",
        associated: "Hajigonj Degree College",
        media: [
            { type: "image", src: "Honors & awards/12/Media/1697729198208.jfif" }
        ]
    },
    {
        title: "Runner-Up at 43rd Zila-Level Science Fair",
        issuer: "Deputy Commissioner Of Chandpur District",
        date: "Apr 2022",
        description: "Attained second position at the 43rd Science Fair held in Chandpur, receiving certificate and crest from Deputy Commissioner.",
        associated: "Hajigonj Degree College",
        media: [
            { type: "image", src: "Honors & awards/13/Media/1697729363597.jfif" },
            { type: "image", src: "Honors & awards/13/Media/1705677719523.jfif" }
        ]
    },
    {
        title: "Runner-Up at 43rd Upazila-Level Science Fair",
        issuer: "Upazila Nirbahi Officer Of Hajiganj",
        date: "Dec 2021",
        description: "Awarded second position at the 43rd Science Fair hosted at Hajoganj Model College, acknowledged for outstanding performance.",
        associated: "Hajigonj Degree College",
        media: [
            { type: "image", src: "Honors & awards/14/Media/1697728020822.jfif" },
            { type: "image", src: "Honors & awards/14/Media/1705678081866.jfif" }
        ]
    },
    {
        title: "Joining Certificate for 40th National-Level Science Fair",
        issuer: "Mohammad Munir Chowdhury (Director General) of National Science Museum",
        date: "Oct 2019",
        description: "Awarded Joining Certificate for participation in the 40th National Science Fair held in Dhaka, signifying engagement at national level.",
        associated: "Al kawsar school Hajigonj",
        media: [
            { type: "image", src: "Honors & awards/15/Media/1705680421965.jfif" }
        ]
    },
    {
        title: "Champion at 40th Zila-Level Science Fair",
        issuer: "Deputy Commissioner Of Chandpur",
        date: "Apr 2019",
        description: "Secured top position at the 40th Science Fair in Chandpur, acknowledged for outstanding dedication to scientific excellence.",
        associated: "Al kawsar school Hajigonj",
        media: [
            { type: "image", src: "Honors & awards/16/Media/1697725819206.jfif" }
        ]
    },
    {
        title: "Runner-Up at 40th Upazila-Level Science Fair",
        issuer: "Upazila Nirbahi Officer of Hajiganj",
        date: "Feb 2019",
        description: "Attained second position at the 40th Science Fair in Hajiganj, showcasing notable achievements and dedication to scientific exploration.",
        associated: "Al kawsar school Hajigonj",
        media: [
            { type: "image", src: "Honors & awards/17/Media/1697725586497.jfif" }
        ]
    },
    {
        title: "Selected for Math Festival – Comilla Region",
        issuer: "Math Festival Organiser",
        date: "Jan 2018",
        description: "Chosen to represent Chandpur region at the Math Festival, underscoring mathematical prowess and problem-solving aptitude.",
        associated: "Al kawsar school Hajigonj",
        media: [
            { type: "image", src: "Honors & awards/18/Media/1697725586497.jfif" }
        ]
    }
];

// Load Projects
function loadProjects() {
    const container = document.getElementById('projectsContainer');

    projectsData.forEach((project, index) => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';

        const imageHTML = project.media && project.media.length > 0 && project.media[0].type === 'image'
            ? `<img src="${project.media[0].src}" alt="${project.title}">`
            : `<i class="fas fa-laptop-code"></i>`;

        const mediaButtonHTML = project.media && project.media.length > 0
            ? `<button class="view-media-btn" onclick="openMediaGallery(${index}, 'project')">
                <i class="fas fa-images"></i> View Media (${project.media.length})
               </button>`
            : '';

        projectCard.innerHTML = `
            <div class="project-image">
                ${imageHTML}
            </div>
            <div class="project-content">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-date">${project.date}</p>
                <p class="project-description">${project.description}</p>
                <div class="project-skills">
                    ${project.skills.map(skill => `<span class="skill-badge">${skill}</span>`).join('')}
                </div>
                ${mediaButtonHTML}
            </div>
        `;

        container.appendChild(projectCard);
    });
}

// Load Awards
function loadAwards() {
    const container = document.getElementById('awardsContainer');

    awardsData.forEach((award, index) => {
        const awardItem = document.createElement('div');
        awardItem.className = 'award-item';

        const mediaButtonHTML = award.media && award.media.length > 0
            ? `<button class="view-media-btn" onclick="openMediaGallery(${index}, 'award')">
                <i class="fas fa-images"></i> View Photos (${award.media.length})
               </button>`
            : '';

        awardItem.innerHTML = `
            <div class="award-date">
                <i class="fas fa-calendar-alt"></i> &nbsp; ${award.date}
            </div>
            <div class="award-content">
                <h3 class="award-title">${award.title}</h3>
                <p class="award-issuer"><i class="fas fa-award"></i> ${award.issuer}</p>
                <p class="award-description">${award.description}</p>
                ${award.associated ? `<p class="award-associated"><strong>Associated with:</strong> ${award.associated}</p>` : ''}
                ${mediaButtonHTML}
            </div>
        `;

        container.appendChild(awardItem);
    });
}

// Media Gallery Functions
let currentGallery = [];
let currentMediaIndex = 0;

function openMediaGallery(itemIndex, type) {
    const item = type === 'project' ? projectsData[itemIndex] : awardsData[itemIndex];
    currentGallery = item.media;
    currentMediaIndex = 0;

    const modal = document.getElementById('mediaModal');
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';

    showMedia(0);
    loadThumbnails();
}

function showMedia(index) {
    currentMediaIndex = index;
    const media = currentGallery[index];
    const modalImage = document.getElementById('modalImage');
    const modalVideo = document.getElementById('modalVideo');
    const caption = document.getElementById('modalCaption');

    if (media.type === 'image') {
        modalImage.src = media.src;
        modalImage.style.display = 'block';
        modalVideo.style.display = 'none';
    } else if (media.type === 'video') {
        modalVideo.querySelector('source').src = media.src;
        modalVideo.load();
        modalVideo.style.display = 'block';
        modalImage.style.display = 'none';
    }

    caption.textContent = `${index + 1} / ${currentGallery.length}`;
    updateThumbnailSelection();
}

function loadThumbnails() {
    const container = document.getElementById('modalThumbnails');
    container.innerHTML = '';

    currentGallery.forEach((media, index) => {
        const thumb = document.createElement('div');
        thumb.className = 'thumbnail';
        if (index === 0) thumb.classList.add('active');

        if (media.type === 'image') {
            thumb.innerHTML = `<img src="${media.src}" alt="Thumbnail ${index + 1}">`;
        } else {
            thumb.innerHTML = `<i class="fas fa-play-circle"></i>`;
        }

        thumb.onclick = () => showMedia(index);
        container.appendChild(thumb);
    });
}

function updateThumbnailSelection() {
    const thumbnails = document.querySelectorAll('.thumbnail');
    thumbnails.forEach((thumb, index) => {
        thumb.classList.toggle('active', index === currentMediaIndex);
    });
}

function nextMedia() {
    if (currentMediaIndex < currentGallery.length - 1) {
        showMedia(currentMediaIndex + 1);
    }
}

function prevMedia() {
    if (currentMediaIndex > 0) {
        showMedia(currentMediaIndex - 1);
    }
}

function closeModal() {
    const modal = document.getElementById('mediaModal');
    const modalVideo = document.getElementById('modalVideo');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
    modalVideo.pause();
}

// Modal Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('mediaModal');
    const closeBtn = document.querySelector('.modal-close');
    const prevBtn = document.querySelector('.modal-prev');
    const nextBtn = document.querySelector('.modal-next');

    closeBtn.onclick = closeModal;
    prevBtn.onclick = prevMedia;
    nextBtn.onclick = nextMedia;

    window.onclick = (event) => {
        if (event.target === modal) {
            closeModal();
        }
    };

    document.addEventListener('keydown', (e) => {
        if (modal.style.display === 'flex') {
            if (e.key === 'Escape') closeModal();
            if (e.key === 'ArrowLeft') prevMedia();
            if (e.key === 'ArrowRight') nextMedia();
        }
    });
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar Background on Scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'rgba(15, 23, 42, 1)';
    } else {
        navbar.style.backgroundColor = 'rgba(15, 23, 42, 0.95)';
    }
});

// Scroll Reveal Animation
function reveal() {
    const reveals = document.querySelectorAll('.project-card, .award-item');

    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

// Initial Setup
document.addEventListener('DOMContentLoaded', () => {
    loadProjects();
    loadAwards();

    // Set initial state for animation
    document.querySelectorAll('.project-card, .award-item').forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(50px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });

    reveal();
});

window.addEventListener('scroll', reveal);
