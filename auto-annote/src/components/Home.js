import React from 'react'
import styled from 'styled-components'

function Home() {
  return (
    <Container>

      Upload file
      <FileUpload files={files} setFiles={setFiles}
        removeFile={removeFile} />
      <FileList files={files} removeFile={removeFile} />
   
        

        

     
      
    </Container>
  )
}

export default Home


const Container = styled.div`


color:white;






`



