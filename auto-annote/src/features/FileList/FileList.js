import axios from 'axios'
import React from 'react'
import FileItem from '/home/AIapp/Documents/AutoAnnote-App/auto-annote/src/features/FileItem/FileItem.js'
import styled from 'styled-components'

const FileList = ({ files, removeFile }) => {
    const deleteFileHandler = (_name) => {
        axios.delete(`http://localhost:8080/upload?name=${_name}`)
            .then((res) => removeFile(_name))
            .catch((err) => console.error(err));
    }
    return (
        <Content className="file-list">
            {
                files &&
                files.map(f => (<FileItem
                    key={f.name}
                    file={f}
                    deleteFile={deleteFileHandler} />))
            }
        </Content>
    )
}

export default FileList



const Content = styled.div`

color:black;
width:400px;
height:50px;


align-items:center;
justify-content:center;


`