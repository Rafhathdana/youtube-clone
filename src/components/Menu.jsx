import React from 'react'
import styled from 'styled-components'
import wetube from "../img/logo.png"
import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import HistoryIcon from '@mui/icons-material/History';
const Container = styled.div`
   flex: 1;
   background-color: #020202;
   color:white;
   height:100vh;
   font-size: 14px;
`;
const Wrapper = styled.div`
    padding:18px 26px;
`
const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-weight: bold;
  margin-bottom:25px;
  `;
const Img = styled.img`
  height:25px;
  `;
const Item = styled.div`
    display: flex;
    align-item: center;
    gap:20px;
    cursor:pointer ;

`
const Menu = () => {
    return (
        <Container>
            <Wrapper>
                <Logo>
                    <Img src={wetube} />
                    WeTube
                </Logo>
                <Item>
                    <HomeIcon />Home
                </Item>
                <Item>
                    <ExploreIcon />Explore
                    <ExploreOutlinedIcon />Explore
                </Item>
                <Item>
                    <SubscriptionsIcon />Subscriptions
                    <SubscriptionsOutlinedIcon />Subscriptions
                </Item>
                <Item>
                    <VideoLibraryOutlinedIcon />Library
                </Item>
                <Item>
                    <HistoryOutlinedIcon />History
                </Item> 
                <Item>
                    <LibraryMusicOutlinedIcon />Music
                </Item>
                <Item>
                    <SportsOutlinedIcon />Sports
                </Item>
                <Item>
                    <SportsEsportsOutlinedIcon />Gaming
                </Item>
                <Item>
                    <MovieOutlinedIcon />Movies
                </Item>
                <Item>
                    <ArticleOutlinedIcon />News
                </Item>
                <Item>
                    <SettinsOutlinedIcon />Settings
                </Item> 
                <Item>
                    <LiveTvOutlinedIcon />Live
                </Item>
                <Item>
                    <FlagOutlinedIcon />Report
                </Item>
                <Item>
                    <HelpOutlinedIcon />Help
                </Item>
                 <Item>
                    <SettingsBrightnessOutlinedIcon />Light Mode
                </Item>
                <Item>
                    <aOutlinedIcon />a
                </Item>
            </Wrapper>
        </Container>
    )
}

export default Menu