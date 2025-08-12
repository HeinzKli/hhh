// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function() {

    // 1. Parallax Hero
    // We are not animating the hero image itself, but the hero section.
    // The background-attachment: fixed in the CSS does the main parallax work.
    // This GSAP animation adds a subtle vertical movement to the content for a more dynamic feel.
    gsap.to(".hero-content", {
        scrollTrigger: {
            trigger: ".hero",
            start: "top top",
            end: "bottom top",
            scrub: true
        },
        yPercent: 50,
        opacity: 0,
        ease: "none"
    });


    // 2. Fade-in text on scroll
    const fadeInElements = document.querySelectorAll('.fade-in');
    fadeInElements.forEach(el => {
        gsap.fromTo(el,
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: el,
                    start: "top 80%", // Trigger when the top of the element is 80% from the top of the viewport
                    toggleActions: "play none none none"
                }
            }
        );
    });


    // 3. Card animations on scroll
    const cards = document.querySelectorAll('.card');
    gsap.fromTo(cards,
        { opacity: 0, scale: 0.9, y: 50 },
        {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.2, // Stagger the animation for each card
            scrollTrigger: {
                trigger: ".service-cards",
                start: "top 80%",
                toggleActions: "play none none none"
            }
        }
    );

    // 4. Header animation on scroll
    ScrollTrigger.create({
        start: 'top -80',
        end: 99999,
        toggleClass: {className: 'scrolled', targets: 'header'}
    });

});
