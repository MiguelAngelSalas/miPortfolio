import { useNavigate } from "react-router-dom";
import Buttonnav from "./Buttonnav";
import Footer from "./Footer";

const Header = ({ className }) => {
  const navigate = useNavigate();
  const handleClick = (path) => {
    navigate(path);
  };
  return (
    <div>
      <header className={className}>
        <Buttonnav texto="Sobre mi" onClick={() => handleClick("/sobreMi")} />
        <Buttonnav
          texto="Proyectos"
          onClick={() => handleClick("/proyectos")}
        />
        <Buttonnav texto="Estudios" onClick={() => handleClick("/estudios")} />
      </header>
      
    </div>
  );
};

export default Header;
