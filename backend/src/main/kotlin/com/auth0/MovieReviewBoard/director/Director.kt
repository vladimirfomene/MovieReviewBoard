package com.auth0.MovieReviewBoard.director

import javax.persistence.Entity
import javax.persistence.GeneratedValue
import javax.persistence.Id


@Entity
data class Director(var firstName: String, var lastName: String,
                    @Id @GeneratedValue var id: Long? = null)