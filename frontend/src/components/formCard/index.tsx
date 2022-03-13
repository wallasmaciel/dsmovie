import React, { FormEvent, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import iMovie from "interfaces/iMovie";
import './styles.css';
import axios, { AxiosRequestConfig } from "axios";
import { BASE_URL } from "utils/request";
import { validateEmail } from "utils/validate";

interface iProps {
    movieId: string;
};

const FormCard: React.FC<iProps> = (props) => {
    const navigate = useNavigate();

    const [ movie, setMovie ] = useState<iMovie>({
        id: 0,
        image: "", 
        title: "", 
        count: 0,
        score: 0
    });

    useEffect(() => {
        axios.get(`${BASE_URL}/movies/${props.movieId}`)
            .then(response => {
                setMovie(response.data);
            });
    }, [ props.movieId ]);

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Constante de referencia ao formulario 
        const form  = (event.target as any);
        // Dados informados no formulario 
        let email = form.email.value;
        let score = form.score.value;

        // Verificar se o email é inválido
        if(!validateEmail(email)) 
            return; 
        
        // Configuração de requisição do 'Axios'
        const configAxios: AxiosRequestConfig = {
            baseURL: BASE_URL,
            method: 'PUT',
            url: '/scores',
            data: {
                email: email,
                movieId: props.movieId,
                score: score
            }
        };

        axios(configAxios)
            .then(response => {
                navigate("/");
            });
    };

    // movie? = se o objeto existir ele tenta usar seu valor
    return (
        <div className="dsmovie-form-container">
            <img className="dsmovie-movie-card-image" src={ movie?.image } alt={ movie?.title } />
            <div className="dsmovie-card-bottom-container">
                <h3>{ movie?.title }</h3>
                <form className="dsmovie-form" onSubmit={ handleSubmit }>
                    <div className="form-group dsmovie-form-group">
                        <label htmlFor="email">Informe seu email</label>
                        <input type="email" className="form-control" id="email" />
                    </div>
                    <div className="form-group dsmovie-form-group">
                        <label htmlFor="score">Informe sua avaliação</label>
                        <select className="form-control" id="score">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </div>
                    <div className="dsmovie-form-btn-container">
                        <button type="submit" className="btn btn-primary dsmovie-btn">Salvar</button>
                    </div>
                </form >
                
                <Link to="/">
                    <button className="btn btn-primary dsmovie-btn mt-3">Cancelar</button>
                </Link>
            </div >
        </div >
    );
}

export default FormCard;