document.addEventListener('DOMContentLoaded', () => {
    
    /* =========================================
       1. STICKY NAVBAR
       ========================================= */
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }

    /* =========================================
       2. MOBILE MENU TOGGLE
       ========================================= */
    const menuToggle = document.querySelector('.menu-toggle');
    const desktopNav = document.querySelector('.desktop-nav');
    const navActions = document.querySelector('.nav-actions');

    if (menuToggle && desktopNav && navActions) {
        menuToggle.addEventListener('click', () => {
            desktopNav.classList.toggle('mobile-active');
            navActions.classList.toggle('mobile-active');
            
            // Change icon
            const icon = menuToggle.querySelector('i');
            if (icon.classList.contains('fa-bars')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-xmark');
            } else {
                icon.classList.remove('fa-xmark');
                icon.classList.add('fa-bars');
            }
        });
    }

    /* =========================================
       3. FAQ ACCORDIONS
       ========================================= */
    const accordions = document.querySelectorAll('.faq-item, .accordion');
    
    accordions.forEach(acc => {
        acc.addEventListener('click', function() {
            // Toggle active state
            this.classList.toggle('active');
            
            // Get the content element (assume it's the next sibling or a child)
            const content = this.querySelector('.faq-answer, .accordion-content');
            if (content) {
                if (content.style.maxHeight) {
                    content.style.maxHeight = null;
                } else {
                    content.style.maxHeight = content.scrollHeight + "px";
                }
            }
            
            // Toggle icon
            const icon = this.querySelector('.fa-chevron-down, .fa-chevron-up, .fa-plus, .fa-minus');
            if (icon) {
                if (icon.classList.contains('fa-chevron-down')) {
                    icon.classList.replace('fa-chevron-down', 'fa-chevron-up');
                } else if (icon.classList.contains('fa-chevron-up')) {
                    icon.classList.replace('fa-chevron-up', 'fa-chevron-down');
                } else if (icon.classList.contains('fa-plus')) {
                    icon.classList.replace('fa-plus', 'fa-minus');
                } else if (icon.classList.contains('fa-minus')) {
                    icon.classList.replace('fa-minus', 'fa-plus');
                }
            }
        });
    });

    /* =========================================
       4. SCROLL ANIMATIONS (INTERSECTION OBSERVER)
       ========================================= */
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Elements to animate
    const elementsToAnimate = document.querySelectorAll('.hero-text, .hero-image-side, .section-title, .card, .step, .integration-card, .stat-item, .pricing-card');
    elementsToAnimate.forEach(el => {
        el.classList.add('fade-up-element');
        observer.observe(el);
    });

    /* =========================================
       5. PRICING TOGGLE (Tarifs Page)
       ========================================= */
    const btnMensuel = document.getElementById('btn-mensuel');
    const btnAnnuel = document.getElementById('btn-annuel');
    const priceAmounts = document.querySelectorAll('.price .amount');

    if (btnMensuel && btnAnnuel) {
        // Assume default is monthly
        let isAnnual = false;
        
        // Define base prices (you can fetch these from data attributes in a real app)
        const prices = {
            monthly: ["29", "89", "199"],
            annual: ["24", "79", "159"] // equivalent per month when billed annually
        };

        btnMensuel.addEventListener('click', () => {
            if (isAnnual) {
                isAnnual = false;
                btnMensuel.classList.add('active');
                btnMensuel.classList.remove('inactive');
                btnAnnuel.classList.remove('active');
                btnAnnuel.classList.add('inactive');
                
                priceAmounts.forEach((el, index) => {
                    if (prices.monthly[index]) {
                        el.textContent = prices.monthly[index];
                    }
                });
            }
        });

        btnAnnuel.addEventListener('click', () => {
            if (!isAnnual) {
                isAnnual = true;
                btnAnnuel.classList.add('active');
                btnAnnuel.classList.remove('inactive');
                btnMensuel.classList.remove('active');
                btnMensuel.classList.add('inactive');
                
                priceAmounts.forEach((el, index) => {
                    if (prices.annual[index]) {
                        el.textContent = prices.annual[index];
                    }
                });
            }
        });
    }

});
