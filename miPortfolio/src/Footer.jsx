import Buttoncontacto from "./Buttoncontacto";

export default function Footer() {
  return (
    <footer>
      <div className="nav-dinamico">
        <Buttoncontacto
          onClick={() =>
            window.open("https://github.com/MiguelAngelSalas", "_blank")
          }
          texto="Contacto"
        ></Buttoncontacto>
        <Buttoncontacto
          onClick={() =>
            window.open("https://github.com/MiguelAngelSalas", "_blank")
          }
          texto="GitHub"
        ></Buttoncontacto>
        <Buttoncontacto
          onClick={() =>
            window.open(
              "https://www.linkedin.com/in/miguel-salas-373310174?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
              "_blank"
            )
          }
          texto="Linkedin"
        ></Buttoncontacto>
      </div>
    </footer>
  );
}
