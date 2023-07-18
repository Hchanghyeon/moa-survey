import React, { useState } from "react"
import styled from "styled-components"
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';

const SignUpForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [nickname, setNickname] = useState('');
    const [ageGroup, setAge] = useState(0);
    const [gender, setGender] = useState('여성');
    const [mbti, setMbti] = useState('');
    const [bloodType, setBloodType] = useState('');
    const [department, setDepartment] = useState('');
    const [job, setJob] = useState('');


    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };
    const handleNicknameChange = (event) => {
        setNickname(event.target.value);
    };

    const handleAgeGroupChange = (event) => {
        setAge(event.target.value);
    };

    const handleGenderChange = (event) => {
        setGender(event.target.value);
    };

    const handleMbtiChange = (event) => {
        setMbti(event.target.value);
    };

    const handleBloodTypeChange = (event) => {
        setBloodType(event.target.value);
    };

    const handleDepartmentChange = (event) => {
        setDepartment(event.target.value);
    };

    const handleJobChange = (event) => {
        setJob(event.target.value);
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
                nickname: nickname,
                ageGroup: ageGroup,
                gender: gender,
                mbti: mbti,
                bloodType: bloodType,
                department: department,
                job:job
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
        <SignUpContainer>
            <RegisterForm>
            <Header>
                회원가입
            </Header>
                <TextField type="email" onChange={handleEmailChange} className="input" id="outlined-basic" label="이메일" variant="outlined" required/>
                <TextField type="password" onChange={handlePasswordChange} className="input" id="outlined-basic" label="패스워드" variant="outlined" required/>
                <TextField type="password" className="input" id="outlined-basic" label="패스워드 확인" variant="outlined" required/>
                <TextField onChange={handleNicknameChange} className="input" id="outlined-basic" label="닉네임" variant="outlined" required/>
                <FormControl className="input" >
                    <FormLabel id="demo-radio-buttons-group-label">성별</FormLabel>
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="여성"
                        name="radio-buttons-group"
                        onChange={handleGenderChange}
                        required
                    >
                        <FormControlLabel value="여성" control={<Radio />} label="여성" />
                        <FormControlLabel value="남성" control={<Radio />} label="남성" />
                    </RadioGroup>
                </FormControl>
                <FormControl className="input">
                    <InputLabel id="demo-simple-select-label">나이</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={ageGroup}
                        label="나이"
                        onChange={handleAgeGroupChange}
                        required
                    >
                        <MenuItem value={"10"}>10대</MenuItem>
                        <MenuItem value={"20"}>20대</MenuItem>
                        <MenuItem value={"30"}>30대</MenuItem>
                        <MenuItem value={"40"}>40대</MenuItem>
                        <MenuItem value={"50"}>50대</MenuItem>
                        <MenuItem value={"60"}>60대</MenuItem>
                    </Select>
                </FormControl>
                <FormControl className="input">
                    <InputLabel id="demo-simple-select-label">MBTI</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={mbti}
                        label="MBTI"
                        onChange={handleMbtiChange}
                        required
                    >
                        <MenuItem value={"istj"}>istj</MenuItem>
                        <MenuItem value={"istp"}>istp</MenuItem>
                        <MenuItem value={"isfj"}>isfj</MenuItem>
                        <MenuItem value={"isfp"}>isfp</MenuItem>
                        <MenuItem value={"infj"}>infj</MenuItem>
                        <MenuItem value={"infp"}>infp</MenuItem>
                        <MenuItem value={"intj"}>infp</MenuItem>
                        <MenuItem value={"intp"}>infp</MenuItem>
                        <MenuItem value={"estp"}>estp</MenuItem>
                        <MenuItem value={"esfp"}>esfp</MenuItem>
                        <MenuItem value={"enfp"}>enfp</MenuItem>
                        <MenuItem value={"entp"}>entp</MenuItem>
                        <MenuItem value={"estj"}>estj</MenuItem>
                        <MenuItem value={"esfj"}>esfj</MenuItem>
                        <MenuItem value={"entj"}>entj</MenuItem>
                        <MenuItem value={"enfj"}>enfj</MenuItem>
                    </Select>
                </FormControl>
                <FormControl className="input">
                    <InputLabel id="demo-simple-select-label">혈액형</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={bloodType}
                        label="혈액형"
                        onChange={handleBloodTypeChange}
                        required
                    >
                        <MenuItem value={"O"}>O형</MenuItem>
                        <MenuItem value={"A"}>A형</MenuItem>
                        <MenuItem value={"B"}>B형</MenuItem>
                        <MenuItem value={"AB"}>AB형</MenuItem>
                    </Select>
                </FormControl>
                <FormControl className="input">
                    <InputLabel id="demo-simple-select-label">학과</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={department}
                        label="학과"
                        onChange={handleDepartmentChange}
                        required
                    >
                        <MenuItem value={"문과"}>문과</MenuItem>
                        <MenuItem value={"이과"}>이과</MenuItem>
                    </Select>
                </FormControl>
                <FormControl className="input">
                    <InputLabel id="demo-simple-select-label">직업</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={job}
                        label="직업"
                        onChange={handleJobChange}
                        required
                    >
                        <MenuItem value={"백수"}>백수</MenuItem>
                        <MenuItem value={"직장인"}>직장인</MenuItem>
                        <MenuItem value={"공무원"}>공무원</MenuItem>
                        <MenuItem value={"학생"}>학생</MenuItem>
                    </Select>
                    <Button className="input" onClick={submitInfo} color="success" variant="contained">회원가입</Button>
                </FormControl>
            </RegisterForm>
        </SignUpContainer>
    )
}

const SignUpContainer = styled.div`
    width:100%;
    height:100%;
    display:flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    .input {
        margin-top:10px;
        margin-bottom:10px;
        width:300px;
    }
`

const RegisterForm = styled.div`
    max-width: 800px;
    width:100%;
    height:100%;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding:80px 0px;

`

const Header = styled.h1`
    margin-bottom:10px;
`

export default SignUpForm;