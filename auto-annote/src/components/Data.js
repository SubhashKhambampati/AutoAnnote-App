import React from 'react'
import styled from 'styled-components'
import { useState } from 'react';
import  { keyframes } from 'styled-components';
import {MdCloudUpload , MdDelete} from 'react-icons/md';
import {AiFillFileImage} from 'react-icons/ai';

const slideInFromTop = keyframes`
from {
  transform: translateY(200%);
}
to {
  transform: translateY(0);
}

`;

const slideInFromLeft = keyframes`
from {
  transform: translateX(-100%);
}
to {
  transform: translateX(0);
}
`;

const fadeIn = keyframes`
from {
  opacity: 0;
}
to {
  opacity: 1;
}

`;

const floatingAnimation = keyframes`
  0% {
    transform: translate(0, 0px);
  }
  50% {
    transform: translate(0, 15px);
  }
  100% {
    transform: translate(0, -0px);
  }
`;



function Data() {


    const [image , setImage] = useState(null);
    const [fileName , setFileName] = useState("No Selected File");
  

  return (
    <Container>

        
        

            <TrainData>
            <span>Upload Train Data</span>

                <form action='' onClick={() => document.querySelector(".field").click()}>
                    <input type = "fie" accept='image/*' className='field' hidden 
                    
                    onChange={({target:{files}} )  => {
                        files[0] && setFileName(files[0].name)
                        if (files){
                            setImage(URL.createObjectURL(files[0]))
                        }
                    }}
                    />
                    {
                        image ? <img src={image} width={60} height={60} alt={fileName} />
                        : 
                        <>
                        <MdCloudUpload color='#1475cf' size={60} />
                        <p>Browse Files</p>
                        </>
                    }

                    
                </form>

                <AiFillFileImage color='#1475cf'/>
                <span>
                    {fileName}
                    <MdDelete onClick= {()=>{setFileName("No File Selected") 
                                            setImage(null)}} color='#1475cf' size={20} />
                </span>
                
                

                
                

            </TrainData>

            <TestData>
                
                <span>Upload Test Data</span>

            </TestData>
            <Model>
                
                <span>Upload Model</span>

            </Model>

        
       


        
      
    </Container>
  )
}

export default Data


const Container = styled.div`

    margin-top: 100px;
    


    

    margin-left:140px;
    margin-right:140px;
   
    // background:red;
    border:1px solid transparent;
    border-radius:15px;

    
    display:grid;
    grid-template-columns:repeat(3,minmax(0,1fr));
    grid-gap:500px;
    transition:animation 100ms ease-in-out ;
    animation: ${slideInFromTop} 1s ease-in-out;



`








const TrainData = styled.div`

animation: ${floatingAnimation} 3s ease-in-out infinite;

width:400px;
height:500px;
background:blue;

border:1px solid transparent;
border-radius:15px;
text-align:center;
transition:transform 300ms ease;
transition:animation 100ms ease-in-out ;


span{

    margin-top:10px;
    
    

    font-size:20px;
    font-weight:bold;
    text-decoration:none;
    text-transform:uppercase;

    
    
}

&:hover{
    transform:scaleY(1.05);
    cursor:pointer;
}




`




const TestData = styled(TrainData)`






`

const Model = styled(TrainData)`







`