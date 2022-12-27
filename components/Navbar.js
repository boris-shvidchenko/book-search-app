// Components
import Link from 'next/link';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

// Context
import { Context } from '../pages/_app';

// Hooks
import { useContext } from 'react';
import { useRouter } from 'next/router';

// Promise Tracking
import { trackPromise } from 'react-promise-tracker';

export default function Navbar() {

    // Obtain app state and results state
    const { state, dispatch } = useContext(Context);

    // Router setup
    const router = useRouter();

    // Submit the search, make API call to get data, save data to state, clear search state, return start and end num states to default
    function submitSearch(event) {
        event.preventDefault();
        trackPromise(
            fetch(`https://www.googleapis.com/books/v1/volumes?q=${state.search}&maxResults=40&key=${process.env.NEXT_PUBLIC_API_KEY}`)
            .then(response => response.json())
            .then(data => dispatch({type: 'setBookData', bookData: data}))
            .then(dispatch({type: 'updateSearch', search: ''}))
            .then(router.push('/results'))
            .catch(err => console.error(err))
            )
        dispatch({type: 'updatePage', startNum: 0, endNum: 10});
        }

    // Update the search state
    function updateSearch(event) {
        dispatch({type: 'updateSearch', search: event.target.value});
    }

    // Returns search state value to default
    function returnHome() {
        dispatch({type: 'updateSearch', search: ''});
        dispatch({type: 'updatePage', startNum: 0, endNum: 10});
    }

    // Opens search modal in mobile view
    function openSearchModal() {
        dispatch({type: 'toggleSearchModal', searchModal: true});
    }

    return (
        <div className='sm:mx-[5%] flex items-center justify-between bg-[#383838] shadow-2xl px-5 sm:w-[90%] h-24 text-white sticky top-0 z-10'>
            <Link href='/' onClick={returnHome}><h1 className='text-3xl sm:text-4xl'>Book Search</h1></Link>
            <form onSubmit={(e)=>submitSearch(e)} method='post' className='hidden border border-white bg-black/10 sm:flex p-3 rounded-full sm:w-52 md:w-64 lg:w-80 justify-between space-x-2 mx-0'>
              <input required placeholder='New Search...' id='search' name='search' type="text" value={state.search} onChange={(e)=>updateSearch(e)} className='w-full bg-transparent focus:outline-none ml-3' />
              <button><MagnifyingGlassIcon className='w-7 h-7' /></button>
            </form>
            <MagnifyingGlassIcon onClick={openSearchModal} className='sm:hidden w-7 h-7 cursor-pointer' />
        </div>
    )
}