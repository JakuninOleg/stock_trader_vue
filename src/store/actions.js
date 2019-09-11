import axios from 'axios';

export const loadData = ({commit}) => {
  axios
    .get(`https://stocktrader-vue-56756.firebaseio.com/data.json?orderBy="$key"&limitToLast=1`)
    .then(data => {
      let axData = data.data;

      if(data) {
        for (let key in axData) {
          const stocks = axData[key].stocks;
          const funds = axData[key].funds;
          const stockPortfolio = axData[key].stockPortfolio;

          const portfolio = {
            stockPortfolio,
            funds
          };
          commit('SET_STOCKS', stocks);
          commit('SET_PORTFOLIO', portfolio);
        }
      }
    })
};
