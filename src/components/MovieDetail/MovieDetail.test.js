import React from "react";
import renderer from "react-test-renderer";
import MovieDetail from "./MovieDetail";
import { moviesList } from "../testUtil/testData";

describe("test MovieDetail", () => {
    it("should display the Detail without any crash", () =>{
        let component = renderer.create(<MovieDetail movieDetail={moviesList[0]} />);
        expect(component.toJSON()).toMatchSnapshot();
    });
})