// Components
import Head from 'next/head';
import Navbar from '../../components/Navbar';
import SearchModal from '../../components/SearchModal';

// Context
import { Context } from '/pages/_app';

// Hooks
import { useContext } from 'react';

export default function BookInfo() {

    // Obtain app state
    const { state, dispatch } = useContext(Context);

    return (
        <div className='text-white'>
            
            <Head>
                <title>{`Book Search - ${state?.tempBookData?.bookTitle}`}</title>
            </Head>

            {state.searchModal && <SearchModal />}
            <Navbar />

            <p>{state?.tempBookData?.bookTitle}</p>
            <p>{state?.tempBookData?.bookDescription}</p>
            <p>{state?.tempBookData?.bookAuthors}</p>
            <img src={state?.tempBookData?.bookImg} />
            <p>{state?.tempBookData?.bookCategory}</p>
            <p>{state?.tempBookData?.bookLanguage}</p>
            <p>{state?.tempBookData?.bookPages}</p>
            <p>{state?.tempBookData?.bookPrevLink}</p>
            <p>{state?.tempBookData?.bookPublished}</p>
            <p>{state?.tempBookData?.bookPublisher}</p>
        </div>
    )
}