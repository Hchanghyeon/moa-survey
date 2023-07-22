import React, {useContext, useEffect, useState} from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import styled from 'styled-components';
import Header from './Header';
import { AppContext } from '../pages/Home';

const QuestionForm = () => {
    const [open, setOpen] = useState(false);
    const [title, setTitle] = useState("");
    const [item1, setItem1] = useState("");
    const [item2, setItem2] = useState("");
    const [item3, setItem3] = useState("");
    const [item4, setItem4] = useState("");
    const { flag, changeFlag } = useContext(AppContext);


    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    const handleSubmit = () => {
        const credential = {
            title,
            items: [item1, item2, item3, item4]
        }

        fetch('http://localhost:8080/api/questions', {
            method: 'POST',
            headers: {
                "Content-Type": 'application/json; charset=utf-8;',
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            },
            body: JSON.stringify(credential)
        })
            .then(response => response.json())
            .then(data => { 
                console.log(data);
                changeFlag(!flag);
            })
            .catch(error => alert(error));

            
        setOpen(false);
    }

    const titleHandler = (event) => {
        setTitle(event.target.value);
    }

    const item1Handler = (event) => {
        setItem1(event.target.value);
    }

    const item2Handler = (event) => {
        setItem2(event.target.value);
    }

    const item3Handler = (event) => {
        setItem3(event.target.value);
    }

    const item4Handler = (event) => {
        setItem4(event.target.value);
    }

  
    return (
      <div>
        <Button variant="outlined" onClick={handleClickOpen}>
          글 작성
        </Button>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            질문지를 작성해주세요.
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
                <Container>
              <HeaderText>질문 제목</HeaderText>
              <InputHeader name="title" onChange={titleHandler} type="text" placeholder="제목을 입력해주세요"></InputHeader>
              <SubText>질문 문항</SubText>
              <div><b>1.</b> <InputText name="item1" onChange={item1Handler} type="text" placeholder="첫번째 문항을 입력해주세요"></InputText></div>
              <div><b>2.</b> <InputText name="item2" onChange={item2Handler} type="text" placeholder="두번째 문항을 입력해주세요"></InputText></div>
              <div><b>3.</b> <InputText name="item3" onChange={item3Handler} type="text" placeholder="세번째 문항을 입력해주세요"></InputText></div>
              <div><b>4.</b> <InputText name="item4" onChange={item4Handler} type="text" placeholder="네번째 문항을 입력해주세요"></InputText></div>
              </Container>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>취소</Button>
            <Button onClick={handleSubmit} autoFocus>
                작성
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
}

export default QuestionForm

const HeaderText = styled.div`
margin-bottom:10px;
`

const SubText = styled.div`
margin-bottom:10px;
`

const Container = styled.div`
display:flex;
justify-content: center;
align-items: center;
flex-direction: column;
`

const InputHeader = styled.input`
width:300px;
height:40px;
border-radius: 4px;
border-style: solid;
border-width: 1px;
border-color: silver;
padding-left:10px;
`

const InputText = styled.input`
margin-bottom:5px;
width:300px;
height:40px;
border-radius: 4px;
border-style: solid;
border-width: 1px;
border-color: silver;
padding-left:10px;
`