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
      />
      
    </div>
  );
}

export default App;
