import React, { Component, ReactNode } from 'react';
import { Link, useParams } from 'react-router-dom';
import FormCard from 'components/formCard';
import iMovie from 'interfaces/iMovie';

const Form: React.FC = () => {
    // Capturar paramtros passaados na url
    const params = useParams(); 
    // 
    return <FormCard movieId={`${params.movieId}`}/>;
};

export default Form; 