import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import styled from "styled-components"

export function AnimeItem(){

    const  {id} = useParams()

    const [anime, setAnime] = useState({})
    const [characters, setCharacter] = useState([])
    const [showMore, setShowmore] = useState(false)
    const [showAll, setShowAll] = useState(false);
    const [showAllp, setShowAllp] = useState(false);
    const [revio, setReview] = useState([])
    const [recommendations, setRecomendation] = useState([])


    const{
        title, synopsis, images, 
        trailer, aired, duration, 
        season, rank,  score, 
        socored_by, popularity, status, 
        rating, source,}= anime

    const getAnime = async (anime)=>{
        const response = await fetch(`https://api.jikan.moe/v4/anime/${id}`)
        const data = await response.json()
        setAnime(data.data)
        
    }

    const getCharacters = async (anime)=>{
      const response = await fetch(`https://api.jikan.moe/v4/anime/${id}/characters`)
      const data = await response.json()
      setCharacter(data.data)
    }

    const getReview = async (anime)=>{
      const response = await fetch(`https://api.jikan.moe/v4/anime/${id}/reviews`)
      const data = await response.json()
      setReview(data.data)
      console.log("review",data.data)
    }

    const getRecomendation = async (anime)=>{
      const response = await fetch(`https://api.jikan.moe/v4/recommendations/anime`)
      const data = await response.json()
      console.log(data.data)
    }

    useEffect(()=>{
        getAnime(id)
        getCharacters(id)
        getReview(id)
        getRecomendation()
    },[])

    return(
       <AnimeItemStyled>
         <h1>{title}</h1>
         <div className="details">
            <div className="detail">
              <div className="image">
                <img src={images?.jpg.large_image_url} alt={id}/>
                <div className="anime-details">
                  <p><h3>Exibido:</h3><h3>{aired?.string}</h3></p>
                  <p><h3>classificação indicativa:</h3><h3>{rating}</h3></p>
                  <p><h3>Rank:</h3><h3>{rank}</h3></p>
                  <p><h3>Avaliação:</h3><h3>{score}</h3></p>
                  <p><h3>Popularidade:</h3><h3>{popularity}</h3></p>
                  <p><h3>Status:</h3><h3>{status}</h3></p>
                  <p><h3>Fonte:</h3><h3>{source}</h3></p>
                  <p><h3>Temporadas:</h3><h3>{season}</h3></p>
                  <p><h3>Duração:</h3><h3>{duration}</h3></p>
                </div>
              </div>
            </div>
            <p className="description">
             {showMore ? synopsis : synopsis?.substring(0,450)+'...'}
             <button onClick={()=>{
             setShowAllp(!showAllp);
             }}>
                {showAll ? 'ver menos' : 'Leia mais'}
             </button>
            </p>
         </div>
         <h3 className="title">
           trailer
         </h3>
         <div className="trailer-con">
             {trailer?.embed_url &&
             <iframe src={trailer?.embed_url} 
             title={title} 
             width="800"
             height="450"
             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
             frameBorder="0" 
             allowFullScreen></iframe>
             }
         </div>
         <h3 className="title">
           Personagens
         </h3>
         <div className="characters">
         {characters?.slice(0, showAll ? undefined : 10).map((character, index) => {
  const { role } = character;
  const { images, name, mal_id } = character.character;

  return (
    <Link to={`/anime/character/${mal_id}`} key={index}>
      <div className="character">
        <img src={images?.jpg.image_url} alt={name} />
        <h4>{name}</h4>
        <p>{role}</p>
      </div>
    </Link>
  );
})}
      
      </div>      
      {!showAll && (
        <button onClick={() => setShowAll(true)} className="Button-display">Mostrar Todos</button>
      )}  
      {showAll && (
        <button onClick={() => setShowAll(false)}className="Button-display">Mostrar Apenas 10</button>
      )} 
     {revio.map((revios,index) => {
      
      const {review} = revios;
      const {username, images}= revios.user
      const {is_spoilers} = revios

      return(
        <div className="review" key={index}>
        <div className="only-review">
        <div className="user">        
        <img src={images?.jpg.image_url} alt="user"/>
        <h2>{username}</h2>
        {is_spoilers 
        ? <h3>Essa revio contem <span>spoiler</span></h3>
        : <h3>Essa review <span>não contem spoiler</span></h3>
        }
        </div>

        <p>
        {showMore ? review : review?.substring(0,450)+'...'}
             <button onClick={()=>{
             setShowmore(!showMore);
             }}>
                {showMore ? 'ver menos' : 'Leia mais'}
             </button>
        </p>
        </div>


       </div>
      )
     })}


       </AnimeItemStyled>

    )
}

