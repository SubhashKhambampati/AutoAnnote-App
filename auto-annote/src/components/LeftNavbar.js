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

                <button onClick={handleClick1}><img src= "images/database.png" alt=""/><h3>Data</h3></button>

                <button onClick={handleClick2} ><img src= "images/deep-learning.png" alt=""/><h3>Model</h3></button>
                <button onClick={handleClick2}><img src= "images/scatter-graph.png" alt=""/><h3>Plots</h3></button>
                <button onClick={handleClick2}><img src= "images/heatmap.png" alt=""/><h3>HeatMap</h3></button>

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
// margin-top:20px;
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

display:flex;
flex-direction:row;
align-items:center;
justify-content:center;
text-align:center;
margin-top:10px;
text-decoration:none;
text-transform:uppercase;

margin-left:10px;
margin-right:0px;
color:black;
opacity:1;






`
const Image = styled.div`

display:flex;
flex-direction:column;
flex-gap:0px;
color:black;
// margin-left:10px;
padding:0px;
margin:0px;
align-items:center;
margin-top:30px;
position:relative;


button{
    margin-left:0px;
    align-items:center;
    justify-content:center;
    text-align:center;
    cursor:pointer;
    

    width:100%;
    
    height:70px;
    line-height:0px;

    background:transparent;
    border:1px solid transparent;
    padding:0px;
    margin:0px;
    

    display:flex;
    flex-direction:column;
    flex-gap:0px;
    
    margin-bottom:50px;
    transition:color 0.3s ease-in-out;
    

    
   
  
   
    h3{
        color:black;
        cursor:pointer;
        line-height:0px;
        
    }


    img{
        opacity:1;
        margin-left:0px;
        margin-bottom:0px;
        margin-top:10px;
        
        
    
        
        
        width:40px;
        height:50px;
        cursor:pointer;
        border:1px solid transparent;
        border-radius:10px;
        
        color:black;
        line-height:0px;
    
       
        
    
    }

    

    &:focus{

        background:#579BB1;
        border:1px solid transparent;
        border-radius:10px;
        line-height:0px;
    }

    &:hover{
        background:#ECE8DD;
       
        
        border:1px solid transparent;
        border-radius:10px;
        line-height:0px;
        color:red;

        h3:after{
            color:red;

        }
        img:hover{

            color:blue;

        }
    }

}




`



const DataGrid = styled.div`




`