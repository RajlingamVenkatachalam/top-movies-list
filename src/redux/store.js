import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import moviesReducer from "../components/MoviesList/redux/reducer";

const reducer = combineReducers({
    moviesData: moviesReducer,
});

const store = createStore(
    reducer, applyMiddleware(thunk)
);

export default store;