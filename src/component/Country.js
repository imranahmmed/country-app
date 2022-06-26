import React from 'react'
import style from './country.module.css'

const Country = (props) => {
    const { name, flags, capital, population, area } = props.country;

    const handleRemoveCountry = (name) => {
        props.onRemoveCountry(name);
    }
    return (
        <div className={style.country}>
            <img className={style.countryFlag} src={flags.png} alt={name.common} />
            <div className={style.countryInfo}>
                <h6>Name : {name.common}</h6>
                <h6>Capital : {capital}</h6>
                <h6>Population : {population}</h6>
                <h6>Area : {area}</h6>
            </div>
            <button className='btn btn-danger btn-sm w-100 mt-3' onClick={() => { handleRemoveCountry(name.common) }}>Remove Country</button>
        </div>
    )
}

export default Country