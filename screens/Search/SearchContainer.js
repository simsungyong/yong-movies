import React from 'react';
import SearchPresenter from './SearchPresenter';
import {movies, tv} from '../../api';

export default class extends React.Component{
    state = {
        loading: false,
        movieResults: null,
        tvResults: null,
        searchTerm:"",
        error: null
    };


    onSubmitEditing=async()=>{
        const {searchTerm } = this.state;
        if(searchTerm !== ""){
            let loading, movieResults, tvResults, error;
            this.setState({
                loading:true
            });
            try {
                ({
                data:{results: movieResults}}
                = await movies.searchMovies(searchTerm));
                ({data:{results: tvResults}}=await tv.searchShow(searchTerm));
            } catch {
                error:"Can't search"
            }finally{
                this.setState({
                    loading:false,
                    movieResults,
                    tvResults,
                    error
                });
            }
            
        }
    }
    

    handleSearchUpdate = text => {// 검색어인 searchterm계속 업데이트 하는 함수! 검색어가 계속 변하니까~form을 다룰줄알아야함
        this.setState({
            searchTerm:text
        })
    }

    render(){
        const {loading, movieResults, tvResults,  searchTerm} = this.state;
        return (<SearchPresenter 
            loading={loading}
            movieResults={movieResults}
            tvResults={tvResults}
            searchTerm={searchTerm}
            onSubmitEditing={this.onSubmitEditing}
            handleSearchUpdate={this.handleSearchUpdate}
            />);
    }
}