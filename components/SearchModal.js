// Heroicons
import { XMarkIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';

// Context
import { Context } from '../pages/_app';

// Hooks
import { useContext } from 'react';
import { useRouter } from 'next/router';

// Promise Tracking
import { trackPromise } from 'react-promise-tracker';

export default function SearchModal() {

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
            .then(dispatch({type: 'toggleSearchModal', searchModal: false}))
            .then(router.push('/results'))
            .catch(err => console.error(err))
            )
        dispatch({type: 'updatePage', startNum: 0, endNum: 10});
        }

    // Update the search state
    function updateSearch(event) {
        dispatch({type: 'updateSearch', search: event.target.value});
    }

    // Closes search modal in mobile view
    function openSearchModal() {
        dispatch({type: 'toggleSearchModal', searchModal: false});
    }

    return (
        <main className='fixed top-0 text-white bg-black/80 w-full h-full overflow-hidden z-50'>

            <XMarkIcon onClick={openSearchModal} className='h-8 w-8 fixed top-8 right-7 cursor-pointer'/>

            <div className='flex flex-col w-80 mx-auto mt-56 text-center space-y-6'>
                <p className='text-xl'>Search for a new book.</p>
                <form onSubmit={(e)=>submitSearch(e)} method='post' className='border border-[#a8a8a8] bg-black/60 flex p-3 rounded-full justify-between space-x-2 '>
                <input required placeholder='New Search...' id='search' name='search' type="text" value={state.search} onChange={(e)=>updateSearch(e)} className='w-full bg-transparent focus:outline-none ml-3' />
                <button><MagnifyingGlassIcon className='w-7 h-7' /></button>
                </form>
            </div>
        </main>
    )
}