import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { UserStyled } from "../../styles/userStyles";
import { db } from "../../firebase/firebase";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { useGlobalContext } from "../../context/global";

export function UserPage() {
  const { username } = useParams();
  const [user, setUser] = useState([]);
  const [favoritos, setFavoritos] = useState([]);
  const [review,  setUserReview] = useState([]);
  const [expandedReviews, setExpandedReviews] = useState({});
  const {globalState} = useGlobalContext()
  const [animeId, setAnimeId] = useState()
  const [dados, setDados] = useState([]);




  const getUser = async () => {
    try {
      const response = await fetch(`https://api.jikan.moe/v4/users/${username}/full`);
      const data = await response.json();
      setUser(data.data);
    } catch (error) {
      console.error('Erro ao obter dados do usuário:', error);
    }
  };

  const getFavoritos = async () => {
    try {
      const response = await fetch(`https://api.jikan.moe/v4/users/${username}/favorites`);
      const data = await response.json();

      if (Array.isArray(data.data?.anime)) { // Verifica se data.data.anime é um array
        setFavoritos(data.data.anime);
      } else {
        console.log('Dados de favoritos ausentes ou não são um array:', data);
      }
    } catch (error) {
      console.error('Erro ao obter favoritos do usuário:', error);
    }
  };

  const getUserReview = async () => {
    try {
      const response = await fetch(`https://api.jikan.moe/v4/users/${username}/reviews`);
      const data = await response.json();
      console.log("user",data.data);
      setUserReview(data.data);
    } catch (error) {
      console.error('Erro ao obter dados do usuário:', error);
    }
  };

  const handleAdd = async () => {
    try {
      if(dados.id === animeId) {
        alert("Anime já adicionado")
      } else if(globalState.userEmail){
        
        const docRef = await addDoc(collection(db, 'animes'), {
          userId: globalState.userEmail,
          id: animeId,

      });
      alert("Anime adicionado com sucesso")
      console.log('Documento adicionado com ID:', docRef.id);
  
      
      }else{
        alert("faça login para poder adicionar")
      }

    } catch (error) {
      console.error('Erro ao adicionar documento:', error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const dadosCollection = collection(db, 'animes');
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
    getUser();
    getFavoritos();
    getUserReview()
  }, [username]);

  return (
    <UserStyled>
      <div className="UserBox">
        <img src={user.images?.jpg.image_url} alt={`Imagem de ${username}`} />
        <h2>{username}</h2>

        <h1>Animes favoritos</h1>

        <div className="favoritos">
          {favoritos.map((anime) => (
            <div key={anime.mal_id} >
              <Link to={`/anime/${anime.mal_id}`}>
              <img src={anime.images?.jpg.image_url} alt={`Imagem de ${anime.title}`} />
              </Link>
              <button className="addButton" onClick={() => { handleAdd(anime.mal_id); setAnimeId(anime.mal_id); }} > add</button>
              <h3>{anime.title}</h3>
            </div>
          ))}
        </div>
        <h1>revios</h1>
        <div className="revios">
          {review.map((anime, index) => (
            <div key={anime.mal_id} className="revio">
               <Link to={`/anime/${anime.entry.mal_id}`}>
                  <img src={anime.entry.images.jpg.image_url}/>
               </Link>
               <button className="addButton2"  onClick={() => { handleAdd(anime.mal_id); setAnimeId(anime.entry.mal_id); }}> add</button>

              <p>          
            {expandedReviews[index]
            ? anime.review
            : anime.review?.substring(0, 1900) + "..."}

          <button
           className="lerMais"
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
          ))}
        </div>
      </div>
    </UserStyled>
  );
}
 