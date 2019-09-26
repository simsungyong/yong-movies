import React from 'react';
import MoviesPresenter from './MoviesPresenter';
import {movies} from '../../api'

export default class extends React.Component{   //container 마운트될따 api 가져오기~
    state = {
        loading : true,
        upcoming: null,
        popular: null,
        nowPlaying: null,
        error: null
    };

    async componentDidMount(){ //컴포넌트가 마운트한 다음~
        try{
            const upcoming = await movies.getUpcoming();
            const popular = await movies.getPopular();
            const nowPlaying = await movies.getNowPlyaing();
            console.log(upcoming, popular, nowPlaying);
        }catch(error){
            console.log(error);
            this.setState({error:"Can't get Movies"});
        }finally{
            this.setState({loading:false});
        }
    }

    render(){
        const { loading} = this.state
        return <MoviesPresenter loading={loading} />
    }
}