import { useNavigate } from "react-router-dom"

export function Contact()
{
    const navigate = useNavigate();
    return(
        <>
            <div>
                <h1>Contact</h1>
                <div>
                    <h1>111-111-111</h1>
                </div>
                <div>
                    <button onClick={()=> navigate(-1)}>Home</button>
                </div>
            </div>
        </>
    )
}