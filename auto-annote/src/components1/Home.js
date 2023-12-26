import React from 'react'
import styled from 'styled-components'
import Button from '@mui/material/Button';

function Home() {
  return (
    <Container>


        <Section>

            <span>Welcome To Our Page</span>
            <span>Revolutionize Your Data Analysis</span>
            <button><span>Getting Started</span></button>
         
            
            
         
            
                
           
            

        </Section>
      
      
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
background:blue;
justify-content:center;
align-items:center;



`

const Section = styled.div`



display:flex;
flex-direction:column;

position:relative;
width:100%;
height:100px;
margin-left:200px;
margin-top:50px;




span{
   

    
    line-height:1.8px;
    font-size:20px;
    letter-spacing:1.5px;
    text-align:left;
    
}

button{
    width:150px;
    height:50px;
    background:transparent;
    border:1px solid transparent;
    margin-top:20px;
    cursor:pointer;
    background:black;
    border-radius:10px;
    padding:5px 0;
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



