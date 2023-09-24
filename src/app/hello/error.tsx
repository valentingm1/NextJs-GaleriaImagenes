"use client";

interface ErrorProps{
    error: Error,
    reset: () => void,
}


export default function Error({error,reset}: ErrorProps){
    return (
        <div>
            <p>Error Jaja</p>
            <button onClick={reset}>Boton de intentar algo nuevo</button>
        </div>
        
    )
}