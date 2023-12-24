import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileAlt, faSpinner, faTrash } from '@fortawesome/free-solid-svg-icons'

import styled from 'styled-components'

const FileItem = ({ file, deleteFile }) => {

    
    return (


        <Container>
            <FontAwesomeIcon icon={faFileAlt} />
            <p>{file.name}</p>
            <FileLoad className="actions">
                    <Data className="loading"></Data>
                    {file.isUploading && <FontAwesomeIcon
                        icon={faSpinner} className="fa-spin"
                        onClick={() => deleteFile(file.name)} />
                    }
                    {!file.isUploading &&
                        <FontAwesomeIcon icon={faTrash}
                            onClick={() => deleteFile(file.name)} />
                    }
            </FileLoad>
            
        </Container>
    )
}

export default FileItem

const Container = styled.div`
    list-style: none;
    margin: 1.2em 0;
    background-color: #f55e30;
    border-radius: 5px;
    display: flex;
    flex-direction:row;
    align-items: center;
    padding: 1.2em 1.5em;

    svg {
        color: #f55321;
        &:first-child {
            font-size: 1.2em;
            margin-right: 0px;
            justify-content:flex-start;
            

            position:relative;
            
        }
        &:last-child {
            font-size: 1.2em;
            margin-right: 0px;
            justify-content:flex-start;
            
            align-items:center;
        
            transform:translateY(-15px);
            
        }
    }

    p {
        
        font-size: 10px;
        color:black;
        font-weight:600;
        
        text-align:center;
        text-decoration:none;
        white-space: nowrap;
        

    }




`

const FileLoad = styled.div`

justify-self: flex-end;
cursor: pointer;
color:black;


`
const Data = styled.div`


FontAwesomeIcon{
    font-size: 1.2em;
}


`