const AnimeItemStyled = styled.div`

    padding: 3rem 18rem;
    background-color: #EDEDED;

    h1{
       display: inline-block;
       font-size: 3rem;
       margin-bottom: 1.5rem;
       background: linear-gradient(to right, #a855f7, #27AE60);
       -webkit-background-clip: text;
       -webkit-text-fill-color: transparent;
       transition: all .4s ease-in-out;
       &:hover{
        transform: skew(-3deg);
       }
    }
    .title{
      display: inline-block;
       font-size: 3rem 0;
       margin-bottom: 2rem;
       background: linear-gradient(to right, #a855f7, #27AE60);
       -webkit-background-clip: text;
       -webkit-text-fill-color: transparent;
    }

    .description{
      margin-top: 2rem;
      color: #6c7983;
      line-height: 1.7rem;
      button{
        background-color: transparent;
        border: none;
        outline: none;
        cursor: pointer;
        font-size: 1.2rem;
        color: #27AE60;
        font-weight: 600;
      }
    }

    .details{
      background-color: #fff;
      border-radius: 20px;
      padding: 2rem;
      border: 5px solid #e5e7eb;
      min-width: 500px;
      .detail{
        display: grid;
        img{
            border-radius: 7px;
            float: left;
        }      
        .anime-details{
        padding-left: 60px;
        height: 500px;
        width: 600px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        p{
          display: flex;
          gap: 1rem;
        }
        p h3:first-child{
          font-weight: 600;
          color: black;
        }
      }
      }

    }

    .trailer-con{
      display: flex;
      justify-content: center;
      align-items: center;
      iframe{
        outline: none;
        border: 5px solid #e5e7eb;
        padding: 1.5rem;
        border-radius: 10px;
        background-color: #FFFFFF;
      }
    }
    .characters{
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
      grid-gap: 2rem;
      background-color: #fff;
      border-radius: 20px;
      border: 5px solid #e5e7eb;
      text-align: center;
      padding-bottom: 20px;
      .character{
        margin-top: 10px;
        margin-left: 10px;
        margin-right: 10px;
         padding: .4rem .6rem;
         border-radius: 7px;
         background-color: #EDEDED;
         transition: all .4a ease-in-out;
         img{
            width: 200px;
            border-radius: 7px;
         }
         h4{
          padding: .5rem 0;
          color: #454e56;
         }
         p{
          color: #27AE60;
         }
      }
    }
    .Button-display{
      margin-top: 10px;
       width: 100%;
       background-color: #6c7983;
       border-radius: 10px;
       height: 35px;
       border-style: none;
    }
    .review{
      background-color: #fff;
      margin-bottom: 20px;
      margin-top: 20px;
      border-radius: 7px;
      border: 5px solid #e5e7eb;
      .only-review{
        border-radius: 10px;
        padding: 20px 20px 20px 20px;

        .user{ 
          display: flex;
          margin-bottom: 20px;
          img{
          width: 200px;
          height: 200px;
          float: left;
          border: 2px solid black;
        }
        h2{
          text-align: left;
          margin-top: 40px;
          margin-left: 20px;
          color: black;
        }
        h3{
          color: black;
          margin-top: 150px;
          margin-left: 130px;
          span{
            color: red;
          }
        }
        }
       p{
        text-align: left;
        button{
        background-color: transparent;
        border: none;
        outline: none;
        cursor: pointer;
        font-size: 1.2rem;
        color: #27AE60;
        font-weight: 600;
      }
       }
       
        
      }
    }
`