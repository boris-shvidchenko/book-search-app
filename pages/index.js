// Components
import Head from 'next/head';
import Image from 'next/image';

// Heroicons
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'; 

// Context
import { Context } from '../pages/_app';

// Hooks
import { useContext } from 'react';
import { useRouter } from 'next/router';

// Promise Tracking
import { trackPromise } from 'react-promise-tracker';

export default function Home() {

  // Obtain app state
  const { state, dispatch } = useContext(Context);

  // Router setup
  const router = useRouter();

  // Submit the search, make API call to get data, save data to state, clear search state
  function submitSearch(event) {
    event.preventDefault();
    trackPromise(
      fetch(`https://www.googleapis.com/books/v1/volumes?q=${state.search}&maxResults=40&key=${process.env.NEXT_PUBLIC_API_KEY}`)
        .then(response => response.json())
        .then(data => dispatch({type: 'setBookData', bookData: data}))
        .then(dispatch({type: 'updateSearch', search: ''}))
        .then(router.push('/results'))
        .catch(err => console.error(err))
    );
  }

  // Update the search state
  function updateSearch(event) {
    dispatch({type: 'updateSearch', search: event.target.value});
  } 

  // Styles
  const indexWidth = state.mobileWidth.width < 400 ? 'w-auto' : '';

  return (
    <>
      <Head>
        <meta charSet='utf-8' />
        <meta name="description" content="Book search app" />
        <meta name="keywords" content="Boris Shvidchenko, Portfolio, Book search, App" />
        <meta name="author" content="Boris Shvidchenko" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>GeoBooks</title>
      </Head>
      <main className='relative overflow-hidden'>
        <Image 
          src='/images/cover.png'
          width={2000}
          height={2000}
          alt='Background of a shelf of books'
          className='index-img'
        />
        <section className='index-sec'>
          <div className={`index-main-div ${indexWidth}`}>
            <h1 className='index-h1'>Discover your next read!</h1>
            <div className={`index-txt-div ${indexWidth}`}>
              <hr className='index-hr' />
              <p>Enter a title name, author, subject, or term and we will look for the top 40 books that match your search!</p>
              <hr className='index-hr' />
            </div>
            <form onSubmit={(e)=>submitSearch(e)} method='post' className={`index-form ${state.mobileWidth.width < 400 ? 'w-auto mx-5' : ''}`}>
              <input required id='search' name='search' type="text" value={state.search} onChange={(e)=>updateSearch(e)} className='index-input' />
              <button><MagnifyingGlassIcon className='w-7 h-7' /></button>
            </form>
          </div>
        </section>
      </main>
    </>
  )
}

