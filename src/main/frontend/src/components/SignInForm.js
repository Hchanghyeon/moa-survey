import React, { useState } from "react";
import styled from "styled-components"
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const SignInContainer = styled.div`
        height:100vh;
        display:flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .input {
            width:300px;
            margin:10px 0px;
        }
`
const Header = styled.h1`
    margin-bottom:10px;
`

const SignInForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const submitInfo = async () => {

        fetch('http://localhost:8080/api/member/auth', {
            method: 'POST',
            headers: {
                "Content-Type": 'application/json; charset=utf-8;'
            },
            body: JSON.stringify({
                email: email,
                password: password,
            })
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);

                if (data.status === 500) {
                    alert("로그인에 실패하셨습니다. 다시 한 번 확인해주세요.");
                    return;
                }

                localStorage.setItem("token", data.accessToken);
                localStorage.setItem("name", data.nickname);
                alert("로그인 되었습니다.");
                window.location.href = "/";

            })
    }

    return (
        <SignInContainer>
            <Header>
                로그인
            </Header>
            <TextField type="email" onChange={handleEmailChange} className="input" id="outlined-basic" label="이메일" variant="outlined" required />
            <TextField type="password" onChange={handlePasswordChange} className="input" id="outlined-basic" label="패스워드" variant="outlined" required />
            <Button className="input" onClick={submitInfo} color="success" variant="contained">로그인</Button>
        </SignInContainer>
    )
}

export default SignInForm;