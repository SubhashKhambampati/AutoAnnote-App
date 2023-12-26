import React from 'react'
import styled from 'styled-components'

function Footer() {

  
  
    return (
    <Container>

        <Section1>

            
                    <h1><span>AutoAnnote</span></h1>
                    <h5><span>Make beautiful landing pages in seconds</span></h5>
                    <p><span>Copyright © 2023 - All right reserved</span></p>
          



        </Section1>

        <Section2>
            <h3><span>Legal</span></h3>
            <h4><span>Terms and services</span></h4>
            <h4><span>Privacy policy</span></h4>
        </Section2>

        

        
      
    </Container>
  )
}

export default Footer

const Container = styled.div`

width:100%;

height:200px;

background:white;

display:flex;
flex-direction:row;





`
const Section1 = styled.div`


color:white;
display:flex;
flex-direction:column;
flex:1;

height:1px;


margin-left:100px;



     

        h1{

            

            span{

                font-size:16px;
                font-weight:bold;
                text-transform:uppercase;
                color:black;
                
                



            }

        }
        h5{

            
            span{

                color:black;
                font-weight:300;
                
                
            }

        }
        p{

           
            span{
                
                color:black;
                white-space:nowrap;
                
                
            }

        
}

`
const Section2 = styled.div`

height:5px;

position:relative;

margin-left:100px;

h3{
    span{

        color:black;
        font-weight:500;
        

    }
}

h4{
    span{

        color:black;
        font-weight:200;

    }
}



`