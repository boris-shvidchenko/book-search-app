// Components
import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import SearchModal from '../components/SearchModal';
import Book from '../components/Book';
import Footer from '../components/Footer';
import BookDetails from '../components/BookDetails';

// Context
import { Context } from '../pages/_app';

// Hooks
import { createContext, useContext } from 'react';
import { useRouter } from 'next/router';

// Heroicons
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

// Context setup
export const ResultsContext = createContext();

export default function Results() {

    // Obtain app state
    const { state, dispatch } = useContext(Context);

    // Router setup
    const router = useRouter();

     // Map through book data from API
    const books = state.bookData?.items?.slice(state.startNum, state.endNum).map(item => {
        return(
            <Book 
                title = {item?.volumeInfo?.title}
                description = {item?.volumeInfo?.description}
                authors = {item?.volumeInfo?.authors}
                image = {item?.volumeInfo?.imageLinks?.thumbnail}
                category = {item?.volumeInfo?.categories}
                language = {item?.volumeInfo?.language}
                pages = {item?.volumeInfo?.pageCount}
                previewLink = {item?.volumeInfo?.previewLink}
                published = {item?.volumeInfo?.publishedDate}
                publisher = {item?.volumeInfo?.publisher}
                id = {item?.id}
                key = {item?.id}
            />
        )
    })

    // Move to next page
    function nextPage() {
        dispatch({type: 'updatePage', startNum: state.startNum + 10, endNum: state.endNum + 10});
    }

    // Move to previous page
    function prevPage() {
        dispatch({type: 'updatePage', startNum: state.startNum - 10, endNum: state.endNum - 10});
    }

    return (
        <div className='relative'>
            <Head>
                <title>GeoBooks - Results</title>
            </Head>
            {state.searchModal && <SearchModal />}
            <Navbar />
            {state.details && <BookDetails />}
            <main className='results-main'>

                <section className='results-section'>
                    <div id='top' className='hidden' />
                    {books}
                </section>
                <section className='results-pages'>
                    {state.startNum !== 0 && <Link href='#top' onClick={prevPage}>
                        <ChevronLeftIcon className='w-9 h-9' />
                    </Link>}
                    {state.endNum !== 40 && <Link href='#top' onClick={nextPage}>
                        <ChevronRightIcon className='w-9 h-9' />
                    </Link>}
                </section>
                <Footer />
            </main>
        </div>
    )
}