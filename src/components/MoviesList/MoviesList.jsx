import React from "react";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-type";
import { fetchMoviesData } from "./redux/action";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import { sortMovies } from "../util";
import "./Styles.scss";

const MoviesList = ({ selectedMovieId, handleMovieSelection }) => {
    const [selectedOrder, setSelectedOrder] = React.useState("");

    const { moviesList, orderSelect } = useSelector(store => store.moviesData);
    const dispatch = useDispatch();

    React.useEffect(() =>{
        dispatch(fetchMoviesData());
    },[]);

    const handleOrderSelectChange = (event) => {
        setSelectedOrder(event.target.value);
    }

    return(
        <div className={`main-panel${selectedMovieId!=="" ? "-with-details":""}`} style={{ flexDirection:"column" }}>
            <div className="order-select-holder">
                <InputLabel  id="order-select-title">Sort By</InputLabel>
                <Select
                style={{width:"200px"}}
                  id="order-select"
                  value={selectedOrder}
                  onChange={handleOrderSelectChange}
                >
                    {
                        orderSelect.map((item, index)=><MenuItem key={index} value={item.valueToOrderBy}>{item.label}</MenuItem>)
                    }
                </Select>
            </div>
                <table className="movie-list">
                    {
                       sortMovies(moviesList, selectedOrder).map(movie => 
                           <tr className={`movie-row${movie.id===selectedMovieId ? "__selected":""}`} key={movie.id} onClick={()=> handleMovieSelection(movie)}>
                               <td className="image"><img src={movie.imageUrl} width="100" height="100" /></td>
                               <td className="title">{movie.title}</td>
                           </tr>
                       )                        
                    }
                </table>
        </div>
    )
}


MoviesList.propTypes = {
    selectedMovieId: PropTypes.number,
    handleMovieSelection: PropTypes.func
}

export default MoviesList;