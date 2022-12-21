// Styles
import '../styles/globals.css';

// Hooks
import { createContext, useState } from 'react';

export const Context = createContext(); 

export default function App({ Component, pageProps }) {

  // State
  const [search, setSearch] = useState('');
  const [bookData, setBookData] = useState();

  // For testing 
  console.log(bookData);

  return (
    <Context.Provider value={{search, setSearch, bookData, setBookData}}>
      <Component {...pageProps} />  
    </Context.Provider>
  )
}
