export const BOOK_CATEGORIES = {
  OPENAI: 'openai',
  GOOGLE: 'google',
  ANTHROPIC: 'anthropic',
  MICROSOFT: 'microsoft',
  OTHER: 'other'
};

export const CATEGORY_COLORS = {
  [BOOK_CATEGORIES.OPENAI]: {
    gradient: 'linear-gradient(135deg, #10b981 0%, #34d399 100%)',
    primary: '#10b981'
  },
  [BOOK_CATEGORIES.GOOGLE]: {
    gradient: 'linear-gradient(135deg, #f59e0b 0%, #fbbf24 100%)',
    primary: '#f59e0b'
  },
  [BOOK_CATEGORIES.ANTHROPIC]: {
    gradient: 'linear-gradient(135deg, #8b5cf6 0%, #a78bfa 100%)',
    primary: '#8b5cf6'
  },
  [BOOK_CATEGORIES.MICROSOFT]: {
    gradient: 'linear-gradient(135deg, #0ea5e9 0%, #38bdf8 100%)',
    primary: '#0ea5e9'
  },
  [BOOK_CATEGORIES.OTHER]: {
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    primary: '#667eea'
  }
};

// src/data/books.js
import { BOOK_CATEGORIES } from './constants';

export const booksData = [
  // Add your books here following this structure:
  // {
  //   id: 'unique-id',
  //   title: 'Book Title',
  //   author: 'Author Name',
  //   category: BOOK_CATEGORIES.OPENAI,
  //   description: 'Book description...',
  //   pages: 24,
  //   readTime: '15 min',
  //   coverImage: '/covers/book-cover.jpg', // or null for gradient
  //   pdfFile: '/pdfs/book.pdf',
  //   publishDate: '2024-01-01',
  //   featured: false
  // }
];

// Example books for development (remove when adding real books)
export const exampleBooks = [
  {
    id: 'ai-enterprise-guide',
    title: 'AI in the Enterprise',
    author: 'OpenAI',
    category: BOOK_CATEGORIES.OPENAI,
    description: 'Lessons from seven frontier companies implementing AI at scale. Real-world case studies from Morgan Stanley, Indeed, Klarna, and more.',
    pages: 24,
    readTime: '15 min',
    coverImage: null,
    pdfFile: '/pdfs/ai-enterprise.pdf',
    publishDate: '2024-01-01',
    featured: true
  },
  {
    id: 'prompt-engineering',
    title: 'Prompt Engineering Guide',
    author: 'Google AI',
    category: BOOK_CATEGORIES.GOOGLE,
    description: 'Master the art of crafting effective prompts for better AI results. Comprehensive techniques and best practices.',
    pages: 32,
    readTime: '20 min',
    coverImage: null,
    pdfFile: '/pdfs/prompt-engineering.pdf',
    publishDate: '2023-12-01',
    featured: false
  }
];

// Export books (switch to booksData when you add real books)
export const books = booksData.length > 0 ? booksData : exampleBooks;