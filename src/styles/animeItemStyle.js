import styled from "styled-components"

export const AnimeItemStyled = styled.div`

    padding: 3rem 18rem;
    background-color: #120D31;

    h1{
       display: inline-block;
       font-size: 3rem;
       margin-bottom: 1.5rem;
       color: white;
       transition: all .4s ease-in-out;
       &:hover{
        transform: skew(-3deg);
       }
    }
    .title{
      display: inline-block;
       font-size: 3rem 0;
       margin-bottom: 2rem;
       margin-top: 20px;
       color: white;

    }

    .description{
      margin-top: 2rem;
      color: #6c7983;
      line-height: 1.7rem;
      button{
        background-color: transparent;
        border: none;
        outline: none;
        cursor: pointer;
        font-size: 1.2rem;
        color: #27AE60;
        font-weight: 600;
      }
    }

    .details{
      background-color: #fff;
      border-radius: 20px;
      padding: 2rem;
      border: 5px solid #e5e7eb;
      min-width: 500px;
      .detail{
        display: grid;
        img{
            border-radius: 7px;
            float: left;
        }      
        .anime-details{
        padding-left: 60px;
        height: 500px;
        width: 600px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        p{
          display: flex;
          gap: 1rem;
          color: #211E3F;
        }
        p h3:first-child{
          font-weight: 600;
          color: #6c7983;
        }
      }
      }

    }

    .trailer-con{
      display: flex;
      justify-content: center;
      align-items: center;
      iframe{
        outline: none;
        border: 5px solid #e5e7eb;
        padding: 1.5rem;
        border-radius: 10px;
        background-color: #FFFFFF;
      }
    }
    .characters{
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
      grid-gap: 2rem;
      background-color: #fff;
      border-radius: 20px;
      border: 5px solid #e5e7eb;
      text-align: center;
      padding-bottom: 20px;
      .character{
        margin-top: 10px;
        margin-left: 10px;
        margin-right: 10px;
         padding: .4rem .6rem;
         border-radius: 7px;
         background-color: #EDEDED;
         transition: all .4a ease-in-out;
         img{
            width: 200px;
            border-radius: 7px;
         }
         h4{
          padding: .5rem 0;
          color: #211E3F;
         }
         p{
          color: #27AE60;
         }
      }
    }
    .Button-display{
      margin-top: 10px;
       width: 100%;
       background-color: #ACAAB8;
       border-radius: 10px;
       height: 35px;
       border-style: none;
       color: #120D31;
       font-weight: 700;
    }
    .review{
      background-color: #fff;
      margin-bottom: 20px;
      margin-top: 20px;
      border-radius: 7px;
      border: 5px solid #e5e7eb;
      .only-review{
        border-radius: 10px;
        padding: 20px 20px 20px 20px;

        .user{ 
          display: flex;
          margin-bottom: 20px;
          img{
          width: 200px;
          height: 200px;
          float: left;
          border: 2px solid black;
        }
        h2{
          text-align: left;
          margin-top: 40px;
          margin-left: 20px;
          color: #120D31;
        }
        h3{
          position: absolute;
          color: #120D31;
          margin-top: 150px;
          margin-left: 525px;
          span{
            color: red;
          }
        }
        }
       p{
        text-align: left;
        button{
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
  .slider{
    margin-bottom: 50px;

        .img-carro{
      width: 250px;
      height: 350px;
    }
  }

`