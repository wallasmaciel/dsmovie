import React from 'react';
import { useParams } from 'react-router-dom';
import FormCard from 'components/formCard';

const Form: React.FC = () => {
    // Capturar paramtros passaados na url
    const params = useParams(); 
    // 
    return <FormCard movieId={`${params.movieId}`}/>;
};

export default Form; 