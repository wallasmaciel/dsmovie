import { Component, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import MovieScore from 'components/movieScore';
import iMovie from 'interfaces/iMovie';

interface iProps {
    movie: iMovie; 
};

class MovieCard extends Component<iProps> {

    render(): ReactNode {

        return (
            <div>
                <img className="dsmovie-movie-card-image" src={ this.props.movie.image } alt={ this.props.movie.title } />
                <div className="dsmovie-card-bottom-container">
                    <h3>{ this.props.movie.title }</h3>
                    <MovieScore count={this.props.movie.count} score={this.props.movie.score}/>

                    <Link to={`/form/${this.props.movie.id}`}>
                        <div className="btn btn-primary dsmovie-btn">Avaliar</div>
                    </Link>
                </div>
            </div>
        );
    }
};

export default MovieCard; 