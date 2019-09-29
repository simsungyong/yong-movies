import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Swiper from 'react-native-swiper';
import Layout from '../constants/Layout';
import makePhotoUrl from '../utils/makePhotoUrl';
import MoviePoster from './MoviePoster';
import { TINT_COLOR, GREY_COLOR } from '../constants/Colors';
import MovieRating from './MovieRating';

const Container = styled.View`
    flex:1;
    position: relative;
    `;      //View를 만들어서 view에 배경이미지넣는건 불가능.이미지 넣을려면 이미지 콤포넌트 이용해야한다!!!

const Content = styled.View`
    flex-direction: row;
    justify-content: space-between;
    flex:1;
    padding-horizontal:30px;
    align-items:center;
`; //모든 View는 디폴트로 display가 flex, default direction이 column
const BgImage = styled.Image`
    width: ${Layout.width};
    height: ${Layout.height / 3};
    opacity: 0.6 ;
    position: absolute;   
    `;//이미지는 네트워크, api등을 통해서 받은 이미지라면, width, height없으면 안나타남 opacity는 투명도

const Column = styled.View`
    width: 60%`;

const Title = styled.Text`
    color : ${TINT_COLOR};
    font-size:14px;
    font-weight:600;
    `; 


const Overview = styled.Text`
    color : ${TINT_COLOR};
    font-size: 12px;
    `;

const MovieSlide = ({
    posterPhoto,
    backgroundPhoto,
    title,
    voteAvg,
    overview}) => <Container>
        <BgImage source={{uri:makePhotoUrl(backgroundPhoto)}}></BgImage>
        <Content>
            <MoviePoster path={posterPhoto}/>
            <Column>
                <Title>{title}</Title>
                {voteAvg ? <MovieRating votes={voteAvg} /> : null}
                {overview ? (
                    <Overview>
                    {overview.length > 120 ? `${overview.substring(0,125)}...` : overview}
                </Overview>): null} 
            </Column>
        </Content>
    </Container>;  //path를 그냥 주면안됨 경로를 처음부터 붙여야됨

MovieSlide.propTypes={
    id: PropTypes.number.isRequired,
    posterPhoto: PropTypes.string.isRequired, //photo를 슬라이드에 넣을려고 한다 string으로 받는다.
    backgroundPhoto: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    voteAvg: PropTypes.number.isRequired,
    overview: PropTypes.string.isRequired

}

export default MovieSlide;