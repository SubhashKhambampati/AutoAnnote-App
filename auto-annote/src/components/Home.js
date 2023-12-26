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

      <Section2>
        <Section1>


            <h1>Welcome to our App</h1>
            <h1>Revolutionize your data analysis</h1>
            <button type='submit'>Get Started</button>





        </Section1>
        <Grid src = "https://teleporthq.io/Home/Vectors/vector.svg" alt = "" />

      </Section2>

      <Section3>
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

      </Section3>

      

      

      
   
        

        

     
      
    </Container>
  )
}

export default Home


const Container = styled.div`

color:black;

width:100%;
height:100%;




align-items:center;
justify-content:center;

display:flex;
flex-direction:column;


color:black;
background:blue;
// margin-left:650px;
// margin-top:50px;

align-items:center;
justify-content:center;








`
const Section2 = styled.div`

width:100%;


display:flex;
flex-direction:row;

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
const Grid = styled.img`

width:600px;
height:600px;
float:right;
justify-content:space-between;
align-items:center;
position:relative;


`

const Section3 = styled.div`

display;flex;
flex-direction:column;

`
const Content = styled.div`

color:black;

font-weight:800;
font-size:25px;

`

const Files= styled.div`
// transform:translateY(-280px);
align-items:center;
justify-content:center;
position:relative;




`

const FileListBox = styled.div`
// transform:translateY(-230px);

`


