import './moviesListItem.sass';
const MoviesListItem = (props) => {
        const {img, title, subtitle, genre} = props;
        return (
                        <div className="moviesItem">
                                <img src={img}  alt="" className="moviesItem_img"></img>
                                <div className="moviesItem_descr">
                                        <h2 className="moviesItem_title">{title}</h2>
                                        <h3 className="moviesItem_subtitle">{subtitle}</h3>
                                        <h4 className="moviesItem_genre">{genre}</h4>
                                </div>
                        </div>
        )
    }
    
    export default MoviesListItem;