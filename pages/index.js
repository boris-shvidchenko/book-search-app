// Components
import Head from 'next/head';
import Image from 'next/image';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline' 

// Context
import { Context } from '../pages/_app';

// Hooks
import { useContext } from 'react';

export default function Home() {

  // Obtain app state
  const { search, setSearch, setBookData } = useContext(Context);

  // Submit the search, make API call to get data, save data to state, clear search state
  function submitSearch(event) {
    event.preventDefault();
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${search}&maxResults=40&key=${process.env.NEXT_PUBLIC_API_KEY}`)
      .then(response => response.json())
      .then(data => setBookData(data))
      .then(setSearch(''))
      .catch(err => console.error(err))
  }

  // Update the search state
  function updateSearch(event) {
    setSearch(event.target.value);
  }

  return (
    <>
      <Head>
        <meta charSet='utf-8' />
        <meta name="description" content="Book search app" />
        <meta name="keywords" content="Boris Shvidchenko, Portfolio, Book search, App" />
        <meta name="author" content="Boris Shvidchenko" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Book Search</title>
      </Head>
      <main className=' relative overflow-hidden'>
        <Image 
          src='/images/cover.png'
          width={2000}
          height={2000}
          alt='Background of a shelf of books'
          className='index-img'
        />
        <section className='index-sec'>
          <div className='index-main-div'>
            <h1 className='index-h1'>Discover your next read!</h1>
            <div className='index-txt-div'>
              <hr className='index-hr' />
              <p>Enter a title name, author, subject, or term and we will search for the top 40 books that match your search!</p>
              <hr className='index-hr' />
            </div>
            <form onSubmit={(e)=>submitSearch(e)} method='post' className='index-form'>
              <input required id='search' name='search' type="text" value={search} onChange={(e)=>updateSearch(e)} className='w-full bg-transparent focus:outline-none' />
              <button><MagnifyingGlassIcon className='w-7 h-7' /></button>
            </form>
          </div>
        </section>
      </main>
    </>
  )
}

// API URL > https://www.googleapis.com/books/v1/volumes?q=peterhopkirk&maxResults=40&key=yourAPIKey 
// q={search results} 
// maxResults={total # of results, 40 is most provided by Google Books API} 
// key={my API key, it is encoded and no need to hide. Simply store in env.local and check URL to confrim security}
