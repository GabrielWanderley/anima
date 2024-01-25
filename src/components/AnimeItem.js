import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { AnimeItemStyled } from "../styles/animeItemStyle";

export function AnimeItem(){

    const  {id} = useParams()

    const [anime, setAnime] = useState({})
    const [characters, setCharacter] = useState([])
    const [showMore, setShowmore] = useState(false)
    const [showAllp, setShowAllp] = useState(false);
    const [revio, setReview] = useState([])
    const [recomendations, setRecomendation] = useState([])
    const [expandedReviews, setExpandedReviews] = useState({});



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
       setRecomendation(data.data)
       console.log("recomendation",data.data)
     }
     const handleReloadAndScrollTop = () => {

  
  

      window.scrollTo({
        top: 0,
        behavior: 'smooth', 
      });
    };

     const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1,
    };

    useEffect(()=>{
        getAnime()
        getCharacters()
        getReview()
        getRecomendation()
    },[id])

    return(
       <AnimeItemStyled>
         <h1>{anime?.title}</h1>
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
          {showMore ? synopsis : (synopsis && synopsis.length > 450 ? synopsis.substring(0, 450) + '...' : synopsis)}
          <button onClick={() => setShowmore(!showMore)}>
            {showMore ? 'ver menos' : 'Leia mais'}
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
         {characters?.slice(0, showAllp ? undefined : 10).map((character, index) => {
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
      {!showAllp && (
        <button onClick={() => setShowAllp(true)} className="Button-display">Mostrar Todos os Personagens</button>
      )}  
      {showAllp && (
        <button onClick={() => setShowAllp(false)}className="Button-display">Mostrar Apenas 10</button>
      )} 
      <h3 className="title">Dicas de animes </h3>
    <Slider {...settings} className="slider">

      {recomendations?.map((recomendation, idx) =>{
      const mal_id = recomendation.entry[0].mal_id
      const images = recomendation.entry[0].images

      return(
        <Link to={`/anime/${mal_id}`} key={idx} onClick={handleReloadAndScrollTop}>

      <img src={images?.jpg.image_url}  alt={`Recomendação ${idx}`}  className="img-carro"/>
         </Link>
        
      )

     })}  
    </Slider>

     {revio?.map((revios,index) => {
      
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
          {expandedReviews[index]
            ? review
            : review?.substring(0, 450) + "..."}

          <button
            onClick={() => {
              setExpandedReviews((prev) => ({
                ...prev,
                [index]: !prev[index],
              }));
            }}
          >
            {expandedReviews[index] ? "ver menos" : "Leia mais"}
          </button>
        </p>
        </div>


       </div>
      )
     })}


       </AnimeItemStyled>

    )
}

