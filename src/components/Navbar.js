import styled from "styled-components";
import {FiSearch}  from 'react-icons/fi';
import log from '../img/log.png'
import { Button } from "@mui/material";
import {GiHamburgerMenu} from 'react-icons/gi';


export default function Navbar() {
  return (
    <Nav>
        <LogoName>
            <img src={log} alt="" />
        </LogoName>
        <div className="navs" style={{color: 'white'}}>
                <p>Home</p>
                <p>Courses</p>
                <p>instrustors</p>
                <p>Schedules</p>
                <p>Contact Us</p>
        </div>
        <Search>
            <FiSearch style={{marginRight: '3px', color: 'white', fontSize: '1.5rem'}}/>
            <Button  sx={{ textTransform: 'lowercase', color: 'white'}}>Login</Button>
            <Button variant="contained" sx={{bgcolor: 'white', textTransform:"inherit", color: '#FF6F28', padding: '0.5rem 1.5rem', ":hover":{backgroundColor: 'white', color:'#FF6F28'}}} >Register</Button>
        </Search>
    </Nav>
  );
}

const Nav = styled.div`
    top: 0;
    display: flex;
    align-items: center;
    position: absolute;
    width: 100%;
    padding: 1.5rem 7rem;
    justify-content: space-between;
    box-sizing: border-box;

    .navs {
    display: flex;
    align-items: center;
    gap: 3rem;
    font-weight: 600;

    .singleNav {
        display: flex;
        justify-content: start;
        span {
            width: 2rem;
            height:0;
            border-bottom: 2px solid black;
        }
    }
  }
  @media screen and (max-width: 1200px) { 
        padding: 1.5rem 3rem;
    }
    @media screen and (max-width: 1080px) {
        display: none;
    }
`;
const LogoName = styled.div`
    display: flex;
    align-items: center;
    font-size: 0.5rem;
`;
const Search = styled.div`
    display: flex;
    align-items: center;
    box-sizing: border-box;
    gap: 15px;
`;
