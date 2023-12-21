import React from 'react'
import styled from 'styled-components'
import Data from './Data'

function LeftNavbar() {
  return (
    <Nav>

        
        
        <NavMenu>


            <Image>
                <img src= "images/big-data.png"/>

            </Image>
            <Image>
                <img src= "images/algorithm.png"/>
            </Image>
            <Image>
                <img src= "images/scatter-plot.png"/>
            </Image>
            <Image>
                <img src= "images/heatmap.png"/>
            </Image>
            

            {/* <span>Data</span>
            <span>Model</span>
            <span>Plots</span>
            <span>HeatMaps</span>
            <span>BoundingBox</span> */}
            



        </NavMenu>
        <Data />
      
    </Nav>
  )
}

export default LeftNavbar


const Nav = styled.div`
margin-top:0px;

width:100px;
// height:700px;
box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);

// background-color:#212121;
border-radius:10px;
border:1px solid transparent;
color:black;
opacity:1;
display:grid;
grid-template-column:repeat(2,minmax(0,1fr));

`

const NavMenu = styled.div`

display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
text-align:center;
margin-top:20px;
text-decoration:none;
text-transform:uppercase;

font-size:20px;
color:black;
opacity:1;


img{
    opacity:1;

    
    width:80%;
    height:30%;
    // font-size:15px;
    cursor:pointer;
    border:1px solid transparent;
    border-radius:10px;
    border-sizing:border-box;
    color:black;

   
    

}



`
const Image = styled.div`


`

