import React from "react";
import styled from "styled-components"
import Header from "../components/Header"
import SignUpForm from "../components/SignUpForm"

const SignUpContainer = styled.div`
    width:100%;
    height:100%;
    padding:0px 10px;
    display:flex;
    flex-direction: column;
    align-items: center;
`

const SignUp= () => {
    return (
        <SignUpContainer>
            <Header/>
            <SignUpForm/>
        </SignUpContainer>
    )
}

export default SignUp;