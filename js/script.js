// Mobile menu functionality
const mobileMenu = document.querySelector('.mobile-menu');
const navLinks = document.querySelector('.nav-links');
const navLinksItems = document.querySelectorAll('.nav-links a');

// Toggle menu
mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    mobileMenu.classList.toggle('active');
    document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
});

// Close menu when clicking on a link
navLinksItems.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        mobileMenu.classList.remove('active');
        document.body.style.overflow = '';
    });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (navLinks.classList.contains('active') && 
        !navLinks.contains(e.target) && 
        !mobileMenu.contains(e.target)) {
        navLinks.classList.remove('active');
        mobileMenu.classList.remove('active');
        document.body.style.overflow = '';
    }
});

// Close menu when window is resized above mobile breakpoint
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        navLinks.classList.remove('active');
        mobileMenu.classList.remove('active');
        document.body.style.overflow = '';
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Data for all sections
const websiteData = {
    research: [
        {
            title: "Cultural Astronomy in Madagascar",
            description: "Exploring traditional Malagasy knowledge and stories about the night sky.",
            findings: "Malagasy communities possess rich but under-documented celestial traditions that can enhance educational and tourism experiences.",
            link: "pages/under-construction.html"
        },
        {
            title: "Light Pollution and Dark Sky Preservation",
            description: "Assessing the extent of light pollution in Madagascar and its impact on dark skies.",
            findings: "Madagascar has relatively low light pollution, but poorly managed urban lighting poses a growing threat.",
            link: "pages/under-construction.html"
        },
        {
            title: "Sustainable Astrotourism Development",
            description: "Evaluating Madagascar's potential for sustainable astronomy-based tourism.",
            findings: "Regions like Nosy Be and Isalo show strong potential for astrotourism, requiring dark sky preservation and community engagement.",
            link: "pages/under-construction.html"
        },
        {
            title: "Biodiversity and the Night Sky",
            description: "Investigating the effects of artificial lighting on nocturnal biodiversity.",
            findings: "Light pollution disrupts the behavior of nocturnal species, highlighting the ecological need to maintain dark skies.",
            link: "pages/under-construction.html"
        },
        {
            title: "Astronomy Education and Citizen Science",
            description: "Promoting astronomy education and public engagement through citizen science initiatives.",
            findings: "Citizen science projects and educational programs can foster public interest in astronomy while contributing valuable data for research.",
            link: "pages/under-construction.html"
        }
    ],
    
    publications: [
        {
            year: "2024",
            title: "Pan-African Citizen Science e-Lab: An Emerging Online Platform for Astronomy Research, Education and Outreach in Africa",
            authors: "M. C. Marcel, K. A. Diaby, M. Guennoun, B. R. Nabifo, M. Elattar, A. Rajaonarivelo et al.",
            journal: "arXiv",
            volume: "preprint arXiv:2408.11059",
            pages: " ",
            link: "https://arxiv.org/pdf/2408.11059"
        },
        {
            year: "2024",
            title: "Pan-African Asteroid Search Campaign: Africa's Contribution to Planetary Defense",
            authors: "M. C. Marcel, K. A. Diaby, M. Guennoun, B. R. Nabifo, M. Elattar, A. Rajaonarivelo et al.",
            journal: "arXiv",
            volume: "preprint arXiv:2408.03385",
            pages: " ",
            link: "https://arxiv.org/pdf/2408.03385"
        }
    ],
    
    outreach: [
        {
            title: "Haikintana Madagascar",
            description: "For the past 9 years, including 5 years as President and 2 years as Vice President of the association. I have organized educational and outreach activities such as public observations, school visits, and international celebrations (World Space Week, Asteroid Day, etc.), as well as the organization of national events: the Astronomy Festival: Majunga under the Stars, Astromania, KSP Challenge, etc.",
            date: "2016-2025",
            image: "./assets/images/outreach/hk.jpg"
        },
        {
            title: "SheMatters ‑ Kanty Astronomy Research Group",
            description: "Contribution to an astronomical outreach initiative aimed at introducing young girls and women in the disadvantaged communities of Akany Avoko to this science with the Kanty Astronomy Research Group",
            date: "2024",
            image: "./assets/images/outreach/sm.jpg"
        },
        {
            title: "Office of Astronomy Education (OAE) ‑ International Astronomical Union (IAU)",
            description: "Serve as a National Astronomy for Education Coordinator for Madagascar and work on the coordination of national astronomy education initiatives, including teacher training programs for which I was a trainer, funded by the OAE.",
            date: "2020-2024",
            image: "./assets/images/outreach/naec.jpg"
        }
    ],
    
    teaching: [
        {
            title: "Astronomy and Astrotourism",
            description: "Course introducing students to astronomy and its application in sustainable tourism, with a focus on dark sky preservation and cultural storytelling.",
            level: "Undergraduate",
            duration: "One Semester",
            year: "2025",
            link: "pages/under-construction.html"
        },
        {
            title: "Observational Astronomy with Ecole du Monde Observatory",
            description: "A hands-on course offering students practical experience in astronomical observation using the Ecole du Monde Observatory, focusing on southern celestial objects, astrophotography, data collection techniques and data analysis",
            level: "Graduate",
            duration: "One Month",
            year: "2025",
            link: "pages/under-construction.html"
        },
        {
            title: "Teacher Training Program",
            description: "A practical program designed for educators and science enthusiasts, focusing on integrating astronomy into teaching and outreach activities.",
            level: "Professional Training",
            duration: "3 Days",
            year: "2023",
            link: "pages/under-construction.html"
        }
    ]
};

