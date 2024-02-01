import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AnimeItem } from "./Pages/AnimeItem/AnimeItem";
import { HomePage } from "./Pages/HomePage/HomePage";
import { Gallery } from "./Pages/Gallery/Gallery";
import {Bar} from "./components/Bar";
import { UserPage } from "./Pages/User/UserPage";
import { Usuario } from "./Pages/User/usuario";


function App() {

  return (
    <BrowserRouter>        
    <Bar/>
      <Routes>    
        <Route path="/" element={<HomePage/>}/>
        <Route path="/anime/:id" element={<AnimeItem/>}/>
        <Route path="/anime/character/:id" element={<Gallery/>}/>
        <Route path="/anime/:id/user/:username" element={<UserPage/>}/>
        <Route path="/anime/:id/usuario/:userId" element={<Usuario/>}/>
        <Route path="/usuario/:userId" element={<Usuario/>}/>

      </Routes>
    </BrowserRouter>

  );
}

export default App;
