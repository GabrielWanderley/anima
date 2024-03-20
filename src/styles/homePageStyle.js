import styled from "styled-components"


export const HomepageStyled = styled.div`

  background-color: #EDEDED;
  header{
    padding: 2rem 5rem;
    width: 70%;
    margin: 0 auto;
    transition: all .4s ease-in-out;
    .logo{
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 2rem;
        color: #211E3F;
    }        
    .search-Container{
           display: flex;
           align-items: center;
           justify-content: center;
           gap: 1rem;

           button{
            display: flex;
            align-items: center;
            gap: 0.5rem;
            padding: .7rem 1.5rem;
            outline: none;
            border-radius: 30px;
            font-size: 1.2rem;
            background-color: #fff;
            cursor: pointer;
            transition: all .4s ease-in-in;
            font-family: inherit;
            border: 5px solid #120D31;
           }

           form{
            position: relative;
            width: 100%;
            .input-control{
                position: relative;
                transition: all .4s ease-in-;
            }
            .input-control input{
                 width: 400px;
                 height: 50px;
                 padding: 0%.7ren 1rem;
                 border: none;
                 outline: none;
                 border-radius: 30px;
                 font-size: 1.2rem;
                 background-color: #fff;
                 border: 5px solid #120D31;
                 transition: all .4s ease-in-out;
            }
            .input-control button{
              position: absolute;
              right: 0;
              top: 50%;
              transform:translateY(-50%);
            }

           }
        }
  }

  @media (min-width: 1032px) and (max-width:1280px){

}

@media (min-width: 768px) and (max-width:1023px){
  header{      
    .search-Container{
           display: flex;
           align-items: center;
           justify-content: center;
           gap: 1rem;

           button{
            display: block;
            align-items: center;
            gap: 0.5rem;
            padding: .7rem 1.5rem;
            outline: none;
            border-radius: 30px;
            font-size: 1.2rem;
            background-color: #fff;
            cursor: pointer;
            transition: all .4s ease-in-in;
            font-family: inherit;
            border: 5px solid #120D31;
           }

           form{
            position: relative;
            width: 90%;
            .input-control{
                position: absolute;
                transition: all .4s ease-in-;
            }
            .input-control input{
                 width: 400px;
                 height: 50px;
                 padding: 0%.7ren 1rem;
                 border: none;
                 outline: none;
                 border-radius: 30px;
                 font-size: 1.2rem;
                 background-color: #fff;
                 border: 5px solid #120D31;
                 transition: all .4s ease-in-out;
                 margin-top: 35px;
            }
            .input-control button{
              position: absolute;
              top: 70%;
              transform:translateY(-50%);
            }

           }
        }
  }
}

@media (max-width:767px){
  
}

`