import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieCard from 'components/movieCard';
import Pagination from 'components/pagination';
import { BASE_URL } from 'utils/request'; 
import iMoviePage from 'interfaces/iMoviePage';

const Listing: React.FC = () => { 
    const [pageNumber, setPageNumber] = useState<number>(0);
    const [page, setPage] = useState<iMoviePage>({
        content: [],
        last: true,
        totalPages: 0,
        totalElements: 0,
        size: 12, 
        number: 0, 
        first: true, 
        numberOfElements: 0, 
        empty: true
    });
	
    useEffect(() => {
        axios.get(`${BASE_URL}/movies?size=12&page=${pageNumber}`)
            .then(response => {
                const data = response.data as iMoviePage;
                setPage(data);
            }); 
    }, [ pageNumber ]);

    const handlePageChange = (newPageNumber: number) => {
        setPageNumber(newPageNumber);
    };

    return (
        <>
            <Pagination page={ page } onChange={ handlePageChange } />

            <div className="container">
                <div className="row">
                {
                    page.content.map(movie => (
                            <div key={ movie.id } className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                                <MovieCard movie={ movie }/>
                            </div> 
                        )
                    )
                }
                </div>
            </div>
        </>
    ); 
};

export default Listing; 