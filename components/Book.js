// Components
import Link from 'next/link';
import Image from 'next/image';

import { ChevronRightIcon } from '@heroicons/react/24/outline';

export default function Book({ title, description, authors, image }) {
    
    // Obtain authors from array
    const writers = authors?.length > 1 ? authors.join(', ') : authors?.[0];
    
    return (
        <div className='flex justify-center space-x-5 items-center md:w-auto h-[21rem] bg-[#383838] rounded-2xl shadow-xl drop-shadow-lg px-4'>
            <Image
                src={image}
                height={1000}
                width={1000}
                alt={`Book cover image of ${title}`}
                className='w-52 h-72 object-fit rounded-md'
            />
            <section className='w-96 h-60 max-h-60 p-1 relative -top-8'>
                <h1 className='font-semibold text-xl line-clamp-2 mb-2'>{title}</h1>
                <p className='italic'>{writers}</p>
                <p className='h-30 line-clamp-5 my-2'>{description}</p>
                <Link href='#' className='flex items-center space-x-3'>
                    <p className='text-lg italic'>More Details</p>
                    <ChevronRightIcon className='w-5 h-5' />
                </Link>
            </section>
        </div>
    )
}