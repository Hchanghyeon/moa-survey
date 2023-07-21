import { useEffect, useState, useContext } from "react"
import React from "react"
import styled from "styled-components";
import { AppContext } from "../pages/Home";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';



const QuestionsContainer = styled.div`
    display:flex;
    justify-content: space-around;
    align-items: center;
    height:60px;
`

const Questions = () => {
    const [questions, setQuestions] = useState([]);
    const { flag, changeFlag } = useContext(AppContext);

    const getQuestions = async () => {
        await fetch('http://localhost:8080/api/questions', {
            method: 'GET',
        })
            .then(response => response.json())
            .then(data => {
                setQuestions(data);
            })
    }


    useEffect(() => {
        getQuestions();
    }, [flag])


    return (
        <QuestionsContainer>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>number (100g serving)</TableCell>
                            <TableCell align="right">title</TableCell>
                            <TableCell align="right">member</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {questions.map((row, i) => (
                            <TableRow
                                key={row.i}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.i}
                                </TableCell>
                                <TableCell align="right">{row.title}</TableCell>
                                <TableCell align="right">{row.memberNickname}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </QuestionsContainer>
    );

}

export default Questions;