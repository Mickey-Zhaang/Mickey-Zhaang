import type { RefObject } from 'react';

export interface NavLink {
	label: string;
	href: string;
}

export interface Project {
	id: string;
	title: string;
	description: string;
	tags: string[];
	liveUrl?: string;
	repoUrl?: string;
}

export interface SocialLink {
	label: string;
	href: string;
}

export interface ScrollRevealState {
	ref: RefObject<HTMLDivElement | null>;
	isVisible: boolean;
}
