import React from 'react';
import styled from 'styled-components';
import { Container, Heading } from '../../styles/GlobalStyles';
import { theme } from '../../styles/theme';

const HeaderContainer = styled.header`
  background: linear-gradient(135deg, #fafafa 0%, #ffffff 100%);
  border-bottom: 1px solid ${theme.colors.border};
  padding: ${theme.spacing.xxl} 0 ${theme.spacing.xl};
  text-align: center;
`;

const Logo = styled(Heading)`
  font-size: 4rem;
  font-weight: 900;
  margin-bottom: ${theme.spacing.sm};
  letter-spacing: -0.03em;

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 3rem;
  }
`;

const Tagline = styled.p`
  font-size: 1.25rem;
  color: ${theme.colors.secondary};
  max-width: 600px;
  margin: 0 auto ${theme.spacing.md};
  line-height: 1.5;
`;

const Subtitle = styled.p`
  font-size: 0.95rem;
  color: ${theme.colors.tertiary};
  font-weight: 500;
  letter-spacing: 0.5px;
  text-transform: uppercase;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Container>
        <Logo>AI Knowledge Library</Logo>
        <Tagline>
          A curated collection of essential AI literature from leading research institutions and companies
        </Tagline>
        <Subtitle>Editorial Collection • Updated Weekly</Subtitle>
      </Container>
    </HeaderContainer>
  );
};

export default Header;