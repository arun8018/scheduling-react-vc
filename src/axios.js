import axios from "axios";
const token = "280081f9ebf9d3be0a48333226b56705cba9d8b6";
// `Bearer ${token}`;
const instance = axios.create({
  baseURL: "http://35.162.14.93",
});

instance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
instance.defaults.headers.post["Content-Type"] = "application/json";
export default instance;
