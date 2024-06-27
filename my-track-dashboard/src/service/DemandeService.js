import http from "./AxiosContext";
const getAll = () => {
  return http.get("/conge/getAll");
};
const get = id => {
  return http.get(`/conge/getbyId/${id}`);
};
const create = data => {
  return http.post("/conge/setconge", data);
};
const update = (id, data) => {
  return http.put(`/conge/update/${id}`, data);
};
const remove = id => {
  return http.delete(`/conge/delete/${id}`);
};
  export default {
    getAll,
    get,
    create,
    update,
    remove,
  };