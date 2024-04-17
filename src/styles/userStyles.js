import styled from "styled-components"

export const UserStyled= styled.div `
 
     padding: 3rem 18rem;
    background-color: #120D31;
    align-items: center;
    text-align: center;

    h1{
        color: #120D31;
    }
    h2{
        margin-bottom: 20px;
        
        font-size: 40px;
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
    .UserBox{
        background-color: #fff;
        border-radius: 20px;
         padding: 2rem;
         border: 5px solid #e5e7eb;

         .favoritos{
            margin-top: 40px;
            margin-bottom: 40px;
            display: grid;
            grid-template-columns:repeat(auto-fill, minmax(300px, 1fr));
            grid-gap: 2rem;

            img{
                border: 2px solid black;
                border-radius: 7px;
            }
            h3{
                color: black;
            }

         }

         .revios{

              margin-top: 20px;
             

              .revio{            
              margin-top: 20px;
              margin-bottom: 50px;
              border: 2px solid black;
              border-radius: 7px;
              min-height: 330px;
                              img{
                border: 2px solid black;
                border-radius: 7px;
                float: left;
                border-top-left-radius: 0;
                
              }
              .addButton2{
                position: absolute;
                left: 27%;
                color: white;
          padding: 10px;
          background-color: #120D31;
          border: none;
          border-Radius: 5px;
          cursor: pointer;
            }
   
              .lerMais{
        background-color: transparent;
        border: none;
        outline: none;
        cursor: pointer;
        font-size: 1.2rem;
        color: #27AE60;
        font-weight: 600;
      }
              }
         }
    }

    
@media (min-width: 768px) and (max-width:1023px){
  padding: 1rem 3rem;}
  
  @media (max-width:767px){
  padding: 1rem 1rem;
  }
`