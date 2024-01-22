import React, { useContext, useEffect, useReducer, useState} from "react"



const GlobalContext = React.createContext()

const baseUrl = "https://api.jikan.moe/v4"

const LOADING = "LOADING";
const SEARCH = "SEARCH";
const GET_POPULAR_ANIME = "GET_POPULAR_ANIME";
const GET_UPCOMING_ANIME = "GET_UPCOMING_ANIME";
const GET_AIRING_ANIME = "GET_AIRING_ANIME";
const GET_PICTURES = "GET_PICTURES";

const reducer = (state, action)=>{
    switch(action.type){
        case LOADING: 
           return{...state, Location: true};
           case GET_POPULAR_ANIME:
              return{...state, popularAnime: action.payload, loading: false}
             case SEARCH:
                return{...state, searchResults: action.payload, loading: false}
                case GET_UPCOMING_ANIME:
                    return{...state, upcomingAnime: action.payload, loading: false}
                    case GET_AIRING_ANIME:
                        return{...state, airingAnime: action.payload, loading:false}
                        case GET_PICTURES:
                            return{...state, pictures: action.payload, loading:false}
              default: return state;
    }
}

export  const GlobalContextProvider = ({children})=>{
    
    const intialState ={
        popularAnime:[],
        upcommingAnime:[],
        airubgeAnime:[],
        pictures:[],
        isSearch:false,
        searchResults:[],
        loading:false,
    }

    const [state, dispatch] = useReducer(reducer, intialState)
    const [search, setSearch]= useState('')

    const handleChange = (e) =>{
        setSearch(e.target.value)
        if(e.target.value === ''){
           state.isSearch = false;
        }
       }

    const handleSubmit = (e) =>{
         e.preventDefault();
        if(search){
          searchAnime(search)
          state.isSearch = true;
        }else{
          state.isSearch = false;
          alert('Porfavor procure algo valido')
        }
       }
       
       

    const getPopularAnime = async ()=>{
        dispatch({type : LOADING})
        const  response =  await fetch(`${baseUrl}/top/anime`)
        const data = await response.json()
        dispatch({type : GET_POPULAR_ANIME, payload:data.data})
    }

    const getupcomingAnime = async ()=>{
        dispatch({type :LOADING})
        const response = await fetch(`${baseUrl}/seasons/upcoming`)
        const data = await response.json()
        dispatch({type: GET_UPCOMING_ANIME, payload: data.data})
    }

    const getAiringAnime =async ()=>{
        dispatch({type : LOADING})
        const response = await fetch(`${baseUrl}/seasons/now`);
        const data = await response.json();
        dispatch({type : GET_AIRING_ANIME, payload: data.data})
    }

    const searchAnime = async (anime) => {
        dispatch({type: LOADING})
        const response = await fetch(`https://api.jikan.moe/v4/anime?q=${anime}&order_by=popularity&sort=asc&sfw`);
        const data = await response.json();
        dispatch({type: SEARCH, payload: data.data})
    }

   const getAnimePictures = async (id) => {
         dispatch({type :LOADING})
         const response = await fetch(`${baseUrl}/characters/${id}/pictures`);
         const data = await response.json()
         dispatch({type:GET_PICTURES, payload: data.data})
    
   }

    useEffect(()=>{
      getPopularAnime()
    },[])

    return(
        <GlobalContext.Provider value={{
            ...state,
            handleChange,
            handleSubmit,
            searchAnime,
            search,
            getPopularAnime,
            getupcomingAnime,
            getAiringAnime,
            getAnimePictures,
            
            
        }}>
             {children}
        </GlobalContext.Provider>
    )

}

export const useGlobalContext = ()=>{
    return useContext(GlobalContext);
}