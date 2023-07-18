import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import SignInForm from "../components/SignInForm"

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
            <SignInForm/>
        </SignInContainer>
    )
}

export default SignIn;