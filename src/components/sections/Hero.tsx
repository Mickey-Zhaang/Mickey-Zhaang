import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styled from 'styled-components';

import { useEffect, useRef } from 'react';

import { FaLocationDot } from 'react-icons/fa6';

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
		top: '8cqh',
		left: '12cqw',
		size: '6.6cqw',
	},
	{
		text: 'DESIGNER',
		orientation: 'horizontal',
		top: '-5cqh',
		left: '34cqw',
		size: '5.5cqw',
	},
	{
		text: 'PRODUCT',
		orientation: 'horizontal',
		top: '23cqh',
		left: '19cqw',
		size: '5.3cqw',
	},
	{
		text: 'FRONTEND',
		orientation: 'vertical-up',
		top: '-43cqh',
		left: '27cqw',
		size: '4.9cqw',
	},
	{
		text: 'DEVELOPER',
		orientation: 'vertical-down',
		top: '11cqh',
		left: '43cqw',
		size: '4.8cqw',
	},
];

const SIDEBAR = {
	bio: 'I like coffee and cats :)',
	location: 'San Francisco, USA',
};

export default function Hero() {
	const containerRef = useRef<HTMLElement | null>(null);

	useEffect(() => {
		let snapEntrance: (() => void) | null = null;

		const ctx = gsap.context(() => {
			// ─── 1. ENTRANCE TIMELINE ──────────────────────────────────────────
			const tl = gsap.timeline({
				defaults: {
					autoAlpha: 0,
					duration: 1.0,
					ease: 'power1.out',
				},
			});

			tl.from('[data-hero-h]', { x: -50, stagger: 0.25 }, 0);
			tl.from('[data-orientation="vertical-up"]', { y: 50 }, 0.2);
			tl.from('[data-orientation="vertical-down"]', { y: -50 }, 0.3);

			// Snap entrance to completion on first scroll so exit tl never
			// inherits a mid-stagger state.
			snapEntrance = () => {
				tl.progress(1).kill();
				ScrollTrigger.removeEventListener('scrollStart', snapEntrance!);
				snapEntrance = null;
			};
			ScrollTrigger.addEventListener('scrollStart', snapEntrance);

			// ─── 2. SCROLL EXIT TIMELINE ───────────────────────────────────────
			const exitTl = gsap.timeline({
				scrollTrigger: {
					trigger: containerRef.current,
					start: '5% top',
					end: '+=150',
					scrub: 1,
				},
				defaults: {
					autoAlpha: 0,
					immediateRender: false,
					ease: 'none',
				},
			});

			exitTl.to('[data-hero-h]', { x: -50, stagger: 0.25 }, 0);
			exitTl.to('[data-orientation="vertical-up"]', { y: 50 }, 0);
			exitTl.to('[data-orientation="vertical-down"]', { y: -50 }, 0);
		}, containerRef);

		return () => {
			if (snapEntrance)
				ScrollTrigger.removeEventListener('scrollStart', snapEntrance);
			ctx.revert();
		};
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
						data-orientation={label.orientation}
						data-hero-h={label.orientation === 'horizontal' ? true : undefined}>
						{label.text}
					</StyledLabel>
				))}
				<StyledSidebar>
					<StyledPhoto />
					<StyledBio>{SIDEBAR.bio}</StyledBio>
					<StyledLocation>
						<FaLocationDot size={14} />
						{SIDEBAR.location}
					</StyledLocation>
				</StyledSidebar>
			</StyledComposition>
		</StyledHero>
	);
}

// ── Styled Components ──────────────────────────────────────────────────────────

const StyledHero = styled.section`
	display: flex;
	align-items: center;
	justify-content: center;
	min-height: 120vh;
	padding: calc(var(--navbar-height) + var(--space-16)) var(--space-8)
		var(--space-16);

	@media (max-width: 768px) {
		align-items: flex-start;
		padding-bottom: 20rem;
	}
`;

const StyledComposition = styled.div`
	container-type: size;
	position: relative;
	width: min(var(--max-width-content), 100%);
	max-height: calc(120svh - var(--navbar-height) - var(--space-32));
	max-width: calc(2 * (100svh - var(--navbar-height) - var(--space-32)));
	aspect-ratio: 2 / 1;
	margin-top: var(--space-48);

	@media (max-width: 768px) {
		container-type: normal;
		aspect-ratio: unset;
		margin-top: 0;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
`;

const StyledSidebar = styled.div`
	position: absolute;
	right: 6cqw;
	top: -35cqh;
	width: 28cqw;
	display: flex;
	flex-direction: column;
	gap: var(--space-3);

	@media (max-width: 768px) {
		position: static;
		width: 100%;
		max-width: 280px;
		padding-top: var(--space-8);
		align-items: center;
	}
`;

const StyledPhoto = styled.div`
	width: 100%;
	aspect-ratio: 3 / 4;
	background: var(--color-bg-subtle);
	border: 1px solid var(--color-border);
	border-radius: var(--radius-md);
`;

const StyledBio = styled.p`
	font-size: var(--font-size-sm);
	color: var(--color-text-secondary);
	line-height: var(--line-height-normal);
	margin-top: var(--space-1);
`;

const StyledLocation = styled.div`
	display: flex;
	align-items: center;
	gap: var(--space-2);
	font-size: var(--font-size-sm);
	color: var(--color-text-secondary);
`;

interface StyledLabelProps {
	$orientation: LabelOrientation;
	$top: string;
	$left: string;
	$size: string;
}

const StyledLabel = styled.span<StyledLabelProps>`
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

	@media (max-width: 768px) {
		position: static;
		display: block;
		writing-mode: horizontal-tb;
		transform: none !important;
		font-size: clamp(1.5rem, 7vw, 2.5rem);
		text-align: center;
	}
`;
