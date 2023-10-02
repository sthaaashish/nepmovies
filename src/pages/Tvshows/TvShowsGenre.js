import { List, ListItem } from '@material-tailwind/react';
import React from 'react'
import { useNavigate} from 'react-router';
import { SpinnerLoading } from '../../components/SpinnerLoading';
import { useGetTvShowsGenreListQuery } from '../../features/movieApi';


const TvShowsGenre = () => {
    const nav=useNavigate();
    const { data,isLoading} = useGetTvShowsGenreListQuery();

    if(isLoading){
        return <SpinnerLoading/>
    }

console.log(data)
  return (
    <div className="w-1/5">
 
    {data &&
      data?.genres.map((genre) => {
        return (
          <div key={genre.id} className="">
            <List  >
              <ListItem className="text-[#05bb0e]"  >
                {genre.name}

                </ListItem>
            </List>
          </div>
        );
      })}
  </div>
  )
}

export default TvShowsGenre;
