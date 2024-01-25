import styled from "styled-components"


export const PopularStyled = styled.div`
   background-color: #120D31;
   display: flex;
   .popular-anime{
    background-color: #120D31;
    margin-top: 2rem;
    padding-top: 2rem;
    padding-bottom: 2rem;
    padding-left: 5rem;
    padding-right: 0;
    display: grid;
    width: 100%;
    grid-template-columns:repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 2rem;
      a{
        height: 500px;
        border-radius: 7px;
        border: 5px solid #e5e7eb;


        img{        
        width: 100%;
        height: 100%;
        object-fit:cover;
        border-radius: 5px;
        }
      }
    }

`