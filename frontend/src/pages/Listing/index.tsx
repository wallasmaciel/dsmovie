import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieCard from 'components/movieCard';
import Pagination from 'components/pagination';
import { BASE_URL } from 'utils/request';
import iMoviePage from 'interfaces/iMoviePage';
import iMovie from 'interfaces/iMovie';

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
        axios.get(`${BASE_URL}/movies?size=12&page=${pageNumber}&sort=title`)
            .then(response => {
                const data = response.data as iMoviePage;
                setPage(data);
            }); 
    }, [ pageNumber ]);

    const movie: iMovie = {
        id: 1,
        image: "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/jBJWaqoSCiARWtfV0GlqHrcdidd.jpg",
        title: "The Witcher",
        count: 2,
        score: 4.5
    };

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