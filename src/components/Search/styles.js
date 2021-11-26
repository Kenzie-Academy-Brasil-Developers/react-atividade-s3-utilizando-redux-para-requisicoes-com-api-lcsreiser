import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  color: whitesmoke;
  font-size: 40px;
  margin-top: 5vh;
  margin-bottom: 5vh;

  h2 {
    margin-bottom: 5vh;
  }

  div {
    display: flex;
    height: 6vh;
    width: 40vw;
    padding: 5px;

    input {
      border: none;
      font-size: 18px;
      padding-left: 20px;
      background-color: whitesmoke;
      width: 30vw;
      border-radius: 5px 0 0 5px;
      color: black;
    }
    input::placeholder {
      color: gray;
    }

    button {
      border: none;
      background-color: whitesmoke;
      width: 15vw;
      font-size: 18px;
      border-radius: 0 5px 5px 0;
      color: gray;
    }
  }
`;
