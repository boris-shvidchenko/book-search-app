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
        }})
    }
    
    return (
        <div className='flex justify-start lg:justify-center space-x-5 items-center md:w-auto h-[21rem] bg-[#383838] rounded-2xl shadow-xl drop-shadow-lg px-4 overflow-hidden'>
            <Image
                src={props.image !== undefined ? props.image : ''}
                height={1000}
                width={1000}
                alt={`Book cover image of ${props.title}`}
                className='w-52 h-72 object-fit rounded-md'
            />
            <section className='w-auto lg:w-96 h-60 max-h-60 p-1 relative -top-8'>
                <h1 className='font-semibold text-xl line-clamp-2 mb-2'>{props.title}</h1>
                <p className='italic'>{writers}</p>
                <p className='h-30 line-clamp-5 my-2'>{props.description}</p>
                <Link href={`/results/${props.id}`} onClick={showBookDetails} className='flex items-center space-x-1'>
                    <p className='text-lg italic w-26'>More Details</p>
                    <ChevronRightIcon className='w-4 h-4 relative top-0.5' />
                </Link>
            </section>
        </div>
    )
}