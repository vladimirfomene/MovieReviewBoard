package com.auth0.MovieReviewBoard


import com.auth0.MovieReviewBoard.director.Director
import com.auth0.MovieReviewBoard.director.DirectorRepository
import com.auth0.MovieReviewBoard.movie.Movie
import com.auth0.MovieReviewBoard.movie.MovieRepository
import com.auth0.MovieReviewBoard.resolver.Mutation
import org.springframework.boot.CommandLineRunner
import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication
import org.springframework.context.annotation.Bean

@SpringBootApplication
class MovieReviewBoardApplication

fun main(args: Array<String>) {
	runApplication<MovieReviewBoardApplication>(*args)

	@Bean
	fun init(movieRepository: MovieRepository, directorRepository: DirectorRepository) = CommandLineRunner {
		println("Initializing data for our movie and director database tables")
		// save a couple of movie directors
		val mutation = Mutation(directorRepository, movieRepository)
		mutation.newDirector(1, "James", "Cameron")
		mutation.newDirector(2, "Joe", "Russo")
		mutation.newDirector(3, "Christopher", "Nolan")
		mutation.newDirector(4, "Steven", "Spielberg")
		mutation.newDirector(5, "Tyler", "Perry")

		// save a couple of movies
		mutation.newMovie("Titanic", 1, "18-11-1997", 7)
		mutation.newMovie("Avengers Endgame", 2, "26-04-2019", 10)
		mutation.newMovie("Inception", 3, "08-08-2010", 8)
		mutation.newMovie("Jurassic Park", 4, "09-03-1993", 7)
		mutation.newMovie("A Madea Family Funeral", 5, "01-03-2019", 7)
	}
}
