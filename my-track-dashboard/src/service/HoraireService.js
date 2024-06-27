import http from "./AxiosContext";
const getAll = () => {
  return http.get("/horaire/getAll");
};
const get = id => {
  return http.get(`/horaire/getbyId/${id}`);
};
const create = data => {
  return http.post("/horaire/settime", data);
};
const update = (id, data) => {
  return http.put(`/horaire/update/${id}`, data);
};
const remove = id => {
  return http.delete(`/horaire/delete/${id}`);
};
const findByName = title => {
    return http.get(`/horaire/getbyname=${title}`);
  };
  export default {
    getAll,
    get,
    create,
    update,
    remove,
    findByName
  };