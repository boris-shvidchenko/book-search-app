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
        <div className='nav-main'>
            <Link href='/' onClick={returnHome}><h1 className='nav-link'>GeoBooks</h1></Link>
            <form onSubmit={(e)=>submitSearch(e)} method='post' className='nav-form'>
              <input required placeholder='New Search...' id='search' name='search' type="text" value={state.search} onChange={(e)=>updateSearch(e)} className='nav-input' />
              <button><MagnifyingGlassIcon className='w-7 h-7' /></button>
            </form>
            <MagnifyingGlassIcon onClick={openSearchModal} className='sm:hidden w-7 h-7 cursor-pointer' />
        </div>
    )
}