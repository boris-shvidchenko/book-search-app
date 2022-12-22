// Styles
import '../styles/globals.css';

// Hooks
import { createContext, useState } from 'react';

export const Context = createContext(); 

export default function App({ Component, pageProps }) {

  // State
  const [search, setSearch] = useState('');
  const [bookData, setBookData] = useState();
  const [searchModal, setSearchModal] = useState(false);

  // For testing 
  console.log(search);
  console.log(bookData);

  return (
    <Context.Provider value={{search, setSearch, bookData, setBookData, searchModal, setSearchModal}}>
      <Component {...pageProps} />  
    </Context.Provider>
  )
}
