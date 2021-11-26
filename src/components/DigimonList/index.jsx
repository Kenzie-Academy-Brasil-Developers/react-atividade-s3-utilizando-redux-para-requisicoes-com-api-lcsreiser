import { useSelector } from "react-redux";
import { Container } from "./style";

function DigimonList({ error }) {
  const { digimons } = useSelector((state) => state);

  return (
    <Container>
      {error ? (
        <div className="notFound">Digimon não encontrado</div>
      ) : (
        <div>
          {digimons.map((element, index) => (
            <div key={index}>
              <img src={element.img} alt="Imagem do Digimon" />
              <h3>{element.name}</h3>
            </div>
          ))}
        </div>
      )}
    </Container>
  );
}

export default DigimonList;
