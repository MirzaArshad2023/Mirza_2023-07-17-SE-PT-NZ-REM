export function Movie({name, director})
{
    return(
        <li>
        <h3>{name}</h3> <span>({director})</span>
        </li>
    )
}