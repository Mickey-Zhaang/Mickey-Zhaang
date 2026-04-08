import styled from 'styled-components';

import { useEffect, useState } from 'react';

import type { NavLink } from '../../types';

const NAV_LINKS: NavLink[] = [
	{ label: 'About', href: '#about' },
	{ label: 'Projects', href: '#projects' },
	{ label: 'Contact', href: '#contact' },
];

const SITE_NAME = 'Mickey Zhang';

export default function Navbar() {
	const [isFloating, setIsFloating] = useState(false);
	const [isDark, setIsDark] = useState(false);

	useEffect(() => {
		function handleScroll() {
			const floating = window.scrollY > window.innerHeight * 0.2;
			setIsFloating(floating);

			const navCenterY = floating ? 54 : 32;
			const darkSections = document.querySelectorAll('[data-theme="dark"]');
			const overDark = Array.from(darkSections).some(el => {
				const r = el.getBoundingClientRect();
				return r.top <= navCenterY && r.bottom >= navCenterY;
			});
			setIsDark(overDark);
		}
		window.addEventListener('scroll', handleScroll, { passive: true });
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<StyledNav $floating={isFloating} $dark={isDark}>
			<StyledInner>
				<StyledLogoText>{SITE_NAME}</StyledLogoText>
				<StyledLinks>
					{NAV_LINKS.map(link => (
						<li key={link.href}>
							<StyledLink href={link.href}>{link.label}</StyledLink>
						</li>
					))}
				</StyledLinks>
			</StyledInner>
		</StyledNav>
	);
}

// ── Styled Components ──────────────────────────────────────────────────────────

const StyledNav = styled.nav<{ $floating: boolean; $dark: boolean }>`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	height: var(--navbar-height);
	background: var(--color-bg);
	border-bottom: 1px solid var(--color-border);
	border-radius: 0;
	z-index: var(--z-navbar);
	--nav-text: var(--color-text-primary);
	--nav-text-secondary: var(--color-text-secondary);
	transition:
		top var(--duration-slower) var(--ease-in-out),
		left var(--duration-slower) var(--ease-in-out),
		right var(--duration-slower) var(--ease-in-out),
		height var(--duration-slower) var(--ease-in-out),
		border-radius var(--duration-slower) var(--ease-in-out),
		background var(--duration-slower) var(--ease-in-out),
		border-color var(--duration-slower) var(--ease-in-out),
		box-shadow var(--duration-slower) var(--ease-in-out);

	${({ $floating }) =>
		$floating &&
		`
		top: 20px;
		left: 20vw;
		right: 20vw;
		height: 68px;
		border-radius: var(--radius-pill);
		background: rgba(254, 245, 228, 0.65);
		border-color: rgba(223, 197, 168, 0.45);
		backdrop-filter: blur(8px);
		-webkit-backdrop-filter: blur(8px);
		box-shadow: 0 4px 32px rgba(42, 33, 24, 0.2);
	`}

	${({ $floating, $dark }) =>
		$floating &&
		$dark &&
		`
		background: rgba(32, 31, 31, 0.65);
		border-color: rgba(240, 235, 227, 0.15);
		box-shadow: 0 4px 32px rgba(45, 45, 45, 0.5);
		--nav-text: var(--color-dark-text-primary);
		--nav-text-secondary: var(--color-dark-text-secondary);
	`}
`;

const StyledInner = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	max-width: var(--max-width-content);
	height: 100%;
	margin: 0 auto;
	padding: 0 var(--space-8);
`;

const StyledLogoText = styled.span`
	font-size: var(--font-size-base);
	font-weight: var(--font-weight-medium);
	color: var(--nav-text);
	transition: color var(--duration-slower) var(--ease-in-out);
`;

const StyledLinks = styled.ul`
	display: flex;
	gap: var(--space-6);
	list-style: none;
`;

const StyledLink = styled.a`
	font-size: var(--font-size-sm);
	font-weight: var(--font-weight-regular);
	color: var(--nav-text-secondary);
	text-decoration: none;
	transition: color var(--duration-slower) var(--ease-in-out);

	&:hover {
		color: var(--nav-text);
	}
`;
