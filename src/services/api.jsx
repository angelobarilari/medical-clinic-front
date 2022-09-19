import axios from "axios";

const apiUrl = axios.create({
  baseURL: "http://medical-clinic-back.herokuapp.com"
});

export default apiUrl
