import type { ReactNode } from 'react';

import styled from 'styled-components';

interface SectionHeadingProps {
	children: ReactNode;
}

export default function SectionHeading({ children }: SectionHeadingProps) {
	return <StyledHeading>{children}</StyledHeading>;
}

// ── Styled Components ──────────────────────────────────────────────────────────

const StyledHeading = styled.h2`
	font-size: var(--font-size-xl);
	font-weight: var(--font-weight-bold);
	color: var(--color-text-primary);
	margin-bottom: var(--space-8);
`;
