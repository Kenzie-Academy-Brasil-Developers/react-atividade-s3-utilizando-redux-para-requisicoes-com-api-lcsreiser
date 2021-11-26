import axios from "axios";
import { AddDigimon } from "./actions";

const addDigimonsThunk = (digimon, setError) => (dispatch) => {
  axios
    .get(`https://digimon-api.vercel.app/api/digimon/name/${digimon}`)
    .then((response) => {
      dispatch(AddDigimon(response.data[0]));
      setError(false);
    })
    .catch((_) => {
      setError(true);
    });
};

export default addDigimonsThunk;
