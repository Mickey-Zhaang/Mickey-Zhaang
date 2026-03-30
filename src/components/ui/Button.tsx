import styled, { css } from 'styled-components';

import type { ReactNode } from 'react';

interface ButtonProps {
	href: string;
	children: ReactNode;
	variant?: 'primary' | 'ghost';
	external?: boolean;
}

export default function Button({
	href,
	children,
	variant = 'primary',
	external = false,
}: ButtonProps) {
	return (
		<StyledButton
			href={href}
			$variant={variant}
			{...(external ? { target: '_blank', rel: 'noreferrer' } : {})}>
			{children}
		</StyledButton>
	);
}

// ── Styled Components ──────────────────────────────────────────────────────────

const primaryStyles = css`
	color: var(--color-text-inverse);
	background: var(--color-accent);
	border: 1px solid transparent;

	&:hover {
		background: var(--color-accent-hover);
	}
`;

const ghostStyles = css`
	color: var(--color-accent);
	background: transparent;
	border: 1px solid var(--color-border);

	&:hover {
		border-color: var(--color-accent);
	}
`;

const StyledButton = styled.a<{ $variant: 'primary' | 'ghost' }>`
	display: inline-block;
	font-size: var(--font-size-sm);
	font-weight: var(--font-weight-medium);
	text-decoration: none;
	border-radius: var(--radius-pill);
	padding: var(--space-2) var(--space-6);
	transition:
		background var(--duration-normal) var(--ease-default),
		color var(--duration-normal) var(--ease-default),
		border-color var(--duration-normal) var(--ease-default);

	${({ $variant }) => ($variant === 'primary' ? primaryStyles : ghostStyles)}
`;
