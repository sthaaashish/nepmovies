import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { accessToken } from "./constants";

export const movieApi = createApi({

  reducerPath: "movieApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.themoviedb.org/3" }),
  endpoints: (builder) => ({
    getMovieByCategory: builder.query({
      query: (query) => ({
        url: `/movie/${query}`,
        headers: {
          Authorization: accessToken,
        },
        params: {
          page: 1,
        },
      }),
    }),


    getByTrending: builder.query({
      query: (query) => ({
        url: `/trending/movie/${query}`,
        headers: {
          Authorization: accessToken,
        },
        params: {
          page: 1,
        },
      }),
    }),

    getTvByCategory:builder.query({
      query:(query)=>({
        url:`/tv/${query}`,
        headers:{
          Authorization:accessToken
        },
        params:{
          page:1
        }
      })
    }),

    getListByGenre:builder.query({
      query:(query)=>({
        url:`/genre/movie/list`,
        headers:{
          Authorization:accessToken
        },
        params:{
          page:1
        }
      })
    }),


    getMovieByDetail:builder.query({
      query:(query)=>({
        url:`/movie/${query}`,
        headers:{
          Authorization:accessToken
        },
        params:{
          page:1
        }
      })
    }),


    getMovieByPage:builder.query({
      query:(query)=>({
        url:`/movie/${query.category}`,
        headers:{
          Authorization:accessToken
        },
        params:{
          page: query.page
        }
      })
    }),
    getTvShowsByPage:builder.query({
      query:(query)=>({
        url:`/tv/${query.category}`,
        headers:{
          Authorization:accessToken
        },
        params:{
          page: query.page
        }
      })
    }),


    getMovieByVideo:builder.query({
      query:(query)=>({
        url:`/movie/${query}/videos`,
        headers:{
          Authorization:accessToken
        },
        params:{
          page:1
        }
      })
    }),

    getTvShowsByDetail:builder.query({
      query:(query)=>({
        url:`/tv/${query}`,
        headers:{
          Authorization:accessToken
        },
        params:{
          page:1
        }
      })
    }),


    getMovieByRecommendations:builder.query({
      query:(query)=>({
        url:`/movie/${query}/recommendations`,
        headers:{
          Authorization:accessToken
        },
        params:{
          page:1
        }
      })
    }),
 

    getTvShowsByRecommendations:builder.query({
      query:(query)=>({
        url:`/tv/${query}/recommendations`,
        headers:{
          Authorization:accessToken
        },
        params:{
          page:1
        }
      })
    }),

    getTvShowsByVideo:builder.query({
      query:(query)=>({
        url:`/tv/${query}/videos`,
        headers:{
          Authorization:accessToken
        },
        params:{
          page:1
        }
      })
    }),

    getMoviesByGenre:builder.query({
      query:(query)=>({
        url:`/discover/movie?with_genres=${query}`,
        headers:{
          Authorization:accessToken
        },
        params:{
          page:1
        }
      })
    }),

    getMoviesBySearch:builder.query({
      query:(query)=>({
        url:`/search/multi`,
        headers:{
          Authorization:accessToken
        },
        params:{
          query
        }
      })
    }),
    getTvShowsByTrending:builder.query({
      query:(query)=>({
        url:`/trending/tv/${query}`,
        headers:{
          Authorization:accessToken
        },
        params:{page :1}
      })
    }),
    getTvShowsGenreList:builder.query({
      query:(query)=>({
        url:`/genre/tv/list`,
        headers:{
          Authorization:accessToken
        },
        params:{
          page:1
        }
      })
    }),

  }),
});

export const { useGetMovieByCategoryQuery,
  useGetTvShowsGenreListQuery,
  useGetTvShowsByPageQuery,
  useGetMovieByVideoQuery,
   useGetByTrendingQuery,
  useGetTvByCategoryQuery,
  useGetListByGenreQuery,
  useGetMovieByDetailQuery,
  useGetTvShowsByDetailQuery,
  useGetMoviesBySearchQuery,
useGetMovieByRecommendationsQuery,
useGetTvShowsByVideoQuery,
useGetTvShowsByRecommendationsQuery,
useGetMoviesByGenreQuery,
useGetTvShowsByTrendingQuery,
useGetMovieByPageQuery} = movieApi;
