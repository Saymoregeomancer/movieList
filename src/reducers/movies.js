const initialState = {
        movies: [],
        moviesLoadingStatus: 'idle',
        currentPage: 1,
        totalCount: 0
    }


    const movies = (state = initialState, action) => {
        switch (action.type) {
            case 'MOVIES_FETCHING':
                return {
                    ...state,
                    moviesLoadingStatus: 'loading'
                }
            case 'MOVIES_FETCHED':
                return {
                    ...state,
                    movies: action.payload.results,
                    currentPage :  action.payload.page,
                    totalCount : action.payload.total_pages,
                    moviesLoadingStatus: 'idle'
                }
                case 'SET_CURREN_PAGE':
                    return {
                        ...state,
                        currentPage :  action.payload,
                    }
            default: return state
        }
    }
    
    export default movies;