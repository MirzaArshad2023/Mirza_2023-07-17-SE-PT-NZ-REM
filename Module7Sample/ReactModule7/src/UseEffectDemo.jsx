import { useEffect, useState } from "react"

export function UseEffectDemo()
{

    const [displayText, updateDisplayText] = useState('')
    const [results, updateResults] = useState([])
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/${displayText}`)      
        .then(data => data.json())
        .then(json => updateResults(json))
    },[displayText])

    return(
        <>
        <div>
            <p>{displayText}</p>
        </div>
        <div>
            <button onClick={()=>updateDisplayText('users')}>users</button>
            <button onClick={()=>updateDisplayText('posts')}>posts</button>
            <button onClick={()=>updateDisplayText('comments')}>comments</button>
        </div>
        <div>
            <p>{results.map(result => {return <pre>{JSON.stringify(result)}</pre>})}</p>
        </div>
        </>
    )
}