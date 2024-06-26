import styled from 'styled-components'


export const PopularStyled = styled.div`
    background-color:#120D31;
    display: flex;
    .upcoming-anime{
        margin-top: 2rem;
        padding-top: 2rem;
        padding-bottom: 2rem;
        padding-left: 5rem;
        padding-right: 0;
        width: 100%;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        grid-gap: 2rem;
        background-color: #120D31;
       
        .div-animes{
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
        .addButton{
        position: absolute;

transform: translate(-50%, -50%);
padding: 10px;
background-color: #120D31;
border: none;
border-Radius: 5px;
cursor: pointer;
color: white;
      }
    }
    @media (max-width:767px){
      background-color: #120D31;
   display: flex;
   .upcoming-anime{
    background-color: #120D31;
    margin-top: 2rem;
    padding-top: 2rem;
    padding-bottom: 2rem;
    padding-left: 0.9rem;
    padding-right: 0;
    display: grid;
    width: 100%;
    grid-template-columns:repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 2rem;

    margin: 0 auto;
  
      .div-animes{
        height: 250px;
        border-radius: 7px;
        border: 5px solid #e5e7eb;   
        width: 200px ;

      img{        
        width: 100%;
        height: 100%;
        object-fit:cover;
        border-radius: 5px;
        }
      }
      .addButton{
        position: absolute;

transform: translate(-50%, -50%);
padding: 10px;
background-color: #120D31;
border: none;
border-Radius: 5px;
cursor: pointer;
color: white;
      }
    }
}
`;