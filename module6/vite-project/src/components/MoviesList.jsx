import React, {useState} from "react";

function Movie({title, year, synopsis}) {
    return (
        <>
        {/* no key prop here - only at top level inside .map */}
        <li> 
            <h3>{title}</h3> <span>({year})</span>
            <div>{synopsis}</div>
        </li>
        </>
    )
 }

//  const sortButton = [...movies.keys()].map((moviessort) => (
//   <buton key={moviessort} onclick={() => handleChangeMovie(moviessort)}/>
//  ))

function MoviesList() {
    // collection of objects representing movies
    const [movies, setMovies] = useState ([
      {
        title: "The Shawshank Redemption",
        year: 1994,
        synopsis: "Two imprisoned men find redemption.",
      },
      {
        title: "The Dark Knight",
        year: 2008,
        synopsis: "Batman fights the menace known as the Joker.",
      },
      {
        title: "Interstellar",
        year: 2014,
        synopsis: "Explorers travel through a wormhole in space.",
      },
    ]);

// const movieItems = movies.map{(movie)} => {
//     <li>{movie.title} {(movie.year)}</li>
// }
const movieItems = movies.map(movie => (
    <li key={movie.id}><Movie title={movie.title} year={movie.year}/></li> // key prop is required for lists
))

    return (
      <div className="MoviesList componentBox">
       <ul> {/*  iterate over each movie, print the title in a list
            { movies.map(movie => (
              <li>{movie.title} {(movie.year)}</li>
            )) } */}
            {movieItems}
        </ul>
        <div className="button-container">{sortButton}</div>
      </div>
    )
   }



   export default MoviesList;