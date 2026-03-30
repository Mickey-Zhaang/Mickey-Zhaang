import styled from 'styled-components';

import SectionWrapper from '../ui/SectionWrapper';

interface AboutProps {
	bio: string[];
	skills?: string[];
}

export default function About({ bio, skills }: AboutProps) {
	return (
		<SectionWrapper id="about" ariaLabel="About me">
			<StyledContent>
				<StyledHeading>About</StyledHeading>
				<StyledBioBlock>
					{bio.map((paragraph, i) => (
						<StyledBio key={i}>{paragraph}</StyledBio>
					))}
				</StyledBioBlock>
				{skills && skills.length > 0 && (
					<StyledSkillList>
						{skills.map(skill => (
							<StyledSkill key={skill}>{skill}</StyledSkill>
						))}
					</StyledSkillList>
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

const StyledSkill = styled.li`
	font-size: var(--font-size-sm);
	font-weight: var(--font-weight-medium);
	color: var(--color-text-secondary);
	border: 1px solid var(--color-border);
	border-radius: 2px;
	padding: var(--space-1) var(--space-3);
`;
