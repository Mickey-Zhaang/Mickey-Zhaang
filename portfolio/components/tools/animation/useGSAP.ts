import { gsap } from 'gsap';

import { type RefObject, useEffect, useRef } from 'react';

/**
 * React hook for GSAP animations
 *
 * @example
 * ```tsx
 * const elementRef = useGSAP(() => {
 *   gsap.from(elementRef.current, { opacity: 0, y: 20 });
 * });
 * ```
 */
export function useGSAP(animationFn: () => void, dependencies: unknown[] = []) {
  const scope = useRef<HTMLDivElement | null>(null);
  const context = useRef<gsap.Context | null>(null);

  useEffect(() => {
    if (scope.current) {
      context.current = gsap.context(animationFn, scope.current);
    }

    return () => {
      context.current?.revert();
    };
  }, dependencies);

  return scope;
}

/**
 * Hook to animate a single element on mount
 *
 * @example
 * ```tsx
 * const ref = useRef<HTMLDivElement>(null);
 * useGSAPAnimation(ref, { opacity: 0, y: 20 }, { opacity: 1, y: 0 });
 * ```
 */
export function useGSAPAnimation(
  ref: RefObject<HTMLElement>,
  fromVars: gsap.TweenVars,
  toVars: gsap.TweenVars,
  dependencies: unknown[] = []
) {
  useEffect(() => {
    if (ref.current) {
      const animation = gsap.fromTo(ref.current, fromVars, toVars);

      return () => {
        animation.kill();
      };
    }
  }, [ref, ...dependencies]);
}

/**
 * Hook for scroll-triggered animations
 * Note: Requires ScrollTrigger plugin
 *
 * @example
 * ```tsx
 * const ref = useRef<HTMLDivElement>(null);
 * useScrollAnimation(ref, { opacity: 0, y: 50 }, { opacity: 1, y: 0 });
 * ```
 */
export function useScrollAnimation(
  ref: RefObject<HTMLElement>,
  fromVars: gsap.TweenVars,
  toVars: gsap.TweenVars
) {
  useEffect(() => {
    if (ref.current) {
      // Import ScrollTrigger if needed:
      // import { ScrollTrigger } from 'gsap/ScrollTrigger';
      // gsap.registerPlugin(ScrollTrigger);

      const animation = gsap.fromTo(ref.current, fromVars, {
        ...toVars,
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      });

      return () => {
        animation.kill();
      };
    }
  }, [ref]);
}
