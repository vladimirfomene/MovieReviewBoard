package com.auth0.MovieReviewBoard.resolver

import com.auth0.MovieReviewBoard.director.Director
import com.auth0.MovieReviewBoard.director.DirectorRepository
import com.auth0.MovieReviewBoard.movie.Movie
import com.auth0.MovieReviewBoard.movie.MovieRepository
import com.coxautodev.graphql.tools.GraphQLQueryResolver
import org.springframework.stereotype.Component

@Component
class Query(val movieRepository: MovieRepository, val directorRepository: DirectorRepository) : GraphQLQueryResolver {

    fun findAllMovies(): Iterable<Movie> {
        return movieRepository.findAll()
    }

    fun findAllDirectors(): Iterable<Director> {
        return directorRepository.findAll()
    }

    fun countMovies(): Long {
        return movieRepository.count()
    }

    fun countDirectors(): Long {
        return directorRepository.count()
    }

    fun findMoviesByDirector(directorId: Long): Iterable<Movie> {
        val director = directorRepository.findById(directorId)
        return movieRepository.findByDirector(director.get())
    }

    fun countMoviesByDirector(directorId: Long): Long {
        val director = directorRepository.findById(directorId)
        return movieRepository.countByDirector(director.get())
    }
}
