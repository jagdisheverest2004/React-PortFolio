import anime from 'animejs';

// Fade in animation
export const fadeIn = (targets, delay = 0) => {
    return anime({
        targets,
        opacity: [0, 1],
        translateY: [30, 0],
        duration: 800,
        delay: delay,
        easing: 'easeOutExpo'
    });
};

// Slide in from left
export const slideInLeft = (targets, delay = 0) => {
    return anime({
        targets,
        opacity: [0, 1],
        translateX: [-50, 0],
        duration: 800,
        delay: delay,
        easing: 'easeOutExpo'
    });
};

// Slide in from right
export const slideInRight = (targets, delay = 0) => {
    return anime({
        targets,
        opacity: [0, 1],
        translateX: [50, 0],
        duration: 800,
        delay: delay,
        easing: 'easeOutExpo'
    });
};

// Scale animation
export const scaleIn = (targets, delay = 0) => {
    return anime({
        targets,
        opacity: [0, 1],
        scale: [0.8, 1],
        duration: 600,
        delay: delay,
        easing: 'easeOutBack'
    });
};

// Typing animation for text
export const typeWriter = (targets, text, delay = 0) => {
    return anime({
        targets,
        innerHTML: [0, text.length],
        duration: text.length * 50,
        delay: delay,
        round: 1,
        easing: 'linear',
        update: function(anim) {
            const progress = Math.round(anim.progress * text.length / 100);
            anim.animatables[0].target.textContent = text.slice(0, progress);
        }
    });
};

// Skill bar animation
export const animateSkillBar = (targets, width, delay = 0) => {
    return anime({
        targets,
        width: [0, width + '%'],
        duration: 1000,
        delay: delay,
        easing: 'easeOutExpo'
    });
};

// Card hover animation
export const cardHover = (target) => {
    return anime({
        targets: target,
        scale: 1.05,
        translateY: -5,
        duration: 300,
        easing: 'easeOutQuad'
    });
};

// Card hover reset
export const cardHoverReset = (target) => {
    return anime({
        targets: target,
        scale: 1,
        translateY: 0,
        duration: 300,
        easing: 'easeOutQuad'
    });
};

// Stagger animation for lists
export const staggerFadeIn = (targets, delay = 0) => {
    return anime({
        targets,
        opacity: [0, 1],
        translateY: [30, 0],
        duration: 600,
        delay: anime.stagger(100, {start: delay}),
        easing: 'easeOutExpo'
    });
};

// Pulse animation
export const pulse = (targets) => {
    return anime({
        targets,
        scale: [1, 1.1, 1],
        duration: 1000,
        loop: true,
        easing: 'easeInOutSine'
    });
};

// Theme toggle animation
export const themeToggle = (targets, isDarkMode) => {
    return anime({
        targets,
        rotate: isDarkMode ? 360 : 0,
        scale: [1, 1.2, 1],
        duration: 500,
        easing: 'easeOutBack'
    });
};

// Timeline animation
export const timelineAnimation = (targets, delay = 0) => {
    return anime({
        targets,
        opacity: [0, 1],
        translateX: [-100, 0],
        duration: 800,
        delay: anime.stagger(200, {start: delay}),
        easing: 'easeOutExpo'
    });
};

// Hero text animation
export const heroTextAnimation = (targets, delay = 0) => {
    return anime({
        targets,
        opacity: [0, 1],
        translateY: [50, 0],
        scale: [0.9, 1],
        duration: 1000,
        delay: delay,
        easing: 'easeOutElastic(1, 0.8)'
    });
};