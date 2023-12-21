import React from 'react'
import styled from 'styled-components'
import LeftNavbar from './LeftNavbar'
import Data from './Data'

function Projects() {
  return (
    <Container>

        <LeftNavbar />
        <Data />

      
    </Container>
  )
}

export default Projects

const Container = styled.div`


margin-top:10px;
align-items:center;





`
