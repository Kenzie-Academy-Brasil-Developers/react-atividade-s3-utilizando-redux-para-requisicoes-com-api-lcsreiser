import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    height: 300px;
    border-radius: 20%;
    margin-bottom: 3vh;
  }

  h3 {
    text-align: center;
    font-size: 55px;
  }

  .notFound {
    color: white;
    font-size: 50px;
    margin-top: 5vh;
  }
`;
