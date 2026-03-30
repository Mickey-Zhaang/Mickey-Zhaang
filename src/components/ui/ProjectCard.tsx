import styled from 'styled-components';

import type { Project } from '../../types';

interface ProjectCardProps {
	project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
	const { title, description, tags, liveUrl, repoUrl } = project;

	return (
		<StyledCard>
			<StyledTitle>{title}</StyledTitle>
			<StyledDescription>{description}</StyledDescription>
			<StyledTagList>
				{tags.map(tag => (
					<StyledTag key={tag}>{tag}</StyledTag>
				))}
			</StyledTagList>
			{(liveUrl ?? repoUrl) && (
				<StyledCardLinks>
					{liveUrl && <a href={liveUrl}>Live</a>}
					{repoUrl && <a href={repoUrl}>Repo</a>}
				</StyledCardLinks>
			)}
		</StyledCard>
	);
}

const StyledCard = styled.article`
	display: flex;
	flex-direction: column;
	gap: var(--space-3);
	padding: var(--space-6);
	background: var(--color-surface);
	border: 1px solid var(--color-border);
	border-radius: 4px;
`;

const StyledTitle = styled.h3`
	font-size: var(--font-size-md);
	font-weight: var(--font-weight-medium);
	color: var(--color-text-primary);
`;

const StyledDescription = styled.p`
	font-size: var(--font-size-base);
	color: var(--color-text-secondary);
	line-height: var(--line-height-normal);
`;

const StyledTagList = styled.ul`
	display: flex;
	flex-wrap: wrap;
	gap: var(--space-2);
	list-style: none;
	margin-top: auto;
`;

const StyledTag = styled.li`
	font-size: var(--font-size-xs);
	font-weight: var(--font-weight-medium);
	color: var(--color-text-secondary);
	border: 1px solid var(--color-border);
	border-radius: 2px;
	padding: var(--space-1) var(--space-2);
`;

const StyledCardLinks = styled.div`
	display: flex;
	gap: var(--space-4);

	a {
		font-size: var(--font-size-sm);
		font-weight: var(--font-weight-medium);
		color: var(--color-accent);
		text-decoration: none;
		transition: color var(--duration-fast) var(--ease-default);

		&:hover {
			color: var(--color-accent-hover);
		}
	}
`;
