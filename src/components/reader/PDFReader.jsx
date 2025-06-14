import React from 'react';
import styled from 'styled-components';
import { theme } from '../../styles/theme';

const ReaderContainer = styled.div`
  min-height: 100vh;
  background: #f8f9fa;
`;

const Header = styled.header`
  background: white;
  border-bottom: 1px solid ${theme.colors.border};
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const BackButton = styled.button`
  background: ${theme.colors.primary};
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  font-weight: 500;
  transition: background 0.3s ease;

  &:hover {
    background: #333;
  }
`;

const ReaderTitle = styled.h1`
  font-family: ${theme.fonts.display};
  font-size: 1.25rem;
  font-weight: 600;
`;

const PlaceholderContent = styled.div`
  padding: 4rem 2rem;
  text-align: center;
  color: ${theme.colors.secondary};
`;

const PDFReader = ({ book, onClose }) => {
  return (
    <ReaderContainer>
      <Header>
        <BackButton onClick={onClose}>← Library</BackButton>
        <ReaderTitle>{book?.title || 'Loading...'}</ReaderTitle>
        <div></div>
      </Header>
      
      <PlaceholderContent>
        <h2>PDF Reader Component</h2>
        <p>This will be implemented in the next step with react-pdf and 3D flipbook functionality.</p>
        <p>Selected book: {book?.title}</p>
      </PlaceholderContent>
    </ReaderContainer>
  );
};

export default PDFReader;