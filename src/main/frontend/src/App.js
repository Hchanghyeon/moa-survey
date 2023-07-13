import { Routes, Route} from 'react-router-dom';
import Home from './pages/Home.js';
import SignIn from './pages/SignIn.js';
import Error from './pages/Error.js';
import styled from "styled-components";
import SignUp from './pages/SignUp.js';
import { useEffect, useState} from 'react';

const Global = styled.div`

  display: flex;
  justify-content: center;
  width:100%;
  height:100%;
  font-family: 'Noto Sans KR', sans-serif;
  background-color: #f8fafc;
`

function App() {

  return (
    <Global>
        <Routes>
          <Route path="/" exact={true} element={<Home/>}/>
          <Route path="/signin" element={<SignIn/>}/>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="*" element={<Error/>}/>
        </Routes>
    </Global>
  );
}

export default App;
