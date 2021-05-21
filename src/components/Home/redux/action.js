import { fetchAllMovies } from "../../../services/moviesService";
import { FETCH_MOVIES_LIST } from "./types";

export const fetchMoviesData = () => {
    const moviesData = fetchAllMovies();

    return {
        type: FETCH_MOVIES_LIST,
        data: moviesData,
    }    
}
