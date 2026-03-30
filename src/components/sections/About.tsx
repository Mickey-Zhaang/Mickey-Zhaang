import styled from 'styled-components';

import SectionContent from '../ui/SectionContent';
import SectionHeading from '../ui/SectionHeading';
import SectionWrapper from '../ui/SectionWrapper';
import Tag from '../ui/Tag';

interface AboutProps {
	bio: string[];
	skills?: string[];
}

export default function About({ bio, skills }: AboutProps) {
	return (
		<SectionWrapper id="about" ariaLabel="About me">
			<SectionContent narrow>
				<SectionHeading>About</SectionHeading>
				<StyledBioBlock>
					{bio.map((paragraph, i) => (
						<StyledBio key={i}>{paragraph}</StyledBio>
					))}
				</StyledBioBlock>
				{skills && skills.length > 0 && (
					<StyledSkillList>
						{skills.map(skill => (
							<Tag key={skill}>{skill}</Tag>
						))}
					</StyledSkillList>
				)}
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
