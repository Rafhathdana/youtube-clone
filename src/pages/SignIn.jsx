import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display:flex;
    align-items: center;
    justify-content: center;
    height: calc(100vh-56px);
    color:${({ theme }) => theme.text};
`;
const Wrapper = styled.div`
    display:flex;
    align-items: center;
    flex-direction: column;
    background-color:${({ theme }) => theme.bgLighter};
    border: 1px solid ${({ theme }) => theme.soft};
    padding: 20px 50px;
    gap: 10px;
`;
const Title = styled.h1``;
const SubTitle = styled.h2``;
const Input = styled.input``;
const Button = styled.button``;
const More = styled.div``;

const SignIn = () => {
    return (
        <Container>
            <Wrapper>
                <Title>Sign in </Title>
                <SubTitle>to Continue to WeTube</SubTitle>
                <Input placeholder='Username'/>
                <Input type="password" placeholder='Password'/>
                <Button>Sign in</Button>
                <Title>or</Title>
                <Input placeholder='Username'/>
                <Input placeholder='Email'/>
                <Input type="password" placeholder='Password'/>
                <Button>Sign up</Button>
            </Wrapper>
        </Container>
    )
}

export default SignIn