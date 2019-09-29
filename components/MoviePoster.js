import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import makePhotoUrl from '../utils/makePhotoUrl';

const Image = styled.Image`
    width:110px;
    height:160px;
    border-radius:2.5px`;    //이미지와, 그 이미지를 담은 컨테이너 사이즈가 맞지 않을 때 조정하려는 용도

const MoviePoster = ({path}) => <Image source={{uri: makePhotoUrl(path)}}/>

MoviePoster.propTypes = {
    path: PropTypes.string.isRequired
}

export default MoviePoster;