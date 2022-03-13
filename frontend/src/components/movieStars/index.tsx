import { Component, ReactNode } from 'react';
import { ReactComponent as StarFull } from 'assets/img/star-full.svg';
import { ReactComponent as StarHalf } from 'assets/img/star-half.svg';
import { ReactComponent as StarEmpty } from 'assets/img/star-empty.svg';
import './styles.css';

interface iProps {
    score: number; 
}; 

interface iStarProps {
    fill: number;
};

class Star extends Component<iStarProps> {
    render(): ReactNode {
        let starComponent: ReactNode;
        // Verificar o fill recebido como parametro 
        switch(this.props.fill) {
            // Estrela vazia 
            case 0:  starComponent = <StarEmpty />; break;
            // Estrela prenchida
            case 1:  starComponent = <StarFull />; break;
            // Estrela meio preenchida
            default: starComponent = <StarHalf />;
        }
        // 
        return starComponent;
    }
};

class MovieStars extends Component<iProps> {

    render(): ReactNode { 
        const fills = this.getFills(this.props.score);
        // 
        return (
            <div className="dsmovie-stars-container">
            {
                fills.map((fill, index) => (
                    <Star key={index} fill={ fill }/>
                ))
            }
            </div>
        );
    }

    // Funções de preenchimento das estrelas
    // EX: 
    //     getFills(3.5) => [1, 1, 1, 0.5, 0]
    //     getFills(4.1) => [1, 1, 1, 1, 0.5]
    getFills(score: number): number[] {
        const fills = [0, 0, 0, 0, 0];

        const integerPart = Math.floor(score);

        for (let i = 0; i < integerPart; i++) {
            fills[i] = 1;
        }

        const diff = score - integerPart;
        if (diff > 0) {
            fills[integerPart] = 0.5;
        }

        return fills;
    }
};

export default MovieStars; 