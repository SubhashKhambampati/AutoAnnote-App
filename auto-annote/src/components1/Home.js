import React, { useRef } from 'react';
import styled from 'styled-components'
import Button from '@mui/material/Button';
import { useState } from 'react';
import  { keyframes } from 'styled-components';




const floatingAnimation = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;
const rotateAnimation = keyframes`
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  `
function Home() {

    const scrollToSection = () => {
        const sectionElement = document.getElementById('sectionId');
        sectionElement.scrollIntoView({ behavior: 'smooth' });
      };
    
  return (
    <Container>

        <Total>
        <Label></Label>
        <Section>

           
            <h1><span>Welcome To Our Page</span></h1>
            <p><span>Revolutionize Your Data Analysis</span></p>
            <button onClick={scrollToSection}><span>Get Started</span></button>





                



            </Section>

            <Image>
            <img src = "https://teleporthq.io/Home/Vectors/vector.svg" alt = "" />
            </Image>
        </Total>
        <Label1></Label1>



      
      
    </Container>
  )
}

export default Home

const Container = styled.div`

width:100%;



position:relative;
// background:blue;
display:flex;
flex-direction:column;







`
const Total = styled.div`

display:flex;
position:relative;



// background:red;
flex-direction:row;
justify-content:center;
align-items:center;


`


const Label = styled.div`

width:500px;
height:200px;
border:1px solid transparent;
border-radius:50%;

background:linear-gradient(45deg , #d2001a , #7462ff , #f48e21 , #23d5ab);
background-size: 300% 300%;

animation:${floatingAnimation} 12s ease-in-out infinite;
transform:translateX(-120px);
position:relative;


`

const Label1 = styled.div`
width:100px;
height:200px;
border:1px solid transparent;
border-radius:50%;

background:linear-gradient(45deg , #d2001a , #7462ff , #f48e21 , #23d5ab);
background-size: 300% 300%;

animation:${floatingAnimation} 12s ease-in-out infinite;
animation:${rotateAnimation} 12s ease-in-out infinite;

position:relative;


`

const Section = styled.div`



display:flex;
flex-direction:column;

position:relative;
width:100%;
height:150px;




h1{
    span{
        color:black;
        line-height:1.8px;
        font-size:50px;
        letter-spacing:1px;
        text-align:left;
        font-weight:bold;
        text-transform:uppercase;
        border-left: 6px solid coral;
        
    }
}

p{

span{
    color:black;
    line-height:1.8px;
    font-size:20px;
    letter-spacing:1px;
    text-align:left;
    border-left: 3px solid violet;
    
}

}
button{
    width:170px;
    height:50px;
    background:transparent;
    border:1px solid transparent;
    margin-top:20px;
    cursor:pointer;
    background:black;
    transition:all 350ms;
    
    padding:10px;
    box-shadow:0px 0px 10px 0px rgba(0,0,0,0.75);

    span{
        color:white;
        font-size:15px;
        letter-spacing:1.5px;
        text-align:center;
        line-height:0px;
        
        
    }
}



`

const Image = styled.div`


position:relative;
width:100%;
height:100%;
margin-right:0;
margin-top:0;
margin-left:100px;
margin-bottom:270px;



img{


    border:1px solid transparent;
    border-bottom-left-radius:700px;


}




`


