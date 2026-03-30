import { useEffect, useRef, useState } from 'react';
import type { RefObject } from 'react';

interface UseIntersectionObserverOptions {
	threshold?: number;
	rootMargin?: string;
	triggerOnce?: boolean;
}

interface UseIntersectionObserverReturn {
	ref: RefObject<HTMLDivElement | null>;
	isVisible: boolean;
}

export function useIntersectionObserver(
	options: UseIntersectionObserverOptions = {}
): UseIntersectionObserverReturn {
	const { threshold = 0.15, rootMargin = '0px', triggerOnce = false } = options;
	const ref = useRef<HTMLDivElement | null>(null);
	const [isVisible, setIsVisible] = useState(false);

	const optionsRef = useRef({ threshold, rootMargin, triggerOnce });
	optionsRef.current = { threshold, rootMargin, triggerOnce };

	useEffect(() => {
		const element = ref.current;
		if (!element) return;

		const observer = new IntersectionObserver(
			([entry]) => {
				const { triggerOnce: currentTriggeronce } = optionsRef.current;

				if (entry.isIntersecting) {
					setIsVisible(true);
					if (currentTriggeronce) observer.disconnect();
				} else if (!currentTriggeronce) {
					setIsVisible(false);
				}
			},
			{ threshold, rootMargin }
		);

		observer.observe(element);

		return () => observer.disconnect();
	}, [threshold, rootMargin]);

	return { ref, isVisible };
}
