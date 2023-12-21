import React from 'react'
import styled from 'styled-components'

function Data() {
  return (
    <Container>

        <Plane>
        

            <TrainData>

                <img src= "images/big-data.png"/>

                Upload Train Data

            </TrainData>
            <TestData>
                <img src= "images/train-data.png"/>
                Upload Test Data

            </TestData>
            <Model>
                <img src= "images/train-data.png"/>
                Upload Model

            </Model>

        
            
        </Plane>


        
      
    </Container>
  )
}

export default Data


const Container = styled.div`


    // width:calc(100%-100px);
    height:calc(100vh-100px);

    margin-left:140px;
    // height:200px;
    // background:red;



`
const Plane = styled.div`
// width:calc(100%-100px);
// height:calc(100%-100px);

margin-left:200px;
// height:200px;
// background:red;


`





const TrainData = styled.div`

img{
    width:30%;

}


`

const TestData = styled.div`


`

const Model = styled.div`


`