// Components
import LoadingScreen from '../components/LoadingScreen';

// Styles
import '../styles/globals.css';

// Hooks
import { createContext, useReducer } from 'react';

// Context setup
export const Context = createContext(); 

export default function App({ Component, pageProps }) {

  // State
  const initialState = {
    search: '',
    bookData: null,
    searchModal: false,
    startNum: 0,
    endNum: 10,
    tempBookData: null,
    details: false
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
      case 'updatePage':
        return {...state, startNum: action.startNum, endNum: action.endNum};
      case 'updateTempBookData':
        return {...state, tempBookData: action.tempBookData};
      case 'showDetails':
        return {...state, details: action.details};
      default:
        return state;
    }
  }

  // For testing 
  console.log(state.bookData);
  console.log(state.tempBookData);

  return (
    <Context.Provider value={{state, dispatch}}>
      <Component {...pageProps} />  
      <LoadingScreen />
    </Context.Provider>
  )
}
