import axios from "axios";

const baseURL =
  process.env.NODE_ENV === "production"
    ? "/api/v1"
    : "http://localhost:3006/api/v1";

const client = axios.create({
  baseURL,
});

export { baseURL, client };
