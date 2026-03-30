import styled from 'styled-components';

import type { ReactNode } from 'react';

import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

interface SectionWrapperProps {
	id: string;
	ariaLabel: string;
	children: ReactNode;
}

export default function SectionWrapper({
	id,
	ariaLabel,
	children,
}: SectionWrapperProps) {
	const { ref, isVisible } = useIntersectionObserver({ triggerOnce: true });

	return (
		<StyledSection
			id={id}
			aria-label={ariaLabel}
			ref={ref}
			$isVisible={isVisible}>
			{children}
		</StyledSection>
	);
}

const StyledSection = styled.section<{ $isVisible: boolean }>`
	opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
	transform: ${({ $isVisible }) =>
		$isVisible ? 'translateY(0)' : 'translateY(24px)'};
	transition:
		opacity var(--duration-reveal) var(--ease-out),
		transform var(--duration-reveal) var(--ease-out);
`;
