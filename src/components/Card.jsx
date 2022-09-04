import React from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom";
const Container = styled.div`
    width: ${(props)=>props.type !=="sm" &&" 360px"};
    margin-bottom: ${(props)=> props.type ==="sm" ? "10px" : "45px"};
    cursor: pointer;
    display: ${(props) => props.type ==="sm" && "flex"};
    gap:${(props)=>props.type==="sm" && "10px"};
`;
const Image = styled.img`
    width: 100%;
    height: ${(props)=>props.type==="sm" ? "100px":"202px"};
    background-color: #999999;
    flex:${(props)=>props.type==="sm" && "1"};
    `;
const Details = styled.div`
    display: flex;
    margin-top: ${(props)=>props.type !== "sm" && "16px"};
    gap:12px;
    flex:${(props)=>props.type==="sm" && "1"};
    `;
const ChannelImage = styled.img`
    width: 36px;
    height: 36px;
    border-radius:50%;
    background-color: #999999;
    position: relative;  
    display:${(props)=>props.type==="sm" && "none"};
    `;
const Texts = styled.div``;
const Title = styled.h1`
    font-size: 16px;
    font-weight: 500;
    color: ${({theme}) => theme.text};
`;
const ChannelName = styled.h2`
    font-size: 14px;
    color: ${({theme}) => theme.textSoft};
    margin:8px 0px;
    `;
const Info = styled.div`
    font-size: 14px;
    color: ${({theme})=> theme.textSoft};
`;
const Card = ({type}) => {
    return (
        <Link to="/video/test" style={{textDecoration:"none"}}>
        <Container type={type}>
            <Image type={type} src="https://i.ytimg.com/vi/Au63DyjBQ7k/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBoRBkAK8oDxT7OH-e8jk02BGi4JA" />
            <Details type={type}>
                <ChannelImage type={type} src="https://yt3.ggpht.com/-Weca7gZCAF0tBcPwbpITNNyT8Rp2omE9U4Puf8L2JmG7k7eF5hkfA74fFftt-NR4A-ajJcbwFM=s68-c-k-c0x00ffffff-no-rj"/>
                <Texts>
                    <Title>Test Video</Title>
                    <ChannelName>Tom and Jerry</ChannelName>
                    <Info>560,908 views * 1 day ago</Info>
                </Texts>
            </Details>
        </Container>
        </Link>

    )

}

export default Card