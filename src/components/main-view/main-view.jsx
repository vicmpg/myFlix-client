import { useState } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";

export const MainView = () => {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: "The Incredibles",
      description:
        "While trying to lead a quiet suburban life, a family of undercover superheroes are forced into action to save the world.",
      image:
        "https://www.themoviedb.org/t/p/original/2LqaLgk4Z226KkgPJuiOQ58wvrm.jpg",
      genre: "Animation",
      director: "Brad Bird"
    },
    {
      id: 2,
      title: "Toy Story",
      description:
        "A cowboy doll is profoundly threatened and jealous when a new spaceman action figure supplants him as top toy in a boy's bedroom.",
      image:
        "https://image.tmdb.org/t/p/original/voln3hFAJwZUgcLdhvDmsjK6Lpq.jpg",
      genre: "Animation",
      director: "John Lasseter"
    },
    {
      id: 3,
      title: "A Bug's Life",
      description:
        "A misfit ant, looking for `warriors` to save his colony from greedy grasshoppers, recruits a group of bugs that turn out to be an inept circus troupe.",
      image:
        "https://lumiere-a.akamaihd.net/v1/images/open-uri20150422-12561-rjh0mf_17e758bd.jpeg?region=0%2C0%2C1000%2C1409",
      genre: "Animation",
      director: "John Lasseter"
    }
  ]);

  const [selectedMovie, setSelectedMovie] = useState(null);

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