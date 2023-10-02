import { Carousel } from '@material-tailwind/react'
import React from 'react'
import { Outlet } from 'react-router'
import { Footer } from './Footer'
import Header from './Header'
import { MovieCarousel } from './MovieCarousel'
import Trending from '../pages/Trending'

const RootLayout = () => {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default RootLayout
