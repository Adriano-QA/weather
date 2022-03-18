import React, { useState } from 'react'
import * as C from './styles';

function FormWeather() {

    const [form, setForm] = useState({
        city:"",
        country:"",
    }) 

    const handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        if(name ==='city'){
            setForm({...form, city:value})
        }

        if(name ==='country'){
            setForm({...form, country:value})
        }

        console.log(form.city, form.country)
    }



    return (
        <C.Container>
            <div className='formContent'>                
                <form className='dataForm' >
                    <input type='text' name='city' placeholder='Cidade' onChange={e => handleChange(e)}/>
                    <input type='text' name='country' placeholder='País' onChange={e => handleChange(e)}/>
                    <button className='submit'>Buscar</button>
                </form>
            </div>
        </C.Container>        
    )
}

export default FormWeather
