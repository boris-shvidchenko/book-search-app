// Components
import Link from 'next/link';

// Heroicons
import { ChevronUpIcon } from '@heroicons/react/24/outline';

export default function Footer() {
    return (
        <div className='footer-main'>
            <Link href='#top' className='footer-link'>
                <h1 className='footer-h1'>To the top</h1>
                <ChevronUpIcon className='w-5 h-5' />
            </Link>
        </div>
    )
}