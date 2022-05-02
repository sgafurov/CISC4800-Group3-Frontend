import axios from "axios";
export default axios.create({
  baseURL: "https://cisc4800-weather-app.herokuapp.com",
  headers: {
    "Content-type": "application/json"
  }
});