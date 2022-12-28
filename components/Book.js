// Components
import Image from 'next/image';
import Link from 'next/link';

// Context
import { Context } from '../pages/_app';

// Hooks
import { useContext } from 'react';
import { useRouter } from 'next/router';

// Heroicons
import { ChevronRightIcon } from '@heroicons/react/24/outline';

export default function Book(props) {

    // Router setup
    const router = useRouter();

    // Obtain app state
    const { state, dispatch } = useContext(Context);
    
    // Obtain authors from array
    const writers = props.authors?.length > 1 ? props.authors.join(', ') : props.authors?.[0];

    // Copy props to temp state for storage to use in detail page, push to dynamic page 
    function showBookDetails() {
        dispatch({type: 'updateTempBookData', tempBookData: {
            bookTitle: props.title,
            bookDescription: props.description,
            bookAuthors: writers,
            bookImg: props.image,
            bookCategory: props.category,
            bookLanguage: props.language,
            bookPages: props.pages,
            bookPrevLink: props.previewLink,
            bookPublished: props.published,
            bookPublisher: props.publisher,
            bookId: props.id,
            bookKey: props.key
        }});
        dispatch({type: 'showDetails', details: true});
    }
    
    return (
        <div className='book-main'>
            <Image
                src={props.image !== undefined ? props.image : ''}
                height={1000}
                width={1000}
                alt={`Book cover image of ${props.title}`}
                className='book-img object-fit'
            />
            <section className='book-sec'>
                <h1 className='book-title '>{props.title}</h1>
                <p className='book-auth'>{writers}</p>
                <p className='h-30 book-desc'>{props.description}</p>
                <div onClick={showBookDetails} className='book-div'>
                    <p className='text-lg italic w-26'>More Details</p>
                    <ChevronRightIcon className='book-icon' />
                </div>
            </section>
        </div>
    )
}