import styled from "styled-components";
import logogoogle from "../assets/logoogle.png";
import { UserAuth } from "../context/AuthContext";

export function Home() {
  const { user, logOut } = UserAuth();
  const cerrarSesion = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <h1>Welcome {user.displayName} to<br />CodeWizardAI !!! <br /></h1>
      <button className="btniniciar" onClick={cerrarSesion}>
        <img src={logogoogle} alt="" />
        <span>Sign Out</span>
      </button>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100vw;
  height: 100vh;
  gap: 100px;

  .btniniciar {
    display: flex;
    align-items: center;
    gap: 12px;
    border-style: none;

    img {
      width: 30px;
    }
    background-color: white;

    padding: 15px 30px;
    border-radius: 50px;
    font-weight: 700;
    font-size: 22px;

    transition: all 0.25s ease;
    box-shadow: 0px 10px 20px 2px rgba(0, 0, 0, 0.12);

    &:hover {
      transform: translateY(-5px);
      box-shadow: 0px 20px 40px 0px rgb(0 0 0 / 10%);
      cursor: pointer;
    }
    span {
      opacity: 0.8;
    }
  }
  @media(max-width:512px){
    font-size: 10px;
    transition: 0.2s all;
  }
`;
