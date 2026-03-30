import gsap from 'gsap';
import styled from 'styled-components';

import { useEffect, useRef } from 'react';

import Button from '../ui/Button';

const NAME = 'XXXX XXXXX';
const TAGLINE = 'Placeholder tagline — what you build, who you are.';
const CTA_LABEL = 'See my work';
const CTA_HREF = '#projects';

export default function Hero() {
	const containerRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		const ctx = gsap.context(() => {
			gsap.from('[data-hero-item]', {
				y: 40,
				opacity: 0,
				duration: 0.6,
				stagger: 0.12,
				ease: 'power3.out',
			});
		}, containerRef);

		return () => ctx.revert();
	}, []);

	return (
		<StyledHero ref={containerRef}>
			<StyledInner>
				<StyledName data-hero-item>{NAME}</StyledName>
				<StyledTagline data-hero-item>{TAGLINE}</StyledTagline>
				<div data-hero-item>
					<Button href={CTA_HREF}>{CTA_LABEL}</Button>
				</div>
			</StyledInner>
		</StyledHero>
	);
}

// ── Styled Components ──────────────────────────────────────────────────────────

const StyledHero = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	min-height: 100vh;
	padding: calc(var(--navbar-height) + var(--space-16)) var(--space-8)
		var(--space-16);
`;

const StyledInner = styled.div`
	max-width: var(--max-width-narrow);
	width: 100%;
`;

const StyledName = styled.h1`
	font-size: var(--font-size-3xl);
	font-weight: var(--font-weight-bold);
	line-height: var(--line-height-tight);
	color: var(--color-text-primary);
	margin-bottom: var(--space-4);
`;

const StyledTagline = styled.p`
	font-size: var(--font-size-lg);
	font-weight: var(--font-weight-light);
	color: var(--color-text-secondary);
	line-height: var(--line-height-normal);
	margin-bottom: var(--space-8);
`;
