// Components
import Head from 'next/head';
import Navbar from '../components/Navbar';
import SearchModal from '../components/SearchModal';
import Book from '../components/Book';

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
    const books = state.bookData?.items?.map(item => {
        return(
            <Book 
                title = {item?.volumeInfo?.title}
                description = {item?.volumeInfo?.description}
                authors = {item?.volumeInfo?.authors}
                image = {item?.volumeInfo?.imageLinks?.thumbnail}
                key={item?.id}
            />
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
                <section className='grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-10 gap-y-10 pt-10'>
                    {books}
                </section>
            </main>
        </div>
    )
}