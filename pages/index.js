// Components
import Head from 'next/head';
import Image from 'next/image';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline' 

// Hooks
import { useEffect } from 'react';

export default function Home() {

  // useEffect(() => {
  //   fetch(`https://www.googleapis.com/books/v1/volumes?q=ww1&maxResults=40&key=${process.env.NEXT_PUBLIC_API_KEY}`)
  //     .then(response => response.json())
  //     .then(data => console.log(data))
  // }, [])

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
          alt=''
          className='w-full h-screen object-cover blur-[1px]'
        />
        <section className='bg-black/70  absolute top-0 w-full h-full text-white'>
          <div className='sm:w-[40rem] lg:w-[52rem] mx-auto mt-[12rem] text-center'>

            <h1 className='text-4xl sm:text-5xl lg:text-7xl mb-10'>Discover your next read!</h1>

            <div className='flex items-center w-80 sm:w-[30rem] lg:w-[37rem] mx-auto mb-12 space-x-5 md:space-x-11 pr-4 sm:pr-0'>
              <hr className='w-16 border-t-2 hidden sm:block' />
              <p>Enter a title name, author, subject, or term and we will search for the top 40 books that match your search!</p>
              <hr className='w-16 border-t-2 hidden sm:block' />
            </div>

            <form className='border border-white bg-black/10 flex p-3 rounded-full w-80 mx-auto justify-between space-x-2'>
              <input required type="text" className='w-full bg-transparent focus:outline-none' />
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
