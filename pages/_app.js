// Styles
import '../styles/globals.css';

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}


// API URL > https://www.googleapis.com/books/v1/volumes?q=peterhopkirk&maxResults=40&key=yourAPIKey 
// q={search results} 
// maxResults={total # of results, 40 is most provided by Google Books API} 
// key={my API key, it is encoded and no need to hide. Simply store in env.local and check URL to confrim security}