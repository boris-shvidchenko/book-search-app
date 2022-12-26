// Hooks
import { usePromiseTracker } from 'react-promise-tracker';

// Spinner
import { TailSpin } from 'react-loader-spinner';

export default function LoadingScreen() {

    const { promiseInProgress } = usePromiseTracker(); 
    
    return (
        promiseInProgress &&
        <main className='loading-scrn-main'>
            <div className='loading-scrn-spinner'>
                <TailSpin
                    height="80"
                    width="80"
                    color="#f55b14"
                    ariaLabel="tail-spin-loading"
                    radius="1"
                    wrapperStyle={{}}
                    visible={true}
                />
            </div>
        </main>
    )
}