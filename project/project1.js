  const numberOfFilms = prompt ('Hom much films u saw?', '');

  const personalMovie = {
    count : numberOfFilms,
    movies : {},
    actors: {},
    genres: [],
    private: false
  };

const a = prompt("which last film you saw"),
      b = prompt("Rate him", ""),
      c = prompt("Which last film you", ""),
      d = prompt("Rate him", "");
    
personalMovie.movies[a] = b;
personalMovie.movies[c] = d;

console.log(personalMovie);