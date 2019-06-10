package com.auth0.MovieReviewBoard.movie

import com.auth0.MovieReviewBoard.director.Director
import javax.persistence.Entity
import javax.persistence.GeneratedValue
import javax.persistence.Id
import javax.persistence.ManyToOne


@Entity
data class Movie(var title: String,
                 @ManyToOne var director: Director,
                 var rating: Long, var releaseDate: String, @Id @GeneratedValue var id: Long? = null)
