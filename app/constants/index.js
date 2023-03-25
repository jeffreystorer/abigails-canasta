const SHEET_ID = process.env.NEXT_PUBLIC_GOOGLE_SHEETS_ID;
const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_SHEETS_API_KEY;
const BASE_URL = 'https://sheets.googleapis.com/v4/spreadsheets/';
const KEY = '?key=' + API_KEY;
const BATCH_KEY = '&key=' + API_KEY;
const SHEET_URL =
  BASE_URL + SHEET_ID + '/values/Players%20for%20This%20Friday' + KEY;
const RANGES = {
  want: 0,
  wait: 1,
  host: 2,
  contacts: 3,
};
export { BASE_URL, SHEET_ID, SHEET_URL, BATCH_KEY, RANGES };
