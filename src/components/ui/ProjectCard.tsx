import styled from 'styled-components';

import type { Project } from '../../types';
import Tag from './Tag';

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
					<Tag key={tag}>{tag}</Tag>
				))}
			</StyledTagList>
			{(liveUrl ?? repoUrl) && (
				<StyledCardLinks>
					{liveUrl && <StyledLink href={liveUrl}>Live</StyledLink>}
					{repoUrl && <StyledLink href={repoUrl}>Repo</StyledLink>}
				</StyledCardLinks>
			)}
		</StyledCard>
	);
}

// ── Styled Components ──────────────────────────────────────────────────────────

const StyledCard = styled.article`
	display: flex;
	flex-direction: column;
	gap: var(--space-3);
	padding: var(--space-6);
	background: var(--color-surface);
	border: 1px solid var(--color-border);
	border-radius: var(--radius-md);
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

const StyledCardLinks = styled.div`
	display: flex;
	gap: var(--space-4);
`;

const StyledLink = styled.a`
	font-size: var(--font-size-sm);
	font-weight: var(--font-weight-medium);
	color: var(--color-text-secondary);
	text-decoration: none;
	transition: color var(--duration-fast) var(--ease-default);

	&:hover {
		color: var(--color-text-primary);
	}
`;
