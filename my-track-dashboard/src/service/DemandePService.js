import http from "./AxiosContext";
const getAll = () => {
  return http.get("/paiement/getAll");
};
const get = id => {
  return http.get(`/paiement/getbyId/${id}`);
};
const create = data => {
  return http.post("/paiement/setpaiement", data);
};
const update = (id, data) => {
  return http.put(`/paiement/update/${id}`, data);
};
const remove = id => {
  return http.delete(`/paiement/delete/${id}`);
};
  export default {
    getAll,
    get,
    create,
    update,
    remove,
  };