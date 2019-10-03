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
        let upcoming, popular, nowPlaying, error;  //값이 변하는 변수 let
        try{
            ({data:{results: upcoming}} = await movies.getUpcoming());  //axios 연결할때 data: 해줘야됨.
            ({data:{results: popular}} = await movies.getPopular());
            ({data:{results: nowPlaying}} = await movies.getNowPlyaing());   //let 변수 업데이트
            //console.log(upcoming, popular, nowPlaying);
        }catch{
            error:"Can't get Movies";   //let변수 error 업데이트
        }finally{
            this.setState({
                loading:false,
                upcoming,
                popular,
                nowPlaying,
                error});  //componentdidMount에서 setState하면 render가 두번 호출된다. 하지만 사용자는 중간과정못봄. 하지만 성능문제가 떨어질수도잇음.!
        }
    }

    render(){
        const { loading, upcoming, popular, nowPlaying } = this.state     
        console.log(this.state);                
        return <MoviesPresenter 
            loading={loading} 
            upcoming={upcoming} 
            popular={popular} 
            nowPlaying={nowPlaying} />                    //4개의 props 건네주기!!
    }
}