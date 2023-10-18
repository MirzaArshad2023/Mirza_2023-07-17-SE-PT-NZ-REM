import { useState } from "react";
function AddMovieForm({ onAddMovie }) {
    const [moviename, setName] = useState('')
    const [director, setDirector] = useState('')
    // ++ add support for the synopsis field as well, here and below
    const handleSubmit = (e) => {
        e.preventDefault();
        alert({name: moviename, Director: director});
    }
    return (
        <div className="AddMovieForm componentBox">
            <form onSubmit={handleSubmit}>
                <label>Movie Title:
                    <input name="moviename" value={moviename}
                        onChange={(e) => setName(e.target.value)} />
                </label>
                <label>Director:
                    <input name="director" value={director}
                        onChange={(e) => setDirector(e.target.value)} />
                </label>
                <button>Add Movie</button>
            </form>
        </div>
    )
}
export default AddMovieForm