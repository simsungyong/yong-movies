import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { TINT_COLOR } from '../constants/Colors';


const Vote = styled.Text`
    color: ${TINT_COLOR};
    font-size: 12px;
    font-weight: 600;
    `;
    

const MovieRating = ({votes}) => <Vote>⭐{ `${votes} / 10 `}</Vote>

MovieRating.propTypes = {
    votes : PropTypes.number.isRequired
};

export default MovieRating;