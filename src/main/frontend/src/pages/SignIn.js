import React from "react";
import styled from "styled-components";
import Header from "../components/Header";

const SignInContainer = styled.div`
    width:100%;
    height:100%;
    padding:0px 10px;
    display:flex;
    flex-direction: column;
    align-items: center;
`

const SignIn = () => {
    return (
        <SignInContainer>
            <Header/>
        </SignInContainer>
    )
}

export default SignIn;