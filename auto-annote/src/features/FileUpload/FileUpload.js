import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

import axios from 'axios'
import styled from 'styled-components'

const FileUpload = ({ files, setFiles, removeFile }) => {
    const uploadHandler = (event) => {
        const file = event.target.files[0];
        if(!file) return;
        file.isUploading = true;
        setFiles([...files, file])

        // upload file
        const formData = new FormData();
        formData.append(
            "newFile",
            file,
            file.name
        )
        axios.post('http://localhost:8080/upload', formData)
            .then((res) => {
                file.isUploading = false;
                setFiles([...files, file])
            })
            .catch((err) => {
                
                // inform the user
                console.error(err)
                removeFile(file.name)

            });
    }

    return (
        <Container>
            <FileCard className="file-card">

                <FileInputs className="file-inputs">
                    <input type="file" onChange={uploadHandler} />
                    <button>
                        <i>
                            <FontAwesomeIcon icon={faPlus} />
                        </i>
                        Upload
                    </button>
                </FileInputs>

                <p className="main">Supported files</p>
                <p className="info">PDF, JPG, PNG</p>

            </FileCard>
        </Container>
    )
}

export default FileUpload

const Container = styled.div`



`


const FileCard = styled.div`

padding: 1em;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
border: 3px dashed #cbd5e0;
background-color: #edf2f7;
min-width: 380px;
min-height: 230px;



.main {
    font-weight: bold;
    margin-bottom: 0.4em;
    color:black;
    margin-left:220px;
}

.info {
    font-size: 0.8rem;
    font-weight: 500;
    color:black;
    margin-left:250px;
    
}

`

const FileInputs = styled.div`

position: relative;
        margin-bottom: 1.5em;

        input {
            position: relative;
            text-align: right;
            opacity: 0;
            z-index: 2;
            cursor: pointer;
            height: 46px;
            max-width: 200px;
        }

        button {
            position: absolute;
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100%;
            z-index: 1;
            display: flex;
            justify-content: center;
            align-items: center;

            color: #fff;
            background-color: #f55e30;
            font-size: 1.1rem;
            cursor: pointer;
            border-radius: 4px;
            border: none;
            outline: none;
            // padding: 1em;
            transition: background-color 0.4s;
            box-shadow: 0px 8px 24px rgba(149, 157, 165, 0.5);

            i {
                width: 1.5em;
                height: 1.5em;
                padding: 0.4em;
                background-color: #fff;
                color: #f55e30;
                border-radius: 50%;
                display: flex;
                justify-content: center;
                align-items: center;
                margin-right: 0.8em;
                font-size: 0.8em;
            }
        }

        &:hover {
            button {
                background-color: #f15120;
            }
        }


`




