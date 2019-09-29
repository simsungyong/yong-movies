import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import Loader from '../../components/Loader'; 
import MovieItem from '../../components/MovieItem';
import styled from 'styled-components';
import Section from '../../components/Section';

const Container = styled.ScrollView`
    background-color: black` ;


const TVPresenter = ({loading,popular, airingToday, topRated}) =>
    loading ? <Loader /> : (
    <Container>
        {airingToday ? (<Section title='Airing Today'>
        {airingToday
        .filter(tv=>tv.poster_path !== null)
        .map(tv=>(
        <MovieItem
            key={tv.id}
            id={tv.id}
            posterPhoto={tv.poster_path}
            title={tv.name}
            voteAvg={tv.vote_average}
            />
            ))}
        </Section>) : null}
        {topRated ? (<Section title='Top Rated'>
        {topRated
        .filter(tv=>tv.poster_path !== null)
        .map(tv=>(
        <MovieItem
            key={tv.id}
            id={tv.id}
            posterPhoto={tv.poster_path}
            title={tv.name}
            voteAvg={tv.vote_average}
            />
            ))}
        </Section>) : null}

    </Container>);

TVPresenter.propTypes={
    loading: PropTypes.bool.isRequired,
    popular: PropTypes.array,
    airingToday: PropTypes.array,
    topRated: PropTypes.array
};

export default TVPresenter;
