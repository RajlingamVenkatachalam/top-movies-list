import { FETCH_MOVIES_LIST } from "./types";

const InitialState = {
    moviesList : [],
    orderSelect : []
}

const moviesReducer = (state = InitialState, action) =>{
    switch(action.type){
        case FETCH_MOVIES_LIST:
            return {
                orderSelect: action.data.components.filter(item => item.type==="order-select")[0].items,
                moviesList: action.data.components.filter(item => item.type==="movie-list")[0].items,
            };

        default:
            return state;
    }
};

export default moviesReducer;
