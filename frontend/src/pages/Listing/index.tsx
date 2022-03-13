import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieCard from 'components/movieCard';
import Pagination from 'components/pagination';
import { BASE_URL } from 'utils/request'; 
import iMovie from 'interfaces/iMovie';

interface iMoviePage {
    content: iMovie[];
    last: boolean;
    totalPages: number;
    totalElements: number;
    size: number;
    number: number;
    first: boolean;
    numberOfElements: number;
    empty: boolean;
}; 

const Listing: React.FC = () => { 
    const [pageNumber] = useState<number>(0);
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
        axios.get(`${BASE_URL}/movies?size=12&page=${pageNumber}&sort=title`)
            .then(response => {
                const data = response.data as iMoviePage;
                setPage(data);
            }); 
    }, [ pageNumber ]);

    return (
        <>
            <Pagination />

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