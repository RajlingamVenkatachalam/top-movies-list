import React from "react";
import reactRedux, { Provider } from "react-redux";
import renderer from "react-test-renderer";
import configureStore from "redux-mock-store";
import Home from "./Home";
import { moviesList, orderSelect } from "../testUtil/testData";

const mockStore = configureStore([]);

describe("MovieList dashboard test",()=>{
    let store;
    let component;

    const useSelectorMock = jest.spyOn(reactRedux, 'useSelector')
    const useDispatchMock = jest.spyOn(reactRedux, 'useDispatch')

    beforeEach(() => {
        store = mockStore({
            moviesList,
            orderSelect
        });

        store.dispatch = jest.fn();

        component = renderer.create(
            <Provider store={store}>
                <Home />
            </Provider>
        )
    });

    it("should render with given mockState", () => {
        expect(component.toJSON()).toMatchSnapshot();
    });

    it("should dispatch fetchMovies action at initial", () => {
        expect(store.dispatch).toHaveBeenCalledTimes(1);
    })
})
