import React from 'react';
import {Button, ButtonGroup, CardContent, Container, makeStyles, MenuItem, Select, TextField, Typography} from '@mui/material';
import {AiOutlineStar} from 'react-icons/ai'
import {TbUsers} from 'react-icons/tb'
import {FaChevronDown} from 'react-icons/fa';
import {FiChevronLeft} from 'react-icons/fi';
import {FiChevronRight} from 'react-icons/fi';
import {FaLinkedinIn} from 'react-icons/fa';
import {BsInstagram} from 'react-icons/bs';
import {BsFacebook} from 'react-icons/bs';
import {AiFillTwitterCircle} from 'react-icons/ai';
import log from '../img/log.png';
import Navbar from './Navbar';
import header from '../img/header.png';
import v1 from '../img/v1.png'
import v2 from '../img/v2.png'
import v3 from '../img/v3.png';
import cat1 from '../img/cat1.png';
import cat2 from '../img/cat2.png';
import cat3 from '../img/cat3.png';
import cat4 from '../img/cat4.png';
import line from '../img/line.png';
import smallExpert from '../img/smallExpert.png';
import expertBack from '../img/expertBack.png';
import expert from '../img/expert.png';
import course1 from '../img/course1.png';
import course2 from '../img/course2.png';
import course3 from '../img/course3.png';
import course4 from '../img/course4.png';
import course5 from '../img/course5.png';
import course6 from '../img/course6.png';
import public1 from '../img/public1.png';
import public2 from '../img/public2.png';
import public3 from '../img/public3.png';
import public4 from '../img/public4.png';
import compet1 from '../img/compet1.png';
import compet2 from '../img/compet2.png';
import compet3 from '../img/compet3.png';
import compet4 from '../img/compet4.png';
import publications from '../img/publications.png';
import reader from '../img/reader.png';
import av1 from '../img/av1.png';
import av2 from '../img/av2.png';
import conte from '../img/conte.png';

import form2 from '../img/form2.png';
import increase from '../img/increase.png';
import formPic from '../img/formPic.png';
import examination from '../img/examination.png';
import styled from 'styled-components';
import Sidebar from './Sidebar';






