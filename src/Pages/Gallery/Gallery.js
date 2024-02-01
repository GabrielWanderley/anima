import { Link, useParams } from "react-router-dom"
import { useGlobalContext } from "../../context/global"
import { useEffect, useState } from "react"
import { GalleryStyled } from "../../styles/galleryStyle"

export function Gallery(){
    
    const {getAnimePictures, pictures} = useGlobalContext()
    const {id}= useParams()

    const [index, setIndex]= useState(0)
    
    const handleImageClick = (i)=>{
          setIndex(i)
    }

    useEffect(()=>{
     getAnimePictures(id)
    },[id,])

    return(
        <GalleryStyled>
          <div className="back">
            <Link to="/" > 
            <i className="fas fa-arrow-left"></i>
            Pagina inicial 
            </Link>
          </div>
          <div className="big-image">
            <img  src={pictures[index]?.jpg.image_url} alt=""/>
          </div>
         <div className="small-images">
            {pictures?.map((picture, i)=>{
             return <div className="image-con" 
             onClick={()=>{ handleImageClick(i)}}
             key={i}>
                <img
                   src={picture?.jpg.image_url}
                   style={{
                     border: i === index ? "3px solid #EB5757" : "3px solid #e5e7eb",
                     filter: i === index ? "brightness(0)" : "brightness(60%)",
                     transform: i === index ? "scale(1.1)" : "scale(1)",
                     transition: "all .3s ease-in-out"
                   }}
                   alt="1"
                />
             </div>
            })}
         </div>
        </GalleryStyled>
    )
}

