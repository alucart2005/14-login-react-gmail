import { useState } from "react";
import "./App.css";
import styled from "styled-components";
import { AuthContextProvider, UserAuth } from "./context/AuthContext";
import { MyRoutes } from "./routers/routes";

function App() {
  //const { user,logOut } = UserAuth();
  return (
    <AuthContextProvider>
      <Container>
        <MyRoutes>
          
        </MyRoutes>
      </Container>
    </AuthContextProvider>
  );
}

const Container = styled.div`
  max-width: 100vw;
  max-height: 100vh;
  display: flex;
`;
export default App;
