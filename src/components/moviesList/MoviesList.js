import './moviesList.sass';
import MoviesListItem from '../moviesListItem/MoviesListItem';
import img from '../../404.gif'

import {useHttp} from '../../hooks/http.hook';
import { useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { moviesFetching, moviesFetched, genresFetching , genresFetched} from '../../action/index';
import Spinner from '../spinner/Spinner';


const MoviesList = () => {
	const {movies, moviesLoadingStatus, currentPage} = useSelector(state => state.movies);
	const {genres,activeGenres} = useSelector(state => state.genres);
	const dispatch = useDispatch();
	const {request} = useHttp();


	const moviesRequest = (pageNum = 1 , activeGenres) => {

		const genresUrlCreate = (genresIds) => {
			let genresString ='&with_genres=';
			genresIds.map((i) => genresString += `${i }%2C`);
			genresString.substring(0, genresString.length - 3);
			return genresString;
		      }
		const genresUrlString = activeGenres.length == 0 ? '' :  genresUrlCreate(activeGenres);
		
		dispatch(moviesFetching());
		request(`https://api.themoviedb.org/3/discover/movie?api_key=5086a21c23e47a04cbf46b608eaafa79&language=uk-UA&sort_by=release_date.desc&include_adult=false&include_video=false&page=${pageNum}&per_page=10&primary_release_date.lte=2020&with_watch_monetization_types=flatrate${genresUrlString}`)
		    .then(data => dispatch(moviesFetched(data)));

	}

	const genresRequest = () => {
		dispatch(genresFetching());
		request("https://api.themoviedb.org/3/genre/movie/list?api_key=5086a21c23e47a04cbf46b608eaafa79&language=uk-UA")
		.then(data => dispatch(genresFetched(data)))
	}


//     useEffect(() => {
// 	moviesRequest(1 ,activeGenres )
// 	genresRequest()
//         // eslint-disable-next-line
//     }, []);

    useEffect(() => {
	moviesRequest(currentPage ,activeGenres );
	genresRequest()
        // eslint-disable-next-line
    }, [currentPage,activeGenres]);


















		const renderMoviesList = (arr) => {
			const res = (genres,moviesGenres) => {
				let intersection = genres.filter(x => moviesGenres.includes(x.id));
				let str = '';
				intersection.map( i => str += `${i.name} `);
				return str;
			      }
			return arr.map(({id, title, release_date, genre_ids, poster_path })   => {
				 const baseUrl =  poster_path === null  ? img : 'https://image.tmdb.org/t/p/w500'+poster_path;
				const genre = res( genres, genre_ids);
				return <MoviesListItem
						key={id}
						img={baseUrl}
						title={title}
						subtitle={release_date}
						genre={genre}/>
			})
		}
		const elements = renderMoviesList(movies);
        return (
                <div className="moviesList">
					{moviesLoadingStatus === "loading" ? <Spinner/> :  elements }
                </div>                
        )
    }
    
    export default MoviesList;