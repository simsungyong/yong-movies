import React from 'react';
import {Text} from 'react-native';
import DetailPresenter from './DetailPresenter';
import {movies, tv} from '../../api';
import PropTypes from 'prop-types';



export default class extends React.Component{ //class component는 static method 가질수잇음
    static navigationOptions = ({navigation})=>{
        //console.log(navigation.getParam('isMovie'));
        return{//navigation options은 항상 props들ㅇ이 같이 옴!
        title: navigation.getParam('title')
        };
    };

    constructor(props){//navigaitons에 state잇음
        super(props);
        const {
            navigation: {
                state: {//props는 변경안되니까 state로 바꿔서 세팅
                    params: {
                    isMovie,
                    posterPhoto,
                    backgroundPhoto,
                    title,
                    voteAvg,
                    id,
                    overview}}}} = props;

        this.state = {
            posterPhoto,
            isMovie,
            backgroundPhoto,
            title,
            voteAvg,
            id,
            overview,
            loading: true
            }
        }
    
    async componentDidMount(){
        const {isMovie,id} = this.state;
        let error, genres,overview, status, date, backgroundPhoto;//리렌더링시간줄이려고
        try {
            if(isMovie){
                ({data: {genres, overview, status, release_date: date, backdrop_path:backgroundPhoto
                }}=await movies.getMovie(id));
            }else{
                ({data: {genres, overview, status, first_air_date: date, backdrop_path:backgroundPhoto
                }}=await tv.getShow(id));
            }
        } catch (error) {
            
        }finally{
            this.setState({loading:false, genres, overview, status, date, backgroundPhoto});//여기서한번만 리렌더링
        }
    }



    render(){
        const { posterPhoto,
                backgroundPhoto,
                title,
                voteAvg,
                id,
                date,
                overview,
                status,
                isMovie,
                loading} = this.state;
        
        return <DetailPresenter 
                posterPhoto={posterPhoto}
                backgroundPhoto={backgroundPhoto}
                title={title}
                voteAvg={voteAvg}
                id={id}
                overview={overview}
                loading={loading}
                status={status}
                date={date}
                isMovie={isMovie}/>
    }
}