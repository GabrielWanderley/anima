import styled from "styled-components"

export const AnimeItemStyled = styled.div`

    padding: 3rem 18rem;
    background-color: #120D31;

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
            height: 310px;
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

  .inputs{
     background-color: #fff;
     border-radius: 7px;
      border: 5px solid #302F4D;
      text-align: center;
      padding-bottom: 15px;
      
      h2{
        margin-top: 15px;
        margin-bottom: 15px;
      }

      textarea{
        max-width: 700px;
        max-height: 200px;
        min-width: 700px;
        min-height: 200px;
        font-size: 17px;
        padding-left: 10px;
        padding-top: 10px;

      }

      select{
         background-color: #120D31;
         color: #fff;
         width: 90px;
         height: 40px;
         border-radius: 7px;
        margin-right: 15px;
        margin-top: 15px;
      }

      button {
  border-radius: .25rem;
  text-transform: uppercase;
  font-style: normal;
  font-weight: 400;
  padding-left: 25px;
  padding-right: 25px;
  color: #fff;
  -webkit-clip-path: polygon(0 0,0 0,100% 0,100% 0,100% calc(100% - 15px),calc(100% - 15px) 100%,15px 100%,0 100%);
  clip-path: polygon(0 0,0 0,100% 0,100% 0,100% calc(100% - 15px),calc(100% - 15px) 100%,15px 100%,0 100%);
  height: 40px;
  font-size: 0.7rem;
  line-height: 14px;
  letter-spacing: 1.2px;
  transition: .2s .1s;
  background-image: linear-gradient(90deg,#1c1c1c,#6220fb);
  border: 0 solid;
  overflow: hidden;
}

button:hover {
  cursor: pointer;
  transition: all .3s ease-in;
  padding-right: 30px;
  padding-left: 30px;
}
  }


  .btn-div{

   text-align: end;
   margin-right: 15px;
   margin-bottom: 15px;

      .btn {
  background-color: transparent;
  position: relative;
  border: none;
  cursor: pointer;
}

.btn::after {
  content: 'delete';
  position: absolute;
  top: -130%;
  left: 50%;
  transform: translateX(-50%);
  width: fit-content;
  height: fit-content;
  background-color: #120D31;
  padding: 4px 8px;
  border-radius: 5px;
  transition: .2s linear;
  transition-delay: .2s;
  color: white;
  text-transform: uppercase;
  font-size: 12px;
  opacity: 0;
  visibility: hidden;
}

.icon {
  transform: scale(1.2);
  transition: .2s linear;
}

.btn:hover > .icon {
  transform: scale(1.5);
}

.btn:hover > .icon path {
  fill: #120D31;
}

.btn:hover::after {
  visibility: visible;
  opacity: 1;
  top: -160%;
}
  }



`