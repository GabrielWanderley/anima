import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { AnimeItemStyled } from "../../styles/animeItemStyle";
import { db } from "../../firebase/firebase";
import { addDoc, collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { useGlobalContext } from "../../context/global";

export function AnimeItem(){

    const  {id} = useParams()

    const [anime, setAnime] = useState({})
    const [characters, setCharacter] = useState([])
    const [showMore, setShowmore] = useState(false)
    const [showAllp, setShowAllp] = useState(false);
    const [revio, setReview] = useState([])
    const [recomendations, setRecomendation] = useState([])
    const [expandedReviews, setExpandedReviews] = useState({});
    const [userReview, setUserReview] = useState('');
    const [contemSpoiler, setContemSpoiler] = useState(false);
    const [dados, setDados] = useState([]); 
    const [animeId, setAnimeId] = useState()
    const [addDados, setDadosAdd] = useState([]);


  const {globalState} = useGlobalContext()



    const{
        title, synopsis, images, 
        trailer, aired, duration, 
        season, rank,  score, 
        popularity, status, 
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
    }

     const getRecomendation = async (anime)=>{
       const response = await fetch(`https://api.jikan.moe/v4/recommendations/anime`)
       const data = await response.json()
       setRecomendation(data.data)
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


    const handleEnviar = async () => {
      try {
        if(globalState.userEmail){
          
          if (!userReview.trim()) {
            alert("O campo de revisão não pode estar vazio.");
            return;
          }        const docRef = await addDoc(collection(db, 'posts'), {
          review: userReview, // Alterei de `review` para `userReview`
          Spoiler: contemSpoiler,
          animeId: id,
          userId: globalState.userEmail,
          userName: globalState.userName,
          userPicture: globalState.userPicture,
        });
        window.location.reload();
        console.log('Documento adicionado com ID:', docRef.id);
    
        // Limpe os campos do formulário após o envio
        setUserReview('');
        setContemSpoiler(false);
        }else{
          alert("faça login para poder comentar")
        }

      } catch (error) {
        console.error('Erro ao adicionar documento:', error);
      }
    };

    const handleExcluir = async (postId) => {
      try {
        // Adicione a lógica para excluir o documento do Firestore usando o postId
        await deleteDoc(doc(db, 'posts', postId));
        console.log('Documento excluído com sucesso!');
      } catch (error) {
        console.error('Erro ao excluir documento:', error);
      }
      window.location.reload();

    };

    const handleAdd = async (id) => {
      try {
        // Verificar se o animeId está na lista de IDs dos animes já adicionados
        if (addDados.some(item => item.id === id)) {
          alert("Anime já adicionado");
        } else if (globalState.userEmail) {
          const docRef = await addDoc(collection(db, 'animes'), {
            userId: globalState.userEmail,
            id: id,
          });
    
          // Atualiza o estado local com os novos dados
          setDadosAdd([...addDados, { id: docRef.id, userId: globalState.userEmail, id: id }]);
    
          alert("Anime adicionado com sucesso");
          console.log('Documento adicionado com ID:', docRef.id);
        } else {
          alert("Faça login para poder adicionar");
        }
      } catch (error) {
        console.error('Erro ao adicionar documento:', error);
      }
    };

    useEffect(() => {
      const fetchData = async () => {
        const dadosCollection = collection(db, 'posts');
        const dadosSnapshot = await getDocs(dadosCollection);
  
        const dadosArray = [];
        dadosSnapshot.forEach((doc) => {
          dadosArray.push({ id: doc.id, ...doc.data() });
        });
  
        setDados(dadosArray);
      };
  
      fetchData();
    }, []);

    useEffect(() => {
      const fetchData = async () => {
        const dadosCollection = collection(db, 'animes');
        const dadosSnapshot = await getDocs(dadosCollection);
  
        const dadosArray = [];
        dadosSnapshot.forEach((doc) => {
          dadosArray.push({ id: doc.id, ...doc.data() });
        });
  
        setDadosAdd(dadosArray);
      };
  
      fetchData();
    }, []);

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
                <button className="addButton" onClick={() => { handleAdd(id); setAnimeId(id); }} > add</button>
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


    <div className="inputs">
      <h2>Fale sobre seu anime favorito</h2>
      <form>
        <textarea
          type="text"
          value={userReview}
          onChange={(e) => setUserReview(e.target.value)}
          placeholder="Escreva sua review"
        />
        <p>Contém spoiler?</p>
        <select
          value={contemSpoiler}
          onChange={(e) => setContemSpoiler(e.target.value === 'true')}
        >
          <option value={true}>Sim</option>
          <option value={false}>Não</option>
        </select>
        <button type="button" onClick={handleEnviar}>
          Enviar
        </button>
      </form>
    </div>

    {dados.map((item, index) => {

        if (item.animeId === id) {
          return (
            <div key={index} className="review">
              <div className="only-review">
                <div className="user">
                  <Link to={`usuario/${item.userId}`}>
                    <img src={item.userPicture}/>
                  </Link>

                  <h2>{item.userName}</h2>
                  {item.Spoiler 
                 ? <h3>Essa revio contem <span>spoiler</span></h3>
                 : <h3>Essa review <span>não contem spoiler</span></h3>
                 }
                </div>
                {globalState.userEmail === item.userId && (
                  <div className="btn-div">
                    <button className="btn" onClick={() => handleExcluir(item.id)}>
                      <svg viewBox="0 0 15 17.5" height="17.5" width="15" xmlns="http://www.w3.org/2000/svg" class="icon">
                        <path transform="translate(-2.5 -1.25)" d="M15,18.75H5A1.251,1.251,0,0,1,3.75,17.5V5H2.5V3.75h15V5H16.25V17.5A1.251,1.251,0,0,1,15,18.75ZM5,5V17.5H15V5Zm7.5,10H11.25V7.5H12.5V15ZM8.75,15H7.5V7.5H8.75V15ZM12.5,2.5h-5V1.25h5V2.5Z" id="Fill"></path>
                      </svg>
                    </button>
                  </div>
                )}
                  <p>
                  {expandedReviews[index]
            ? item.review
            : item.review?.substring(0, 450) + "..."}

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
          );
        }
        return null; // Se o ID não for igual, retorna null
      })}


     {revio?.map((revios,index) => {
      
      const {review, mal_id} = revios;
      const {username, images}= revios.user
      const {is_spoilers} = revios

      return(
        <div className="review" key={index}>
        <div className="only-review">
        <div className="user">   
        <Link to={`user/${username}`}>
                <img src={images?.jpg.image_url} alt="user"/>
        </Link>
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

