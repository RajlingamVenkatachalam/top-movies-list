import React from "react";
import MoviesList from "../MoviesList/MoviesList";
import MovieDetail from "../MovieDetail/MovieDetail";
import "./Styles.scss";

const Home = () => {
    const[selectedMovie, setSelectedMovie] = React.useState("");

    const onChangeMovieSelection = (movieDetail) =>{
        setSelectedMovie(movieDetail)
    }

    return(
        <div className="dashboard">
            <MoviesList selectedMovieId={selectedMovie.id} handleMovieSelection={onChangeMovieSelection} />
            { selectedMovie!=="" && <MovieDetail movieDetail={selectedMovie} />}
        </div>
    )
}

export default Home;