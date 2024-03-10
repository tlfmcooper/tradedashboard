const fs = require('fs');
const Papa = require('papaparse');

const parseCSV = (filePath) => {
  const csvFile = fs.readFileSync(filePath, 'utf8');
  return new Promise((resolve, reject) => {
    Papa.parse(csvFile, {
      header: true,
      complete: (results) => resolve(results.data),
      error: (error) => reject(error)
    });
  });
};

module.exports = parseCSV;