import React from 'react'
import {
  Button,
  Input,
} from "@material-tailwind/react";
import { useFormik } from "formik";
import { useNavigate } from 'react-router';

const SearchBar = () => {
  const nav=useNavigate()

  const  formik =useFormik({
    initialValues:{
      search:'',
    },
    onSubmit:(val)=>{
      nav(`/movieSearch/${val.search}`)

    }
  })
  return (
    <div>
       <div className="relative flex w-full gap-2 md:w-max ssm:block">
        <form onSubmit={formik.handleSubmit}>
          <Input
           onChange={formik.handleChange}
            type="search"
            name='search'
            label="search here..."
            value={formik.values.search}
            className="pr-20 text-white border-white"
           
          />
          <Button size="sm" className="!absolute right-1 top-1 rounded" type="submit">
            Search
          </Button>
          </form>
        </div>
    </div>
  )
}

export default SearchBar