// Populate Research Section
function populateResearch() {
    const researchGrid = document.querySelector('.research-grid');
    researchGrid.innerHTML = websiteData.research.map(project => `
        <div class="research-card">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <p><strong>Key Findings:</strong> ${project.findings}</p>
            <a href="${project.link}" class="research-link">Learn More</a>
        </div>
    `).join('');
}

// Populate Publications Section
function populatePublications() {
    const publicationsList = document.querySelector('.publications-list');
    publicationsList.innerHTML = websiteData.publications.map(pub => `
        <li class="publication-item">
            <span class="publication-year">${pub.year}</span>
            <div class="publication-content">
                <h3>${pub.title}</h3>
                <p>${pub.authors}</p>
                <p>${pub.journal}, ${pub.volume}, ${pub.pages}</p>
                <a href="${pub.link}" class="publication-link" target="_blank" rel="noopener noreferrer">Read Paper</a>
            </div>
        </li>
    `).join('');
}

// Populate Outreach Section
function populateOutreach() {
    const outreachList = document.querySelector('.outreach-list');
    const outreachImage = document.getElementById('outreachImage');
    
    outreachList.innerHTML = websiteData.outreach.map((item, index) => `
        <li class="outreach-item ${index === 0 ? 'active' : ''}" data-image="${item.image}">
            <h3>${item.title}</h3>
            <p>${item.description}</p>
            <span class="date">${item.date}</span>
        </li>
    `).join('');
    
    // Set initial image
    outreachImage.src = websiteData.outreach[0].image;
    
    // Add click handlers
    const outreachItems = document.querySelectorAll('.outreach-item');
    outreachItems.forEach(item => {
        item.addEventListener('click', () => {
            // Update active state
            outreachItems.forEach(i => i.classList.remove('active'));
            item.classList.add('active');
            
            // Update image with fade effect
            outreachImage.style.opacity = '0';
            setTimeout(() => {
                outreachImage.src = item.dataset.image;
                outreachImage.style.opacity = '1';
            }, 300);
        });
    });
}

// Populate Teaching Section
function populateTeaching() {
    const trainingGrid = document.querySelector('.training-grid');
    trainingGrid.innerHTML = websiteData.teaching.map(course => `
        <div class="training-card">
            <h3>${course.title}</h3>
            <p>${course.description}</p>
            <ul class="course-details">
                <li>Level: ${course.level}</li>
                <li>Duration: ${course.duration}</li>
                <li>Year: ${course.year}</li>
            </ul>
            <a href="${course.link}" class="course-link">Access Course</a>
        </div>
    `).join('');
}

// Initialize all sections
document.addEventListener('DOMContentLoaded', () => {
    populateResearch();
    populatePublications();
    populateOutreach();
    populateTeaching();
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
}); 
