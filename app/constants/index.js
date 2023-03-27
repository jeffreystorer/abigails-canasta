const SHEET_ID = process.env.NEXT_PUBLIC_GOOGLE_SHEETS_ID;
const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_SHEETS_API_KEY;
const BASE_URL = 'https://sheets.googleapis.com/v4/spreadsheets/';
const KEY = '?key=' + API_KEY;
const BATCH_KEY = '&key=' + API_KEY;
const PLAYERS_URL =
  BASE_URL + SHEET_ID + '/values/Players%20for%20This%20Friday' + KEY;
const WANT_URL = BASE_URL + SHEET_ID + '/values/Want%20to%20Play' + KEY;
const WAIT_URL =
  BASE_URL + SHEET_ID + '/values/Wait%20List%20Last%20Week' + KEY;
const HOST_URL = BASE_URL + SHEET_ID + '/values/Host' + KEY;
const PLAYERINFO_URL = BASE_URL + SHEET_ID + '/values/Player%20Info' + KEY;
const RANGES = {
  want: 0,
  host: 1,
  playerinfo: 2,
  wait: 3,
};
export { PLAYERS_URL, WANT_URL, WAIT_URL, HOST_URL, PLAYERINFO_URL, RANGES };
