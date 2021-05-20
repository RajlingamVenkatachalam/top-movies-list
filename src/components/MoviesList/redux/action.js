import moviesService from "../../../services/moviesService";
import { FETCH_MOVIES_LIST } from "./types";

export const fetchMoviesData = () => {
    
        const moviesData = moviesService.fetchAllMovies();
        console.log(moviesData);
        return {
            type: FETCH_MOVIES_LIST,
            data: moviesData,
        }
    
}