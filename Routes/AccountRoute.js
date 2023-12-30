import AccountServices from "../Services/Account.services.js";

const AccountRoute = (app) => {
  app.get("/cryptocurrencies", async (req, res) => {
    try {
      const cryptocurrencies = await AccountServices.getCryptocurrencies();
      res.json(cryptocurrencies);
    } catch (error) {
      res.status(500).json({ error: error.message || "Internal Server Error" });
    }
  });

  
  app.get("/convert", async (req, res) => {
    const { sourceCrypto, amount, targetCurrency } = req.query;

    try {
      const result = await AccountServices.convertCurrency(
        sourceCrypto,
        amount,
        targetCurrency
      );
      res.json(result);
    } catch (error) {
      res.status(500).json({ error: error.message || "Internal Server Error" });
    }
  });
};

export default AccountRoute;
