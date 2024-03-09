import React, { useState } from 'react';
import Plotly from 'plotly.js-basic-dist';
import createPlotlyComponent from 'react-plotly.js/factory';

const Plot = createPlotlyComponent(Plotly);

const Dashboard = ({ data }) => {
  const [selectedCountries, setSelectedCountries] = useState(Object.keys(data));
  const [selectedYears, setSelectedYears] = useState([2015, 2020]);

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
  

  const filteredData = Object.entries(data)
  .filter(([country]) => selectedCountries.includes(country))
  .map(([country, values]) => ({
    name: country,
    import: values.import,
    export: values.export
  }));

  const filteredDataInRange = filteredData.map(country => ({
    ...country,
    import: Object.fromEntries(Object.entries(country.import).filter(([year]) => {
      return parseInt(year) >= selectedYears[0] && parseInt(year) <= selectedYears[1];
    })),
    export: Object.fromEntries(Object.entries(country.export).filter(([year]) => {
      return parseInt(year) >= selectedYears[0] && parseInt(year) <= selectedYears[1];
    }))
  }));

  const importBarData = filteredDataInRange.map(country => ({
    x: Object.keys(country.import),
    y: Object.values(country.import),
    name: `${country.name} - Import`,
    type: 'bar'
  }));

  const exportBarData = filteredDataInRange.map(country => ({
    x: Object.keys(country.export),
    y: Object.values(country.export),
    name: `${country.name} - Export`,
    type: 'bar'
  }));

  return (
    <div>
      <h1>Bar charts of Imports and Exports</h1>
      <div className="selection-container">
        <div className="country-selection">
          <h3>Select Countries</h3>
          {Object.keys(data).map(country => (
            <label key={country}>
              <input type="checkbox" value={country} checked={selectedCountries.includes(country)} onChange={handleCountryChange} />
              {country}
            </label>
          ))}
        </div>
        <div className="year-selection">
          <label htmlFor="yearRange"><strong>Select Year Range:</strong></label>
          <input id="yearRange" type="range" min={2015} max={2020} value={selectedYears} onChange={handleYearChange} step={1} />
          <span>{selectedYears[0]} - {selectedYears[1]}</span>
        </div>
      </div>
      <div className="chart-container">
        <Plot data={importBarData} layout={{ barmode: 'group', title: 'Import Data', xaxis: { title: 'Year' }, yaxis: { title: 'Value' } }} />
      </div>
      <div className="chart-container">
        <Plot data={exportBarData} layout={{ barmode: 'group', title: 'Export Data', xaxis: { title: 'Year' }, yaxis: { title: 'Value' } }} />
      </div>
    </div>
  );
};

export default Dashboard;
