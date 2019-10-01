import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { BG_COLOR, TINT_COLOR } from '../../constants/Colors';
import Layout from '../../constants/Layout';
import makePhotoUrl from '../../utils/makePhotoUrl';
import MoviePoster from '../../components/MoviePoster';
import MovieRating from '../../components/MovieRating';
import {LinearGradient} from 'expo-linear-gradient';
import { Platform } from '@unimodules/core';
import Loader from '../../components/Loader';

const Container = styled.ScrollView`
    background-color: ${BG_COLOR};    
`;

const Header= styled.View`
    position: relative;
    `;

const Title = styled.Text`
    color:${TINT_COLOR};
    font-weight:600;
    font-size:18px;
    margin-bottom:10px;
    `;

const Column = styled.View`
    margin-left:30px;    
`;


const Content = styled.View`
    flex-direction: row;
    width:80%;
    padding-horizontal:20px;
    align-items:flex-end;
    height:${Layout.height /3.5};
    `;

const MainContent = styled.View`
    margin-top:25px;
    padding-horizontal:20px;    
`;

const ContentValue = styled.Text`
    color:${TINT_COLOR};
    font-size:12px;
    margin-bottom:10px;
    width: 80%;

    `;

const ContentTitle = styled.Text`
    color:${TINT_COLOR};
    font-weight:600;
    margin-bottom: 10px;
    `;

const DataContainer = styled.View`
    margin-bottom: 15px;
    `;


const BgImage = styled.Image`
    width: ${Layout.width};
    height: ${Layout.height / 3.5};
    position: absolute;   
    `;

const DetailPresenter = ({
    posterPhoto,
    backgroundPhoto,
    title,
    voteAvg,
    id,
    overview,
    loading,
    isMovie,
    status,
    date
    }) => (
    <Container>
        <Header>
        <BgImage source={{uri:makePhotoUrl(backgroundPhoto)}}></BgImage>
        <LinearGradient
            colors={['transparent', 'black']}
            start={[0,0]}
            end={
                [0,0.9]
            }>
        <Content>
            <MoviePoster path={posterPhoto}/>
            <Column>
                <Title>{title}</Title>
                <MovieRating votes={voteAvg} inSlide={true}/>
            </Column>
        </Content>
        </LinearGradient>
        </Header>
        <MainContent>
            {overview ? (
                <DataContainer>
                    <ContentTitle>Overview</ContentTitle>
                    <ContentValue>{overview}</ContentValue>
                </DataContainer>
                ) : null}

            {status ? (
                <DataContainer>
                    <ContentTitle>status</ContentTitle>
                    <ContentValue>{status}</ContentValue>
                </DataContainer>
                ) : null}
            
            {date ? (
                <DataContainer>
                    <ContentTitle>{isMovie ? "Release Date" : "First Episdoe"}</ContentTitle>
                    <ContentValue>{date}</ContentValue>
                </DataContainer>
                ) : null}
                {loading ? <Loader /> : null}
        </MainContent>
    </Container>);
//inSlide는 평점글자 크게나옴.
DetailPresenter.propTypes = {
    posterPhoto: PropTypes.string.isRequired,
    backgroundPhoto: PropTypes.string,
    title: PropTypes.string.isRequired,
    voteAvg: PropTypes.number,
    id: PropTypes.number.isRequired,
    overview: PropTypes.string,
    loading: PropTypes.bool.isRequired,
    status: PropTypes.string,
    isMovie:PropTypes.bool.isRequired,
    date: PropTypes.string
};

export default DetailPresenter;