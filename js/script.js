// Strict mode
'use strict';

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu functionality
    const mobileMenuBtn = document.querySelector('button.md\\:hidden');
    const nav = document.querySelector('nav');
    
    if (nav) {
        const mobileMenu = document.createElement('div');
        mobileMenu.className = 'mobile-menu';
        mobileMenu.innerHTML = `
            <a href="index.html">Home</a>
            <a href="about.html">About</a>
            <a href="events.html">Events</a>
            <a href="resources.html">Resources</a>
            <a href="gallery.html">Gallery</a>
            <a href="contact.html">Contact</a>
        `;
        nav.appendChild(mobileMenu);

        if (mobileMenuBtn) {
            mobileMenuBtn.addEventListener('click', () => {
                const mobileMenu = document.querySelector('.mobile-menu');
                if (mobileMenu) {
                    mobileMenu.classList.toggle('active');
                }
            });
        }
    }

    // Facilitator carousel data
    const facilitators = [
        {
            name: 'Prof. K N S Acharya',
            role: 'Pro Vice-Chancellor',
            affiliation: 'GITAM Bengaluru Campus',
            image: "images/kns-acharya.png",
            linkedin: 'https://linkedin.com/in/prof-acharya-k-n-s-73a604a'
        },
        {
            name: 'Anupama Nithyanand',
            role: 'Director, CAIA',
            affiliation: 'GITAM Bengaluru Campus',
            image: 'https://pbs.twimg.com/profile_images/3731098743/cc6d4e4c5f47ec1a78f8e661ea6d00e1_400x400.jpeg',
            linkedin: 'https://linkedin.com/in/anupamanithyanand'
        },
        {
            name: 'Dr. Jayan Sen',
            role: 'Associate VP, Head of L&D',
            affiliation: 'Infosys Technologies',
            image: 'images/jayan.jpg',
            linkedin: 'https://linkedin.com/in/jayan-sen-ph-d'
        },
        {
            name: 'Prof. Gayatri Menon',
            role: 'Principal Faculty',
            affiliation: 'NID Ahmedabad',
            image: 'https://media.licdn.com/dms/image/v2/D5603AQHhnXNcrDGCPg/profile-displayphoto-shrink_400_400/B56ZXjTvLNHEAg-/0/1743275357700?e=1752105600&v=beta&t=cnGafgfZ9mF5ZDO62zF8Uu5Qo5yr8sk95_hzBP70jTs',
            linkedin: 'https://linkedin.com/in/dr-gayatri-menon-7ba9976'
        },
        {
            name: 'Dr. Nivine Richie',
            role: 'Associate Dean',
            affiliation: 'UNC Wilmington, USA',
            image: 'https://media.licdn.com/dms/image/v2/D4E03AQH8YVLuGVQqWA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1706387639568?e=1752105600&v=beta&t=6UJMTBj3LxNbt7VjyUv9AeFOkp65sG5aHkGhGmHzLJg',
            linkedin: 'https://linkedin.com/in/nivine-richie-cfa'
        },
        {
            name: 'Mr. Dhananjay Thakur',
            role: 'Assistant Director',
            affiliation: 'Ernst & Young (EY), Pune',
            image: 'https://media.licdn.com/dms/image/v2/D4D03AQH1DAGgFwETIA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1727154434501?e=1752105600&v=beta&t=EocVOzGerXK5KDwMCunbzQ-9OEBhQPIM7sVsv8EEX7I',
            linkedin: 'https://linkedin.com/in/dhananjay-thakur-8885b311'
        }
    ];

    // Initialize facilitator carousel
    const carousel = document.getElementById('facilitatorCarousel');
    if (carousel) {
        let currentIndex = 0;

        // Create facilitator cards
        facilitators.forEach(facilitator => {
            const card = document.createElement('div');
            card.className = 'facilitator-card';
            card.innerHTML = `
                <div class="facilitator-image">
                    <img src="${facilitator.image}" alt="${facilitator.name}" 
                         onerror="this.src='https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg'">
                </div>
                <h3 class="text-xl font-semibold mb-2 text-center">${facilitator.name}</h3>
                <p class="text-gray-600 mb-1 text-center">${facilitator.role}</p>
                <p class="text-gray-500 mb-4 text-center">${facilitator.affiliation}</p>
                <div class="text-center">
                    <a href="${facilitator.linkedin}" target="_blank" rel="noopener noreferrer" 
                       class="text-[#007367] hover:text-[#004740] transition-colors">
                        <i class="fab fa-linkedin text-2xl"></i>
                    </a>
                </div>
            `;
            carousel.appendChild(card);
        });

        // Carousel navigation
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');

        if (prevBtn && nextBtn) {
            // Get all facilitator cards
            const cards = carousel.querySelectorAll('.facilitator-card');
            const cardWidth = cards[0].offsetWidth;
            
            let currentIndex = 0;
            const totalCards = cards.length;

            // Add click event listeners
            nextBtn.addEventListener('click', () => {
                if (currentIndex < totalCards - 1) {
                    currentIndex++;
                    carousel.scrollTo({
                        left: currentIndex * (cardWidth + 32),
                        behavior: 'smooth'
                    });
                }
            });

            prevBtn.addEventListener('click', () => {
                if (currentIndex > 0) {
                    currentIndex--;
                    carousel.scrollTo({
                        left: currentIndex * (cardWidth + 32),
                        behavior: 'smooth'
                    });
                }
            });
        }
    }

    // Intersection Observer for fade-in animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    // Observe all sections and elements with fade-in class
    document.querySelectorAll('section, .fade-in').forEach(el => {
        observer.observe(el);
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                // Close mobile menu if open
                const mobileMenu = document.querySelector('.mobile-menu');
                if (mobileMenu) {
                    mobileMenu.classList.remove('active');
                }
            }
        });
    });

    // Sticky header
    const header = document.querySelector('nav');
    if (header) {
        const headerOffset = header.offsetTop;

        function updateHeader() {
            if (window.pageYOffset > headerOffset) {
                header.classList.add('shadow-md');
            } else {
                header.classList.remove('shadow-md');
            }
        }

        window.addEventListener('scroll', updateHeader);
        updateHeader();
    }

    // Error handling for images
    document.querySelectorAll('img').forEach(img => {
        img.addEventListener('error', function() {
            this.src = 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg';
        });
    });
});
