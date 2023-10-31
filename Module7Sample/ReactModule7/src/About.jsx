import { useNavigate } from "react-router-dom"

export function About()
{
    const navigate = useNavigate();
    return(
        <>
            <h1>About</h1>
            <div>
                    <button onClick={()=> navigate(-1)}>Home</button>
            </div>
        </>
    )
}