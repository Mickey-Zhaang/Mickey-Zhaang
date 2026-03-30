import styled from 'styled-components';

import SectionContent from '../ui/SectionContent';
import SectionHeading from '../ui/SectionHeading';
import SectionWrapper from '../ui/SectionWrapper';
import Tag from '../ui/Tag';

const BIO = [
	'Placeholder — write a sentence or two about who you are and what you do.',
	'Placeholder — background, interests, or what drives your work.',
];

const SKILLS = ['TypeScript', 'React', 'Node.js', 'placeholder'];

export default function About() {
	return (
		<SectionWrapper id="about" ariaLabel="About me">
			<SectionContent narrow>
				<SectionHeading>About</SectionHeading>
				<StyledBioBlock>
					{BIO.map((paragraph, i) => (
						<StyledBio key={i}>{paragraph}</StyledBio>
					))}
				</StyledBioBlock>
				<StyledSkillList>
					{SKILLS.map(skill => (
						<Tag key={skill}>{skill}</Tag>
					))}
				</StyledSkillList>
			</SectionContent>
		</SectionWrapper>
	);
}

// ── Styled Components ──────────────────────────────────────────────────────────

const StyledBioBlock = styled.div`
	display: flex;
	flex-direction: column;
	gap: var(--space-4);
	margin-bottom: var(--space-8);
`;

const StyledBio = styled.p`
	font-size: var(--font-size-md);
	color: var(--color-text-secondary);
	line-height: var(--line-height-loose);
`;

const StyledSkillList = styled.ul`
	display: flex;
	flex-wrap: wrap;
	gap: var(--space-2);
	list-style: none;
`;
