import styled from 'styled-components';

import { FaGithub, FaLinkedin } from 'react-icons/fa';

import type { SocialLink } from '../../types';
import SectionContent from '../ui/SectionContent';
import SectionHeading from '../ui/SectionHeading';
import SectionWrapper from '../ui/SectionWrapper';

const EMAIL = 'placeholder@email.com';

const SOCIALS: SocialLink[] = [
	{ label: 'GitHub', href: '#', icon: FaGithub },
	{ label: 'LinkedIn', href: '#', icon: FaLinkedin },
];

export default function Contact() {
	return (
		<SectionWrapper id="contact" ariaLabel="Contact">
			<SectionContent narrow>
				<SectionHeading>Contact</SectionHeading>
				<StyledEmail href={`mailto:${EMAIL}`}>{EMAIL}</StyledEmail>
				<StyledSocialList>
					{SOCIALS.map(({ label, href, icon: Icon }) => (
						<StyledSocialItem key={label}>
							<a
								href={href}
								target="_blank"
								rel="noreferrer"
								aria-label={label}>
								{Icon ? <Icon size={20} /> : label}
							</a>
						</StyledSocialItem>
					))}
				</StyledSocialList>
			</SectionContent>
		</SectionWrapper>
	);
}

// ── Styled Components ──────────────────────────────────────────────────────────

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
	gap: var(--space-4);
	list-style: none;
`;

const StyledSocialItem = styled.li`
	a {
		display: flex;
		align-items: center;
		color: var(--color-text-secondary);
		text-decoration: none;
		transition: color var(--duration-fast) var(--ease-default);

		&:hover {
			color: var(--color-text-primary);
		}
	}
`;
