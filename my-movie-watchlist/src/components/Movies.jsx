import { useState, useEffect } from "react";

export default function Movies() {
    const [movies, setMovies] = useState(null);

    useEffect(() => {
        fetch(new URL("../movie-placeholder.json", import.meta.url))
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Could not load movies: ${response.status}`);
                }
                return response.json();
            })
                .then(data => setMovies(data))
            .catch(error => console.error(error));
    }, [])


    return (
        <div className="movie-list">
              <div className="movie">
                  {movies && <img src={movies.Poster} alt={`poster of ${movies.Title}`} />}
                  <div className="movie-info">
                      {movies && <h2>{movies.Title}</h2>}
                      {movies && <p>{movies.Plot}</p>}
                  </div>
              </div>
        </div>
    )
}

