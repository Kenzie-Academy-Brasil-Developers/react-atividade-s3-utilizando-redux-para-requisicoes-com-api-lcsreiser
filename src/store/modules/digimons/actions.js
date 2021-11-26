import { ADD_DIGIMONS } from "./actionTypes";

export const AddDigimon = (digimon) => ({
  type: ADD_DIGIMONS,
  digimon,
});
