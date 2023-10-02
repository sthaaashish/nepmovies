import React from 'react'
import { MovieCarousel } from '../components/MovieCarousel'
import Trending from './Trending'
import TrendingTvShow from './Tvshows/TrendingTvShow'

const Homepage = () => {
  return (
    <div>
      <MovieCarousel/>
      <Trending/>
      <TrendingTvShow/>
    </div>
  )
}

export default Homepage
