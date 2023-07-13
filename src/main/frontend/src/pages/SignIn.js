import React, { useEffect, useState } from "react";
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

    const [text, setText] = useState("");

    useEffect(() => {
        fetch("http://localhost:8080/api/member/sign", { method: "GET" })
          .then((res) => res.json())
          .then((data) => {
            setText(data);
            console.log(data);
          })
          .catch((error) => {
            console.error("Error fetching data: ", error);
          });
      }, []);


    return (
        <SignInContainer>
            <Header/>
                <div>
                    {text}
                </div>
        </SignInContainer>
    )
}

export default SignIn;