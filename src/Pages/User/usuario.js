import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { UserStyled } from "../../styles/userStyles";
import { db } from "../../firebase/firebase";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { useGlobalContext } from "../../context/global";

import { Backdrop, CircularProgress } from '@mui/material';


export function Usuario() {

    const { globalState } = useGlobalContext()
    const { userId } = useParams()

    const [dados, setDados] = useState([]);
    const [addDados, setDadosAdd] = useState([]);
    const [anime, setAnime] = useState([])
    const [userAnime, setUserAnime] = useState([])
    const [expandedReviews, setExpandedReviews] = useState({});
    const [conteudoCarregado, setConteudoCarregado] = useState(false);

    useEffect(() => {
      const carregarConteudoAssincrono = async () => {
        // Simula um carregamento assíncrono (pode ser uma chamada de API, etc.)
        await new Promise(resolve => setTimeout(resolve, 1000));
  
        // Marca o conteúdo como carregado
        setConteudoCarregado(true);
      };
  
      carregarConteudoAssincrono();
    }, []);
  


    const getAnime = async () => {
        try {
            const idsArray = addDados.map(item => item.id);

            // Cria um array de promessas para cada solicitação de fetch
            const promises = idsArray.map(async id => {
                const response = await fetch(`https://api.jikan.moe/v4/anime/${id}`);
                return response.json();
            });

            // Aguarda o término de todas as promessas
            const responseData = await Promise.all(promises);

            // responseData é um array contendo os dados de cada anime
            setAnime(responseData.map(data => data.data));

        } catch (error) {
            console.error("Erro ao buscar dados do anime:", error);
        }
    };

    const getAnimeUser = async () => {
        try {
            const idsArray = dados.map(item => item.animeId);

            // Cria um array de promessas para cada solicitação de fetch
            const promises = idsArray.map(async id => {
                const response = await fetch(`https://api.jikan.moe/v4/anime/${id}`);
                return response.json();
            });

            // Aguarda o término de todas as promessas
            const responseData = await Promise.all(promises);

            // responseData é um array contendo os dados de cada anime
            setUserAnime(responseData.map(data => data.data));
            console.log(responseData.map(data => data.data))

        } catch (error) {
            console.error("Erro ao buscar dados do anime:", error);
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
            console.log(dadosArray);
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

    useEffect(() => {

        getAnime()

    }, [addDados, userId])
    useEffect(() => {

        getAnimeUser()

    }, [dados, userId])


    const usuarioEncontrado = dados.find((item) => item.userId === userId);

    return (
        <UserStyled>

<Backdrop open={!conteudoCarregado} style={{ zIndex: 1, color: '#fff' }}>
        <CircularProgress color="inherit" />
      </Backdrop>
      {conteudoCarregado && (
            <div className="UserBox">
                <img src={usuarioEncontrado?.userPicture} />
                <h2>{usuarioEncontrado && usuarioEncontrado.userName}</h2>
                <h1>Animes favoritos</h1>
                <div className="favoritos">
                    {anime.map((anime) => (
                        <div key={anime.mal_id} >
                            <Link to={`/anime/${anime.mal_id}`}>
                                <img src={anime.images?.jpg.image_url} alt={`Imagem de ${anime.title}`} />
                            </Link>
                            <h3>{anime.title}</h3>
                        </div>
                    ))}
                </div>
                <h1>revios</h1>
                <div className="revios">
                    {dados.map((anime, index) => (
                        <div key={anime.animeId} className="revio">
                            {userAnime.length > 0 && (
                                <Link key={userAnime[index].mal_id} to={`/anime/${anime.animeId}`}>
                                    <img src={userAnime[index].images?.jpg.image_url} alt={`Imagem de ${userAnime[index].title}`} />
                                </Link>
                            )}
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
        )}

        </UserStyled>
    );
}
