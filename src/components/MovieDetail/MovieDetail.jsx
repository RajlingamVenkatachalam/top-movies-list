import React from "react";
import PropTypes from "prop-type";
import { CardContent, Typography } from "@material-ui/core";
import "./Styles.scss";

const OtherDetailView = ({ label, value }) =>{
    return (
        <>
            <Typography variant="h6" component="h2">
                {label}
            </Typography>                         
            <Typography color="textSecondary">
                {value}
            </Typography>
        </>
    )
}


const MovieDetail = ({ movieDetail }) => {
    return(
        <div className="card">
            <img
                className="media"
                src={movieDetail.imageUrl}
                title={movieDetail.title}
            />
            <CardContent>
                <Typography  gutterBottom variant="h5" component="h2">
                    {movieDetail.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    {movieDetail.synopsis}
                </Typography>
                <div style={{textAlign:"left", marginTop:"10px"}}>
                    <OtherDetailView label="Release Date" value={movieDetail.releaseDate} />
                    <OtherDetailView label="Rank" value={movieDetail.rank} />
                </div>                       
            </CardContent>
        </div>
    )
}

MovieDetail.propTypes = {
    movieDetail: PropTypes.object
}

export default MovieDetail;