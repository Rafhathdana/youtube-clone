import React, { useState } from 'react'
import styled from 'styled-components'
const Container = styled.div`
    width: 100%;
    height: 100%;
    position:absolute;
    top:0;
    left:0;
    background-color: #000000a7;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const Wrapper = styled.div`
    width: 600px;
    height: 600px;
    background-color: ${({ theme }) => theme.bgLighter};
    color: ${({ theme }) => theme.text};
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    position: relative;

`;
const Close = styled.div`
    position: absolute;
    top: 10px;
    right: 10px;
    cursor:pointer;

`;
const Title = styled.h1`
 text-align:center;
`;
const Input = styled.input`
    border: 1px solid ${({ theme }) => theme.soft};
    color:${({ theme }) => theme.text};
    border-radius:3px;
    padding: 10px;
    background-color: transparent;
`;
const Desc = styled.textarea`
    border: 1px solid ${({ theme }) => theme.soft};
    color:${({ theme }) => theme.text};
    border-radius:3px;
    padding: 10px;
    background-color: transparent;
`;
const Button = styled.button`
    border-radius:3px;
    border:none;
    padding:10px 20px;
    font-weight: 500;
    cursor: pointer;
    background-color: ${({ theme }) => theme.soft};
    color:${({ theme }) => theme.textSoft};
`
const Label = styled.label`
font-size: 14px;

`
const Upload = (setOpen) => {
    const [img, setImg] = useState(undefined);
    const [video, setVideo] = useState(undefined);
    const [imgPerc, setImgPerc] = useState(0);
    const [videoPerc, setVidoePerc] = useState(0);
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [tags, setTags] = useState([]);

    const handleTags = (e) => {
        setTags(e.target.value.split(","));
};
    const uploadFile = (file) => {

    }
useEffect(()=> {uploadFile(video)}, [video]);
useEffect(()=> {}, [img]);
return (
    <Container>
        <Wrapper>
            <Close onClick={() => setOpen(false)}>X</Close>
            <Title>Upload a New Video</Title>
            <Label>Video:</Label>
            <Input type="file" accept="video/*" onChange={e => setVideo(e.target.files[0])} />
            <Input type="text" placeholder='Title' onChange={e => setTitle(e.target.value)} />
            <Desc placeholder='Description' rows={8} onChange={e => setDesc(e.target.value)} />
            <Input type="text" placeholder='Seperate the tags with commas.' onChange={handleTags} />
            <Label>Image:</Label>
            <Input type="file" accept="image/*" onChange={e => setImage(e.target.files[0])} />
            <Button>Upload</Button>
        </Wrapper>
    </Container>
)
}

export default Upload