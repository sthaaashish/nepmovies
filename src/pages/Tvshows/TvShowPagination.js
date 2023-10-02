import React from 'react'
import { useNavigate, useNavigation, useParams } from 'react-router';
import MovieCard from '../../components/MovieCard';
import { useGetTvShowsByPageQuery } from '../../features/movieApi';
import Loading from '../Loading';
import MovieGenre from '../Movie/MovieGenre';

const TvShowPagination = () => {
  
    const {page,category}=useParams();
    
    const {data, isLoading,error}=useGetTvShowsByPageQuery({category,page})
    const nav=useNavigate();
    if(isLoading){
        return<Loading/>
    }
  return (
    <>
 
    <div className="flex">
      <div className="w-1/6">
        <MovieGenre/>
      </div>
      <div className="grid grid-cols-4  msm:grid-cols-2 mmd:grid-cols-2 mlg:grid-cols-3 gap-4 ">
      {data &&
        data?.results.map((tvshows) => {
          const releaseYear = tvshows.first_air_date?.split("-")[0];

          
          return (
            <div
              onClick={() => nav(`/tvshowsDetail/${tvshows.id}`)}
           
              className="text-white p-4"
            >
              <MovieCard movie={tvshows} releaseYear={releaseYear} handleClick={() => {
                    nav(`/Details/${tvshows.id}`);
                  }} />
            </div>
          );
        })}
      </div>
     
    </div>
     <div className="flex flex-row items-center justify-center space-x-4 text-white">
     <button className="bg-blue-700 px-3 py-2 rounded-md">Prev</button>
     <span className="text-xl font-bold">{data.page}</span>
     <button
       onClick={() => nav(`/TvShowPagination/top_rated/${data.page + 1}`)}
       className="bg-blue-700 px-3 py-2 rounded-md hover:bg-blue-800 transition duration-300"
     >
       Next
     </button>
   </div>
   </>
  )
}

export default TvShowPagination
