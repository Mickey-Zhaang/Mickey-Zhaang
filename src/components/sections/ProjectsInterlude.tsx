import gsap from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
import styled, { keyframes } from 'styled-components';

import { useEffect, useRef } from 'react';

import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

gsap.registerPlugin(TextPlugin);

const WORDS = [
	'with Creativity',
	'for Impact',
	'skills',
	'with people',
	'relationships',
	'ambitiously',
];

function shuffleInPlace<T>(arr: T[]): T[] {
	for (let i = arr.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[arr[i], arr[j]] = [arr[j], arr[i]];
	}
	return arr;
}

export default function ProjectInterlude() {
	const { ref, isVisible } = useIntersectionObserver({
		triggerOnce: true,
		threshold: 0.3,
	});
	const textRef = useRef<HTMLSpanElement>(null);

	useEffect(() => {
		if (!isVisible || !textRef.current) return;

		const ctx = gsap.context(() => {
			let words = shuffleInPlace([...WORDS]);

			const nextWord = () => {
				if (words.length === 0) words = shuffleInPlace([...WORDS]);
				return words.pop()!;
			};

			const typeWord = (word: string) => {
				const tl = gsap.timeline({
					onComplete: () => {
						typeWord(nextWord());
					},
				});

				// ── Type forward ──────────────────────────────────────────
				let built = '';
				word.split('').forEach(char => {
					built += char;
					const stutter = Math.random() < 0.15 ? 0.2 : 0;
					tl.to(textRef.current, {
						duration: 0.05 + Math.random() * 0.08,
						text: built,
						ease: 'none',
						delay: stutter,
					});
				});

				// ── Hold ──────────────────────────────────────────────────
				tl.to({}, { duration: 1.8 });

				// ── Backspace ─────────────────────────────────────────────
				for (let i = word.length - 1; i >= 0; i--) {
					tl.to(textRef.current, {
						duration: 0.04 + Math.random() * 0.04,
						text: word.slice(0, i),
						ease: 'none',
					});
				}

				// ── Hold ──────────────────────────────────────────────────
				tl.to({}, { duration: 1 });
			};

			typeWord(nextWord());
		}, textRef);

		return () => ctx.revert();
	}, [isVisible]);

	return (
		<StyledInterlude
			id="projects-start"
			aria-hidden="true"
			data-theme="dark"
			ref={ref as unknown as React.RefObject<HTMLElement>}>
			<BuildingStyledLabel>{'Building'}</BuildingStyledLabel>
			<StyledTypewriterLabel>{'>'}</StyledTypewriterLabel>

			{/* The cursor styling from your original code remains here! */}
			<StyledTypewriterLabel
				$active={true}
				$typewriter={true}
				ref={textRef}></StyledTypewriterLabel>
		</StyledInterlude>
	);
}

// ... your existing styled components ...

// ── Styled Components ──────────────────────────────────────────────────────────

const blink = keyframes`
	0%, 100% { opacity: 1 }
	50%       { opacity: 0 }
`;

const StyledInterlude = styled.section`
	display: flex;
	align-items: flex-end;
	justify-content: flex-start;
	flex-wrap: wrap;
	min-height: 40vh;
	column-gap: 20px;
	row-gap: 0;
	background: var(--color-dark-bg);
	padding: 0 var(--space-24);
	padding-top: var(--space-32);
`;

const StyledLabel = styled.span<{ $active?: boolean }>`
	display: block;
	font-size: clamp(2rem, 3vw, var(--font-size-2xl));
	font-weight: var(--font-weight-light);
	color: var(--color-dark-text-primary);
	letter-spacing: 0;
	line-height: var(--line-height-tight);
	user-select: none;
	row-height: -var(--space-24);

	&::after {
		content: '|';
		display: ${({ $active }) => ($active ? 'inline' : 'none')};
		animation: ${blink} 0.7s step-end infinite;
	}
`;

const BuildingStyledLabel = styled(StyledLabel)`
	font-family: 'Space Mono', monospace;
	font-weight: var(--font-weight-bold);
`;

const StyledTypewriterLabel = styled(StyledLabel)<{ $typewriter?: boolean }>`
	font-family: 'Space Mono', monospace;
	color: var(--color-secondary-dark-accent);

	${({ $typewriter }) =>
		$typewriter &&
		`
		white-space: nowrap;
		overflow: hidden;
		@media (max-width: 800px) {
			flex-basis: 100%;
		}
	`}
`;
