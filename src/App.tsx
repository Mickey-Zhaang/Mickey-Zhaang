import styled from 'styled-components';

import { About, Contact, Footer, Hero, Navbar, Projects } from './components';

export default function App() {
	return (
		<StyledApp>
			<Navbar />
			<main>
				<Hero />
				<About />
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
