import { Link, useNavigate } from "react-router-dom"
export function Contact()
{
    const navigate = useNavigate();
    return(
        <>
            <p>Please contact 1111-111-111</p>
            <div>
                <button onClick={()=>navigate(-1)}>Go Back</button>
            </div>
            
        </>
    )
}