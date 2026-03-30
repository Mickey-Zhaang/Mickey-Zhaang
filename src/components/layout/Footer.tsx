import styled from 'styled-components';

const NAME = 'Mickey Zhang';

export default function Footer() {
	const year = new Date().getFullYear();

	return (
		<StyledFooter>
			<StyledText>
				{NAME} &copy; {year}
			</StyledText>
		</StyledFooter>
	);
}

// ── Styled Components ──────────────────────────────────────────────────────────

const StyledFooter = styled.footer`
	margin-top: auto;
	padding: var(--space-8);
	border-top: 1px solid var(--color-border);
	text-align: center;
`;

const StyledText = styled.p`
	font-size: var(--font-size-sm);
	color: var(--color-text-secondary);
`;
