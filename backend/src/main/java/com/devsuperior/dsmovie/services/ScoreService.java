package com.devsuperior.dsmovie.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.devsuperior.dsmovie.dto.MovieDTO;
import com.devsuperior.dsmovie.dto.ScoreDTO;
import com.devsuperior.dsmovie.entities.Movie;
import com.devsuperior.dsmovie.entities.Score;
import com.devsuperior.dsmovie.entities.User;
import com.devsuperior.dsmovie.repositories.MovieRepository;
import com.devsuperior.dsmovie.repositories.ScoreRepository;
import com.devsuperior.dsmovie.repositories.UserRepository;

@Service
public class ScoreService {
	@Autowired
	private MovieRepository movieRepository;
	@Autowired
	private UserRepository userRepository;
	@Autowired
	private ScoreRepository scoreRepository; 
	
	@Transactional
	public MovieDTO saveScore(ScoreDTO scoreDTO) {
		// Consultar usuario pelo email recebido no 'bodyRequest' 
		User user = userRepository.findByEmail(scoreDTO.getEmail());
		// Caso não exista o usuario deve ser criado 
		if(user == null) {
			user = new User();
			user.setEmail(scoreDTO.getEmail());
			// Salvar e garantir que o dado retornado é atualizado 
			user = userRepository.saveAndFlush(user);
		}
		
		// Consultar 'movie' pelo 'id' recebido no 'bodyRequest' 
		Movie movie = movieRepository.findById(scoreDTO.getMovieId()).get();
		
		// Construir o novo registro de score a ser salvo no banco de dados 
		Score score = new Score();
		score.setMovie(movie);
		score.setUser(user);
		score.setValue(scoreDTO.getScore());
		// Salvar e garantir que o dado retornado é atualizado 
		score = scoreRepository.saveAndFlush(score); 
		
		// Calcular media dos scores
		double sum = 0.00;
		for(Score s : movie.getScores()) 
			sum += s.getValue();
		// Média
		double avg = sum / movie.getScores().size();
		
		// Sentando valores de média e quantidade de scores para o filme 
		movie.setScore(avg);
		movie.setCount(movie.getScores().size());
		
		// Atualizar dados 
		return new MovieDTO(movie);
	}
}
