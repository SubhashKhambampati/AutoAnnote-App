
import React from 'react'
import styled from 'styled-components'



function Header() {

  return (

    <Nav>

        <Logo>
            <span>AutoAnnote</span>
        </Logo>
        
        <NavMenu>
            <a>

               
                <span>HOME</span>

            </a>
            <a>

                
                <span>Projects</span>

            </a>
            <a>

                
                <span>About</span>

            </a>
            <a>

                
                <span>Contact</span>

            </a>
            
            

        </NavMenu>
       
       
        
    </Nav>
  );
}

export default Header;

const Nav = styled.div`

height:70px;
background:white;
display:flex;

color:black;
padding:0 36px;
position:fixed;
top:0;
border:1px solid transparent;
width:100%;
margin:0;
z-index:9999;





`

const Logo = styled.div`
    width:80px;
    height:100%;
    font-size:20px;
    font-weight:bold;
    flex:1;
    display:flex;
    text-transform:uppercase;
    margin-top:35px;
    color:black;
    cursor:pointer;
    span{
        color:black;
    }


`
const NavMenu = styled.div`

display:flex;
flex:1;

margin-left:25px;
align-items:center;

margin-top:35px;


a{

    
    
    
    padding:0;
    margin:0;


    
    span{
        margin-left:30px;
        font-size:13px;
        letter-spacing:1.42px;
        position:relative;
        text-transform:uppercase;
        color:black;
        cursor:pointer;
        margin-bottom:0px;
        font-weight:600;
        bottom:0;
        padding:0;
        

        &:after{
            content:"";
            background:black;
            position:absolute;

            height:2px;
            
            
            
            left:0;
            
              
            right:0;
            bottom:-6px;
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





`

