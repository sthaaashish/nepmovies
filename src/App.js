import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import RootLayout from "./components/RootLayout";
import Homepage from "./pages/Homepage";
import Movies from "./pages/Movie/Movies";
import Details from "./pages/Detail/Details";
import TvShows from "./pages/Tvshows/TvShows";
import TvShowsDetail from "./pages/Tvshows/TvShowsDetail";
import MoviePagination from "./pages/Movie/MoviePagination";
import SearchPage from "./pages/SearchPage";
import TvShowPagination from "./pages/Tvshows/TvShowPagination";

function App() {
  return (
    <Router>
      <Routes>
      
          <Route path="/" element={<RootLayout />} >
          <Route  index element={<Homepage/>}/>
          <Route path="homepage" element={<Homepage/>}/>
          <Route path="moviepage" element={<Movies/>}/>
          <Route path="moviepage/:id" element={<Movies/>}/>
          <Route path="Details/:id" element={<Details/>}/>
          <Route path="moviesearch/:search" element={<SearchPage/>}/>
          <Route path="tvshows" element={<TvShows/>}/>
          <Route path="tvshowsDetail/:id" element={<TvShowsDetail/>}/>
          <Route path="moviepagination/:category/:page" element={<MoviePagination/>}/>
          <Route path="TvShowPagination/:category/:page" element={<TvShowPagination/>}/>

         
            </Route>
      
      </Routes>
    </Router>
  );
}

export default App;
