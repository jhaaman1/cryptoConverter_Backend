import axios from "axios";

const AccountServices = {
  getCryptocurrencies: async (req, res) => {
    try {
      const response = await axios.get(
        "https://api.coingecko.com/api/v3/coins/markets",
        {
          params: {
            vs_currency: "usd",
            order: "market_cap_desc",
            per_page: 100,
            page: 1,
            sparkline: false,
          },
        }
      );

      const cryptocurrencies = response.data.map((crypto) => ({
        id: crypto.id,
        name: crypto.name,
        symbol: crypto.symbol,
      }));

      return cryptocurrencies;
    } catch (error) {
      console.error(error);
      throw new Error("Error fetching cryptocurrencies");
    }
  },

  convertCurrency: async (req, res) => {
    try {
      const response = await axios.get(
        "https://api.coingecko.com/api/v3/simple/price",
        {
          params: {
            ids: sourceCrypto,
            vs_currencies: targetCurrency.toLowerCase(),
          },
        }
      );

      const exchangeRate =
        response.data[sourceCrypto][targetCurrency.toLowerCase()];
      const convertedAmount = amount * exchangeRate;

      return {
        convertedAmount,
        sourceCrypto,
        targetCurrency,
        exchangeRate,
      };
    } catch (error) {
      console.error(error);
      throw new Error("Error performing currency conversion");
    }
  },
};

export default AccountServices;