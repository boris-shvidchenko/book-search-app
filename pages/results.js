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
    const { search, setSearch, bookData, setBookData, searchModal } = useContext(Context);

    // Router setup
    const router = useRouter();

    return (
        <div className='relative'>
            <Head>
                <title>Book Search - Results</title>
            </Head>
            {searchModal && <SearchModal />}
            <main className='sm:mx-[5%] px-5 h-screen bg-[#252525]'>
                <Navbar />
                {/* Filter section? */}
            </main>
        </div>
    )
}