// Components
import LoadingScreen from '../components/LoadingScreen';

// Styles
import '../styles/globals.css';

// Hooks
import { createContext, useReducer, useEffect } from 'react';

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
    details: false,
    mobileWidth: {width: ''}
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
      case 'updateMobileWidth':
        return {...state, mobileWidth: action.mobileWidth};
      default:
        return state;
    }
  }

  // Sets the mobileView state width property to the current browser width. This is used in order to render components based on whether mobile view is used or not.
  // The code in the useEffect hook was referenced from the following source: https://stackoverflow.com/questions/63406435/how-to-detect-window-size-in-next-js-ssr-using-react-hook
  useEffect(() => {
    if (typeof window !== 'undefined') {
      function handleResize() {
        dispatch({type:'updateMobileWidth', mobileWidth: {width: window.innerWidth}});
      }
      window.addEventListener('resize', handleResize);
      handleResize();
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  return (
    <Context.Provider value={{state, dispatch}}>
      <Component {...pageProps} />  
      <LoadingScreen />
    </Context.Provider>
  )
}
