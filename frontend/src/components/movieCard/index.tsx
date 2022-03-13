import { Component, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import MovieScore from '../MovieScore';
import iMovie from '../../interfaces/iMovie';

class MovieCard extends Component {
    private movie: iMovie = {
        id: 1,
        image: "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/jBJWaqoSCiARWtfV0GlqHrcdidd.jpg",
        title: "The Witcher",
        count: 2,
        score: 4.5
    };

    render(): ReactNode {
        return (
            <div>
                <img className="dsmovie-movie-card-image" src={ this.movie.image } alt={ this.movie.title } />
                <div className="dsmovie-card-bottom-container">
                    <h3>{ this.movie.title }</h3>
                    <MovieScore />

                    <Link to={`/form/${this.movie.id}`}>
                        <div className="btn btn-primary dsmovie-btn">Avaliar</div>
                    </Link>
                </div>
            </div>
        );
    }
};

export default MovieCard; 