export default function Landing() {
 
  return (
   <div>
    <Section1>
      <Navbar />
      <div className="sidebar">
        <Sidebar />
      </div>
      <Heading>
        <h1 className="header1" >A Classical Education for the Future</h1>
        <p className="header2">We prepare you to engage in the world that is and to help bring about a world that ought to be</p>
        <Button variant="contained" sx={{bgcolor: '#FF6F28', textTransform:"inherit", color: 'white', padding: '1rem 3rem', margin:'auto', marginTop:'3rem', ":hover":{backgroundColor: 'white', color:'#FF6F28'} }} >Get Started</Button>
      </Heading>
      <Ads>
        <div className='v1'>
          <div className='cover'><img src={v1} alt="" /></div>
          <p>Live chat</p>
        </div>
        <div className='v1'>
          <div className='cover'><img src={v2} alt="" /></div>
          <p>Examination</p>
        </div>
        <div className='v1 box3'>
          <div className='cover'><img src={v3} alt="" /></div>
          <p>Competition</p>
        </div>
      </Ads>
    </Section1>
    <Section2>
      <h1>Top cartegories</h1>
      <p>See all</p>
      
      <ImgDiv>
        <div className='imgCard imgCard1'>
          <img src={cat2} alt="" />
        </div>
        <div className='imgCard'>
          <img src={cat2} alt="" />
          
        </div>
        <div className='imgCard'>
          <img src={cat3} alt="" />
         
        </div>
        <div className='imgCard'>
          <img src={cat4} alt="" />
          
        </div>
      </ImgDiv>
    </Section2>
    <Section3>
    <ImgDiv2>
        <img src={expert} alt="" />
        <div className='smallExpert'>
          <img src={smallExpert} alt="" />
        </div>
     </ImgDiv2>
      <Dam>
      <div className='expert'>
        <h1>We are</h1> 
        <span className='expertLine'>
          <h1>Expert</h1>
          <span className='line'><img src={line} alt="" /></span>
        </span>
      </div>
        <div className='secondHead'>
          <h1>Learning Institution</h1>
        </div>
        <p className='desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit elit, bibendum volutpat platea mi, adipiscing eget magna. Eu nulla ut urna venenatis velit et tincidunt. Id vitae velit </p>
        <Button variant="contained" sx={{bgcolor: '#FF6F28', textTransform:"inherit", color: 'white', padding: '1rem 3rem', margin:'auto', marginTop:'5rem', ":hover":{backgroundColor: 'white', color:'#FF6F28'} }} >Enroll now</Button>
      </Dam>
    </Section3>
    <Section4>
    <h1 className='marketHead'>Explore Our Porpular Courses</h1>
    <div className='sortBy'>
      <div className="sortByButt">
       <FaChevronDown />
        <p>Sort by</p>
      </div>
    </div>
    <Learn>
    <Card>
        <CardImg>
          <img src={course1} alt="" />
        </CardImg>
        <DescCard>
          <p className='cardhead'>Learn Marketing from Top Instructors.</p>
          <div className='rating'>
            <AiOutlineStar style={{color: '#F77E23'}} />
            <p>4.5</p>
          </div>
        </DescCard>
        <Duration>
            <p>6 weeks</p>
          <div className='stud'>
            <p><TbUsers style={{color: '#F77E23'}}/></p>
            <p>1.5k Students</p>
          </div>
          <p className='price'>30.5$</p>
        </Duration>
      </Card>
      <Card>
        <CardImg>
          <img src={course2} alt="" />
        </CardImg>
        <DescCard>
          <p className='cardhead'>Front-end development is not hard as you think </p>
          <div className='rating'>
            <AiOutlineStar style={{color: '#F77E23'}} />
            <p>4.5</p>
          </div>
        </DescCard>
        <Duration>
            <p>6 weeks</p>
          <div className='stud'>
            <p><TbUsers style={{color: '#F77E23'}}/></p>
            <p>1.5k Students</p>
          </div>
          <p className='price'>30.5$</p>
        </Duration>
      </Card>
      <Card>
        <CardImg>
          <img src={course3} alt="" />
        </CardImg>
        <DescCard>
          <p className='cardhead'>Everything you need to know in UX</p>
          <div className='rating'>
            <AiOutlineStar style={{color: '#F77E23'}} />
            <p>4.5</p>
          </div>
        </DescCard>
        <Duration>
            <p>6 weeks</p>
          <div className='stud'>
            <p><TbUsers style={{color: '#F77E23'}}/></p>
            <p>1.5k Students</p>
          </div>
          <p className='price'>30.5$</p>
        </Duration>
      </Card>
      <Card>
        <CardImg>
          <img src={course4} alt="" />
        </CardImg>
        <DescCard>
          <p className='cardhead'>Learn photography with ease.</p>
          <div className='rating'>
            <AiOutlineStar style={{color: '#F77E23'}} />
            <p>4.5</p>
          </div>
        </DescCard>
        <Duration>
            <p>6 weeks</p>
          <div className='stud'>
            <p><TbUsers style={{color: '#F77E23'}}/></p>
            <p>1.5k Students</p>
          </div>
          <p className='price'>30.5$</p>
        </Duration>
      </Card>
      <Card>
        <CardImg>
          <img src={course5} alt="" />
        </CardImg>
        <DescCard>
          <p className='cardhead'>Be a pro in data analysis</p>
          <div className='rating'>
            <AiOutlineStar style={{color: '#F77E23'}} />
            <p>4.5</p>
          </div>
        </DescCard>
        <Duration>
            <p>6 weeks</p>
          <div className='stud'>
            <p><TbUsers style={{color: '#F77E23'}}/></p>
            <p>1.5k Students</p>
          </div>
          <p className='price'>30.5$</p>
        </Duration>
      </Card>
      <Card>
        <CardImg>
          <img src={course6} alt="" />
        </CardImg>
        <DescCard>
          <p className='cardhead'>Ethical Harking is not hard as you think </p>
          <div className='rating'>
            <AiOutlineStar style={{color: '#F77E23'}} />
            <p>4.5</p>
          </div>
        </DescCard>
        <Duration>
            <p>6 weeks</p>
          <div className='stud'>
            <p><TbUsers style={{color: '#F77E23'}}/></p>
            <p>1.5k Students</p>
          </div>
          <p className='price'>30.5$</p>
        </Duration>
      </Card>
    </Learn>
      
    </Section4>
    <Section5>
      <Onlin>
        <h1 className='onHead'>Our online <span style={{color: '#F77E23'}}>examination</span>  is top-notch</h1>
        <p className='desc2'>Prepare your self for greater challenges with our online examination.</p> 
        <Button className="mui" variant="contained" sx={{bgcolor: '#FF6F28', textTransform:"inherit", color: 'white', padding: '1rem 3rem', margin: 'auto' , marginTop:'3rem', ":hover":{backgroundColor: 'white', color:'#FF6F28'} }} >Enroll now</Button>
      </Onlin>
      <ImgDiv3>
        <img src={examination} alt="" />
        <div className='smallExpert2'>
          <img src={increase} alt="" />
        </div>
     </ImgDiv3>
    </Section5>
    <Section6>
    <h1 className='secHead'>Popular Examinations</h1>
      <div className='seeAllDiv'>
      <p className='seeAll'>See all</p>
      <ImgDiv>
        <div className='imgCard imgCard1'>
          <img src={public1} alt="" />
        </div>
        <div className='imgCard'>
          <img src={public2} alt="" />
          
        </div>
        <div className='imgCard'>
          <img src={public3} alt="" />
         
        </div>
        <div className='imgCard'>
          <img src={public4} alt="" />
          
        </div>
      </ImgDiv>
      <h1 className='secHead'>Compete with various scholars <br /> around the globe</h1>
      </div>
    </Section6>
    <Section7>
      <div className='imgDiv7'>
      <ImgDiv4>
        <img src={formPic} alt="" />
        <div className='form2'>
          <img src={form2} alt="" />
        </div>
     </ImgDiv4>
      </div>
      <div className="textFieldDiv">
        <p>Registration to get notified about new competition and article we publish.</p>
        <TextField label="Full name" fullWidth  sx={{bgcolor: '#FAFAFC', marginTop: '2.5rem'}}/>
        <TextField label="Email" fullWidth sx={{bgcolor: '#FAFAFC', marginTop: '2rem'}} />
        <TextField label="Phone Number" fullWidth sx={{bgcolor: '#FAFAFC', marginTop: '2rem'}} />
        <TextField label='List of courses goes here' fullWidth select sx={{bgcolor: '#FAFAFC', fontWeight: '500',marginTop: '2rem'}}>
          <MenuItem value="">Frontend Engineering</MenuItem>
          <MenuItem value="">UI/UX Designer</MenuItem>
          <MenuItem value="">Ethical Hacking</MenuItem>
          <MenuItem value="">Data Engineer</MenuItem>
        </TextField>
        <Button variant="contained" sx={{bgcolor: '#FF6F28', textTransform:"inherit", color: 'white', padding: '0.7rem 3rem',  marginLeft:'auto', marginTop:'5rem', display:'block', ":hover":{backgroundColor: '#FF6F28', color:'white'} }} >Register</Button>
      </div>
    </Section7>
    <Section8>
    <h1>Featured Competition</h1>
      <p>See all</p>
      
      <ImgDiv>
        <div className='imgCard imgCard1'>
          <img src={compet1} alt="" />
        </div>
        <div className='imgCard'>
          <img src={compet2} alt="" />
          
        </div>
        <div className='imgCard'>
          <img src={compet3} alt="" />
         
        </div>
        <div className='imgCard'>
          <img src={compet4} alt="" />
          
        </div>
      </ImgDiv>
    </Section8>
    <Section9>
    <Onlin className='kamm'>
        <h1 className='onHead'> Get <span style={{color: '#F77E23'}}>Publications</span> from best Autors around the  Globe</h1>
        <p className='desc2'>Lorem ipsum dolor sit at, consectetur adipielit. Facilisi fermentum, dignissim pharetra.  pharetra. Aliquam </p> 
        <Button className="mui" variant="contained" sx={{bgcolor: '#FF6F28', textTransform:"inherit", color: 'white', padding: '1rem 3rem', margin: 'auto' , marginTop:'3rem', ":hover":{backgroundColor: 'white', color:'#FF6F28'} }} >Enroll now</Button>
      </Onlin>
      <ImgDiv3>
        <img src={publications} alt="" />
        <div className='smallExpert4'>
          <img src={reader} alt="" />
        </div>
     </ImgDiv3>
    </Section9>
    <Section10>
    <h1 className='secHead10'>Recent Publications</h1>
      <div className='seeAllDiv10'>
      <p className='seeAll10'>See all</p>
      <ImgDiv>
        <div className='imgCard10'>
          <img src={public1} alt="" />
        </div>
        <div className='imgCard10'>
          <img src={public2} alt="" />
          
        </div>
        <div className='imgCard10'>
          <img src={public3} alt="" />
         
        </div>
        <div className='imgCard10'>
          <img src={public4} alt="" />
          
        </div>
      </ImgDiv>
      </div>
    </Section10>
    <Section11>
      <h1 style={{fontSize: '2rem', textAlign: 'center',  marginBottom: '6rem'}}>Review</h1>
    <div className="cont">
    <div className='navStud'>
      <div>
        <h1>What Our</h1>
        <div className='studDivL'>
          <div className='lineStudDiv'>
            <h1>Students</h1>
            <img src={line} alt="" />
          </div>
          <h1 className="say">Say</h1>
        </div>
        <h1>About Us</h1>
      </div>
      <Chevron>
        <span className="chev chev1"><FiChevronLeft /></span>
        <span className="chev chev2"><FiChevronRight /></span> 
      </Chevron>
      </div>
      <div className='text-divs'>
      <div className='review-sec'>
        <AvatarReview>
        <div className="avName">
          <img src={av1} alt="" />
        </div>
        <div className="rname">
           <h5 >Mohh Jumah</h5>
           <small >Senior Developer</small>
        </div>
        </AvatarReview>
        <div className='comment' style={{  marginTop: '1rem'}}>
          <small>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur ac blandit nam massa massa elementum mollis lectus. Sit ultricies nisl amet non, quis enim velit tempus. Interdum duis imperdiet venenatis 
          </small>
        </div>
      </div>
      <div className='review-sec'>
        <AvatarReview>
        <div className="avName">
          <img src={av2} alt="" />
        </div>
        <div className="rname">
           <h5>John Mark</h5>
           <small>Data Analyst</small>
        </div>
        </AvatarReview>
        <Comment className='comment' style={{  marginTop: '1rem'}}>
          <small >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur ac blandit nam massa massa elementum mollis lectus. Sit ultricies nisl amet non, quis enim velit tempus. Interdum duis imperdiet venenatis 
          </small>
        </Comment>
      </div>
      </div>
      </div>
    </Section11>
    <Footerr>
      <div className="foot-resp">
    <div className='firstLine'>
      <div className='log-mot'>
      <div className='nam'>
        <img src={log} alt="" />
        <p className="moto">
          We are not here to sell you products, we sell value through our expertise.
        </p>
        <div className="socials">
          <BsFacebook />
          <AiFillTwitterCircle />
          <BsInstagram />
          <FaLinkedinIn />
        </div>
      </div>
      </div>
      <div className='firstLinB'>
      <div>
        <p style={{fontWeight: '600'}}>Address</p>
        <p>Address:38 opebi Road, Ikeja, Lagos State, Nigeia.</p>
        <p style={{marginTop: '1rem', fontWeight: '600'}}>Phone</p>
        <p>+2349022396389</p>
        <p style={{marginTop: '1rem', fontWeight: '600'}}>Company</p>
        <p>contact@contentionary.com</p>
      </div>
      <div>
        <p style={{marginBottom: '1rem', fontWeight: '600'}}>Company</p>
        <p style={{marginTop: '1rem'}}>About Us</p>
        <p style={{marginTop: '1rem'}}>Feautures</p>
        <p style={{marginTop: '1rem'}}>Pricing</p>
      </div>
      </div>
      </div>
      <SubLine>
        <p className="subscribe">Subscribe to get latest updates</p>
        <div className='sub-inpu'>
          <input type="text" placeholder='You Email address' />
          <Button variant="contained" sx={{bgcolor: '#FF7E23', borderRadius:0, textTransform:"inherit", color: 'white', height:'100%', padding: '0.8rem 2.1rem', ":hover":{backgroundColor: 'white', color:'#FF6F28'} }} >Subscribe</Button>
        </div>
      </SubLine>
      </div>
      <LastMan>
        <img src={conte} alt="" />
        <p>Powered By Contentionary</p>
      </LastMan>
    </Footerr>
   </div>
  );
}


