
import { Global } from "@emotion/react";
import { reset } from "./styles/global";
import MainContainer from "./components/MainContainer/MainContainer";
import SubList from "./components/SubList/SubList";
import MainList from "./components/MainList/MainList";
import { useState } from "react";

function App() {
  return (
    <>
      <Global styles={reset} />
      <MainContainer>
        <MainList/>
        <SubList/>
      </MainContainer>
    </>
  );
}

export default App;
