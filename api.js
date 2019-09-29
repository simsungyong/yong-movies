import axios from 'axios';
 
const api = axios.create({
    baseURL:"https://api.themoviedb.org/3/",   //공통유알엘
    params:{
        api_key: '5092ed35930ff6d8c5ad4cc7f2b8a4c6',
        language: 'ko-KR'
    }
});

export const movies={
    getNowPlyaing:() => api.get('movie/now_playing'),
    getUpcoming:() => api.get('movie/upcoming'),
    getPopular: () => api.get('movie/popular'),
    getMovie: id => api.get(`movie/${id}`, { //여기서 파라미터는 id
        params:{
            append_to_response: 'videos'
        }
    }),
    searchMovies: term => api.get('search/movie', {  //여기서 파라미터는 url
        params:{
            query: encodeURIComponent(term)  //url 인코딩       스트링을호 알게끔
        }
    })  //영화 정보 가져오기~
};



export const tv={
    getAiringThisWeek: () => api.get('tv/on_the_air'),
    getPopular: () => api.get('tv/popular'),
    getAiringToday:() => api.get('tv/airing_today'),
    getShow : ()=> api.get(`tv/${id}`, {
        params:{
            append_to_response: 'videos'
        }
    }),
    searchShow: term => api.get('search/tv', {   //search 메서드는 term이라는 파라미터랑 같이 넘겨야 작동함 . 여기서 파라미터는 url
        params:{
            query: encodeURIComponent(term)  //url 인코딩       스트링을호 알게끔
        }
    })
};