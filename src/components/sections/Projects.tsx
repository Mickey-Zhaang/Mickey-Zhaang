import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styled from 'styled-components';

import { useEffect, useRef, useState } from 'react';

import type { Project } from '../../types';
import ProjectCard from '../ui/ProjectCard';

gsap.registerPlugin(ScrollTrigger);

const PROJECTS: Project[] = [
	{
		id: 'p1',
		title: 'Project One',
		description:
			'A brief description of what this project does and why it matters.',
		tags: ['React', 'TypeScript'],
		category: 'Software',
		liveUrl: '#',
		repoUrl: '#',
	},
	{
		id: 'p2',
		title: 'Project Two',
		description: 'Another software project — replace with real content.',
		tags: ['Node.js', 'PostgreSQL'],
		category: 'Software',
		repoUrl: '#',
	},
	{
		id: 'p3',
		title: 'Project Three',
		description: 'A design project showcasing visual and UX work.',
		tags: ['Figma', 'Prototyping'],
		category: 'Design',
		liveUrl: '#',
	},
	{
		id: 'p4',
		title: 'Project Four',
		description: 'Brand identity and visual systems work.',
		tags: ['Illustrator', 'Branding'],
		category: 'Design',
	},
];

const CATEGORIES = ['All', 'Software', 'Design'] as const;
type CategoryFilter = (typeof CATEGORIES)[number];

export default function Projects() {
	const sectionRef = useRef<HTMLElement | null>(null);
	const panelRef = useRef<HTMLDivElement | null>(null);
	const trackRef = useRef<HTMLDivElement | null>(null);
	const [activeCategory, setActiveCategory] = useState<CategoryFilter>('All');

	const visibleProjects =
		activeCategory === 'All'
			? PROJECTS
			: PROJECTS.filter(p => p.category === activeCategory);

	// ─── 3D scroll reveal ─────────────────────────────────────────────────────
	useEffect(() => {
		const ctx = gsap.context(() => {
			gsap.set(panelRef.current, {
				transformPerspective: 1200,
				transformOrigin: '50% 60%',
			});

			gsap.from(panelRef.current, {
				scale: 0.88,
				rotateX: 7,
				autoAlpha: 0,
				ease: 'none',
				scrollTrigger: {
					trigger: sectionRef.current,
					start: 'top 85%',
					end: 'top 20%',
					scrub: 1.2,
				},
			});
		}, sectionRef);

		return () => ctx.revert();
	}, []);

	// ─── Category card entrance ────────────────────────────────────────────────
	useEffect(() => {
		const ctx = gsap.context(() => {
			gsap.from('[data-project-card]', {
				autoAlpha: 0,
				y: 20,
				duration: 0.35,
				ease: 'power2.out',
				stagger: 0.07,
			});
		}, trackRef);

		return () => ctx.revert();
	}, [activeCategory]);

	function handleCategoryChange(cat: CategoryFilter) {
		if (cat === activeCategory) return;
		setActiveCategory(cat);
	}

	return (
		<StyledSection
			id="projects"
			aria-label="Projects"
			ref={sectionRef}
			data-theme="dark">
			<StyledPanel ref={panelRef}>
				<StyledHeader>
					<StyledSectionHeading>Projects</StyledSectionHeading>
					<StyledTabBar role="tablist" aria-label="Filter projects by category">
						{CATEGORIES.map(cat => (
							<StyledTab
								key={cat}
								role="tab"
								aria-selected={activeCategory === cat}
								$active={activeCategory === cat}
								onClick={() => handleCategoryChange(cat)}>
								{cat}
							</StyledTab>
						))}
					</StyledTabBar>
				</StyledHeader>
				<StyledTrack ref={trackRef}>
					{visibleProjects.map(project => (
						<ProjectCard key={project.id} project={project} />
					))}
				</StyledTrack>
			</StyledPanel>
		</StyledSection>
	);
}

// ── Styled Components ──────────────────────────────────────────────────────────

const StyledSection = styled.section`
	display: flex;
	align-items: center;
	justify-content: center;
	min-height: 140vh;
	background: var(--color-bg);
	padding-bottom: var(--space-32);
`;

const StyledPanel = styled.div`
	width: 100%;
	max-width: var(--max-width-content);
	padding: var(--space-24) 0 var(--space-16);
	will-change: transform;
`;

const StyledHeader = styled.div`
	display: flex;
	align-items: baseline;
	justify-content: space-between;
	flex-wrap: wrap;
	gap: var(--space-4);
	margin-bottom: var(--space-8);
	padding-inline: var(--space-8);
`;

const StyledSectionHeading = styled.h2`
	font-size: var(--font-size-xl);
	font-weight: var(--font-weight-bold);
	color: var(--color-text-primary);
`;

const StyledTabBar = styled.div`
	display: flex;
	gap: var(--space-2);
`;

interface StyledTabProps {
	$active: boolean;
}

const StyledTab = styled.button<StyledTabProps>`
	padding: var(--space-2) var(--space-4);
	border-radius: var(--radius-pill);
	border: 1px solid
		${({ $active }) =>
			$active ? 'var(--color-text-primary)' : 'var(--color-border)'};
	background: ${({ $active }) =>
		$active ? 'var(--color-text-primary)' : 'transparent'};
	color: ${({ $active }) =>
		$active ? 'var(--color-text-inverse)' : 'var(--color-text-secondary)'};
	font-size: var(--font-size-sm);
	font-weight: var(--font-weight-medium);
	cursor: pointer;
	transition:
		background var(--duration-normal) var(--ease-default),
		border-color var(--duration-normal) var(--ease-default),
		color var(--duration-normal) var(--ease-default);

	&:hover {
		border-color: var(--color-text-primary);
		color: ${({ $active }) =>
			$active ? 'var(--color-text-inverse)' : 'var(--color-text-primary)'};
	}
`;

const StyledTrack = styled.div`
	display: flex;
	gap: var(--space-6);
	overflow-x: auto;
	scroll-snap-type: x mandatory;
	scroll-padding-inline: var(--space-8);
	padding-inline: var(--space-8);
	padding-block: var(--space-4);
	scrollbar-width: none;

	&::-webkit-scrollbar {
		display: none;
	}

	& > article {
		flex-shrink: 0;
		width: calc((100% - var(--space-8) * 2 - var(--space-6)) / 2.3);
		scroll-snap-align: start;
	}

	@media (max-width: 640px) {
		& > article {
			width: calc((100% - var(--space-8) * 2) / 1.15);
		}
	}
`;
