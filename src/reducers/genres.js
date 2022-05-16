const initialState = {
        genres: [],
        genresLoadingStatus: 'idle',
        activeGenres : []
    }


    const genres = (state = initialState, action) => {
        switch (action.type) {
                case 'GENRES_FETCHING':
                        return {
                                ...state,
                                genresLoadingStatus: 'loading'
                }
                case 'GENRES_FETCHED':
                        return {
                                ...state,
                                genres: action.payload.genres,
                                genresLoadingStatus: 'idle'
                }            
                case 'GENRES_CHENGED':
                        return {
                        ...state,
                        activeGenres: action.payload
                        
                }
                default: return state
                }
    }
    
    export default genres;