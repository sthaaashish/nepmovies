import { List, ListItem } from '@material-tailwind/react';
import React from 'react'
import { useNavigate} from 'react-router';
import { SpinnerLoading } from '../../components/SpinnerLoading';
import { useGetListByGenreQuery } from '../../features/movieApi';
import Loading from '../Loading';


const MovieGenre = () => {
    const nav=useNavigate();
    const { data,isLoading} = useGetListByGenreQuery();

    if(isLoading){
        return <SpinnerLoading/>
    }


  return (
    <div className="w-1/5">
 
    {data &&
      data?.genres.map((genre) => {
        return (
          <div key={genre.id} className="">
            <List  >
              <ListItem className="text-[#05bb0e]"  onClick={() =>   nav(`/moviepage/${genre.id}`)}>
                {genre.name}

                </ListItem>
            </List>
          </div>
        );
      })}
  </div>
  )
}

export default MovieGenre
