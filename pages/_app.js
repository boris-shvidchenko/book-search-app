// Components
import LoadingScreen from '../components/LoadingScreen';

// Styles
import '../styles/globals.css';

// Hooks
import { createContext, useReducer } from 'react';

export const Context = createContext(); 

export default function App({ Component, pageProps }) {

  // State
  const initialState = {
    search: '',
    bookData: null,
    searchModal: false
  };

  // Reducer
  const [state, dispatch] = useReducer(reducer, initialState);

  // Reducer Function
  function reducer(state, action){
    switch(action.type) {
      case 'updateSearch':
        return {...state, search: action.search};
      case 'setBookData':
        return {...state, bookData: action.bookData};
      case 'toggleSearchModal':
        return {...state, searchModal: action.searchModal};
      default:
        return state;
    }
  }

  // For testing 
  // console.log(state.search);
  console.log(state.bookData);

  return (
    <Context.Provider value={{state, dispatch}}>
      <Component {...pageProps} />  
      <LoadingScreen />
    </Context.Provider>
  )
}
