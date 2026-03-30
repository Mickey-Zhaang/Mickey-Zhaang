import styled from 'styled-components';

import type { Project } from '../../types';
import ProjectCard from '../ui/ProjectCard';
import SectionContent from '../ui/SectionContent';
import SectionHeading from '../ui/SectionHeading';
import SectionWrapper from '../ui/SectionWrapper';

const PROJECTS: Project[] = [
	{
		id: 'project-1',
		title: 'Project One',
		description: 'A brief description of what this project does and why.',
		tags: ['React', 'TypeScript'],
		liveUrl: '#',
		repoUrl: '#',
	},
	{
		id: 'project-2',
		title: 'Project Two',
		description: 'Another project — replace with real content.',
		tags: ['Node.js', 'PostgreSQL'],
		repoUrl: '#',
	},
	{
		id: 'project-3',
		title: 'Project Three',
		description: 'One more placeholder to fill the grid.',
		tags: ['TypeScript', 'Vite'],
		liveUrl: '#',
	},
];

export default function Projects() {
	return (
		<SectionWrapper id="projects" ariaLabel="Projects">
			<SectionContent>
				<SectionHeading>Projects</SectionHeading>
				<StyledGrid>
					{PROJECTS.map(project => (
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
