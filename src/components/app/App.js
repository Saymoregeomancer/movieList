import './app.sass';
import Filter from '../filter/Filter';
import MoviesList from '../moviesList/MoviesList';
import Pagination from '../pagination/Pagination';


const App = () => {


        return (

                <div className="container">
                        <Filter></Filter>
                        <Pagination></Pagination>
                        <MoviesList></MoviesList>
                        {/* <Pagination></Pagination> */}
                </div>
        
        )
    }
    
    export default App;