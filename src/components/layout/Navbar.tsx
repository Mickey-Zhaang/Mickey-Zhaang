import styled from 'styled-components';

import { useScrollProgress } from '../../hooks/useScrollProgress';
import type { NavLink } from '../../types';

const NAV_LINKS: NavLink[] = [
	{ label: 'About', href: '#about' },
	{ label: 'Projects', href: '#projects' },
	{ label: 'Contact', href: '#contact' },
];

const SITE_NAME = 'Mickey Zhang';

export default function Navbar() {
	const progress = useScrollProgress();

	return (
		<StyledNav>
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
			<StyledProgressBar $progress={progress} />
		</StyledNav>
	);
}

// ── Styled Components ──────────────────────────────────────────────────────────

const StyledNav = styled.nav`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	height: var(--navbar-height);
	background: var(--color-bg);
	border-bottom: 1px solid var(--color-border);
	z-index: var(--z-navbar);
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
	color: var(--color-text-primary);
`;

const StyledLinks = styled.ul`
	display: flex;
	gap: var(--space-6);
	list-style: none;
`;

const StyledLink = styled.a`
	font-size: var(--font-size-sm);
	font-weight: var(--font-weight-regular);
	color: var(--color-text-secondary);
	text-decoration: none;
	transition: color var(--duration-fast) var(--ease-default);

	&:hover {
		color: var(--color-text-primary);
	}
`;

const StyledProgressBar = styled.div<{ $progress: number }>`
	position: absolute;
	bottom: 0;
	left: 0;
	height: 2px;
	width: ${({ $progress }) => `${$progress * 100}%`};
	background: var(--color-accent);
	transition: width var(--duration-fast) linear;
`;
