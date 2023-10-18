import { useState } from "react";
import { Movie } from "./Movie";
import AddMovieForm from "./AddMovieForm";

function MovieList()
{
    const movies =[
        {name:"Titanic", Director:"James Cameron", id:1},
        {name:"Prometheus", Director:"Ridley Scott", id:2},
        {name:"Jurassic Park", Director:"Steven speilperg", id:3},
        {name:"Terminator", Director:"James cameron", id:4}
    ]
    
    const movieItems = movies.map(movie=> (<Movie key={movie.id} name={movie.name} director={movie.Director}></Movie>))

    const [currentMovies, setCurrentMovies] = useState(movieItems);

    function HandleReverseMovies()
    {
        let newMovies = [...currentMovies];
        newMovies.reverse();
        setCurrentMovies(newMovies);
    }
    const handleAddMovie = (newMovie) => {
        newMovie.id = currentMovies.length + 1; // unreliable but succinct
        setCurrentMovies([...currentMovies, newMovie])
        }
    return (
        <>
            <div>
                <ul>{currentMovies}</ul>
            </div>
            <div>
                <button onClick={HandleReverseMovies}>Reverse</button>
            </div>
            <AddMovieForm onAddMovie={handleAddMovie}></AddMovieForm>
        </>
    )
}
export default MovieList;