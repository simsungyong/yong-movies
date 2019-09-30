import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { BG_COLOR, GREY_COLOR } from '../../constants/Colors';
import Layout from '../../constants/Layout'
import Loader from '../../components/Loader';
import Section from '../../components/Section';
import MovieItem from '../../components/MovieItem';
const Container = styled.View`
    background-color: ${BG_COLOR};
    flex:1;
`;

const Input = styled.TextInput`
    background-color: rgba(255,255,255,0.4);
    width: ${Layout.width /1.6 };
    border-radius: 20px;
    padding : 10px;
    text-align:center;

`;

const InputContainer = styled.View`
    align-items:center;
    margin-vertical:20px;
`;

const SearchResults = styled.ScrollView`
    margin-top: 20px;
    `;



const SearchPresenter=({
    loading,
    tvResults,
    searchTerm,
    movieResults,
    onSubmitEditing,  //서치버튼눌렀을때 넘겨주는함수
    handleSearchUpdate}) =>(
    <Container>
        <InputContainer>
            <Input 
                onChangeText={handleSearchUpdate} 
                value={searchTerm}  
                returnKeyType={"search"}
                placeholder={"Search movies and tv"}
                placeholderTextColor={GREY_COLOR}
                onSubmitEditing={onSubmitEditing}
                autoCorrect={false}/>
        </InputContainer>
        <SearchResults>
            {loading ? <Loader/> : (
                <>
                {movieResults ? (
                    movieResults.length > 0 ? (
                <Section title="Movie Results">{movieResults
                .filter(movie=>movie.poster_path !== null)
                .map(movie=>(
                    <MovieItem
                        key={movie.id}
                        id={movie.id}
                        posterPhoto={movie.poster_path}
                        title={movie.title}
                        voteAvg={movie.vote_average}
                        overview={movie.overview}/>
                ))}
                </Section>) : null
                ):null}
                
                {tvResults ? (
                    tvResults.length > 0 ? (
                <Section title="TV Results">{tvResults
                .filter(tv=>tv.poster_path !== null)
                .map(tv=>(
                    <MovieItem
                        key={tv.id}
                        id={tv.id}
                        posterPhoto={tv.poster_path}
                        title={tv.name}
                        voteAvg={tv.vote_average}/>
                        ))}
                </Section>) : null
                ):null} 
                </>
                )}
        </SearchResults>  
    </Container>);//plceholderTextcolor 검색착 회색.  returnKeyTpye은 검색버튼이름이 search autoCorrect=> 자동수정

SearchPresenter.propTypes = {
    loading: PropTypes.bool.isRequired,
    tvResults: PropTypes.array,
    movieResults: PropTypes.array,
    searchTerm: PropTypes.string,
    handleSearchUpdate: PropTypes.func.isRequired,
    onSubmitEditing: PropTypes.func.isRequired
}

export default SearchPresenter;