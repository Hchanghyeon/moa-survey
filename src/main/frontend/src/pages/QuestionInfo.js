import React, { useContext, useEffect, useState } from "react"
import Header from "../components/Header"
import { useLocation, useParams } from "react-router-dom"
import { styled } from '@mui/material/styles';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { styled as styledComponent } from 'styled-components';
import { CartesianGrid, LineChart, XAxis, YAxis, Tooltip, Legend, Line } from "recharts";
import { AuthContext } from "../components/AuthProvider";

const QuestionContainer = styledComponent.div`
    width:100%;
    height:100%;
    padding:0px 10px;
    display:flex;
    flex-direction: column;
    align-items: center;
`

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




const QuestionInfo = () => {
  const [question, setQuestion] = useState({});
  const [items, setItems] = useState([]);
  const questionId = useParams();
  const [value, setValue] = useState("");
  const [answerArr, setAnswerArr] = useState([]);
  const [genderData, setGenderData] = useState([]);
  const [ageGroupData, setAgeGroupData] = useState([]);
  const [mbtiGroupData, setMbtiGroupData] = useState([]);
  const [bloodTypeGroupData, setBloodTypeGroupData] = useState([]);
  const [departmentGroupData, setDepartmentGroupData] = useState([]);
  const [jobGroupData, setJobtGroupData] = useState([]);
  const { authInfo, updateAuthInfo } = useContext(AuthContext);

  const handleChange = (event) => {
    setValue(event.target.value);
    saveAnswer(event.target.value);
  };

  const getQuestion = async () => {
    await fetch(`http://localhost:8080/api/questions/${questionId.id}`, {
      method: 'GET',
    })
      .then(response => response.json())
      .then(data => {
        setQuestion(data);
        setItems(data.items);
      })
  }

  const saveAnswer = async (itemId) => {

    if (itemId === "") {
      return;
    }

    const credential = {
      itemId: itemId,
    }


    await fetch(`http://localhost:8080/api/answers`, {
      method: 'POST',
      headers: {
        "Content-Type": 'application/json; charset=utf-8;',
        "Authorization": `Bearer ${localStorage.getItem("token")}`
      },
      body: JSON.stringify(credential)
    })
      .then(response => response.json())
      .then(data => {
        getAnswers(itemId);
      })
  }

  const getAnswers = async (itemId) => {
    console.log(itemId);

    if (itemId === "") {
      return;
    }

    await fetch(`http://localhost:8080/api/answers/${itemId}`, {
      method: 'GET',
      headers: {
        "Content-Type": 'application/json; charset=utf-8;',
      }
    })
      .then(response =>
        response.json()
      )
      .then(data => {
        setAnswerArr(data);

        const genderDataSet = [
          {
            "name": "0",
            "인원수": 0,
          },
          {
            "name": "남성",
            "인원수": data.filter((item) => item.memberGender === "MALE").length
          },
          {
            "name": "여성",
            "인원수": data.filter((item) => item.memberGender === "FEMALE").length
          },
        ]

        const ageGroupDataSet = [
          {
            "name": "0",
            "인원수": 0,
          },
          {
            "name": "10대",
            "인원수": data.filter((item) => item.memberAgeGroup === "TEENS").length
          },
          {
            "name": "20대",
            "인원수": data.filter((item) => item.memberAgeGroup === "TWENTIES").length
          },
          {
            "name": "30대",
            "인원수": data.filter((item) => item.memberAgeGroup === "THIRTITES").length
          },
          {
            "name": "40대",
            "인원수": data.filter((item) => item.memberAgeGroup === "FORTIES").length
          },
          {
            "name": "50대",
            "인원수": data.filter((item) => item.memberAgeGroup === "FIFTIES").length
          },
          {
            "name": "60대",
            "인원수": data.filter((item) => item.memberAgeGroup === "SIXTIES").length
          },
        ]
        const mbtiGroupDataSet = [
          {
            "name": "0",
            "인원수": 0,
          },
          {
            "name": "istj",
            "인원수": data.filter((item) => item.memberMbti === "ISTJ").length
          },
          {
            "name": "istp",
            "인원수": data.filter((item) => item.memberMbti=== "ISTP").length
          },
          {
            "name": "isfj",
            "인원수": data.filter((item) => item.memberMbti === "ISFJ").length
          },
          {
            "name": "isfp",
            "인원수": data.filter((item) => item.memberMbti=== "ISFP").length
          },
          {
            "name": "infj",
            "인원수": data.filter((item) => item.memberMbti === "INFJ").length
          },
          {
            "name": "infp",
            "인원수": data.filter((item) => item.memberMbti === "INFP").length
          },
          {
            "name": "intj",
            "인원수": data.filter((item) => item.memberMbti === "INTJ").length
          },
          {
            "name": "intp",
            "인원수": data.filter((item) => item.memberMbti === "INTP").length
          },
          {
            "name": "estp",
            "인원수": data.filter((item) => item.memberMbti=== "ESTP").length
          },
          {
            "name": "esfp",
            "인원수": data.filter((item) => item.memberMbti === "ESFP").length
          },
          {
            "name": "entp",
            "인원수": data.filter((item) => item.memberMbti=== "ENTP").length
          },
          {
            "name": "enfp",
            "인원수": data.filter((item) => item.memberMbti === "ENFP").length
          },
          {
            "name": "estj",
            "인원수": data.filter((item) => item.memberMbti=== "ESTJ").length
          },
          {
            "name": "esfj",
            "인원수": data.filter((item) => item.memberMbti=== "ESFJ").length
          },
          {
            "name": "entj",
            "인원수": data.filter((item) => item.memberMbti=== "ENTJ").length
          },
          {
            "name": "enfj",
            "인원수": data.filter((item) => item.memberMbti=== "ENFJ").length
          },
        ]

        const bloodTypeDataSet = [
          {
            "name": "0",
            "인원수": 0,
          },
          {
            "name": "A형",
            "인원수": data.filter((item) => item.memberBloodType === "A").length
          },
          {
            "name": "B형",
            "인원수": data.filter((item) => item.memberBloodType === "B").length
          },
          {
            "name": "AB형",
            "인원수": data.filter((item) => item.memberBloodType === "AB").length
          },
          {
            "name": "O형",
            "인원수": data.filter((item) => item.memberBloodType === "O").length
          },
        ]

        const departmentDataSet = [
          {
            "name": "0",
            "인원수": 0,
          },
          {
            "name": "문과",
            "인원수": data.filter((item) => item.memberDepartment === "HUMANITIES").length
          },
          {
            "name": "이과",
            "인원수": data.filter((item) => item.memberDepartment === "SCIENCE").length
          },
        ]


        const memberJobDataSet = [
          {
            "name": "0",
            "인원수": 0,
          },
          {
            "name": "백수",
            "인원수": data.filter((item) => item.memberJob === "JOBLESS").length
          },
          {
            "name": "학생",
            "인원수": data.filter((item) => item.memberJob === "STUDENT").length
          },
          {
            "name": "직장인",
            "인원수": data.filter((item) => item.memberJob === "EMPLOYEE").length
          },
        ]

        setGenderData(genderDataSet);
        setAgeGroupData(ageGroupDataSet);
        setMbtiGroupData(mbtiGroupDataSet);
        setBloodTypeGroupData(bloodTypeDataSet);
        setDepartmentGroupData(departmentDataSet);
        setJobtGroupData(memberJobDataSet);
      })




  }

  useEffect(() => {
    getQuestion();
  }, [])


  return (
    <QuestionContainer>
      <Header />
      <Form>
        <div className="Container">
        <h3>설문조사</h3>
        <FormControl>
          <FormLabel id="demo-customized-radios" className='header'>{question.title}</FormLabel>
          <RadioGroup
            defaultValue="female"
            aria-labelledby="demo-customized-radios"
            name="customized-radios"
            value={value}
            onChange={handleChange}
          >

            {
              items && items.map((item, i) => {
                return <FormControlLabel key={i} className="surveyAnswer" value={item.itemId} control={<BpRadio />} label={(i + 1) + '. ' + item.text} />
              })
            }
          </RadioGroup>
        </FormControl>
        <FormWriter>
          <span>작성자</span><b> {question.memberNickname}</b>
        </FormWriter>
        </div>

        <div className="attention">익명은 선택 정보가 반영되지 않습니다. </div>

        {genderData.length > 0 ?
          <>
          <h4>{authInfo.userName ? authInfo.userName : "익명"}님과 동일한 선택을 한 사람의 성별</h4>
            <LineChart width={470} height={250} data={genderData}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="인원수" stroke="#82ca9d" />
            </LineChart>
            <div className="countBox">
              {genderData.map((item, i) => {
                if(i > 0){
                  return <div key={i}>
                    <div><b> {item.name}</b></div>
                    <div style={{'fontSize':'14px'}}> {item.인원수}명</div>
                    </div>
                }
              })}
            </div>
          </> : null
        }



        {ageGroupData.length > 0 ?
          <>      <h4>{authInfo.userName ? authInfo.userName : "익명"}님과 동일한 선택을 한 사람의 나이대</h4>
            <LineChart width={470} height={250} data={ageGroupData}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="인원수" stroke="#8884d8" />
            </LineChart>
            <div className="countBox">
              {ageGroupData.map((item, i) => {
                if(i > 0){
                  return <div key={i}>
                    <div><b> {item.name}</b></div>
                    <div style={{'fontSize':'14px'}}> {item.인원수}명</div>
                    </div>
                }
              })}
            </div>
          </>
          : null
        }

{mbtiGroupData.length > 0 ?
          <>      <h4>{authInfo.userName ? authInfo.userName : "익명"}님과 동일한 선택을 한 사람의 MBTI</h4>
            <LineChart width={470} height={250} data={mbtiGroupData}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="인원수" stroke="#C8707E" />
            </LineChart>
            <div className="countBox">
              {mbtiGroupData.map((item, i) => {
                if(i > 0){
                  return <div key={i}>
                    <div><b> {item.name}</b></div>
                    <div style={{'fontSize':'14px'}}> {item.인원수}명</div>
                    </div>
                }
              })}
            </div>
          </>
          : null
        }

{bloodTypeGroupData.length > 0 ?
          <>      <h4>{authInfo.userName ? authInfo.userName : "익명"}님과 동일한 선택을 한 사람의 혈액형</h4>
            <LineChart width={470} height={250} data={bloodTypeGroupData}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="인원수" stroke="#C09963" />
            </LineChart>
            <div className="countBox">
              {bloodTypeGroupData.map((item, i) => {
                if(i > 0){
                  return <div key={i}>
                    <div><b> {item.name}</b></div>
                    <div style={{'fontSize':'14px'}}> {item.인원수}명</div>
                    </div>
                }
              })}
            </div>
          </>
          : null
        }
                {departmentGroupData.length > 0 ?
          <>      <h4>{authInfo.userName ? authInfo.userName : "익명"}님과 동일한 선택을 한 사람의 학과</h4>
            <LineChart width={470} height={250} data={departmentGroupData}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="인원수" stroke="#E48E58" />
            </LineChart>
            <div className="countBox">
              {departmentGroupData.map((item, i) => {
                if(i > 0){
                  return <div key={i}>
                    <div><b> {item.name}</b></div>
                    <div style={{'fontSize':'14px'}}> {item.인원수}명</div>
                    </div>
                }
              })}
            </div>
          </>
          : null
        }
        {jobGroupData.length > 0 ?
          <>      <h4>{authInfo.userName ? authInfo.userName : "익명"}님과 동일한 선택을 한 사람의 직업</h4>
            <LineChart width={470} height={250} data={jobGroupData}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="인원수" stroke="#5AA08D" />
            </LineChart>
            <div className="countBox">
              {jobGroupData.map((item, i) => {
                if(i > 0){
                  return <div key={i}>
                    <div><b> {item.name}</b></div>
                    <div style={{'fontSize':'14px'}}> {item.인원수}명</div>
                    </div>
                }
              })}
            </div>
          </>
          : null
        }
      </Form>


    </QuestionContainer>
  )
}




export default QuestionInfo;

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

    .Container {
      width:100%;
      border-style:solid;
      border-width:1px;
      border-radius:15px;
      padding: 10px 20px;
      border-color:silver;
    }

    .countBox {
      width:100%;
      display:flex;
      justify-content:space-around;
      align-items:center;
      border-style:solid;
      border-width:1px;
      border-color:silver;
      border-radius: 10px;
      height:60px;
      padding: 10px 0px;
      marin-top:20px;
      margin-bottom:20px;
    }
    .attention {
      color:#ff8383;
      margin:10px 0px;
    }
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
