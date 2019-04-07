package com.auth0.MovieReviewBoard.director

import org.springframework.data.repository.CrudRepository


interface DirectorRepository : CrudRepository<Director, Long> {
}