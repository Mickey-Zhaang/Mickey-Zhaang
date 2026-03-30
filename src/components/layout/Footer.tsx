import styled from 'styled-components';

interface FooterProps {
	name: string;
}

export default function Footer({ name }: FooterProps) {
	const year = new Date().getFullYear();

	return (
		<StyledFooter>
			<StyledText>
				{name} &copy; {year}
			</StyledText>
		</StyledFooter>
	);
}

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
