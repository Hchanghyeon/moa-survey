import React, {useState} from "react";
import styled from "styled-components"
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const SignInContainer = styled.div`
        display:flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
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

    const submitInfo =  async () => {

        fetch('http://localhost:8080/api/member',{
            method:'POST',
            headers:{
                "Content-Type":'application/json; charset=utf-8;' 
            },
            body: JSON.stringify({
                email: email,
                password: password,
            })})
            .then(response => response.json())
            .then(data => {
                if(data.email === email){
                    alert("회원가입이 완료되었습니다.")
                    window.location.href = '/signin';
                }
            })
            .catch(error => alert(error));
    }

    return (
        <SignInContainer>
            <TextField type="email" onChange={handleEmailChange} className="input" id="outlined-basic" label="이메일" variant="outlined" required />
            <TextField type="password" onChange={handlePasswordChange} className="input" id="outlined-basic" label="패스워드" variant="outlined" required />
            <Button className="input" onClick={submitInfo} color="success" variant="contained">회원가입</Button>
        </SignInContainer>
    )
}

export default SignInForm;