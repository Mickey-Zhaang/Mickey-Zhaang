import styled from 'styled-components';

import type { Project } from '../../types';
import ProjectCard from '../ui/ProjectCard';
import SectionContent from '../ui/SectionContent';
import SectionHeading from '../ui/SectionHeading';
import SectionWrapper from '../ui/SectionWrapper';

interface ProjectsProps {
	projects: Project[];
}

export default function Projects({ projects }: ProjectsProps) {
	return (
		<SectionWrapper id="projects" ariaLabel="Projects">
			<SectionContent>
				<SectionHeading>Projects</SectionHeading>
				<StyledGrid>
					{projects.map(project => (
						<ProjectCard key={project.id} project={project} />
					))}
				</StyledGrid>
			</SectionContent>
		</SectionWrapper>
	);
}

// ── Styled Components ──────────────────────────────────────────────────────────

const StyledGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
	gap: var(--space-6);
`;