const Section1 = styled.div`
  background: url(${header}) no-repeat center;
  background-size: cover;
  box-sizing: border-box;
  height: 100vh;
  top: 0;
  position: relative;
  box-sizing: border-box;
  @media screen and (max-width: 550px) {
    height: 79vh;
    }

  .sidebar{
    display: none;

    @media screen and (min-width: 280px) and (max-width: 1080px) {
      display: contents;
    }

  }
`;
const Heading = styled.div`
  text-align: center;
  color: white;
  min-width: 40%;
  margin-left: 50%;
  transform: translateX(-50%);
  position: absolute;
  margin-top: 13rem;
  align-items: center;
  @media screen and (max-width: 1080px) {
    min-width: 70%;
    }
    @media screen and (max-width: 780px) {
      min-width: 80%;
      margin-top: 5rem;
    }
    @media screen and (max-width: 550px) {
      min-width: 95%;
      
    }

  .header1 {
    font-size: 4rem;
    @media screen and (max-width: 1080px) {
      font-size: 3rem;
    }
    @media screen and (max-width: 1080px) {
      font-size: 2rem;
    }
  }
  .header2 {
    font-size: 1.4rem;
    padding: 0 5rem;
    margin-top: 2rem;
    @media screen and (max-width: 1080px) {
    padding: 0 3rem;
    }
    @media screen and (max-width: 780px) {
      min-width: 80%;
      margin-top: 5rem;
      font-size: 1.4rem;
      padding: 0 1.3rem;
    }
    @media screen and (max-width: 550px) {
      min-width: 90%;
      font-size: 1rem;
      padding: 0 1rem;
      margin-top: 1.2rem;
    }
  }
`;
const Ads = styled.div`
  display: flex;
  position: absolute;
  width: fit-content;
  margin-left: 50%;
  transform: translateX(-50%);
  margin-top: -4rem;
  justify-content: center;
  align-items: center;
  top: 100%;
  gap: 3rem;
  background-color: white;
  padding: 2rem 8rem;
  border-radius: .7rem;
  @media screen and (max-width: 550px) {
      position: relative;
      flex-wrap: wrap;
      margin-top: 0;
      display: grid;
      padding: 1rem;
      grid-template-columns: 1fr 1fr;
      gap: 1rem;
      padding-top: 0;
      margin-top: -1rem;
    }
    .box3 {
      grid-column-start: 1;
      grid-column-end: 3;
      justify-self: center;
    }
  .v1{
    display: flex;
    color: black;
    font-size: 1.4rem;
    align-items: center;
    gap: 1.4rem;
    white-space: nowrap;
    @media screen and (max-width: 550px) {
      gap: 0.7rem;
    }
    
    .cover {
      padding: 0.8rem;
      background-color: #FFE7DB;
      border-radius: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    
      @media screen and (max-width: 550px) {
      padding: 0.5rem;
    }
    }
    @media screen and (max-width: 550px) {
      p {
        font-size: 1.2rem;
      }
    }
  }
`;


