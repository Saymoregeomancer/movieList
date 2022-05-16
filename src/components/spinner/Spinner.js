import React  from 'react';
import loading from './loading.gif';
import './spinner.sass'

const Spinner = () => {
    return (
            <img src={loading} className='spinner'></img>
    )
}

export default Spinner;