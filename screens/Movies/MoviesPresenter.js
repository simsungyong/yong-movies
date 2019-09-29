import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import Loader from '../../components/Loader'; 
import styled from 'styled-components';
import MovieSlider from '../../components/MovieSlider';

const Container = styled.ScrollView`` ;//유저가 스크롤할수있는 view, scrollview라고 명시해놓지않으면 화면을 넘어갈만큼 내용이 많아도 스크롤안됨

const MoviesPresenter = ({loading, upcoming, popular, nowPlaying}) => 
    loading ? (
    <Loader />
    ) : (
    <Container>
        <MovieSlider movies={nowPlaying}  />
    </Container>);

MoviesPresenter.propTypes={
    loading: PropTypes.bool.isRequired,
    upcoming: PropTypes.array,
    popular: PropTypes.array,
    nowPlaying: PropTypes.array
};

export default MoviesPresenter;

