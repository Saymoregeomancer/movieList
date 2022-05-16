    export const moviesFetching = () => {
            return {
                type: 'MOVIES_FETCHING'
            }
        }
    
    export const moviesFetched = (movies) => {
        return {
            type: 'MOVIES_FETCHED',
            payload: movies
        }
    }
    export const setCurrentPage = (page) => {
        return {
            type: 'SET_CURREN_PAGE',
            payload: page
        }
    }
    export const genresFetching = () => {
        return {
            type: 'GENRES_FETCHING'
        }
    }

    export const genresFetched = (genres) => {
        return {
            type: 'GENRES_FETCHED',
            payload: genres
        }
    }
    export const genresChenged = (genres) => {
        return {
            type: 'GENRES_CHENGED',
            payload: genres
        }
    }