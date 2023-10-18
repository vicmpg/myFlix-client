import { useState, useEffect } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";

export const MainView = () => {
  const [movies, setMovies] = useState([]);

  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    fetch('https://myflix-z4g1.onrender.com')
    .then((response) => response.json())
    .then((data) => {
      const movieFromApi = data.map((movie) => {
        return {
          id: movie._id,
          title: movie.title,
          genre: movie.genre.name,
          description: movie.description,
          director: movie.director.name,
          image: movie.image

        }
      })
      setMovies(movieFromApi)
      })
    }, [])


  if (selectedMovie) {
    return (
      <MovieView
        movie={selectedMovie}
        onBackClick={() => setSelectedMovie(null)}
      />
    );
  }

  if (movies.length === 0) {
    return <div>The list is empty!</div>;
  }

  return (
    <div>
      {movies.map((movie) => {
        return (
          <MovieCard
            key={movie.id}
            movieData={movie}
            onMovieClick={(newSelectedMovie) =>
              setSelectedMovie(newSelectedMovie)
            }
          />
        );
      })}
    </div>
  );
};