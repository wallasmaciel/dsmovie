import { Component, Fragment, ReactNode } from 'react';
import MovieCard from '../../components/movieCard';
import Pagination from '../../components/pagination';

class Listing extends Component {
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