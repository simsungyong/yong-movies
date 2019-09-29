import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'; //View, scrollview import안하고 styled만 임포트하면 쓸수잇다
import MovieItem from './MovieItem';

const Container = styled.View`
    margin-vertical: 20px;
    `;
const ScrollView = styled.ScrollView``;

const Title = styled.Text`
    color: white;
    font-weight: 600;
    padding-left: 20px;
    margin-bottom: 15px;
    `;

const Section =({title, children})=>( //children 파라미터는 presenter에 명시해놓은 구조 그대로 들고올수잇다.
    <Container>
        <Title>{title}</Title>
        <ScrollView horizontal>{children}</ScrollView>
    </Container>
);

Section.propTypes = {
    title: PropTypes.string.isRequired
};

export default Section;
