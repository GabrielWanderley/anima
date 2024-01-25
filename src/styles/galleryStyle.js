import styled from "styled-components"


export const GalleryStyled = styled.div`

   background-color: #120D31;
   min-height: 100vh;
   display: flex;
   flex-direction: column;
   align-items: center;
   .back{
    position: absolute;
    top: 2rem;;
    left: 2rem;
    a{
        font-weight: 600;
        text-decoration: none;
        color: #EB5757;
    }
   }

   .big-image{
     display: inline-block;
     padding: 2rem;
     margin: 2rem 0;
     background-color: #fff;
     border-radius: 7px;
     border: 5px solid #e5e7eb;
     position: relative;
     img{
        width: 350px;
     }

   }
   .small-images{
    display: flex;
    flex-wrap: wrap;
    gap: .5rem;
    width: 80%;
    padding: 2rem;
    border-radius: 7px;
    background-color: #fff;
    border: 5px solid #e5e7eb;
    img{
        width: 6rem;
        height: 6rem;
        object-fit: cover;
        cursor: pointer;
        border-radius: 5px;
        border: 3px solid #e5e7eb;
    }
   }

`