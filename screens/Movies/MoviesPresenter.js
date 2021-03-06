import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import Loader from '../../components/Loader'; 
import styled from 'styled-components';
import MovieSlider from '../../components/MovieSlider';
import Section from '../../components/Section';
import MovieItem from '../../components/MovieItem';

const Container = styled.ScrollView`
    background-color: black` ;//유저가 스크롤할수있는 view, scrollview라고 명시해놓지않으면 화면을 넘어갈만큼 내용이 많아도 스크롤안됨


const MoviesPresenter = ({loading, upcoming, popular, nowPlaying}) => 
    loading ? (
        <Loader />
    ) : (
    <Container>
        {nowPlaying ? <MovieSlider movies={nowPlaying} /> : null }

        {upcoming ? (
        <Section title='Upcoming Movies' >{upcoming
        .filter(movie=>movie.poster_path !== null)
        .map(movie=>(
            <MovieItem
                key={movie.id}
                id={movie.id}
                posterPhoto={movie.poster_path}
                title={movie.title}
                voteAvg={movie.vote_average}/>
        ))}
        </Section>) : null}

        {popular ? (
        <Section horizontal={false} title='Popular Movies' >{popular
        .filter(movie=>movie.poster_path !== null)
        .map(movie=>(
            <MovieItem
                horizontal={true}
                key={movie.id}
                id={movie.id}
                posterPhoto={movie.poster_path}
                title={movie.title}
                voteAvg={movie.vote_average}
                overview={movie.overview}/>
        ))}
        </Section>) : null}
        
    </Container>);

MoviesPresenter.propTypes={
    loading: PropTypes.bool.isRequired,
    upcoming: PropTypes.array,
    popular: PropTypes.array,
    nowPlaying: PropTypes.array
};

export default MoviesPresenter;

