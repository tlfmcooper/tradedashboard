import React, { Component } from 'react';
import Plotly from 'plotly.js-basic-dist';

class LineChart extends Component {
  componentDidMount() {
    this.drawPlot();
  }

  componentDidUpdate(prevProps) {
    if (
      this.props.data !== prevProps.data ||
      this.props.selectedCountries !== prevProps.selectedCountries ||
      this.props.selectedYears !== prevProps.selectedYears
    ) {
      this.drawPlot();
    }
  }

  drawPlot = () => {
    const { data, selectedCountries, selectedYears } = this.props;

    // Define a custom color scale for vibrant colors
    const colors = [
      '#FF0000', // Pure red
      '#FFFF00', // Pure yellow
      '#00FF00', // Pure green
      '#0000FF', // Pure blue
      '#FF00FF', // Pure magenta
      '#FF6347', // Tomato
      '#00FFFF', // Aqua
      '#FFA500', // Orange
      '#800080', // Purple
      '#40E0D0'  // Turquoise
    ];

    // Define line styles
    const lineStyles = [
      'solid', // Solid line
      'dashed', // Dashed line
      'dotted', // Dotted line
      'dashdot', // Alternating dashes and dots
      'longdashdotdot', // Alternating long dashes and double dots
      'shortdash' // Short dashed line
    ];

    const transformedData = [];
    const countries = Object.keys(data);

    countries.forEach((country, index) => {
      const importData = data[country].import;
      const exportData = data[country].export;

      const importTrace = {
        x: Object.keys(importData),
        y: Object.values(importData),
        type: 'scatter',
        mode: 'lines+markers',
        name: `${country} - Import`,
        line: {
          color: colors[index % colors.length], // Use a different color for each country
          dash: lineStyles[index % lineStyles.length] // Use a different line style for each country
        }
      };

      const exportTrace = {
        x: Object.keys(exportData),
        y: Object.values(exportData),
        type: 'scatter',
        mode: 'lines+markers',
        name: `${country} - Export`,
        line: {
          color: colors[(index + 1) % colors.length], // Use a different color for export
          dash: lineStyles[(index + 1) % lineStyles.length] // Use a different line style for export
        }
      };

      transformedData.push(importTrace, exportTrace);
    });

    // Define bar chart data for import and export
    const importBarData = selectedCountries.map(country => ({
      x: selectedYears,
      y: selectedYears.map(year => data[country]?.import?.[year] || null),
      type: 'bar',
      name: `${country} - Import`
    }));

    const exportBarData = selectedCountries.map(country => ({
      x: selectedYears,
      y: selectedYears.map(year => data[country]?.export?.[year] || null),
      type: 'bar',
      name: `${country} - Export`
    }));

    const allData = [...transformedData, ...importBarData, ...exportBarData];

    const layout = {
      title: {
        text: 'Trend of Import/Export from 2015 to 2020',
        font: {
          size: 24 // Increase the title font size
        },
        y: 0.87 // Increase the space between title and chart
      },
      xaxis: {
        title: 'Year'
      },
      yaxis: {
        title: 'Imports/Exports'
      },
      hovermode: 'closest', // Display hover labels closest to the cursor
      legend: {
        orientation: 'h', // Horizontal legend
        yanchor: 'bottom',
        y: 1.05, // Increase the space between chart and legend
        xanchor: 'right',
        x: 1
      },
      margin: { // Increase space between countries' charts
        t: 100, // Top margin
        b: 150 // Bottom margin
      },
      width: 1200, // Increase chart width for higher resolution
      height: 800 // Increase chart height for higher resolution
    };

    Plotly.newPlot('line-chart', allData, layout);
  };

  render() {
    return <div id="line-chart" className="chart-container"></div>;
  }
}

export default LineChart;