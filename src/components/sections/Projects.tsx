import styled from 'styled-components';

import type { Project } from '../../types';
import ProjectCard from '../ui/ProjectCard';
import SectionWrapper from '../ui/SectionWrapper';

interface ProjectsProps {
	projects: Project[];
}

export default function Projects({ projects }: ProjectsProps) {
	return (
		<SectionWrapper id="projects" ariaLabel="Projects">
			<StyledContent>
				<StyledHeading>Projects</StyledHeading>
				<StyledGrid>
					{projects.map(project => (
						<ProjectCard key={project.id} project={project} />
					))}
				</StyledGrid>
			</StyledContent>
		</SectionWrapper>
	);
}

const StyledContent = styled.div`
	max-width: var(--max-width-content);
	margin: 0 auto;
	padding: var(--space-24) var(--space-8);
`;

const StyledHeading = styled.h2`
	font-size: var(--font-size-xl);
	font-weight: var(--font-weight-bold);
	color: var(--color-text-primary);
	margin-bottom: var(--space-8);
`;

const StyledGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
	gap: var(--space-6);
`;
