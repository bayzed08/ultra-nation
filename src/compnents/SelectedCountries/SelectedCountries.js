import React from 'react';

const SelectedCountries = (props) => {
    //console.log(props);
    const selectedcountries = props.selectedcountries;
    //console.log(selectedcountries);
    let totalPop = 0;
    let i=1;
    { selectedcountries.map(scountry => totalPop += scountry.population) }
    return (
        <div>
            <p>This are selected Countries</p>

            {selectedcountries.map(scountry => <small> {i++}. {scountry.name};  </small>)}
            <p>Total Population: {totalPop} </p>
        </div>
    );
};

export default SelectedCountries;