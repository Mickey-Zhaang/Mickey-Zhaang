import type { ComponentType } from 'react';
import type { RefObject } from 'react';

export interface NavLink {
	label: string;
	href: string;
}

export type ProjectCategory = 'Software' | 'Design';

export interface Project {
	id: string;
	title: string;
	description: string;
	tags: string[];
	category: ProjectCategory;
	liveUrl?: string;
	repoUrl?: string;
}

export interface SocialLink {
	label: string;
	href: string;
	icon?: ComponentType<{ size?: number }>;
}

export interface ScrollRevealState {
	ref: RefObject<HTMLDivElement | null>;
	isVisible: boolean;
}
