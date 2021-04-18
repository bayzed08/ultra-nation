import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Country from './compnents/Country/Country';
import SelectedCountries from './compnents/SelectedCountries/SelectedCountries';
import animalFakeData from './FakeData/FakeData.json';


function App() {

  const [countries, setCountries] = useState([]);
  const [selectedCountries, setSelectedCountries] = useState([]);

  //for testing fake data from fakData json file
  const [fakeData, setFakeData]=useState([]);
  useEffect(() => {
    console.log("hello");
    setFakeData(animalFakeData);
    console.log(fakeData);
  },[]);

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
    const newSelectedCountries=[...selectedCountries,country]
    setSelectedCountries(newSelectedCountries);
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
    </div>
  );
}

export default App;
