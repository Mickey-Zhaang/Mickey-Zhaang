import type { ReactNode } from 'react';

import styled from 'styled-components';

interface SectionContentProps {
	children: ReactNode;
	narrow?: boolean;
}

export default function SectionContent({
	children,
	narrow = false,
}: SectionContentProps) {
	return <StyledContent $narrow={narrow}>{children}</StyledContent>;
}

// ── Styled Components ──────────────────────────────────────────────────────────

const StyledContent = styled.div<{ $narrow: boolean }>`
	max-width: ${({ $narrow }) =>
		$narrow ? 'var(--max-width-narrow)' : 'var(--max-width-content)'};
	margin: 0 auto;
	padding: var(--space-24) var(--space-8);
`;
