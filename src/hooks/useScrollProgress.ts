import { useEffect, useState } from 'react';

export function useScrollProgress(): number {
	const [progress, setProgress] = useState(0);

	useEffect(() => {
		const handleScroll = () => {
			const { scrollTop, scrollHeight, clientHeight } =
				document.documentElement;
			const total = scrollHeight - clientHeight;
			setProgress(total > 0 ? scrollTop / total : 0);
		};

		window.addEventListener('scroll', handleScroll, { passive: true });
		window.addEventListener('resize', handleScroll, { passive: true });
		handleScroll();

		return () => {
			window.removeEventListener('scroll', handleScroll);
			window.removeEventListener('resize', handleScroll);
		};
	}, []);

	return progress;
}
