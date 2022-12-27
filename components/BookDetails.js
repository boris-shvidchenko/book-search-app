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

            <XMarkIcon onClick={closeDetails} className='h-8 w-8 fixed top-8 right-7 cursor-pointer'/>

            <div className='bg-[#383838] shadow-xl drop-shadow-lg rounded-xl p-6 w-max mx-auto mt-24'>
                <section className='flex flex-col items-center space-y-6 w-max '>
                    <section className='flex space-x-8 justify-center'>
                        <Image 
                            src={state?.tempBookData?.bookImg} 
                            width={2000}
                            height={2000}
                            alt={`Cover image of ${state?.tempBookData?.bookTitle}`}
                            className='w-auto h-72 object-cover rounded-xl shadow-xl drop-shadow-xl' 
                        />
                        <div className='w-auto mt-5'>
                            <p className='text-2xl w-64 line-clamp-2'>{state?.tempBookData?.bookTitle}</p>
                            <p className='italic mb-5'>{state?.tempBookData?.bookAuthors}</p>
                            {state?.tempBookData?.bookCategory && <p>Category: {state?.tempBookData?.bookCategory}</p>}
                            {state?.tempBookData?.bookLanguage && <p>Language: {state?.tempBookData?.bookLanguage.toUpperCase()}</p>}
                            {state?.tempBookData?.bookPages && <p>Pages: {state?.tempBookData?.bookPages}</p>}
                            {state?.tempBookData?.bookPublisher && <p>Publisher: {state?.tempBookData?.bookPublisher}</p>}
                            {state?.tempBookData?.bookPublished && <p>Published: {state?.tempBookData?.bookPublished}</p>}
                            {state?.tempBookData?.bookPrevLink && <a className='mt-5' target='_blank' href={state?.tempBookData?.bookPrevLink}><p>Preview Link</p></a>}
                        </div>    
                    </section>

                    <p className='w-[35rem] max-h-72 overflow-hidden line-clamp-12'>{state?.tempBookData?.bookDescription}</p>

                </section>  


                
            </div>
        </main>
    )
}