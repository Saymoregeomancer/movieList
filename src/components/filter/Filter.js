import './filter.sass'
import Select from 'react-select';


import { useDispatch, useSelector } from 'react-redux';
import {genresChenged} from '../../action/index';

const Filter = () => {
        const dispatch = useDispatch();
        const {genres} = useSelector(state => state.genres);

        const options =  genres.map( i => {
                        let genre = new Object;
                        genre.value = i.id;
                        genre.label = i.name
                        return genre}
                )

        const genresPull = (arr) =>{
                let genresOptions = [];
                 arr.map( opt => genresOptions.push(opt.value));
                return genresOptions;
        }

        const onChange = (selectedOption) => {
                dispatch(genresChenged(genresPull(selectedOption)))
        }
    
        return (        
                <div className="wrap">
                        <Select
                                options={options}
                                isMulti
                                classNamePrefix="select"
                                onChange={onChange}
                                // styles={colourStyles}
                        />
                </div>
        )
    }

    export default Filter;