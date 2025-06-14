import React from 'react';
import styled from 'styled-components';
import { Grid } from '../../styles/GlobalStyles';
import { theme } from '../../styles/theme';
import { books } from '../../data/books';
import BookCard from './BookCard';

const GridContainer = styled.div`
  padding: ${theme.spacing.xxl} 0;
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: ${theme.spacing.xxl};
`;

const SectionTitle = styled.h2`
  font-family: ${theme.fonts.display};
  font-size: 2.5rem;
  font-weight: 700;
  color: ${theme.colors.primary};
  margin-bottom: ${theme.spacing.sm};
  letter-spacing: -0.02em;
`;

const SectionDescription = styled.p`
  font-size: 1.1rem;
  color: ${theme.colors.secondary};
  max-width: 500px;
  margin: 0 auto;
`;

const BookGrid = ({ onBookSelect }) => {
  return (
    <GridContainer>
      <SectionHeader>
        <SectionTitle>Latest Publications</SectionTitle>
        <SectionDescription>
          Cutting-edge research and insights from the world's leading AI organizations
        </SectionDescription>
      </SectionHeader>
      
      <Grid>
        {books.map((book) => (
          <BookCard 
            key={book.id} 
            book={book} 
            onClick={() => onBookSelect(book)}
          />
        ))}
      </Grid>
    </GridContainer>
  );
};

export default BookGrid;
