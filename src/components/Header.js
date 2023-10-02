import React, { useState } from "react";

import { Link, NavLink, useNavigate } from "react-router-dom";
import SearchBar from "./Search";

const Header = () => {
  const [show, setShow] = useState(false);
  const toggleShow = () => {
    setShow(!show);
  };

  return (
    <>
      <div className="max-screen flex flex-wrap items-center justify-between mx-auto p-4 bg-black text-white">
        <div className="">
          <NavLink to="">NepMovies</NavLink>
        </div>
        <div className="msm:hidden flex w-full md:w-auto  space-x-3 items-baseline " >
          <NavLink to="homepage">Home</NavLink>
          <NavLink to="moviepage">Movies</NavLink>
          <NavLink to="tvshows">TvShows</NavLink>
          <SearchBar />
        </div>
        {show ? (
            <button onClick={toggleShow} className="hidden msm:flex ">
            <i class="fa-solid fa-circle-xmark"></i>
          </button>
        
        ) : (
          <button onClick={toggleShow} className="hidden msm:flex ">
            <i class="fa-solid fa-bars"></i>
          </button>
        )}
        {show && (
          <div className="flex flex-col p-4 mmd:flex-col " >
            <NavLink to="homepage" className="block py-1" onClick={()=>setShow(!show)}>Home</NavLink>
            <NavLink to="moviepage" className="block py-1" onClick={()=>setShow(!show)}>Movies</NavLink>
            <NavLink to="tvshows" className="block py-1 " onClick={()=>setShow(!show)} >TvShows</NavLink>
            <SearchBar />
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
