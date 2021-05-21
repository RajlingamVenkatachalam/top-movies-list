import React from "react";
import PropTypes from "prop-type";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import { sortMovies } from "../util";
import "./Styles.scss";

const MoviesList = ({ selectedMovieId, handleMovieSelection, moviesList, orderSelect }) => {
    const [selectedOrder, setSelectedOrder] = React.useState("");

    const handleOrderSelectChange = (event) => {
        setSelectedOrder(event.target.value);
    }

    return(
        <div className={`main-panel${selectedMovieId!==undefined ? "-with-details":""}`} >
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
                <table className="movie-list" style={{position:"relative", height:"600px", overflow:"scroll"}}>
                    {
                       sortMovies(moviesList, selectedOrder).map(movie => 
                           <tr id={movie.id} className={`movie-row${movie.id===selectedMovieId ? "__selected":""}`} key={movie.id} onClick={()=> handleMovieSelection(movie)}>
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