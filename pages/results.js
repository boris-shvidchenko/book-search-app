// Components
import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import SearchModal from '../components/SearchModal';
import Book from '../components/Book';
import Footer from '../components/Footer';

// Context
import { Context } from '../pages/_app';

// Hooks
import { createContext, useContext, useState } from 'react';
import { useRouter } from 'next/router';

// Heroicons
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

export const ResultsContext = createContext();

export default function Results() {

    // Obtain app state
    const { state, dispatch } = useContext(Context);

    // Router setup
    const router = useRouter();
    
    // Local state for pagination
    const [startNum, setStartNum] = useState(0);
    const [endNum, setEndNum] = useState(10);

     // Map through book data from API
    const books = state.bookData?.items?.slice(startNum, endNum).map(item => {
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

    // Move to next page
    function nextPage() {
        setStartNum(prevNum => prevNum += 10);
        setEndNum(prevNum => prevNum += 10)
    }

    // Move to previous page
    function prevPage() {
        setStartNum(prevNum => prevNum -= 10);
        setEndNum(prevNum => prevNum -= 10)
    }

    return (
        <ResultsContext.Provider value={{startNum, setStartNum, endNum, setEndNum}}>
            <div className='relative'>
                <Head>
                    <title>Book Search - Results</title>
                </Head>
                {state.searchModal && <SearchModal />}
                <Navbar />
                <main className='results-main'>
                    {/* Filter section? */}
                    <section className='results-section'>
                        <div id='top' className='hidden' />
                        {books}
                    </section>

                    <section className='flex space-x-14 justify-center pt-2 pb-10 w-36 mx-auto'>
                        <Link href='#top' onClick={prevPage}>
                            <ChevronLeftIcon className='w-9 h-9' />
                        </Link>
                        <Link href='#top' onClick={nextPage}>
                            <ChevronRightIcon className='w-9 h-9' />
                        </Link>
                    </section>

                    <Footer />
                </main>
            </div>
        </ResultsContext.Provider>
    )
}