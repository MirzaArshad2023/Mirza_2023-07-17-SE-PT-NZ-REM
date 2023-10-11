import { Movie } from "./Movie";

function MovieList()
{
    const movies =[
        {name:"Titanic", Director:"James Cameron", id:1},
        {name:"Prometheus", Director:"Ridley Scott", id:2},
        {name:"Jurassic Park", Director:"Steven speilperg", id:3}
    ]

    const movieItems = movies.map(movie=> (<Movie key={movie.id} name={movie.name} director={movie.Director}></Movie>))

    return (
        <div>
            <ul>{movieItems}</ul>
        </div>
    )
}
export default MovieList;