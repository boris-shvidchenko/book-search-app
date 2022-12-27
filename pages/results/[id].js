// Context
import { Context } from '/pages/_app';

// Hooks
import { useContext } from 'react';

export default function BookInfo() {

    // Obtain app state
    const { state, dispatch } = useContext(Context);

    return (
        <div className='text-white'>{state?.tempBookData?.t}</div>
    )
}