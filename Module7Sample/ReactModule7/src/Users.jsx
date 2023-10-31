import { useParams } from "react-router-dom"
import { Link } from "react-router-dom";
export function Users()
{
    const {id} = useParams();
    return(<>
        <p>User {id}</p>
    </>)
}