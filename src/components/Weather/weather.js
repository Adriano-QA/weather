import React from 'react'
import * as C from './styles';
import Icon from '../../images/icon.png';
import FormWeather from '../form/formWeather';


function Weather() {


    return (
        <C.Container>
            <div className='weather'>
                <span className='title'>Weathe <b>R</b>
                <img src={Icon} alt='logo'/>
                </span>
                <FormWeather/>
            </div>
        </C.Container>
        
    )
}

export default Weather
