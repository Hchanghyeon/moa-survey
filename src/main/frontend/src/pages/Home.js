import React, { useState, createContext } from "react";
import Header from "../components/Header";
import Survey from "../components/Survey";
import styled from "styled-components";
import QuestionForm from "../components/QuestionForm";
import Questions from "../components/Questions";

const HomeContainer = styled.div`
    width:100%;
    height:100%;
    padding:0px 10px;
    display:flex;
    flex-direction: column;
    align-items: center;
`

const QuestionFormContainer = styled.div`
    max-width: 800px;
    width:100%;
    display:flex;
    justify-content: end;
`
export const AppContext = createContext();

const Home = () => {

    const [flag, setFlag] = useState(false);

    const changeFlag = () => {
        setFlag(!flag);
    }

    return (
        <AppContext.Provider value={{flag, changeFlag}}>
            <HomeContainer>
                <Header />
                <QuestionFormContainer>
                    <QuestionForm />
                </QuestionFormContainer>
                <Questions />
            </HomeContainer>
        </AppContext.Provider>
    )
}

export default Home;