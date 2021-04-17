import React from 'react';
import './Country.css';

const Country = (props) => {
   // console.log(props);
    const { name, capital, population, region, flag } = props.countryInfo;
    const handleAddCountry = props.handleAddCountry;
    //const name = props.countryInfo.name;
    const flagstyle = { height: '60px', border: '3px solid gray',borderRadius:'3px' };
    return (
        <div className="countryDiv">
            <p> <small>Country Name:</small>  {name}</p>
            <img style={flagstyle} src={flag} alt=""/>
            <p> <small>population:</small>  {population}</p>
            <p> <small>Capital :</small>  {capital}</p>
            <p><small>Region :</small>  {region}</p>
            <button onClick={()=>{handleAddCountry(props.countryInfo)}}> Add Country</button>
        </div>
    );
};

export default Country;