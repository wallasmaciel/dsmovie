import { Component, ReactNode } from 'react';
import MovieStars from 'components/movieStars';
import './styles.css';

class MovieScore extends Component {
    private score: number = 3.5;
    private count: number = 13;

    render(): ReactNode {
        return (
            <div className="dsmovie-score-container">
                <p className="dsmovie-score-value">{ this.score > 0 ? this.score.toFixed(1) : '-' }</p>
                <MovieStars />
                <p className="dsmovie-score-count">{ this.count } avaliações</p>
            </div>
        );
    }
};

export default MovieScore; 