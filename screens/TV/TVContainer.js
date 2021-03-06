import React from 'react';
import TVPresenter from './TVPresenter';
import {tv} from '../../api';

export default class extends React.Component{
    state = {
        loading : true,
        popular: null,
        airingToday: null,
        airingThisWeek: null,
        error: null
    };

    async componentDidMount(){ //컴포넌트가 마운트한 다음~
        let airingToday, popular, airingThisWeek, error;  //값이 변하는 변수 let
        try{
            ({data:{results: airingToday}} = await tv.getAiringToday());
            ({data:{results: popular}} = await tv.getPopular());
            ({data:{results: airingThisWeek}} = await tv.getAiringThisWeek());   //let 변수 업데이트
            //console.log(upcoming, popular, nowPlaying);
        }catch(error){
            console.log(error);  //사용자에게는 can/t get tv가 보이고 개발자는 에러 로그를 보고싶다.
            error:"Can't get tv";   //let변수 error 업데이트
        }finally{
            this.setState({
                loading:false,
                airingToday,
                popular,
                airingThisWeek,
                error});
        }
    }
    render(){
        const {loading, popular, airingToday, airingThisWeek} = this.state;
        console.log(this.state);
        return <TVPresenter 
            loading={loading} 
            popular={popular} 
            airingToday={airingToday} 
            airingThisWeek={airingThisWeek}/>  //4개의 props 넘겨주기~
    }
}