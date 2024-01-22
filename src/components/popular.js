import { Link } from "react-router-dom"
import { useGlobalContext } from "../context/global"
import styled from "styled-components"
import { SideBar } from "./sideBar"



export function Popular ({rendered}){
    const {popularAnime, isSearch, searchResults} = useGlobalContext()

    const conditinalRender= ()=>{
        if(!isSearch && rendered === 'popular'){
            return popularAnime?.map((anime)=>{
                return <Link to={`/anime/${anime.mal_id}`}key={anime.mal_id}>

                        <img className="tops-image" src={anime.images.jpg.large_image_url} alt={anime.mal_id}/>

                </Link>
            })
        }else{
          return searchResults?.map((anime)=>{
            return <Link to={`/anime/${anime.mal_id}`}key={anime.mal_id}>

            <img className="tops-image" src={anime.images.jpg.large_image_url} alt={anime.mal_id}/>

    </Link>
          }) 
        }
    }

    return(
        <PopularStyled>
          <div className="popular-anime">
            {conditinalRender()}
          </div>
          <SideBar/>
        </PopularStyled>
    )
}

const PopularStyled = styled.div`

   display: flex;
   .popular-anime{
    margin-top: 2rem;
    padding-top: 2rem;
    padding-bottom: 2rem;
    padding-left: 5rem;
    padding-right: 0;
    display: grid;
    width: 100%;
    grid-template-columns:repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 2rem;
    background-color: #fff;
    border-top:5px solid #e5e7eb;
      a{
        height: 500px;
        border-radius: 7px;
        border: 5px sold #e5e7eb;

        img{        
        width: 100%;
        height: 100%;
        object-fit:cover;
        border-radius: 5px;
        }
      }
    }

`