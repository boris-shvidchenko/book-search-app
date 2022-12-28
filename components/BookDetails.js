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
        <main className={`details-main ${state.mobileWidth.width < 768 ? 'absolute bg-[#383838]' : ''}`}>
            <XMarkIcon onClick={closeDetails} className='details-x'/>
            <div className='details-div1'>
                <section className='details-sec1'>
                    <section className='details-sec2'>
                        <Image 
                            src={state?.tempBookData?.bookImg} 
                            width={2000}
                            height={2000}
                            alt={`Cover image of ${state?.tempBookData?.bookTitle}`}
                            className='details-img' 
                        />
                        <div className='details-div2'>
                            <p className='details-title'>{state?.tempBookData?.bookTitle}</p>
                            <p className='details-auth'>{state?.tempBookData?.bookAuthors}</p>
                            {state?.tempBookData?.bookCategory && <p className='details-info'>Category: {state?.tempBookData?.bookCategory}</p>}
                            {state?.tempBookData?.bookLanguage && <p className='details-info'>Language: {state?.tempBookData?.bookLanguage.toUpperCase()}</p>}
                            <p className='details-info'>Pages: {state?.tempBookData?.bookPages && <span className='details-info'>{state?.tempBookData?.bookPages}</span>}</p>
                            {state?.tempBookData?.bookPublisher && <p className='details-info'>Publisher: {state?.tempBookData?.bookPublisher}</p>}
                            {state?.tempBookData?.bookPublished && <p className='details-info'>Published: {state?.tempBookData?.bookPublished}</p>}
                            {state?.tempBookData?.bookPrevLink && <a className='details-link' target='_blank' href={state?.tempBookData?.bookPrevLink}>Preview Link</a>}
                        </div>   
                    </section>
                    <p className='details-desc'>{state?.tempBookData?.bookDescription}</p>
                </section>  
            </div>
        </main>
    )
}