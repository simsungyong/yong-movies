import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import Loader from '../../components/Loader'; 
import MovieItem from '../../components/MovieItem';
import styled from 'styled-components';
import Section from '../../components/Section';

const Container = styled.ScrollView`
    background-color: black` ;


const TVPresenter = ({loading,popular, airingToday, airingThisWeek}) =>
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
        {airingThisWeek ? (<Section title='Airing this Week'>
        {airingThisWeek
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
        {popular ? (<Section title='Popular'>
        {popular
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
    airingThisWeek: PropTypes.array
};

export default TVPresenter;
