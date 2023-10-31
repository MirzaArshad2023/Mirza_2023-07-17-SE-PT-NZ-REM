import { Link, useNavigate } from "react-router-dom"
export function Home(){

    const navigate = useNavigate();
    return(
        <>
            <p>Home Component...</p>
            <div>
                <Link to='/Contact'>Contact</Link>
            </div>
            <div>
            <Link to='Users/UserInfo'>User Details</Link>
            </div>
            <div>
            <Link to='Users/NewUser'>New User</Link>
            </div>
            <div>
            <Link to='/About'>About</Link>
            </div>
            <div>
                <button onClick={()=>navigate('/Contact')}>Process</button>
            </div>

        </>
    )
}

