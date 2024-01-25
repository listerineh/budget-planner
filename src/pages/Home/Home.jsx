import { Link } from "react-router-dom";
import Appbar from "../../components/Appbar/Appbar";
import "./Home.css";

const Home = () => {
  const data = [
    {
      id: 1,
      title: "Software financiero",
      image: "/images/software-financiero.png",
      page: "/finance",
    },
    {
      id: 2,
      title: "Visualizador de Gastos",
      image: "/images/visualizador-de-gastos.png",
      page: "/expenses",
    },
    {
      id: 3,
      title: "Monet IA",
      image: "/images/monet-ai.png",
      page: "/monet",
    },
    {
      id: 4,
      title: "Administracion de Tarjetas",
      image: "/images/visualizador-de-gastos.png",
      page: "/cards",
    },
  ];

  return (
    <>
      <Appbar sectionName="Servicios" />
      <div className="cards-container">
        {data.map((item) => (
          <Link to={item.page} className="card-container" key={item.id}>
            <img src={item.image} alt={item.title} className="card-image" />
            <h3 className="card-title">{item.title}</h3>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Home;
