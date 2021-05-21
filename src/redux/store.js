import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import homeReducer from "../components/Home/redux/reducer";

const reducer = combineReducers({
    moviesData: homeReducer,
});

const store = createStore(
    reducer, applyMiddleware(thunk)
);

export default store;