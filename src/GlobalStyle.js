import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

*{
     @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700;800&family=Playfair+Display&family=Roboto:wght@100&display=swap');
     margin: 0;
     padding: 0;
     box-sizing: border-box;
     list-style: none;
     text-decoration: none;
     font-family: 'Roboto', sans-serif;
}
body{
    color: #6c7983;
    font-size: 1.2rem;
}

input[type="text"] {
   padding-left: 20px;
}

`

export default GlobalStyle