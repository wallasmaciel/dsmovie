import React,  { Component, ReactNode } from 'react';
import axios from 'axios';
import MovieCard from 'components/movieCard';
import Pagination from 'components/pagination';
import { BASE_URL } from 'utils/request';

interface Props {}
  
interface State {}

class Listing extends Component<Props, State> { 

    constructor(props: Props) {
        super(props);

        // Forma errada
        axios.get(`${BASE_URL}/movies?size=12&page=0`)
            .then(response => {
                console.log(response);
            }); 
    }

    render(): ReactNode {
        return (
            <>
                <Pagination />

                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                            <MovieCard />
                        </div> 
                        <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                            <MovieCard />
                        </div> 
                        <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                            <MovieCard />
                        </div> 
                        <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                            <MovieCard />
                        </div> 
                        <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                            <MovieCard />
                        </div> 
                        <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                            <MovieCard />
                        </div> 
                        <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                            <MovieCard />
                        </div> 
                        <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                            <MovieCard />
                        </div> 
                    </div>
                </div>
            </>
        );
    }
};

export default Listing; 