// Mobile Navigation Toggle
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    });
});

// Smooth scrolling for navigation links
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

// Navbar maintains consistent light theme (scroll behavior removed)

// Active navigation link highlighting
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Project modal functionality
const modal = document.getElementById('project-modal');
const modalBody = document.getElementById('modal-body');

// Project data
const projectData = {
    project1: {
        title: 'NFL Stats Manager',
        description: 'A comprehensive database management system for NFL statistics built with Python and PostgreSQL. Created as part of Database Management Systems coursework, this CLI application allows users to perform 21 different functions ranging from adding new data to viewing complex statistics.',
        technologies: ['Python', 'PostgreSQL', 'Psycopg2', 'CLI'],
        features: [
            'Complete CRUD operations for NFL data',
            '21 different statistical functions',
            'Data integrity with foreign key constraints',
            'SQL injection prevention using Psycopg2 library',
            'Complex queries for statistical analysis',
            'User-friendly command-line interface',
            'Robust error handling and validation'
        ],
        github: 'https://github.com/gobirds08/Portfolio/tree/main/NFLStatsManager'
    },
    project2: {
        title: 'Bookbase',
        description: 'A Swift-based iOS application for book management and discovery. Developed as part of Applications Programming coursework, this app provides a clean interface for managing personal book collections with search and organization features.',
        technologies: ['Swift', 'SwiftUI', 'Xcode'],
        features: [
            'Personal book library management',
            'Search and filter functionality',
            'Clean, intuitive user interface',
            'Data persistence and storage',
            'Book categorization and tagging',
            'Reading progress tracking',
            'MVVM design pattern'
        ],
        github: 'https://github.com/gobirds08/Portfolio/tree/main/BookBase'
    },
    project3: {
        title: 'Memory Management System',
        description: 'An efficient memory management system implemented in C as part of Operating Systems coursework. Features custom malloc, realloc, and free functions with a segregated free list achieving 10,000 Kilo-operations/s and 57% memory utilization.',
        technologies: ['C', 'Memory Management', 'Data Structures', 'Debugging'],
        features: [
            'Custom memory allocation functions',
            'Segregated free list implementation',
            'High performance: 10,000 Kilo-ops/s',
            '57% memory utilization efficiency',
            'Comprehensive testing and validation'
        ],
        github: 'https://github.com/gobirds08/Portfolio/tree/main/MemoryManager'
    }
};

function viewProject(projectId) {
    const project = projectData[projectId];
    if (!project) return;

    modalBody.innerHTML = `
        <h2 style="color: #1e293b; margin-bottom: 1rem; font-size: 1.8rem;">${project.title}</h2>
        <p style="color: #64748b; margin-bottom: 1.5rem; line-height: 1.6;">${project.description}</p>
        
        <h3 style="color: #1e293b; margin-bottom: 0.75rem; font-size: 1.2rem;">Technologies Used:</h3>
        <div style="display: flex; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 1.5rem;">
            ${project.technologies.map(tech => 
                `<span style="background: #e2e8f0; color: #475569; padding: 0.25rem 0.75rem; border-radius: 12px; font-size: 0.85rem;">${tech}</span>`
            ).join('')}
        </div>
        
        <h3 style="color: #1e293b; margin-bottom: 0.75rem; font-size: 1.2rem;">Key Features:</h3>
        <ul style="color: #64748b; margin-bottom: 1.5rem; padding-left: 1.5rem;">
            ${project.features.map(feature => `<li style="margin-bottom: 0.5rem;">${feature}</li>`).join('')}
        </ul>
        
        <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
            <a href="${project.github}" target="_blank" rel="noopener noreferrer" 
               style="background: #1e293b; color: white; padding: 0.75rem 1.5rem; border-radius: 8px; text-decoration: none; font-weight: 600; transition: all 0.3s ease;">
                <i class="fab fa-github" style="margin-right: 0.5rem;"></i>View Code
            </a>
        </div>
    `;

    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside of it
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.style.display === 'block') {
        closeModal();
    }
});

// Contact section - no form needed, just display contact info

// Animate elements on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.project-card, .skill-category, .stat-item');
    
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Typing effect for hero title
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize typing effect when page loads
window.addEventListener('load', () => {
    const heroTitle = document.querySelector('.hero-title');
    const originalText = heroTitle.textContent;
    
    // Add a small delay before starting the typing effect
    setTimeout(() => {
        typeWriter(heroTitle, originalText, 80);
    }, 500);
});

// Add some interactive hover effects
document.addEventListener('DOMContentLoaded', () => {
    // Add tilt effect to project cards
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
        });
    });
});

console.log('Portfolio website loaded successfully! 🚀');