const Section2 = styled.div`
padding: 4rem 10%;
display: flex;
flex-direction: column;
@media screen and (max-width: 550px) {
      margin-top: 8rem;
      padding: 4rem 1rem;
    }
  h1 {
    margin-top: 8rem;
    text-align: center;
    font-size: 2.5rem;
    margin-bottom: 5rem;
    @media screen and (max-width: 800px) {
      font-size: 1.5rem;
    }
    @media screen and (max-width: 550px) {
      margin-top: 2rem;
      margin-bottom: 0;
    }
  }
  p {
    text-align: right;
    color: var(--color-primary);
    font-size: 1.3rem;
    padding: 2rem;
  }
`;
const ImgDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2.5rem;
  margin-bottom: 4rem;
  width: 100%;
  box-sizing: border-box;
  @media screen and (max-width: 600px) {
      gap: 0.8rem;
    }
  .imgCard1 {
    @media screen and (max-width: 1327px) {
     padding-left: 30rem;
    }
  }
  @media screen and (max-width: 1327px) {
      overflow-x: scroll;
      ::-webkit-scrollbar {
      display: none;
    }
    }
    img {
      @media screen and (max-width: 600px) {
      width: 13rem;
    }
    }
`;


const Section3 = styled.div`
  background: url(${expertBack}) no-repeat center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5rem;
  padding: 4rem 12rem;
  @media screen and (max-width: 975px) {
      flex-direction: column;
    }
    @media screen and (max-width: 846px) {
      padding: 4rem;
    }
    @media screen and (max-width: 500px) {
      padding: 4rem 1rem;
    }
  .expert{
    display: flex;
    gap: 0.8rem;
    @media screen and (max-width: 846px) {
      justify-content: center;
    }
    h1 {
    display: flex;
    font-size: 3.5rem;
    @media screen and (max-width: 500px) {
      font-size: 2rem;
    }
  }
    .expertLine {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      h1{
        color: #F77E23;
        @media screen and (max-width: 500px) {
          font-size: 2rem;
    }
      }
      .line {
        margin-top: -8px;
       img {
        @media screen and (max-width: 500px) {
          width: 7rem;
        }
       }
      }
     
      }
    }
