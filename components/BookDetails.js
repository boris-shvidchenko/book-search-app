// Components
import Image from 'next/image';

// Heroicons
import { XMarkIcon } from '@heroicons/react/24/outline';

// Context
import { Context } from '/pages/_app';

// Hooks
import { useContext } from 'react';

export default function BookDetails() {

    // Obtain app state
    const { state, dispatch } = useContext(Context);

    // Closes details modal
    function closeDetails() {
        dispatch({type: 'showDetails', details: false});
    }

    return (
        <main className='fixed top-0 text-white bg-black/90 w-full h-full overflow-hidden z-50'>
            <XMarkIcon onClick={closeDetails} className='h-8 w-8 fixed top-5 right-5 md:top-8 md:right-7 cursor-pointer z-50'/>
            <div className='bg-[#383838] md:shadow-xl md:drop-shadow-lg md:rounded-xl shadow-black/90 p-6 w-auto md:w-max h-screen md:h-auto mx-auto md:mt-24'>
                <section className='flex flex-col md:items-center space-y-6 w-max '>
                    <section className='md:flex md:space-x-8 justify-center'>
                        <Image 
                            src={state?.tempBookData?.bookImg} 
                            width={2000}
                            height={2000}
                            alt={`Cover image of ${state?.tempBookData?.bookTitle}`}
                            className='w-auto h-72 object-cover rounded-xl shadow-xl drop-shadow-xl shadow-black/20' 
                        />
                        <div className='text-sm md:w-auto mt-5'>
                            <p className='text-2xl w-screen pr-16 md:pr-0 md:w-64 line-clamp-2'>{state?.tempBookData?.bookTitle}</p>
                            <p className='italic w-screen pr-16 md:pr-0 md:w-64 mb-5 text-md'>{state?.tempBookData?.bookAuthors}</p>
                            {state?.tempBookData?.bookCategory && <p>Category: {state?.tempBookData?.bookCategory}</p>}
                            {state?.tempBookData?.bookLanguage && <p>Language: {state?.tempBookData?.bookLanguage.toUpperCase()}</p>}
                            {state?.tempBookData?.bookPages && <p>Pages: {state?.tempBookData?.bookPages}</p>}
                            {state?.tempBookData?.bookPublisher && <p>Publisher: {state?.tempBookData?.bookPublisher}</p>}
                            {state?.tempBookData?.bookPublished && <p>Published: {state?.tempBookData?.bookPublished}</p>}
                            {state?.tempBookData?.bookPrevLink && <a className='mt-5' target='_blank' href={state?.tempBookData?.bookPrevLink}><p>Preview Link</p></a>}
                        </div>   
                    </section>
                    <p className='w-screen pr-16 md:pr-0 md:w-[35rem] max-h-72 overflow-hidden line-clamp-9 md:line-clamp-12'>{state?.tempBookData?.bookDescription}</p>
                </section>  
            </div>
        </main>
    )
}