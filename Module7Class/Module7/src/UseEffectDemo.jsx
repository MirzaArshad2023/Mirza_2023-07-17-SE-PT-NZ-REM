import { useEffect } from "react";
import { useState } from "react";

function UseEffectDemo()
{
    const [displayText, updateDisplayText] = useState('')
    const [results, updateResults] = useState([])

    useEffect(()=>{
        console.log('useEffect in action')
        fetch(`https://jsonplaceholder.typicode.com/${displayText}`)
        .then(Response => Response.json())
        .then(json => updateResults(json))
    },[displayText])

    return(
        <>
            <div>
                <p>{displayText}</p>
            </div>
            <div>
                <button onClick={()=>updateDisplayText('users')}>users</button>
                <button onClick={()=> updateDisplayText('comments')}>comments</button>
                <button onClick={()=> updateDisplayText('posts')}>posts</button>
            </div>
            <div>
                <p>{results.map(result=> <pre>{JSON.stringify(result)}</pre>)}</p>
            </div>
        </>
    )
}
export default UseEffectDemo;