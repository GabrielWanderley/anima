import { Link } from "react-router-dom"
import { useGlobalContext } from "../context/global"
import { SideBar } from "./sideBar"
import { PopularStyled } from "../styles/popularStyles"



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

