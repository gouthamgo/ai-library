import React, { useState } from 'react';
import Library from './components/library/Library';
import PDFReader from './components/reader/PDFReader';

function App() {
  const [currentView, setCurrentView] = useState('library');
  const [selectedBook, setSelectedBook] = useState(null);

  const openBook = (book) => {
    setSelectedBook(book);
    setCurrentView('reader');
  };

  const closeReader = () => {
    setCurrentView('library');
    setSelectedBook(null);
  };

  return (
    <div className="App">
      {currentView === 'library' && (
        <Library onBookSelect={openBook} />
      )}
      {currentView === 'reader' && (
        <PDFReader 
          book={selectedBook} 
          onClose={closeReader} 
        />
      )}
    </div>
  );
}

export default App;