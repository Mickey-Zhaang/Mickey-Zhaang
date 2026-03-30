import styled from 'styled-components';

import {
	About,
	Contact,
	Footer,
	Hero,
	Navbar,
	Projects,
} from './components';
import type { NavLink, Project, SocialLink } from './types';

// ── Static data ────────────────────────────────────────────────────────────────
// Defined outside the component — stable references, no re-creation on render.
// Replace with a data file import later if needed.

const NAV_LINKS: NavLink[] = [
	{ label: 'About', href: '#about' },
	{ label: 'Projects', href: '#projects' },
	{ label: 'Contact', href: '#contact' },
];

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

const BIO: string[] = [
	'Placeholder — write a sentence or two about who you are and what you do.',
	'Placeholder — background, interests, or what drives your work.',
];

const SKILLS: string[] = ['TypeScript', 'React', 'Node.js', 'placeholder'];

const SOCIALS: SocialLink[] = [
	{ label: 'GitHub', href: '#' },
	{ label: 'LinkedIn', href: '#' },
];

// ── Component ──────────────────────────────────────────────────────────────────

export default function App() {
	return (
		<StyledApp>
			<Navbar links={NAV_LINKS} siteName="Mickey Zhang" />
			<main>
				<Hero
					name="Mickey Zhang"
					tagline="Placeholder tagline — what you build, who you are."
					ctaLabel="See my work"
					ctaHref="#projects"
				/>
				<About bio={BIO} skills={SKILLS} />
				<Projects projects={PROJECTS} />
				<Contact email="placeholder@email.com" socials={SOCIALS} />
			</main>
			<Footer name="Mickey Zhang" />
		</StyledApp>
	);
}

// ── Styled Components ──────────────────────────────────────────────────────────

const StyledApp = styled.div`
	min-height: 100vh;
	display: flex;
	flex-direction: column;
`;
