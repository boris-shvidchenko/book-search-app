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
            );
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
        <main className='search-main'>
            <XMarkIcon onClick={openSearchModal} className='search-x'/>
            <div className={`search-div ${state.mobileWidth.width < 400 ? 'w-auto' : ''}`}>
                <p className='text-xl'>Search for a new book.</p>
                <form onSubmit={(e)=>submitSearch(e)} method='post' className={`search-form ${state.mobileWidth.width < 400 ? 'w-auto mx-5' : ''}`}>
                    <input required placeholder='New Search...' id='search' name='search' type="text" value={state.search} onChange={(e)=>updateSearch(e)} className='search-input' />
                    <button><MagnifyingGlassIcon className='w-7 h-7' /></button>
                </form>
            </div>
        </main>
    )
}