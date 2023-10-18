function SingleCat({id, name, latinName, image, onRemoveCat}) {
    return (
        <li>
            <img src={image} width="400" alt={name} />
            <h3>{name}</h3> 
            <em>({latinName})</em>&nbsp;
            <a onClick={() => onRemoveCat(id)}>Delete</a>
        </li>
    )
}   

export default SingleCat;