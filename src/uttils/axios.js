import Axios from "axios";

const axios = Axios.create({
  baseURL: "http://localhost:1003",
});

export default axios;
