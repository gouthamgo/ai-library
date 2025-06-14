import React from 'react';
import styled from 'styled-components';
import { Container } from '../../styles/GlobalStyles';
import Header from './Header';
import BookGrid from './BookGrid';

const LibraryContainer = styled.div`
  min-height: 100vh;
`;

const Library = ({ onBookSelect }) => {
  return (
    <LibraryContainer>
      <Header />
      <Container>
        <BookGrid onBookSelect={onBookSelect} />
      </Container>
    </LibraryContainer>
  );
};

export default Library;