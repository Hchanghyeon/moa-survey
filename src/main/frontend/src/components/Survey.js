import * as React from 'react';
import { styled } from '@mui/material/styles';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import {styled as styledComponent} from 'styled-components';

const Form = styledComponent.div`
    margin-top:20px;
    max-width: 470px;
    width:100%;
    height:200px;
    display: flex;
    padding:10px 30px;
    border-radius:15px;
    align-items:flex-start;
    justify-content:flex-start;
    flex-direction:column;
    background-color:white;
`

const FormContainer = styledComponent.div`
    max-width:800px;
    width:100%;
    padding: 0px 10px;
    display:flex;
    flex-direction:column;
    align-items:center;
    color:#F0F0F0;

    .header {
        font-weight:bold;
        margin-bottom:10px;
        color:black;
    }
    .surveyAnswer {
        color:black;
    }
`

const FormWriter = styledComponent.div`
    color:silver;
    width:100%;
    height:20px;
    font-size:13px;
    text-align:right;
`

const BpIcon = styled('span')(({ theme }) => ({
  borderRadius: '50%',
  width: 16,
  height: 16,
  boxShadow:
    theme.palette.mode === 'dark'
      ? '0 0 0 1px rgb(16 22 26 / 40%)'
      : 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
  backgroundColor: theme.palette.mode === 'dark' ? '#394b59' : '#f5f8fa',
  backgroundImage:
    theme.palette.mode === 'dark'
      ? 'linear-gradient(180deg,hsla(0,0%,100%,.05),hsla(0,0%,100%,0))'
      : 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
  '.Mui-focusVisible &': {
    outline: '2px auto rgba(19,124,189,.6)',
    outlineOffset: 2,
  },
  'input:hover ~ &': {
    backgroundColor: theme.palette.mode === 'dark' ? '#30404d' : '#ebf1f5',
  },
  'input:disabled ~ &': {
    boxShadow: 'none',
    background:
      theme.palette.mode === 'dark' ? 'rgba(57,75,89,.5)' : 'rgba(206,217,224,.5)',
  },
}));

const BpCheckedIcon = styled(BpIcon)({
  backgroundColor: '#137cbd',
  backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
  '&:before': {
    display: 'block',
    width: 16,
    height: 16,
    backgroundImage: 'radial-gradient(#fff,#fff 28%,transparent 32%)',
    content: '""',
  },
  'input:hover ~ &': {
    backgroundColor: '#106ba3',
  },
});

// Inspired by blueprintjs
function BpRadio(props) {

  return (
    <Radio
      disableRipple
      color="default"
      checkedIcon={<BpCheckedIcon />}
      icon={<BpIcon />}
      {...props}
    />
  );
}

export default function Survey() {

    const data = [
        {id: 1, title:"오늘 저녁으로 먹기 좋은 것은?",one:"탕수육",two:"짜장면",three:"짬뽕",four:"파스타", writer:"황창구리"},
        {id: 2, title:"오늘 저녁에 할 운동은?",one:"농구",two:"축구",three:"탁구",four:"배드민턴", writer:"황창구리"},
        {id: 3, title:"오늘 할일?",one:"공부",two:"운동",three:"친구만나기",four:"게임하기", writer:"홍구리"}
    ]

    const [value, setValue] = React.useState();

    const handleChange = (event) => {
      setValue(event.target.value);
      console.log(event.target.value);
    };


  return (
    <FormContainer>
        {
            data.map((item) => {
                return <Form key={item.id}>
                <FormControl>
                    <FormLabel id="demo-customized-radios" className='header'>{item.title}</FormLabel>
                    <RadioGroup
                        defaultValue="female"
                        aria-labelledby="demo-customized-radios"
                        name="customized-radios"
                        value={value}
                        onChange={handleChange}
                    >
                        <FormControlLabel className="surveyAnswer" value={item.one} control={<BpRadio />} label={item.one} />
                        <FormControlLabel className="surveyAnswer" value={item.two} control={<BpRadio />} label={item.two} />
                        <FormControlLabel className="surveyAnswer" value={item.three} control={<BpRadio />} label={item.three} />
                        <FormControlLabel className="surveyAnswer" value={item.four} control={<BpRadio />} label={item.four} />
                    </RadioGroup>
                </FormControl>
                <FormWriter>
                        <span>작성자</span><b> {item.writer}</b>
                </FormWriter>
            </Form>
            })
        }
    </FormContainer>
  );
}

