import { Component, ReactNode } from 'react';
import { ReactComponent as Arrow } from 'assets/img/arrow.svg';
import './styles.css';
import iMoviePage from 'interfaces/iMoviePage';

interface iProps {
    page: iMoviePage;
    onChange: Function; 
};

class Pagination extends Component<iProps> {
    render(): ReactNode {
        return (
            <div className="dsmovie-pagination-container">
                <div className="dsmovie-pagination-box">
                    <button className="dsmovie-pagination-button" disabled={ this.props.page.first } 
                        onClick={() => this.props.onChange(this.props.page.number - 1)}>
                        <Arrow />
                    </button>
                    <p>{`${this.props.page.number + 1} de ${this.props.page.totalPages}`}</p>
                    <button className="dsmovie-pagination-button" disabled={ this.props.page.last } 
                        onClick={() => this.props.onChange(this.props.page.number + 1)}>
                        <Arrow className="dsmovie-flip-horizontal" />
                    </button>
                </div>
            </div>
        );
    }
};

export default Pagination; 