import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieCard from 'components/movieCard';
import Pagination from 'components/pagination';
import { BASE_URL } from 'utils/request';
import iMoviePage from 'interfaces/iMoviePage';

const Listing: React.FC = () => { 
    const [pageNumber, setPageNumber] = useState<number>(0);
	
    useEffect(() => {
		// Forma errada
        console.log('1 - ' + pageNumber);
        axios.get(`${BASE_URL}/movies?size=12&page=0`)
            .then(response => {
                const data = response.data as iMoviePage;
                setPageNumber(data.number);

                console.log('2 - ' + pageNumber);
            }); 
    }, [ pageNumber ]);

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
};

export default Listing; 