import React, { useEffect, useState } from 'react';
import Plot from './Plot';
import { fetchData } from './api';
import Dashboard from './Dashboard';

function App() {
  const [data, setData] = useState([]);
  const [selectedYears, setSelectedYears] = useState([]);
  const [selectedCountries, setSelectedCountries] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const result = await fetchData();
      setData(result);
    };
    loadData();
  }, []);

  const handleCountryChange = (event) => {
    const selectedCountry = event.target.value;
    if (event.target.checked) {
      setSelectedCountries([...selectedCountries, selectedCountry]);
    } else {
      setSelectedCountries(selectedCountries.filter(country => country !== selectedCountry));
    }
  };

  const handleYearChange = (event) => {
    const newValue = parseInt(event.target.value);
    const updatedYears = [...selectedYears];
    const index = selectedYears.indexOf(newValue);

    if (index === -1) {
      updatedYears.push(newValue);
    } else {
      updatedYears.splice(index, 1);
    }

    setSelectedYears(updatedYears.sort((a, b) => a - b));
  };

  return (
    <div>
      <h1>International Trade Dashboard</h1>

      <Plot
        data={data}
        selectedYears={selectedYears}
        selectedCountries={selectedCountries}
      />

      <Dashboard
        data={data}
        setSelectedYears={setSelectedYears}
        setSelectedCountries={setSelectedCountries}
        handleCountryChange={handleCountryChange}
        handleYearChange={handleYearChange}
      />
    </div>
  );
}

export default App;