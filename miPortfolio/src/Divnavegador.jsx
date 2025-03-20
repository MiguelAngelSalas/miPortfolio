export default function Divnavegador({  }) {
    const [showIframe, setShowIframe] =useState(false)
    const abrirLink = ()=>{
        setShowIframe(true)
    }
    return (
        i
    )
}





























import React, { useState } from "react";
import "./styles.css";

export default function App() {
  // Estado para controlar si el iframe debe mostrarse
  const [showIframe, setShowIframe] = useState(false);

  const openLinkedIn = () => {
    setShowIframe(true); // Mostrar iframe con la URL de LinkedIn
  };

  return (
    <div className="app-container">
      <button onClick={openLinkedIn} className="boton-estilizado">
        Ver LinkedIn
      </button>
      
      {/* Si el estado showIframe es true, mostramos el iframe dentro del div */}
      {showIframe && (
        <div className="iframe-container">
          <iframe
            src="https://www.linkedin.com/in/tu-perfil"
            title="LinkedIn"
            className="iframe"
            frameBorder="0"
            width="100%"
            height="600px"
          ></iframe>
        </div>
      )}
    </div>
  );
}

