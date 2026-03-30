import styled from 'styled-components';

import type { ReactNode } from 'react';

interface TagProps {
	children: ReactNode;
}

export default function Tag({ children }: TagProps) {
	return <StyledTag>{children}</StyledTag>;
}

// ── Styled Components ──────────────────────────────────────────────────────────

const StyledTag = styled.li`
	font-size: var(--font-size-xs);
	font-weight: var(--font-weight-medium);
	color: var(--color-text-secondary);
	border: 1px solid var(--color-border);
	border-radius: var(--radius-sm);
	padding: var(--space-1) var(--space-3);
	list-style: none;
`;
