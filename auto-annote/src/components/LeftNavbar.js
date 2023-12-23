import React from 'react'
import styled from 'styled-components'
import Data from './Data.js'
import  { useState } from "react";
import Plots from './Plots';

 

function LeftNavbar() {
        const [currentStateSlide1, setCurrentSlide1] = useState(false);
    const [currentStateSlide2, setCurrentSlide2] = useState(false);
    // const [currentStateSlide3, setCurrentSlide3] = useState(false);
    // const [currentStateSlide4, setCurrentSlide4] = useState(false);

    
    
    

    const handleClick1 = () => {
        setCurrentSlide1(true);
        setCurrentSlide2(false);
    };
    const handleClick2 = () => {
        setCurrentSlide1(false);
        setCurrentSlide2(true);
    };
    // const handleClick3 = (slideIndex) => {
    //     setCurrentSlide3(slideIndex);
    // };
    // const handleClick4 = (slideIndex) => {
    //     setCurrentSlide4(slideIndex);
    // };
    
   
  return (
    <Nav>

        
        
        <NavMenu>


            <Image>
                
                {/* <button onClick={handleClick1(true)}><img src= "images/big-data.png" alt="" /></button>
                <button onClick={handleClick2(true)} ><img src= "images/algorithm.png" alt=""/></button>
                <button onClick={handleClick3(true)}><img src= "images/scatter-plot.png" alt=""/></button>
                <button onClick={handleClick4(true)}><img src= "images/heatmap.png" alt=""/></button> */}


                {/* <button ><img src= "images/big-data.png" alt="" /></button> */}

                <button onClick={handleClick1}><img src= "images/big-data.png" alt="" /></button>

                <button onClick={handleClick2} ><img src= "images/algorithm.png" alt=""/></button>
                <button ><img src= "images/scatter-plot.png" alt=""/></button>
                <button><img src= "images/heatmap.png" alt=""/></button>

            </Image>
           
            



        </NavMenu>

        <DataGrid>
            {currentStateSlide1 && <Data />}

        </DataGrid>

        


        
        
       
      
    </Nav>
  )
}

export default LeftNavbar




const Nav = styled.div`

display :flex;
flex-direction :row;
// margin-top:60px;
// overflow-y: hidden;
position:relative;

width:100px;
height:100%;
box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);

// background-color:#212121;
border-radius:10px;
border:1px solid transparent;
color:black;
opacity:1;


`

const NavMenu = styled.div`


align-items:center;
justify-content:center;
text-align:center;
margin-top:0px;
text-decoration:none;
text-transform:uppercase;


color:black;
opacity:1;






`
const Image = styled.div`
display:flex;
flex-direction:column;
margin-left:10px;
padding:0px;
margin:0px;
button{

    background:transparent;
    border:1px solid transparent;
    padding:0px;
    margin:0px;
    margin-left:10px;

    img{
        opacity:1;
        margin-left:0px;
        margin-bottom:0px;
    
        
        
        width:70px;
        height:80px;
        cursor:pointer;
        border:1px solid transparent;
        border-radius:10px;
        border-sizing:border-box;
        color:black;
    
       
        
    
    }

}




`



const DataGrid = styled.div`




`