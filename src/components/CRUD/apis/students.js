import axios from "axios";

const fetch = () => axios.get("http://localhost:4000/students");

const create = payload => axios.post("http://localhost:4000/students", payload);

const studentsApi = { fetch, create };

export default studentsApi;
