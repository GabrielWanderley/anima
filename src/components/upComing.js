import React from 'react'
import { Link } from 'react-router-dom'
import { useGlobalContext } from '../context/global'
import { SideBar } from './sideBar'
import { PopularStyled } from '../styles/upComingStyle'

import { useEffect, useState } from "react"
import { db } from "../firebase/firebase"
import { addDoc, collection, getDocs } from "firebase/firestore"

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function Upcoming({rendered}) {
    const {upcomingAnime ,isSearch, searchResults, globalState } = useGlobalContext()

    const [animeId, setAnimeId] = useState()
    const [dados, setDados] = useState([]);
  
    const handleAdd = async (animeId) => {
        try {
            // Verificar se o animeId está na lista de IDs dos animes já adicionados
            if (dados.some(item => item.id === animeId)) {
                toast.warning("Anime já adicionado");
            } else if (globalState.userEmail) {
                const docRef = await addDoc(collection(db, 'animes'), {
                    userId: globalState.userEmail,
                    id: animeId,
                });
    
                // Atualiza o estado local com os novos dados
                setDados([...dados, { id: docRef.id, userId: globalState.userEmail, id: animeId }]);
    
                toast.success("Anime adicionado com sucesso");
                console.log('Documento adicionado com ID:', docRef.id);
            } else {
                toast.error("Faça login para poder adicionar");
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

    const conditionalRender = () => {
        if(!isSearch && rendered === 'upcoming'){
            return upcomingAnime?.map((anime) => {
                return <div className="div-animes" >
                <Link to={`/anime/${anime.mal_id}`} key={anime.mal_id}>
                  <img className="tops-image" src={anime.images.jpg.large_image_url} alt={anime.mal_id} />
                </Link>
                <button className="addButton" onClick={() => { handleAdd(anime.mal_id); setAnimeId(anime.mal_id); }}  > add</button>
              </div>
            })
        }else{
            return searchResults?.map((anime) => {
                return <div className="div-animes" >
                <Link to={`/anime/${anime.mal_id}`} key={anime.mal_id}>
                  <img className="tops-image" src={anime.images.jpg.large_image_url} alt={anime.mal_id} />
                </Link>
                <button className="addButton" onClick={() => { handleAdd(anime.mal_id); setAnimeId(anime.mal_id); }}  > add</button>
              </div>
            })
        }
    }

    return (
        <PopularStyled>
            <div className="upcoming-anime">
                {conditionalRender()}
            </div>
            <ToastContainer />
            <SideBar/>
        </PopularStyled>
    )
}



