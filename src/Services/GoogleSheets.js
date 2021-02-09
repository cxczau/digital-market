/* eslint-disable no-undef */
const SPREADSHEET_ID = "1MPHhQUKeJLTmrKnChrTT2rydHNNw4F-YF8NOMmHt4WI";
// const SPREADSHEET_ID = "1c2hhDbPHtNKbL6WmUp3_JAPgpoftMI_HEgesiFhpjlo";
const API_KEY = process.env.GOOGLE_API_KEY;

/**
 * Microservice to write to an existing Google Sheet 
 */
export const addToGoogleSheet = (info) => {
  const uri = `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/batchUpdate`;
  // const body = {
  //   "range": "Sheet1!A1:D5",
  //   "majorDimension": "ROWS",
  //   "values": [
  //     ["Item", "Cost", "Stocked", "Ship Date"],
  //     ["Wheel", "$20.50", "4", "3/1/2016"],
  //     ["Door", "$15", "2", "3/15/2016"],
  //     ["Engine", "$100", "1", "3/20/2016"],
  //     ["Totals", "=SUM(B2:B4)", "=SUM(C2:C4)", "=MAX(D2:D4)"]
  //   ],
  // };

  const body = {
    requests: [{
      repeatCell: {
        range: {
          startColumnIndex: 0,
          endColumnIndex: 1,
          startRowIndex: 0,
          endRowIndex: 1,
          sheetId: 0
        },
        cell: {
          userEnteredValue: {
            "numberValue": 10
          },
        },
        fields: "*"
      }
    }]
  }

  return fetch(`${uri}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.GOOGLE_ACCESS_KEY}`,
      key: API_KEY,
    },
    body: JSON.stringify(body),
  })
    .then((response) => {
      return response.json();
    })
    // .then((appData) => {
    //   return appData;
    // });
};
