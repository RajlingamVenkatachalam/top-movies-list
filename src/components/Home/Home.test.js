import React from "react";
import { Provider, useSelector } from "react-redux";
import renderer from "react-test-renderer";
import configureStore from "redux-mock-store";
import Home from "./Home";
import { moviesList, orderSelect } from "../testUtil/testData";

const mockStore = configureStore([]);

jest.mock("react-redux", () => ({
    ...jest.requireActual("react-redux"),
    useSelector: jest.fn()
  })
);

describe("MovieList dashboard test", () => {
    let store;
    let component;

    beforeEach(() => {
        const mockState =  {
            moviesList,
            orderSelect
        };

        useSelector.mockImplementation(callback => {
            return callback(mockState);
          });           
    });

    afterEach(() => {
        useSelector.mockClear();
    });

    it("should render with given mockState", () => {
        const mockState =  {
            moviesList,
            orderSelect
        };
        store = mockStore(mockState);

        store.dispatch = jest.fn();

        useSelector.mockImplementation(callback => {
            return callback(mockState);
          });

        component = renderer.create(
            <Provider store={store}>
                <Home />
            </Provider>
        );

        expect(component.toJSON()).toMatchSnapshot();
    });

})
