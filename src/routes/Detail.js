import React,{useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import "./detail.scss";


    

const Detail = () => {
   const {id} =useParams();
   const [movie, setMovie] =useState();
   const [loading, setLoading] = useState(true);
   const getMovie = async () => {
      const json= await (
         await   fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
      ).json();
      setMovie(json.data.movie);
      setLoading(false);
   }

   useEffect(() => {
      getMovie();
   }) 
   
    return (
        <div className="movie-detail">
         {loading ?  (
            <div className="loadings">
               <span className="loading">Loading...</span>
            </div>
         ) : (
            <div className="movies">
               <h2 className="title">{movie.slug}</h2>
               <div className="img-box">
                   <img src={movie.large_cover_image} alt={movie.title}/>
               </div>
               <div className="content">
                <div className="info">
                    <span className="movie-title">{movie.title}</span>
                    <span className="movie-rating">Rating : {movie.rating}</span>
                    <span className="movie-runtime">Runtime : {movie.runtime}</span>
                </div>
                <div className="genres">
                    <span className="genre">Genres : &nbsp;</span>
                    <ul className="list">
                        {movie.genres.map((genres, idx) => (<li key={idx}>{genres}</li>))}
                    </ul>
                </div>
                <div className="summarys">
                    <p className="summary">Content : {movie.description_full}</p>
                </div>
               </div>         
            </div>
         )}
      </div>
    )
}
export default Detail;