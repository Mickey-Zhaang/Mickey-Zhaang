import { gsap } from 'gsap';

/**
 * GSAP Animation Utilities
 * Common animation functions for the portfolio
 */

/**
 * Fade in animation
 */
export const fadeIn = (element: gsap.TweenTarget, options?: gsap.TweenVars) => {
  return gsap.fromTo(
    element,
    { opacity: 0 },
    {
      opacity: 1,
      duration: 0.6,
      ease: 'power2.out',
      ...options,
    }
  );
};

/**
 * Fade out animation
 */
export const fadeOut = (
  element: gsap.TweenTarget,
  options?: gsap.TweenVars
) => {
  return gsap.to(element, {
    opacity: 0,
    duration: 0.4,
    ease: 'power2.in',
    ...options,
  });
};

/**
 * Slide in from bottom
 */
export const slideInUp = (
  element: gsap.TweenTarget,
  options?: gsap.TweenVars
) => {
  return gsap.fromTo(
    element,
    { y: 50, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 0.8,
      ease: 'power3.out',
      ...options,
    }
  );
};

/**
 * Slide in from top
 */
export const slideInDown = (
  element: gsap.TweenTarget,
  options?: gsap.TweenVars
) => {
  return gsap.fromTo(
    element,
    { y: -50, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 0.8,
      ease: 'power3.out',
      ...options,
    }
  );
};

/**
 * Slide in from left
 */
export const slideInLeft = (
  element: gsap.TweenTarget,
  options?: gsap.TweenVars
) => {
  return gsap.fromTo(
    element,
    { x: -50, opacity: 0 },
    {
      x: 0,
      opacity: 1,
      duration: 0.8,
      ease: 'power3.out',
      ...options,
    }
  );
};

/**
 * Slide in from right
 */
export const slideInRight = (
  element: gsap.TweenTarget,
  options?: gsap.TweenVars
) => {
  return gsap.fromTo(
    element,
    { x: 50, opacity: 0 },
    {
      x: 0,
      opacity: 1,
      duration: 0.8,
      ease: 'power3.out',
      ...options,
    }
  );
};

/**
 * Scale in animation
 */
export const scaleIn = (
  element: gsap.TweenTarget,
  options?: gsap.TweenVars
) => {
  return gsap.fromTo(
    element,
    { scale: 0.8, opacity: 0 },
    {
      scale: 1,
      opacity: 1,
      duration: 0.6,
      ease: 'back.out(1.7)',
      ...options,
    }
  );
};

/**
 * Stagger animation for multiple elements
 */
export const staggerFadeIn = (
  elements: gsap.TweenTarget,
  options?: gsap.TweenVars
) => {
  return gsap.fromTo(
    elements,
    { opacity: 0, y: 20 },
    {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: 'power2.out',
      stagger: 0.1,
      ...options,
    }
  );
};

/**
 * Create a timeline for complex animations
 */
export const createTimeline = (options?: gsap.TimelineVars) => {
  return gsap.timeline(options);
};

/**
 * Scroll-triggered animation setup
 * Note: Requires ScrollTrigger plugin (import separately if needed)
 */
export const setupScrollTrigger = (
  element: gsap.DOMTarget,
  animation: gsap.TweenVars
) => {
  // This is a placeholder - import ScrollTrigger separately if needed
  return gsap.to(element, {
    ...animation,
    scrollTrigger: {
      trigger: element,
      start: 'top 80%',
      toggleActions: 'play none none reverse',
    },
  });
};

export default gsap;
