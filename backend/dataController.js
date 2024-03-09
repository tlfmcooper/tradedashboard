const parseCSV = require('./csvParser');

const CSV_FILE_PATH = './import_export.csv';

// Define transformData function
function transformData(data) {
  const formattedData = {};
  for (const item of data) {
    const { economy, year, value } = item; // Destructuring for readability
    const country = item.Country;
    let series = item.series ? item.series.split(" ")[0] : null; // Check if series exists before splitting

    // Replace series with "import" or "export"
    if (series === "NE.IMP.GNFS.CD") {
      series = "import";
    } else if (series === "NE.EXP.GNFS.CD") {
      series = "export";
    }

    // Skip adding undefined countries
    if (!country) {
      continue;
    }

    if (!formattedData[country]) {
      formattedData[country] = {};
    }

    if (series) {
      if (!formattedData[country][series]) {
        formattedData[country][series] = {}; // Initialize series object
      }
      formattedData[country][series][year] = parseFloat(value); // Convert value to number
    }
  }
  return formattedData;
}

const getData = async (req, res) => {
  try {
    const data = await parseCSV(CSV_FILE_PATH);
    const formattedData = transformData(data); // Transform data

    console.log(formattedData);
    res.json(formattedData); // Send transformed data
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = {
  getData
};
