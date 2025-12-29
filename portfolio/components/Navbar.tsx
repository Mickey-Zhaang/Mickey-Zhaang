import styled from 'styled-components';

import { colors } from './tools/color';

export interface NavItem {
  label: string;
  href: string;
}

export interface NavbarProps {
  /** Brand/logo text */
  brand?: string;
  /** Navigation items */
  items?: NavItem[];
  /** Optional className for additional styling */
  className?: string;
}

export function Navbar({ brand, items = [], className }: NavbarProps) {
  return (
    <Nav className={className}>
      <NavContent>
        {brand && <Brand href="#home">{brand}</Brand>}
        <NavList>
          {items.map(item => (
            <NavListItem key={item.href}>
              <NavLink href={item.href}>{item.label}</NavLink>
            </NavListItem>
          ))}
        </NavList>
      </NavContent>
    </Nav>
  );
}

const Nav = styled.nav`
  width: 100%;
  background-color: ${colors.backgroundDarkAlt};
  border-bottom: 1px solid ${colors.borderDark};
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
`;

const NavContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
`;

const Brand = styled.a`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${colors.textOnDark};
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover {
    color: ${colors.primary};
  }
`;

const NavList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 2rem;
`;

const NavListItem = styled.li`
  margin: 0;
`;

const NavLink = styled.a`
  color: ${colors.textOnDark};
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s ease;
  position: relative;

  &:hover {
    color: ${colors.primary};
  }

  &:active {
    color: ${colors.accent};
  }
`;

export default Navbar;
