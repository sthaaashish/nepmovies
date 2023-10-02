import React from 'react'
import { useNavigate, useParams } from 'react-router'
import MovieCard from '../components/MovieCard';
import { useGetMoviesBySearchQuery } from '../features/movieApi';

const SearchPage = () => {
    const nav=useNavigate();
    const {search}=useParams();
    const{data, isLoading}=useGetMoviesBySearchQuery(search);

   if(data?.results?.length===0){
    return<h1 className='text-center text-white'>No Movies to Show</h1>
   }

  return (
    <div className="grid grid-cols-5  msm:grid-cols-2 mmd:grid-cols-3 mlg:grid-cols-4 gap-2">
        {data && data.results.map((movie)=>{
        
            return <div>
                            <MovieCard movie={movie} handleClick={()=>nav(`/tvshows/${movie.id}`)}/>

                </div>
        })}

      
    </div>
  )
}

export default SearchPage
