import styled from 'styled-components';

export default function Interlude() {
	return (
		<StyledInterlude aria-hidden="true" data-theme="dark">
			<StyledLabel>Selected Work</StyledLabel>
		</StyledInterlude>
	);
}

// ── Styled Components ──────────────────────────────────────────────────────────

const StyledInterlude = styled.section`
	display: flex;
	align-items: flex-end;
	justify-content: flex-start;
	min-height: 45vh;
	background: var(--color-dark-bg);
	padding: 18rem var(--space-32);
`;

const StyledLabel = styled.span`
	display: block;
	font-size: clamp(var(--font-size-3xl), 9vw, var(--font-size-4xl));
	font-weight: var(--font-weight-light);
	color: var(--color-dark-text-primary);
	letter-spacing: -0.03em;
	line-height: var(--line-height-tight);
	user-select: none;
`;
