import { Link, useNavigate } from "react-router-dom"
import { Contact } from "./Contact"
import { About } from "./About"
export function Home()
{
    const navigate = useNavigate()
    return(
        <>
            <h1>Home Page</h1>
            
            <div>
                <div>
                    <button onClick={()=>navigate('/Contact')}>Show Contact</button>
                </div>
                <div>
                    <button onClick={()=>navigate('/About')}>About Page</button>
                </div>
                <div>
                    <button onClick={()=>navigate(-1)}>Back</button>
                </div>
            </div>
        </>
    )

}