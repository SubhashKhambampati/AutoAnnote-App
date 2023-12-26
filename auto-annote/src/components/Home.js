import React from 'react'
import styled from 'styled-components'
import FileUpload from '/home/AIapp/Documents/AutoAnnote-App/auto-annote/src/features/FileUpload/FileUpload.js';
import FileList from '/home/AIapp/Documents/AutoAnnote-App/auto-annote/src/features/FileList/FileList.js';
import { useState } from 'react';

function Home() {

  const [files, setFiles] = useState([])

  const removeFile = (filename) => {
    setFiles(files.filter(file => file.name !== filename))
  }

  return (
    <Container>

      <Section1>

        <h1>Welcome to our App</h1>
        <h4>Revolutionize your data analysis</h4>
        <button type='toggle'>Get Started</button>
        <img src = "https://teleporthq.io/Home/Vectors/vector.svg" alt = "" />




      </Section1>

      <Content>

        Upload File


        

      </Content>

      <Files>

        <FileUpload files={files} setFiles={setFiles}
          removeFile={removeFile} />

      </Files>

      <FileListBox>

      <FileList files={files} removeFile={removeFile} />

      </FileListBox>

      
   
        

        

     
      
    </Container>
  )
}

export default Home


const Container = styled.div`

color:black;

width:200px;
height:100%;




align-items:center;
justify-content:center;

display:flex;
flex-direction:column;


color:black;
background:blue;
margin-left:650px;
margin-top:50px;







`

const Section1 = styled.div`

border:1px solid transparent;
border-radius:30px;

h1{
  color:black;
  font-weight:900;
  font-size:30px;
  white-space: nowrap;
        
}
h4{

  color:black;
  font-weight:700;
  font-size:20px;
  white-space: nowrap;

}


`

const Content = styled.div`

color:black;

font-weight:800;
font-size:25px;

`

const Files= styled.div`
transform:translateY(-280px);
align-items:center;
justify-content:center;
position:relative;




`

const FileListBox = styled.div`
transform:translateY(-230px);

`


