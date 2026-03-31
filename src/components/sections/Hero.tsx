import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styled from 'styled-components';

import { useEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

type LabelOrientation = 'horizontal' | 'vertical-up' | 'vertical-down';

interface RoleLabel {
	text: string;
	orientation: LabelOrientation;
	top: string;
	left: string;
	size: string;
}

const ROLE_LABELS: RoleLabel[] = [
	{
		text: 'ENGINEER',
		orientation: 'horizontal',
		top: '52cqh',
		left: '12cqw',
		size: '6.6cqw',
	},
	{
		text: 'DESIGNER',
		orientation: 'horizontal',
		top: '38cqh',
		left: '34cqw',
		size: '5.5cqw',
	},
	{
		text: 'FRONTEND',
		orientation: 'vertical-up',
		top: '0cqh',
		left: '27cqw',
		size: '4.9cqw',
	},
	{
		text: 'DEVELOPER',
		orientation: 'vertical-down',
		top: '55cqh',
		left: '44cqw',
		size: '4.8cqw',
	},
];

export default function Hero() {
	const containerRef = useRef<HTMLElement | null>(null);

	useEffect(() => {
		const ctx = gsap.context(() => {
			// ─── 1. ENTRANCE TIMELINE ──────────────────────────────────────────
			const tl = gsap.timeline({
				defaults: {
					autoAlpha: 0,
					duration: 1.5,
					ease: 'power2.out',
				},
			});

			tl.from('[data-hero-h]', { x: -50, stagger: 0.25 }, 0);
			tl.from('[data-orientation="vertical-up"]', { y: 50 }, 0.2);
			tl.from('[data-orientation="vertical-down"]', { y: -50 }, 0.3);

			// ─── 2. SCROLL EXIT TIMELINE ───────────────────────────────────────
			// Tied to the hero element — fires when 20% of the hero has scrolled
			// past the viewport top, well after the entrance finishes (~1s).
			// ease: 'none' is correct for scrub — easing is already provided by
			// the user's scroll momentum.
			const exitTl = gsap.timeline({
				scrollTrigger: {
					trigger: containerRef.current,
					start: '20% top',
					end: '+=300',
					scrub: 1,
				},
				defaults: {
					autoAlpha: 0,
					immediateRender: false,
					ease: 'none',
				},
			});

			// Mirror entrance offsets exactly so exit feels like a reverse playback.
			// Horizontal (ENGINEER, DESIGNER): entered from left → exit back left
			exitTl.to('[data-hero-h]', { x: -50, stagger: 0.15 }, 0);
			// FRONTEND is vertical-up: entered from below (y:50) → exit back down
			exitTl.to('[data-orientation="vertical-up"]', { y: 50 }, 0);
			// DEVELOPER is vertical-down: entered from above (y:-50) → exit back up
			exitTl.to('[data-orientation="vertical-down"]', { y: -50 }, 0);
		}, containerRef);

		return () => ctx.revert();
	}, []);

	return (
		<StyledHero ref={containerRef}>
			<StyledComposition>
				{ROLE_LABELS.map(label => (
					<StyledLabel
						key={label.text}
						$orientation={label.orientation}
						$top={label.top}
						$left={label.left}
						$size={label.size}
						// 👇 CRITICAL FIX: Add this so GSAP can find the vertical elements
						data-orientation={label.orientation}
						data-hero-h={label.orientation === 'horizontal' ? true : undefined}>
						{label.text}
					</StyledLabel>
				))}
			</StyledComposition>
		</StyledHero>
	);
}

// ── Styled Components ──────────────────────────────────────────────────────────

const StyledHero = styled.section`
	display: flex;
	align-items: center;
	justify-content: center;
	min-height: 100vh;
	padding: calc(var(--navbar-height) + var(--space-16)) var(--space-8)
		var(--space-16);
`;

const StyledComposition = styled.div`
	container-type: size;
	position: relative;
	width: 100%;
	max-width: var(--max-width-content);
	aspect-ratio: 2 / 1;
`;

interface StyledLabelProps {
	$orientation: LabelOrientation;
	$top: string;
	$left: string;
	$size: string;
}

const StyledLabel = styled.span<StyledLabelProps>`
	/* 👇 CRITICAL FIX: Hide initially to prevent the text from flashing before GSAP takes over */
	visibility: hidden;

	position: absolute;
	top: ${({ $top }) => $top};
	left: ${({ $left }) => $left};

	font-size: ${({ $size }) => $size};
	font-weight: var(--font-weight-bold);
	line-height: var(--line-height-tight);
	color: var(--color-text-primary);
	letter-spacing: -0.02em;
	user-select: none;
	white-space: nowrap;

	writing-mode: ${({ $orientation }) =>
		$orientation === 'horizontal' ? 'horizontal-tb' : 'vertical-rl'};
	transform: ${({ $orientation }) =>
		$orientation === 'vertical-up' ? 'rotate(180deg)' : 'none'};

	@media (max-width: 600px) {
		position: static;
		display: block;
		writing-mode: horizontal-tb;
		transform: none;
		font-size: clamp(1.5rem, 7vw, 2.5rem);
	}
`;
