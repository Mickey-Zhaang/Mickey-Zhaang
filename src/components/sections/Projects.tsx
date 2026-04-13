import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styled from 'styled-components';

import { useEffect, useRef } from 'react';

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

export default function Projects() {
	const sectionRef = useRef<HTMLElement | null>(null);
	const panelRef = useRef<HTMLDivElement | null>(null);

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

	return (
		<StyledSection
			id="projects"
			aria-label="Projects"
			ref={sectionRef}
			data-theme="dark">
			<StyledPanel ref={panelRef}>
				<StyledHeading>Projects</StyledHeading>
				<StyledTrack>
					{PROJECTS.map(project => (
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

const StyledHeading = styled.h2`
	font-size: var(--font-size-xl);
	font-weight: var(--font-weight-bold);
	color: var(--color-text-primary);
	margin-bottom: var(--space-8);
	padding-inline: var(--space-8);
`;

const StyledTrack = styled.div`
	display: flex;
	gap: var(--space-6);
	overflow-x: scroll;
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
