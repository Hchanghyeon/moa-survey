import React from "react";
import styled from "styled-components";
import { Login } from "@mui/icons-material";
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import { Link } from "react-router-dom";

const HeaderContainer = styled.div`
    width:100%;
    border-bottom-style:solid;
    border-bottom-width:1px;
    border-bottom-color: silver;
    padding:0px 10px;
    background-color: white;
`

const HeaderBox = styled.div`
    margin: 0px auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1000px;
    width: 100%;
    height:60px;

    .login {
        font-size:22px;
        font-weight: bold;
        cursor: pointer;
    }

    .signup {
        margin-left:10px;
        font-size:22px;
        font-weight: bold;
        cursor: pointer;
    }

    .link {
        color:#64748b;
        text-decoration: none;
    }
`

const LogoBox = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    height: 100%;
`

const Logo = styled.div`
    font-size:20px;
    font-weight: bold;
    color:black;

`

const ToolTipBox = styled.div`
    display: flex;
    height: 60px;
    justify-content: center;
    align-items: center;
    color: #64748b;

`

const Header = () => {
    return (
        <HeaderContainer>
            <HeaderBox>
                <LogoBox>
                    <Link to="/" className="link"><Logo>MoaSurvey</Logo></Link>
                </LogoBox>
                <ToolTipBox>
                    <Link to="/signin" className="link" ><Login className="login"/></Link>
                    <Link to="/signup" className="link" ><AssignmentIndIcon className="signup"/></Link>
                </ToolTipBox>
            </HeaderBox>
        </HeaderContainer>
    )
}
export default Header;