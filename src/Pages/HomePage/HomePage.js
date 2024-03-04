import { useState } from "react"
import {Popular} from '../../components/popular'
import { useGlobalContext } from "../../context/global"
import { Upcoming } from "../../components/upComing"
import { Airing } from "../../components/Airing"
import { HomepageStyled } from "../../styles/homePageStyle"

export function HomePage(){

   
        const {
          handleSubmit,
          search,
          handleChange,
          getPopularAnime,
          getupcomingAnime,
          getAiringAnime,
        } = useGlobalContext();

   const [rendered, setRendered]= useState('popular')


   const switchComponent = ()=>{
       switch(rendered){
        case 'popular':
            return <Popular rendered={rendered}/>
        case 'upcoming':
            return <Upcoming rendered={rendered}/>
        case 'airing':
            return <Airing rendered={rendered}/>
        default:
            return <Popular rendered={rendered}/>
       }
   }

    return(
        <HomepageStyled>
            <header>
                <div className="logo">
                    <h1>
                        {rendered === 'popular' ? 'Animes Populares' : 
                         rendered === 'airing'? 'Em exibição':
                         rendered === 'upcoming' ? 'Proximos lançamentos':rendered 
                        }
                    </h1>
                </div>
                <div className="search-Container">
                    <div className="filter-btn opular-filter">
                        <button onClick={()=>{
                            setRendered('popular')
                            getPopularAnime()
                        }}>Populares<i className="fas fa-fire"></i></button>
                    </div>
                    <form action="" className="search-form" onSubmit={handleSubmit}>
          <div className="input-control">
            <input
              type="text"
              placeholder="Procure seu anime"
              value={search}
              onChange={handleChange}
            />
            <button type="submit">Procurar</button>
          </div>
        </form>
                    <div className="filter-btn airing-filter">
                        <button onClick={()=>{
                            setRendered('airing')
                            getAiringAnime()
                        }}>Em exibição</button>
                    </div>
                    <div className="filter-btn upcoming-filter">
                        <button onClick={()=>{
                            setRendered('upcoming')
                            getupcomingAnime()
                        }}>Proximos lançamentos</button>
                    </div>
                </div>
            </header>
            {switchComponent()}
        </HomepageStyled>
    )
}

