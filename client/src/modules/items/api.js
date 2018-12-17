import axios from "axios";

const api = {};

api.getItems = () => {
  return axios.get("/api/items");
};

api.postItem = item => {
  return axios.post("/api/items", {
    name: item
  });
};

api.deleteItem = id => {
  return axios.delete(`/api/items/${id}`);
};

export default api;
