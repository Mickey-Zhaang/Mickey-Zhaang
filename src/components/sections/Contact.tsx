import styled from 'styled-components';

import type { SocialLink } from '../../types';
import SectionWrapper from '../ui/SectionWrapper';

interface ContactProps {
	email: string;
	socials?: SocialLink[];
}

export default function Contact({ email, socials }: ContactProps) {
	return (
		<SectionWrapper id="contact" ariaLabel="Contact">
			<StyledContent>
				<StyledHeading>Contact</StyledHeading>
				<StyledEmail href={`mailto:${email}`}>{email}</StyledEmail>
				{socials && socials.length > 0 && (
					<StyledSocialList>
						{socials.map(social => (
							<StyledSocialItem key={social.label}>
								<a href={social.href} target="_blank" rel="noreferrer">
									{social.label}
								</a>
							</StyledSocialItem>
						))}
					</StyledSocialList>
				)}
			</StyledContent>
		</SectionWrapper>
	);
}

const StyledContent = styled.div`
	max-width: var(--max-width-narrow);
	margin: 0 auto;
	padding: var(--space-24) var(--space-8);
`;

const StyledHeading = styled.h2`
	font-size: var(--font-size-xl);
	font-weight: var(--font-weight-bold);
	color: var(--color-text-primary);
	margin-bottom: var(--space-8);
`;

const StyledEmail = styled.a`
	display: inline-block;
	font-size: var(--font-size-lg);
	font-weight: var(--font-weight-light);
	color: var(--color-accent);
	text-decoration: none;
	margin-bottom: var(--space-6);
	transition: color var(--duration-fast) var(--ease-default);

	&:hover {
		color: var(--color-accent-hover);
	}
`;

const StyledSocialList = styled.ul`
	display: flex;
	gap: var(--space-6);
	list-style: none;
`;

const StyledSocialItem = styled.li`
	a {
		font-size: var(--font-size-sm);
		font-weight: var(--font-weight-medium);
		color: var(--color-text-secondary);
		text-decoration: none;
		transition: color var(--duration-fast) var(--ease-default);

		&:hover {
			color: var(--color-text-primary);
		}
	}
`;
