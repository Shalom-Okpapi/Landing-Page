// JavaScript for Ultimate Landing Page

document.addEventListener("DOMContentLoaded", () => {
    // Sticky Header
    const header = document.querySelector("header");
    window.addEventListener("scroll", () => {
        header.classList.toggle("sticky", window.scrollY > 0);
    });

    // Smooth Scroll for Navigation Links
    const navLinks = document.querySelectorAll("header .nav ul li a");
    navLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const targetId = e.target.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            window.scrollTo({
                top: targetElement.offsetTop - header.offsetHeight,
                behavior: "smooth"
            });
        });
    });
    
    // Scroll Animated Items
    const animatedItems = document.querySelectorAll("[data-animate]");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  },
  {
    threshold: 0.2,
  }
);

animatedItems.forEach((item) => observer.observe(item));

    // Hero Section Button Scroll
    const heroButton = document.querySelector(".hero .btn");
    if (heroButton) {
        heroButton.addEventListener("click", () => {
            const servicesSection = document.querySelector(".services");
            window.scrollTo({
                top: servicesSection.offsetTop - header.offsetHeight,
                behavior: "smooth"
            });
        });
    }

    // Testimonials Slider
    const testimonials = document.querySelectorAll(".testimonials .testimonial");
    let currentTestimonial = 0;

    function showTestimonial(index) {
        testimonials.forEach((testimonial, idx) => {
            testimonial.style.transform = `translateX(${(idx - index) * 100}%)`;
        });
    }

    setInterval(() => {
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        showTestimonial(currentTestimonial);
    }, 5000);

    // Contact Form Submission
    const contactForm = document.querySelector(".contact form");
    contactForm.addEventListener("submit", (e) => {
        e.preventDefault();
        alert("Thank you for reaching out! We will get back to you shortly.");
        contactForm.reset();
    });
});
