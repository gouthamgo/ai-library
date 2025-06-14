import React from 'react';
import styled from 'styled-components';
import { theme } from '../../styles/theme';
import { CATEGORY_COLORS } from '../../data/constants';

const Card = styled.article`
  background: white;
  border-radius: ${theme.borderRadius.lg};
  overflow: hidden;
  box-shadow: 0 4px 20px ${theme.colors.shadow};
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  cursor: pointer;
  border: 1px solid #f5f5f5;

  &:hover {
    transform: translateY(-12px);
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
    border-color: #e8e8e8;
  }
`;

const Cover = styled.div`
  height: 240px;
  position: relative;
  overflow: hidden;
  background: ${props => CATEGORY_COLORS[props.category]?.gradient || CATEGORY_COLORS.other.gradient};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CoverImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;

  ${Card}:hover & {
    transform: scale(1.05);
  }
`;

const CoverOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(45deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.05) 100%);
`;

const CompanyLogo = styled.span`
  color: white;
  font-size: 2.2rem;
  font-weight: 800;
  z-index: 2;
  text-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  letter-spacing: -0.02em;
`;

const Content = styled.div`
  padding: 2.5rem;
`;

const Meta = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
`;

const Publisher = styled.span`
  font-size: 0.8rem;
  color: ${theme.colors.tertiary};
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const PublishDate = styled.span`
  font-size: 0.8rem;
  color: #ccc;
  font-weight: 500;
`;

const Title = styled.h3`
  font-family: ${theme.fonts.display};
  font-size: 1.75rem;
  font-weight: 700;
  color: ${theme.colors.primary};
  margin-bottom: 1rem;
  line-height: 1.3;
  letter-spacing: -0.01em;
`;

const Description = styled.p`
  color: ${theme.colors.secondary};
  line-height: 1.7;
  margin-bottom: 2rem;
  font-size: 0.95rem;
`;

const Stats = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  padding-top: 1.5rem;
  border-top: 1px solid #f5f5f5;
`;

const Stat = styled.div`
  text-align: center;
`;

const StatNumber = styled.span`
  font-size: 1.1rem;
  font-weight: 700;
  color: ${theme.colors.primary};
  display: block;
`;

const StatLabel = styled.span`
  font-size: 0.8rem;
  color: ${theme.colors.tertiary};
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-top: 0.25rem;
`;

const ReadButton = styled.button`
  width: 100%;
  padding: 1rem;
  background: ${theme.colors.primary};
  color: white;
  border-radius: ${theme.borderRadius.md};
  font-weight: 600;
  transition: all 0.3s ease;
  font-size: 0.9rem;
  letter-spacing: 0.5px;

  &:hover {
    background: #333;
    transform: translateY(-1px);
  }
`;

const BookCard = ({ book, onClick }) => {
  return (
    <Card onClick={onClick}>
      <Cover category={book.category}>
        {book.coverImage ? (
          <CoverImage src={book.coverImage} alt={`${book.title} cover`} />
        ) : (
          <CompanyLogo>{book.author}</CompanyLogo>
        )}
        <CoverOverlay />
      </Cover>
      
      <Content>
        <Meta>
          <Publisher>{book.author}</Publisher>
          <PublishDate>• {new Date(book.publishDate).toLocaleDateString('en-US', { 
            month: 'long', 
            year: 'numeric' 
          })}</PublishDate>
        </Meta>
        
        <Title>{book.title}</Title>
        <Description>{book.description}</Description>
        
        <Stats>
          <Stat>
            <StatNumber>{book.pages}</StatNumber>
            <StatLabel>Pages</StatLabel>
          </Stat>
          <Stat>
            <StatNumber>{book.readTime}</StatNumber>
            <StatLabel>Read</StatLabel>
          </Stat>
          <Stat>
            <StatNumber>PDF</StatNumber>
            <StatLabel>Format</StatLabel>
          </Stat>
        </Stats>
        
        <ReadButton>Read Publication</ReadButton>
      </Content>
    </Card>
  );
};

export default BookCard;