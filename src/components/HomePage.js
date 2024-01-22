import { useState } from "react"
import {Popular} from '../components/popular'
import { useGlobalContext } from "../context/global"
import styled from "styled-components"
import { Upcoming } from "./upComing"
import { Airing } from "./Airing"

export function HomePage(){

   const {handleSubmit, search, 
         searchAnime, handleChange,
         getPopularAnime, getupcomingAnime,
         getAiringAnime,
         } =useGlobalContext()

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
                            <input type="text" placeholder="Procure seu anime" value={search} onChange={handleChange} />
                            <button type="submit" >Procurar</button>
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

const HomepageStyled = styled.div`

  background-color: #EDEDED;
  header{
    padding: 2rem 5rem;
    width: 60%;
    margin: 0 auto;
    transition: all .4s ease-in-out;
    .logo{
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 2rem;

    }        
    .search-Container{
           display: flex;
           align-items: center;
           justify-content: center;
           gap: 1rem;

           button{
            display: flex;
            align-items: center;
            gap: 0.5rem;
            padding: .7rem 1.5rem;
            outline: none;
            border-radius: 30px;
            font-size: 1.2rem;
            background-color: #fff;
            cursor: pointer;
            transition: all .4s ease-in-in;
            font-family: inherit;
            border: 5px solid #e5e7eb;
           }

           form{
            position: relative;
            width: 100%;
            .input-control{
                position: relative;
                transition: all .4s ease-in-;
            }
            .input-control input{
                 width: 400px;
                 height: 50px;
                 padding: 0%.7ren 1rem;
                 border: none;
                 outline: none;
                 border-radius: 30px;
                 font-size: 1.2rem;
                 background-color: #fff;
                 border: 5px solid #e5e7eb;
                 transition: all .4s ease-in-out;
            }
            .input-control button{
              position: absolute;
              right: 0;
              top: 50%;
              transform:translateY(-50%);
            }

           }
        }
  }

`