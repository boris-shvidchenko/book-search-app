// Components
import { XMarkIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';

// Context
import { Context } from '../pages/_app';

// Hooks
import { useContext } from 'react';
import { useRouter } from 'next/router';

export default function SearchModal() {

    // Obtain app state
    const { search, setSearch, setBookData, searchModal, setSearchModal } = useContext(Context);

    // Router setup
    const router = useRouter();

    // Submit the search, make API call to get data, save data to state, clear search state
    function submitSearch(event) {
        event.preventDefault();
        fetch(`https://www.googleapis.com/books/v1/volumes?q=${search}&maxResults=40&key=${process.env.NEXT_PUBLIC_API_KEY}`)
        .then(response => response.json())
        .then(data => setBookData(data))
        .then(setSearch(''))
        .then(setSearchModal(false))
        .then(router.push('/results'))
        .catch(err => console.error(err))
    }

    // Update the search state
    function updateSearch(event) {
        setSearch(event.target.value);
    }

    // Closes search modal in mobile view
    function openSearchModal() {
        setSearchModal(false);
    }

    return (
        <main className='absolute top-0 text-white bg-black/80 w-full h-full overflow-hidden'>

            <XMarkIcon onClick={openSearchModal} className='h-8 w-8 fixed top-8 right-7 cursor-pointer'/>
            
            <div className='flex flex-col w-80 mx-auto mt-56 text-center space-y-6'>
                <p className='text-xl'>Search for a new book.</p>
                <form onSubmit={(e)=>submitSearch(e)} method='post' className='border border-white bg-black/60 flex p-3 rounded-full justify-between space-x-2 '>
                <input required placeholder='New Search...' id='search' name='search' type="text" value={search} onChange={(e)=>updateSearch(e)} className='w-full bg-transparent focus:outline-none ml-3' />
                <button><MagnifyingGlassIcon className='w-7 h-7' /></button>
                </form>
            </div>
        </main>
    )
}