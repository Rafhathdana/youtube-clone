import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import React from 'react'
import styled from 'styled-components'
const Container= styled.div`
position:sticky;
top:0;
background-color: ${({theme})=>theme.bgLighter};
height: 56px;
`;
const Wrapper= styled.div`
display:flex;
align-items:center;
justify-content: flex-end;
height: 100%;
padding: 0px 20px;
position: relative;
color:${({theme}) => theme.text};
`;
const Search= styled.div`
width:40%;
position: absolute;
left : 0px;
right : 0px;
margin:auto;
display:flex;
align-items:center;
justify-content:space-between;
padding:5px;
border:1px solid #cccccc;
border-radius: 3px;

`;
const Input= styled.input`
border:none;
background-color: transparent;
color:${({theme}) => theme.text};
`;
const Button = styled.button`
padding: 5px 15px;
background-color: transparent;
border: 1px solid #3ea6ff;
border-radius: 3px;
color: #3ea6ff;
font-weight: 500;
cursor: pointer;
display: flex;
align-items: center;
gap: 5px;
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Search>
          <Input placeholder='Search'/>
          <SearchOutlinedIcon />
        </Search>
          <Button>
            <AccountCircleOutlinedIcon />SIGN IN
          </Button>
      </Wrapper>
    </Container>
  )
}

export default Navbar