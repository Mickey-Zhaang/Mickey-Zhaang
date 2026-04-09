import styled from 'styled-components';

import {
	Contact,
	Footer,
	Hero,
	Navbar,
	ProjectInterlude,
	Projects,
} from './components';

export default function App() {
	return (
		<StyledApp>
			<Navbar />
			<main>
				<Hero />
				<ProjectInterlude />
				<Projects />
				<Contact />
			</main>
			<Footer />
		</StyledApp>
	);
}

// ── Styled Components ──────────────────────────────────────────────────────────

const StyledApp = styled.div`
	min-height: 100vh;
	display: flex;
	flex-direction: column;
`;
