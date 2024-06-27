import http from "./AxiosContext";
const getAll = () => {
  return http.get("/document/getAll");
};
const get = id => {
  return http.get(`/document/getbyId/${id}`);
};
const create = data => {
  return http.post("/document/upload", data);
};
const update = (id, data) => {
  return http.put(`/document/update/${id}`, data);
};
const remove = id => {
  return http.delete(`/document/delete/${id}`);
};
const findByName = title => {
    return http.get(`/document/getbyname=${title}`);
  };
  export default {
    getAll,
    get,
    create,
    update,
    remove,
    findByName
  };