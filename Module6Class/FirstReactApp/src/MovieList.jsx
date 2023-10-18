import AddMovieForm from './AddMovieForm';
import './App.css'
import Movie from './Movie';
import { useState } from 'react';
function MoviesList() {
    // collection of objects representing movies
    const movies = [
        {
            id: "1",
            title: "The Shawshank Redemption",
            year: 1994,
            synopsis: "Two imprisoned men find redemption.",
        },
        {
            id: "2",
            title: "The Dark Knight",
            year: 2008,
            synopsis: "Batman fights the menace known as the Joker.",
        },
        {
            id: "3",
            title: "Interstellar",
            year: 2014,
            synopsis: "Explorers travel through a wormhole in space.",
        },
    ];

    const [currentMovies, setCurrentMovies] = useState(movies);

    const movieItems = currentMovies.map(movie => (
        <Movie
        key={movie.id} // key prop is required for lists
        title={movie.title}
        year={movie.year}
        synopsis={movie.synopsis}/>
        // can also destructure movie into individual props
        // <Movie key={movie.id} {...movie}/>
    ))

    const handleReverseMovies = () => {
        // first clone the original, so we don’t mutate it
        let newMovies = [...currentMovies];
        newMovies.reverse(); // 2. modify the clone
        setCurrentMovies(newMovies); // 3. set updated clone in state
    }
    // add this in MoviesList component
    const handleAddMovie = (newMovie) => {
        newMovie.id = currentMovies.length + 1; // unreliable but succinct
        setCurrentMovies([...currentMovies, newMovie])
    }
    return (
        <>
        <div className="MoviesList componentBox">
            <ul> {/* iterate over each movie, print the title in a list */}
                {movieItems}
            </ul>
            
        </div>
        <div>
            <button onClick={handleReverseMovies}>Reverse List</button>
        </div>
        <div>
            <AddMovieForm onAddMovie={handleAddMovie}></AddMovieForm>
        </div>
        </>
    )
}
export default MoviesList;