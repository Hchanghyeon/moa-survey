import React from "react";
import Header from "../components/Header";
import Survey from "../components/Survey";
import styled from "styled-components";

const HomeContainer = styled.div`
    width:100%;
    height:100%;
    padding:0px 10px;
    display:flex;
    flex-direction: column;
    align-items: center;
`

const Home = () => {
    return (
        <HomeContainer>
            <Header/>
            <Survey/>
        </HomeContainer>
    )
}

export default Home;