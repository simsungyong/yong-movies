import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import MoviePoster from './MoviePoster';
import MovieRating from './MovieRating';
import { GREY_COLOR } from '../constants/Colors';


const Container = styled.View`
    align-items: center;
    margin-right: 20px;
    `;  //View flex 디폴트는 column

const Title = styled.Text`
    color:white;
    font-size: ${props => !props.big ? "12px" : "14px"};
    margin-vertical: 5px;
    `;

const HContainer = styled.View`
    margin-bottom:20px;
    flex-direction: row;
    align-items: center;
    
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
    overview }) =>
    horizontal ? (
        <HContainer>
            <MoviePoster path={posterPhoto} />
            <Column>
                <Title big={true} >{title}</Title>
                <MovieRating votes={voteAvg}/>
                {overview ? (
                <Overview>
                    {overview.length > 120 ? `${overview.substring(0,125)}...` : overview}
                </Overview>) : null}
            </Column>
        </HContainer>
    ) : (
     <Container>
        <MoviePoster path = {posterPhoto} />
        <Title>{title.length> 10 ? `${title.substring(0, 8)}...` : title}</Title>
        <MovieRating votes={voteAvg}/>
    </Container>);

MovieItem.propTypes = {
    id: PropTypes.number.isRequired,
    posterPhoto: PropTypes.string.isRequired, 
    title: PropTypes.string.isRequired,
    voteAvg: PropTypes.number.isRequired,
    overview: PropTypes.string
};

export default MovieItem;