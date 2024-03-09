import React from 'react';
import LineChart from './LineChart';

class Plot extends React.Component {
  render() {
    const { data, selectedCountries, selectedYears } = this.props;

    return (
      <div>
        <LineChart
          data={data}
          selectedCountries={selectedCountries}
          selectedYears={selectedYears}
        />
      </div>
    );
  }
}

export default Plot;