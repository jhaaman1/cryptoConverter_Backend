import axios from "axios";
import  express  from "express";
import AccountRoute from "./Routes/AccountRoute.js";

const app = express();
const PORT = process.env.PORT || 3000;

AccountRoute(app);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
