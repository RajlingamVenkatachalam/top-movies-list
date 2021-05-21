import React from "react";
import { useSelector, useDispatch } from "react-redux";
import MoviesList from "../MoviesList/MoviesList";
import MovieDetail from "../MovieDetail/MovieDetail";
import { fetchMoviesData } from "./redux/action";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import "./Styles.scss";
import { Card } from "@material-ui/core";

const Home = () => {
    const[selectedMovie, setSelectedMovie] = React.useState("");

    const { moviesList, orderSelect } = useSelector(store => store.moviesData);
    const dispatch = useDispatch();

    React.useEffect(() =>{
        dispatch(fetchMoviesData());
    },[]);

    const onChangeMovieSelection = (movieDetail) =>{
        setSelectedMovie(movieDetail)
    }

    return(
        <div style={{display:"block"}}>
        <AppBar style={{height:"50px"}}>
                <Typography variant="h6" color="inherit" style={{textAlign:"left", padding:"10px"}}>
                    Top Movies
                </Typography>
            </AppBar>
        <Card className="dashboard">            
            <MoviesList selectedMovieId={selectedMovie.id} handleMovieSelection={onChangeMovieSelection}
               moviesList={moviesList} orderSelect={orderSelect} />
            { selectedMovie!=="" && <MovieDetail movieDetail={selectedMovie} />}
        </Card>
        </div>
    )
}

export default Home;