import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Country from './compnents/Country/Country';
import SelectedCountries from './compnents/SelectedCountries/SelectedCountries';



function App() {

  const [countries, setCountries] = useState([]);
  const [selectedCountries, setSelectedCountries] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.eu/rest/v2/all")
      .then(res => res.json())
      .then(data => {
        setCountries(data);
      //  console.log(data);
      })
      .catch(error=>console.log(error))
  }, []);

  const handleAddCountry = (country) => {
   // console.log("country Added");
   // console.log(country);
    const newSelectedCountries=[...selectedCountries,country]
    setSelectedCountries(newSelectedCountries);
    //console.log(selectedCountries);
  };

  return (
    <div className="App">
      <h3>Country Loaded:{countries.length}</h3>
      <p>Country Selected {selectedCountries.length}</p>
      <SelectedCountries selectedcountries={selectedCountries} ></SelectedCountries>
      <br />
      <hr />
      <hr/>
      {
        countries.map(country => <Country
          countryInfo={country}
          handleAddCountry={handleAddCountry}
          key={country.alpha3Code}></Country>)
      }
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
