import React from 'react'
import styled from 'styled-components'
const Container = styled.div`
    width: 360px;
    margin-bottom: 45px;
    cursor: pointer;
`;
const Image = styled.img`
    width: 100%;
    height: 202px;
    background-color: #999999;
    `;
const Card = () => {
  return (
    <Container>
       <Image src="https://i.ytimg.com/an_webp/H3uPYyZjsaw/mqdefault_6s_480x270.webp?du=3000&sqp=COj24ZcG&rs=AOn4CLBnVmlgSj23LaNtLHQKAVF1ZXsB0A"/>
        </Container>

  )

}

export default Card