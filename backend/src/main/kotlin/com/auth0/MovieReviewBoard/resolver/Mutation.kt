package com.auth0.MovieReviewBoard.resolver

import com.auth0.MovieReviewBoard.director.Director
import com.auth0.MovieReviewBoard.director.DirectorRepository
import com.auth0.MovieReviewBoard.movie.Movie
import com.auth0.MovieReviewBoard.movie.MovieRepository
import com.coxautodev.graphql.tools.GraphQLMutationResolver
import org.springframework.stereotype.Component

@Component
class Mutation(val directorRepository: DirectorRepository, val movieRepository: MovieRepository) : GraphQLMutationResolver {

    fun updateDirector(directorId: Long, director: Director): Director {

        val oldDirector = directorRepository.findById(directorId)

        oldDirector.ifPresent {
            it.firstName = director.firstName
            it.lastName = director.lastName
        }


        return oldDirector.get()
    }

    fun updateMovieRating(movieId: Long, vote: Long): Long {
        val movie = movieRepository.findById(movieId)

        movie.ifPresent {
            it.rating = it.rating + vote
            movieRepository.save(it)
        }

        return movie.get().rating

    }

    fun newMovie(title: String, directorID: Long, releaseDate: String, rating: Long): Movie {
        val director = directorRepository.findById(directorID)
        val movie = Movie(title, director.get(), rating, releaseDate)

        return movieRepository.save(movie)
    }

    fun newDirector(directorId: Long, firstName: String, lastName: String): Director {
        val director = Director(firstName, lastName, directorId)

        return directorRepository.save(director)
    }
}