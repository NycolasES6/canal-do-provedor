import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import Login  from "./pages/Login";
import Home  from "./pages/Home";
import Cursos  from "./pages/Cursos";
import CursoPlayer  from "./pages/CursoPlayer";

export function AppRoutes(){
  return(
    <Router>
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path="home" element={<Home/>}/>
        <Route path="cursos" element={<Cursos/>}/>
        <Route path="cursos/rede-de-computadores" element={<CursoPlayer/>}/>
      </Routes>
    </Router>
    
  )
}