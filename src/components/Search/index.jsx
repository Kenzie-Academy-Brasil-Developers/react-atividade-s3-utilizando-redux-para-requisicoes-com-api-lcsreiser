import { useState } from "react";
import { useDispatch } from "react-redux";

import { Container } from "./styles";

import addDigimonsThunk from "../../store/modules/digimons/thunk";

function Search({ setError }) {
  const [input, setInput] = useState("");

  const dispatch = useDispatch();

  function handleClick() {
    dispatch(addDigimonsThunk(input, setError));
  }

  return (
    <Container>
      <h2>Procure seu Digimon!</h2>
      <div>
        <input
          placeholder="Digite seu Digimon!"
          value={input}
          onChange={(evt) => setInput(evt.target.value)}
        />
        <button onClick={() => handleClick()}>Pesquisar</button>
      </div>
    </Container>
  );
}

export default Search;
