import React from 'react'
import {MdCloudUpload , MdDelete} from 'react-icons/md';
import {AiFillFileImage} from 'react-icons/ai';
import { useState } from 'react';
import styled from 'styled-components'

function Footer() {

    const [image , setImage] = useState(null);
    const [fileName , setFileName] = useState("No File Selected");
  return (
            <Container>


                <form action="" onClick={() => document.querySelector(".field").click()}>
                    <input type = "file" accept='image/*' className='field' hidden 
                    
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
                        <p>Browse Files to Upload</p>
                        </>
                    }

                    
                </form>

                <section>

                
                <span>
                    {fileName}
                    <MdDelete onClick= {()=>{setFileName("No File Selected") 
                                            setImage(null)}} color='#1475cf' size={20} />
                </span>
                </section>

      
            </Container>
  )
}

export default Footer

const Container = styled.div`
background:black;

width:100vw;
height:100vh;
display:flex;
justify-content: center;
align-items: center;

cursor:pointer;
width:500px;
height:300px;
border:2px dashed #1475cf;
border-radius:10px;

section{

    display:flex;
    flex-direction:column;
    width:70px;
    
}

`



