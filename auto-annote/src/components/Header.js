import React from 'react'
import styled from 'styled-components'

function Header() {
  return (
    <Container>
        <Logo>

            <span>AutoAnnote</span>

        </Logo>

        <Nav>



            <a href="">
                <span>Home</span>
            </a>
            <a href="">
                <span>Projects</span>
            </a>
            <a href="">
                <span>Contact</span>
            </a>
            <a href="">
                <span>About</span>
            </a>
            <a href="">
                <span>Login</span>
            </a>
            <a href="">
                <span>SignUp</span>
            </a>


        </Nav>

        

        
      
    </Container>
  )
}

export default Header


const Container = styled.div`

border;1px solid #fff;
box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
color: black;
display:flex;
flex-direction:row;

height:60px;
width:100%;
position:relative;






`
const Logo = styled.div`
cursor:pointer;

span{

    font-size:20px;
    color: black;
    font-weight:600;
    text-transform:uppercase;
    
    position:absolute;
    text-decoration:none;
    cursor:pointer;
    align-items:center;
    display:flex;
    margin-left:60px;
    margin-top:10px;
    

}

`


const Nav = styled.div`


align-items:center;

text-align:center;

margin-top:10px;
display:flex;
justify-content:center;


a{
    text-decoration:none;
    align-items:center;
    
    
    
       

    span{

        font-size:16px;
        color: black;
        font-weight:400;
        text-transform:uppercase;
        
        position:relative;
        text-decoration:none;
        cursor:pointer;
        display:flex;
        
        margin-right:0px;
        margin:0px;
        align-items:center;
        justify-content:center;
        
        padding:0px 20px;

        &:after{
            content:"";
    
            height:2px;
            
            
            position:absolute;
            
            left:0;

            background:black;   

            right:0;
            bottom:0px;
            opacity:0; 
            transform-origin:left center;
            transform:scaleX(0);
            
            transition:transform 300ms cubic-bezier(0.25,0.46,0.45,0.94) 0s, opacity 250ms cubic-bezier(0.25,0.46,0.45,0.94) 0s;
    
        }

    }
    &:hover{

        span:after{
    
       
    
        transform: scaleX(1);
        opacity:1;
    
        }

    
    

}

        
        
        
    
    }

}



`