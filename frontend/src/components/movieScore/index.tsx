import { Component, ReactNode } from 'react';
import MovieStars from 'components/movieStars';
import './styles.css';

interface iProps {
    score: number;
    count: number;
}

class MovieScore extends Component<iProps> {

    render(): ReactNode {
        console.log(this.props.score);

        return (
            <div className="dsmovie-score-container">
                <p className="dsmovie-score-value">{ this.props.score > 0 ? this.props.score.toFixed(1) : '-' }</p>
                <MovieStars score={ this.props.score }/>
                <p className="dsmovie-score-count">{ this.props.count } avaliações</p>
            </div>
        );
    }
};

export default MovieScore; 