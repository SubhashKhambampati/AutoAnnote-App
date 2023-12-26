import React from 'react'
import styled from 'styled-components'
import FileUpload from '/home/AIapp/Documents/AutoAnnote-App/auto-annote/src/features/FileUpload/FileUpload.js';
import FileList from '/home/AIapp/Documents/AutoAnnote-App/auto-annote/src/features/FileList/FileList.js';
import { useState } from 'react';

function Section() {

    const [files, setFiles] = useState([])

  const removeFile = (filename) => {
    setFiles(files.filter(file => file.name !== filename))
  }

  return (
    <Container id = "sectionId">

        <Content>

            <span>Upload Data</span>

        </Content>

        <Upload>

        <Files>

        <FileUpload files={files} setFiles={setFiles}
        removeFile={removeFile} />

        </Files>

        <FileListBox>

             <FileList files={files} removeFile={removeFile} />

        </FileListBox>

        </Upload>


      
    </Container>
  )
}

export default Section


const Container = styled.div`

background:black;

width:100%;
height:600px;
display:flex;
flex-direction:column;

`

const Content = styled.div`

margin-left:200px;
height:1px;
padding-top:20px;

span{
    
    font-size:30px;
    text-transform:uppercase;
    line-height:-1.8px;
    font-weight:bold;
    



}


`

const Upload = styled.div`
width:400px;
height:300px;
// background:red;
margin-top:80px;
margin-left:200px;
border:1px solid transparent;
border-radius:30px;
display:flex;
flex-direction:column;

`
const Files = styled.div`


border:1px solid transparent;
border-radius:30px;





`

const FileListBox = styled.div`


`