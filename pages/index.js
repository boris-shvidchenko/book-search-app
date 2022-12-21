// Components
import Head from 'next/head';

// Hooks
import { useEffect } from 'react';

export default function Home() {

  useEffect(() => {
    fetch(`https://www.googleapis.com/books/v1/volumes?q=peterhopkirk&maxResults=40&key=${process.env.NEXT_PUBLIC_API_KEY}`)
      .then(response => response.json())
      .then(data => console.log(data))
  }, [])

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
      <main>
        
      </main>
    </>
  )
}

// API URL > https://www.googleapis.com/books/v1/volumes?q=peterhopkirk&maxResults=40&key=yourAPIKey 
// q={search results} 
// maxResults={total # of results, 40 is most provided by Google Books API} 
// key={my API key, it is encoded and no need to hide. Simply store in env.local and check URL to confrim security}
