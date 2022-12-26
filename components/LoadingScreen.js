// Hooks
import { usePromiseTracker } from 'react-promise-tracker';

export default function LoadingScreen() {

    const { promiseInProgress } = usePromiseTracker(); 
    
    return (
        promiseInProgress &&
        <main className='absolute top-0 text-white bg-black/80 w-full h-full overflow-hidden z-50'>
            <div className='flex flex-col w-80 mx-auto mt-56 text-center space-y-6'>Loading</div>
        </main>
    )
}