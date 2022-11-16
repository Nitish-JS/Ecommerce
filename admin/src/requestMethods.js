import axios from "axios";

const BASE_URL = "http://localhost:8000/api";
let TOKEN;
if (JSON.parse(localStorage.getItem("persist:root"))?.user) {
  TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root"))?.user)
    ?.currentUser?.accessToken;
} else TOKEN = "";
// const TOKEN =
export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});
