// Components
import Link from 'next/link';

// Heroicons
import { ChevronUpIcon } from '@heroicons/react/24/outline';

export default function Footer() {
    return (
        <div className='border-t border-slate-300 bg-[#252525] flex justify-center items-center px-2 w-full h-24 text-white'>
            <Link href='#top' className='flex items-center justify-center space-x-2 h-10 w-max'>
                <h1 className='text-center'>To the top</h1>
                <ChevronUpIcon className='w-5 h-5' />
            </Link>
        </div>
    )
}