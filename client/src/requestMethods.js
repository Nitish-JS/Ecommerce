import axios from "axios";

const BASE_URL = "http://localhost:8000/api";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNTY5OGY4MWJhNWEyNzc4N2M5MzIxYyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2NjYxOTg3MCwiZXhwIjoxNjY2NzkyNjcwfQ.faJ_yR8SA2PsUiqALnrSWHovIg14J8lbIYq7ElJqZWA";
export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});