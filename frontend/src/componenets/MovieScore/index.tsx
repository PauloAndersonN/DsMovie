import MovieStars from "componenets/MovieStars";
import './style.css';

const score = 13;
const count = 3 ;

    function MovieScore(){
        return (
            <div className="dsmovie-score-container">
        <p className="dsmovie-score-value">{score > 0 ? score.toFixed(1) : '-'}</p>
        <MovieStars />
        <p className="dsmovie-score-count">{count} avaliações</p>
    </div>
        )
    }
        
    export default MovieScore;