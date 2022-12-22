// Components
import Head from 'next/head';
import Navbar from '../components/Navbar';
import SearchModal from '../components/SearchModal';

// Context
import { Context } from '../pages/_app';

// Hooks
import { useContext } from 'react';
import { useRouter } from 'next/router';

export default function Results() {

    // Obtain app state
    const { state, dispatch } = useContext(Context);

    // Router setup
    const router = useRouter();

     // Map through book data from API
    const books = state.bookData.items.map(item => {
        // Return individual book card component
        return(
        <>
            <p>{item.volumeInfo.title}</p>
            <p>{item.volumeInfo.description}</p>
            <img src={item.volumeInfo.imageLinks.thumbnail} alt='book image' />
            <hr/>
        </>
        )
    })

    return (
        <div className='relative'>
            <Head>
                <title>Book Search - Results</title>
            </Head>
            {state.searchModal && <SearchModal />}
            <main className='sm:mx-[5%] px-5 h-full bg-[#252525] text-white'>
                <Navbar />
                {/* Filter section? */}
                {books}
            </main>
        </div>
    )
}