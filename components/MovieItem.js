import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import MoviePoster from './MoviePoster';
import MovieRating from './MovieRating';
import { GREY_COLOR } from '../constants/Colors';
import {TouchableWithoutFeedback} from 'react-native'; //버튼
import {withNavigation} from 'react-navigation'; //navigation prop을 주기위해


const Container = styled.View`
    align-items: center;
    margin-horizontal:15px;
    `;  //View flex 디폴트는 column

const Title = styled.Text`
    color:white;
    font-size: ${props => !props.big ? "12px" : "14px"};
    margin-vertical: 5px;
    `;

const HContainer = styled.View`
    margin-bottom:20px;
    flex-direction: row;
    margin-horizontal:15px;

    `;

const Column = styled.View`
    margin-left:20px;
    width:60%;
    `;

const Overview = styled.Text`
    color:${GREY_COLOR};
    font-size:12px;
    margin-vertical:10px;
    `;



const MovieItem = ({
    id,
    posterPhoto,
    title,
    voteAvg,
    horizontal = false,
    overview,
    isMovie = true,
    navigation }) =>(
        //touchablewithoutfeedback은 눌렀을때 투명해지는효과 없는 버튼
        //touchableOpacity 버튼은 눌렷을때 눌려지는 효과 있는 버튼.
    <TouchableWithoutFeedback onPress={()=>navigation.navigate({routeName:"Detail", params:{
        isMovie,
        id,
        posterPhoto,
        backgroundPhoto: null,
        title,
        voteAvg,
        overview}})}
        >
        {
        horizontal ? (
        <HContainer>
            <MoviePoster path={posterPhoto} />
            <Column>
                <Title big={true} >{title}</Title>
                <MovieRating votes={voteAvg}/>
                {overview ? (
                <Overview>
                    {overview.length > 150 ? `${overview.substring(0,146)}...` : overview}
                </Overview>) : null}
            </Column>
        </HContainer>
    ) : (
     <Container>
        <MoviePoster path = {posterPhoto} />
        <Title>{title.length> 10 ? `${title.substring(0, 8)}...` : title}</Title>
        <MovieRating votes={voteAvg}/>
    </Container>) }
    </TouchableWithoutFeedback>);
    

MovieItem.propTypes = {
    id: PropTypes.number.isRequired,
    posterPhoto: PropTypes.string.isRequired, 
    title: PropTypes.string.isRequired,
    voteAvg: PropTypes.number.isRequired,
    overview: PropTypes.string,
    isMovie: PropTypes.bool
};

export default withNavigation(MovieItem);