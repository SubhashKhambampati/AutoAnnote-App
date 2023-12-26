import React, { useRef } from 'react';
import styled from 'styled-components'
import Button from '@mui/material/Button';
import { useState } from 'react';


function Home() {

    const scrollToSection = () => {
        const sectionElement = document.getElementById('sectionId');
        sectionElement.scrollIntoView({ behavior: 'smooth' });
      };
    
  return (
    <Container>


        <Section>

            <h1><span>Welcome To Our Page</span></h1>
            <p><span>Revolutionize Your Data Analysis</span></p>
            <button onClick={scrollToSection}><span>Get Started</span></button>
         
            
            
         
            
                
           
            

        </Section>

        <Image>
            <img src = "https://teleporthq.io/Home/Vectors/vector.svg" alt = "" />
        </Image>
      
      
    </Container>
  )
}

export default Home

const Container = styled.div`

width:100%;
margin-top:70px;
display:flex;
height:500px;
position:relative;
// background:blue;
justify-content:center;
align-items:center;
flex-direction:row;




`

const Section = styled.div`



display:flex;
flex-direction:column;

position:relative;
width:100%;
height:100px;
margin-left:200px;
margin-top:50px;


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

margin-left:370px;


img{


    border:1px solid transparent;
    border-bottom-left-radius:400px;


}




`


