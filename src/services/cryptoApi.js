const BASE_URL = "https://api.coingecko.com/api/v3";
const API_KEY = "CG-AW518tPgZ21syU3a7wMob5Vz";

const getCoinList = (page, currency) =>
    `${BASE_URL}/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=20&page=${page}&sparkline=false&locale=en&x_cg_demo_api_key=${API_KEY}`;
const searchCoin = (query) =>
    `${BASE_URL}/search?query=${query}&x_cg_demo_api_key=${API_KEY}`;

const marketChart = coin => `${BASE_URL}/coins/${coin}/market_chart?vs_currency=usd&days=7`


export { getCoinList, searchCoin, marketChart};
