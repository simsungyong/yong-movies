import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import Loader from '../../components/Loader'; 

const TVPresenter = ({loading,popular, airingToday, topRated}) =>
    loading ? <Loader /> : <Text>TV</Text>

TVPresenter.propTypes={
    loading: PropTypes.bool.isRequired,
    popular: PropTypes.array,
    airingToday: PropTypes.array,
    topRated: PropTypes.array
};

export default TVPresenter;
