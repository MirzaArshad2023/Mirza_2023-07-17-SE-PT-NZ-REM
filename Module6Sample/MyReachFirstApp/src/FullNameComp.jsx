export function NamePart(props)
{
    return (
        <span>{props.Name}</span>
    )
}
export function FullName(props)
{
    return(
        <div>
            Full Name: <NamePart Name={props.firstName}></NamePart> <NamePart Name={props.lastName}></NamePart>
        </div>
    )
}