`;

const Dam = styled.div`
@media screen and (max-width: 846px) {
      text-align: center;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
position: relative;
     .secondHead {
        h1{
        font-size: 3.5rem;
        margin-top: -1rem;
        @media screen and (max-width: 500px) {
      text-align: center;
      font-size: 2rem;
    }
      }
    }
    .desc {
      font-size: 1.4rem;
      margin-top: 2rem;
      @media screen and (max-width: 500px) {
      font-size: 1rem;
    }
    }
`;

const ImgDiv2 = styled.div`
  img {
    @media screen and (max-width: 846px) {
     width: 100%;
    }
  }
  .smallExpert {
    position: absolute;
    margin-top: -20rem;
    margin-left: 3rem;
    @media screen and (max-width: 846px) {
     display: none;
    }
    @media screen and (max-width: 500px) {
      display: inline;
    }
  }
`;


const Section4 = styled.div`
  padding: 3rem 10rem;
  @media screen and (max-width: 1200px) {
    padding: 3rem 4rem;
    }
    @media screen and (max-width: 720px) {
    padding:  3rem 1rem;
    }
  .marketHead {
    font-size: 2.5rem;
    text-align: center;
    margin-bottom: 3rem;
    @media screen and (max-width: 1200px) {
    font-size: 1.5rem;
    }
    
  }
  .sortBy {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
  .sortByButt {
    width: fit-content;
    display: flex;
    align-items: center;
    gap: 0.6rem;
    font-weight: 500;
    padding: 0.5rem 1rem;
    background-color: var(--color-primary);
    color: white;
    border-radius: 5rem;
  }
`;
const Learn = styled.div`
  display: grid;
  padding: 2rem 0;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;
  @media screen and (max-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    }
    
`;
const Card = styled.div`
  border-radius: 0.7rem;
  overflow: hidden;
`;
const CardImg = styled.div`
  width: 100%;
  img {
    width: 100%;
    object-fit: cover;
  }
`;
const DescCard = styled.div`
  display: flex;
  padding: 0.5rem 1rem;
  align-items: flex-start;
  gap: 0.2rem;
  .cardhead {
    font-size: 1.4rem;
    font-weight: 500;
    @media screen and (max-width: 1200px) {
    font-size: 1rem;
    }
    @media screen and (max-width: 800px) {
    font-size: 0.7rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    }
    @media screen and (max-width: 800px) {
    align-items: center;
    }
  }
  .rating {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2em;
    @media screen and (max-width: 1200px) {
    font-size: 0.8rem;
    }
    @media screen and (max-width: 800px) {
    font-size: 0.6rem;
    }
  }
`;
const Duration = styled.div`
  font-weight: 500;
  display: flex;
  margin-top: 1.5rem;
  margin-bottom: 1rem;
  align-items: center;
  width: 100%;
  gap: 1.5rem;
  padding: 0.5rem 1rem;
  box-sizing: border-box;
  .stud {
    display: flex;
    align-items: center;
    gap: 0.6rem;
  }
  .price {
    margin-left: auto;
  }
  p {
    @media screen and (max-width: 1200px) {
    font-size: 0.6rem;
    }
  }
`;


const Section5 = styled.div`
  display: flex;
  background: url(${expertBack}) no-repeat center;
  background-size: cover;
  justify-content: center;
  align-items: center;
  padding: 1rem 15rem;
  gap : 8rem;
  @media screen and (max-width: 975px) {
      flex-direction: column-reverse;
      gap: 4rem;
    }
    @media screen and (max-width: 846px) {
      padding: 4rem;
    }
    @media screen and (max-width: 500px) {
      padding: 4rem 1rem;
    }
`;
const Onlin = styled.div`
  display:flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items:flex-start;
  .mui {
    margin-left: 0;
    @media screen and (max-width: 500px) {
      margin: 2rem auto;
    }
  }
  @media screen and (max-width: 500px) {
      text-align: center;
    }
  .onHead {
    font-size: 3.5rem;
    @media screen and (max-width: 1200px) {
    font-size: 2rem;
    } 
  }
  .desc2{
    font-size: 1.4rem;
    margin-top: 1rem;
    @media screen and (max-width: 1200px) {
    font-size: 1rem;
    }
  }
`;
const ImgDiv3 = styled.div`
img{
  @media screen and (max-width: 500px) {
      width: 90%;
      margin: auto;
    }
}
  display: flex;
  .smallExpert2 {
    position: absolute;
    margin-top: 15rem;
    margin-left: -7rem;
    @media screen and (max-width: 500px) {
      margin-top: 10rem;
    margin-left: -3rem;
    }
  }
`;


const Section6 = styled.div`
  padding: 4rem 8rem;
h1 {
  @media screen and (max-width: 800px) {
      font-size: 1.5rem;
    }
}
  @media screen and (max-width: 1300px) {
      padding: 4rem 4rem;
    }
    @media screen and (max-width: 500px) {
      padding: 4rem 1rem;
    }
.secHead {
  text-align: center;
  margin-bottom: 2rem;
  font-size: 2.5rem;
  @media screen and (max-width: 800px) {
      font-size: 1.5rem;
    }
}
.seeAllDiv {
  display: flex;
  flex-direction: column;
  .seeAll {
    color: var(--color-primary);
    font-size: 1.4rem;
    text-align: right;
    @media screen and (max-width: 800px) {
      font-size: 1rem;
    }
  }
}
.imgCard {
    img {
      border-radius: 1rem;
    }
    .imgCard1 {
      @media screen and (max-width: 1327px) {
      padding-left: 30rem;
    }
    }
   }


`;


const Section7 = styled.div`
  display: flex;
  background: url(${expertBack}) no-repeat center;
  background-size: cover;
  align-items: center;
  justify-content: center;
  padding: 3rem 5rem;
  @media screen and (max-width: 550px) {
      padding: 3rem 1rem;
    }
  gap: 9rem;
  @media screen and (max-width: 1276px) {
      flex-direction: column;
    }
  .textFieldDiv {
    width: 32%;
    padding: 2rem 2.5rem;
    border-radius: 0.8rem;
    background: white;
    box-sizing: border-box;
    height: fit-content;
    box-shadow: 0px 0px 25px rgba(17, 24, 39, 0.18);
    @media screen and (max-width: 1276px) {
      width: 60%;
    }
    @media screen and (max-width: 800px) {
      width: 100%;
    }
    @media screen and (max-width: 600px) {
      padding: 2rem 0;
      background: none;
      border: none;
      box-shadow: none;
    }

    p {
      text-align: center;
    }
  }
`;
const ImgDiv4 = styled.div`
  display: flex;
  .form2 {
    position: absolute;
    margin-top: 10rem;
    margin-left: 17rem;
  }
  img {
    @media screen and (max-width: 550px) {
      width: 100%;
    }
  }
`;


const Section8 = styled.div`
  padding: 4rem 10%;
  display: flex;
  flex-direction: column;
  h1 {
    margin-top: 3rem;
    text-align: center;
    font-size: 2.5rem;
    margin-bottom: 5rem;
    @media screen and (max-width: 500px) {
      font-size: 1.5rem;
      margin-top: 0;
      margin-bottom: 0;
    }
  }
  p {
    text-align: right;
    color: var(--color-primary);
    font-size: 1.3rem;
    padding: 2rem;
    @media screen and (max-width: 500px) {
      padding: 1.5rem 0 0 0;
      font-size: 0.8rem;
    }
  }
  .imgCardb {

  }
`;


const Section9 = styled.div`
  display: flex;
  background: url(${expertBack}) no-repeat center;
  background-size: cover;
  justify-content: center;
  align-items: center;
  padding: 4rem 15rem;
  gap : 8rem;

  .kamm {
    @media screen and (max-width: 1276px) {
      text-align: center;
    }
  }
  
  @media screen and (max-width: 1276px) {
      flex-direction: column-reverse;
    }
    @media screen and (max-width: 800px) {
      padding: 3rem 4rem;
      gap: 4rem;
    }
    @media screen and (max-width: 550px) {
      padding: 3rem 1rem;
    }
  .smallExpert4 {
    position: absolute;
    margin-top: 5rem;
    margin-left: -7rem;
    @media screen and (max-width: 550px) {
      margin-top: 3rem;
      margin-left: 1rem;
    }
  }
`;
const Section10 = styled.div`
  padding: 4rem 8rem;
  @media screen and (max-width: 800px) {
      padding: 4rem 4rem;
    }
    @media screen and (max-width: 800px) {
      padding: 4rem 1rem;
    }
  .secHead10 {
  text-align: center;
  margin-bottom: 2rem;
  font-size: 2.5rem;
  @media screen and (max-width: 800px) {
      font-size: 1.5rem;
    }
  
}
.seeAllDiv10 {
  display: flex;
  flex-direction: column;
  .seeAll10 {
    color: var(--color-primary);
    font-size: 1.4rem;
    text-align: right;
    padding: 1rem;
    margin-top: 2rem;
    
  }
}
.imgCard10 {
    img {
      border-radius: 1rem;
    }
  }
`;
const Section11 = styled.div`
display: flex;
align-items: center;
flex-direction: column;
padding: 1rem 5rem 7rem 5rem; 
@media screen and (max-width: 800px) {
      padding:1rem 2rem 6rem 2rem;
    }
h1 {
  font-size: 2.5rem;
  
}
.cont{
  display: flex;
  gap: 6rem;
  @media screen and (max-width: 1200px) {
      flex-direction: column;
    }

}
.navStud {
  margin-right: '4rem';
  @media screen and (max-width: 1200px) {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
    }
    h1 {
      @media screen and (max-width: 1200px) {
      font-size: 2rem;
    }
    }
}
.studDivL {
  display:flex;
  gap: 0.6rem;
  align-items: flex-start;
  .lineStudDiv {
    display: flex;
    flex-direction: column;
    color: var(--color-primary);
    img {
      width: 95%;
      margin-top: -5%;
      @media screen and (max-width: 1200px) {
      width: 9rem;
    }
    }
  }
 .say {
  margin-left: 0rem;
  padding-top: 0.1rem;
 }
}
.review-sec {
  max-width: 30rem;
}
.text-divs {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 5rem;
  @media screen and (max-width: 800px) {
     gap: 1.5rem;
    }
}
`;
const Chevron = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-top: 2rem;
  .chev {
    padding: 0.7rem;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid var(--color-primary);
    color: var(--color-primary);
    font-size: 2rem;
    :hover {
      background: var(--color-primary);
      color: white;
      transition: all 300ms ease-in-out;

    }
  }
`;

const AvatarReview = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  .avName {
    img{
      @media screen and (max-width: 800px) {
      width: 3rem;
    }
    }
   
  }
  .rname {
    h5 {
      font-size: 1.5rem;
      @media screen and (max-width: 800px) {
      font-size: 0.8rem;
    }
    }
    small {
      font-size: 1.2rem;
      color: var(--color-primary);

      @media screen and (max-width: 800px) {
      font-size: 0.8rem;
    }
    }
  }
`;
const Comment = styled.div`
    small {
      font-size: 1.2rem;
      @media screen and (max-width: 800px) {
      font-size: 0.8rem;
    }
    }
`;

const Footerr = styled.div`
  background: black;
  padding: 5rem 5rem 2rem 5rem;
  color: white;
  @media screen and (max-width: 500px) {
        padding: 5rem 1rem 2rem 1rem;
    }
  .foot-resp {
    display:flex;
    flex-direction: column;
    @media screen and (max-width: 800px) {
      flex-direction: column-reverse;
    }
  }
  .firstLine {
    display: flex;
    color: white;
    align-items: flex-start;
    gap: 2rem;
    @media screen and (max-width: 800px) {
      flex-direction: column-reverse;
      margin-top: 4rem;
    }
    .log-mot {
      flex: 1;
      .nam {
        width:40%;
        display: flex;
        gap: 1.7rem;
        flex-direction: column;
        img {
          width: 50%;
        }
        .socials {
          display: flex;
          gap: 1rem;
          color: white;
          font-size: 1.5rem;
          align-items: center;
        }
      }
    }
    .firstLinB {
      flex: 1;
      display: flex;
      align-items: flex-start;
      margin-left: 3rem;
      justify-content: space-between;
      gap: 3rem;
      @media screen and (max-width: 800px) {
        margin-left: 0;
        width: 100%;
    }
    }
  }
`;
const SubLine = styled.div`
  .subscribe {
    text-align: center;
    font-size: 1.4rem;
    margin: 3rem 0 1.5rem 0;
    @media screen and (max-width: 800px) {
      margin-top: 0;
    }
  }
  .sub-inpu {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.8rem;
    input {
      width: 25rem;
      height: 100%;
      padding-left: 0.3rem;
      box-sizing: border-box;
      outline: none;
      ::placeholder {
        color: var(--color-primary);
      }
    }
  }
`;
const LastMan = styled.div`
  display: flex;
  margin-top: 4rem;
  gap: 3rem;
  align-items: center;
  @media screen and (max-width: 600px) {
        flex-direction: column;
        gap: 1rem;
        align-items: flex-start;
    }
  p {
    font-size: 1.7rem;
  }
`