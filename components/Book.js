// Components
import Link from 'next/link';
import Image from 'next/image';

// Hooks

// Heroicons
import { ChevronRightIcon } from '@heroicons/react/24/outline';

export default function Book({ title, description, authors, image, id }) {
    
    // Obtain authors from array
    const writers = authors?.length > 1 ? authors.join(', ') : authors?.[0];
    
    return (
        <div className='flex justify-start lg:justify-center space-x-5 items-center md:w-auto h-[21rem] bg-[#383838] rounded-2xl shadow-xl drop-shadow-lg px-4 overflow-hidden'>
            <Image
                src={image !== undefined ? image : ''}
                height={1000}
                width={1000}
                alt={`Book cover image of ${title}`}
                className='w-52 h-72 object-fit rounded-md'
            />
            <section className='w-auto lg:w-96 h-60 max-h-60 p-1 relative -top-8'>
                <h1 className='font-semibold text-xl line-clamp-2 mb-2'>{title}</h1>
                <p className='italic'>{writers}</p>
                <p className='h-30 line-clamp-5 my-2'>{description}</p>
                <Link href={`/results/${id}`} className='flex items-center space-x-1'>
                    <p className='text-lg italic w-26'>More Details</p>
                    <ChevronRightIcon className='w-4 h-4 relative top-0.5' />
                </Link>
            </section>
        </div>
    )
}