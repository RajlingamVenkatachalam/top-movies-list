import React from "react";
import renderer from "react-test-renderer";
import MoviesList from "./MoviesList";
import { moviesList, orderSelect } from "../testUtil/testData";
import Select from "@material-ui/core/Select";

describe("test MoviesList", () => {
    it("should display the Detail without any crash", () =>{
        const onChangeMovieSelection = jest.fn();

        let component = renderer.create(<MoviesList  selectedMovieId={""} handleMovieSelection={onChangeMovieSelection}
            moviesList={moviesList} orderSelect={orderSelect} />);
        expect(component.toJSON()).toMatchSnapshot();
    });

    it("should call onChangeMovieSelection on Movie selection Change ", () =>{
        const onChangeMovieSelection = jest.fn();
        
        let component = renderer.create(<MoviesList  selectedMovieId={""} handleMovieSelection={onChangeMovieSelection}
            moviesList={moviesList} orderSelect={orderSelect} />);
        const instance = component.root;
        instance.findAllByType("tr")[0].props.onClick();
        expect(onChangeMovieSelection).toHaveBeenCalledWith(moviesList[0]);

        instance.findAllByType("tr")[1].props.onClick();
        expect(onChangeMovieSelection).toHaveBeenCalledWith(moviesList[1]);
    });

    it("should order the movies based on the selected sorting option to rank ", () =>{
        const onChangeMovieSelection = jest.fn();
        
        let component = renderer.create(<MoviesList  selectedMovieId={""} handleMovieSelection={onChangeMovieSelection}
            moviesList={moviesList} orderSelect={orderSelect} />);
        const instance = component.root;
        instance.findByType(Select).props.onChange({target: { value : "rank"}});

        const allMovies = instance.findAllByType("tr");
        expect(allMovies[0].props.id).toBe(4);
        expect(allMovies[1].props.id).toBe(2);
        expect(allMovies[2].props.id).toBe(3);
    });

    it("should order the movies based on the selected sorting option to releaseDate", () =>{
        const onChangeMovieSelection = jest.fn();
        
        let component = renderer.create(<MoviesList  selectedMovieId={""} handleMovieSelection={onChangeMovieSelection}
            moviesList={moviesList} orderSelect={orderSelect} />);
        const instance = component.root;
        instance.findByType(Select).props.onChange({target: { value : "releaseDate"}});

        const allMovies = instance.findAllByType("tr");
        expect(allMovies[0].props.id).toBe(2);
        expect(allMovies[1].props.id).toBe(4);
        expect(allMovies[2].props.id).toBe(3);
    });

});