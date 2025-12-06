import React from 'react';
import Book from './components/Book';
import { INITIAL_BOOK } from './constants';

function App() {
  return (
    <Book initialBook={INITIAL_BOOK} />
  );
}

export default App;