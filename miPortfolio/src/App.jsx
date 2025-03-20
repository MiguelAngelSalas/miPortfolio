import React from "react";
import Header from "./Header";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Sobremi from "./Sobremi";
import Estudios from "./Estudios";
import Proyectos from "./Proyectos";
import Foto from "./Foto";
import "./styles.css";
import Fotoperfil from "./assets/Fotoperfil.jpeg";
import Data from "./Datos";
import Footer from "./Footer";

export default function App() {
  return (
    <Router>
      <Header className="nav-header" />
      <Foto fotoPerfil={Fotoperfil} className="foto-perfil" />
      <div className="nav-dinamico">
        <Routes>
          <Route path="/sobreMi" element={<Sobremi data={Data.sobreMi} />} />
          <Route
            path="/proyectos"
            element={<Proyectos data={Data.proyectos} />}
          />
          <Route path="/estudios" element={<Estudios data={Data.estudios} />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}
