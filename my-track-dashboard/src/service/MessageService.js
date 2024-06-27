import http from "./AxiosContext";
const getAll = () => {
  return http.get("/message/getAll");
};
const get = id => {
  return http.get(`/message/getbyId/${id}`);
};
const create = data => {
  return http.post("/message/sendmessage", data);
};
const update = (id, data) => {
  return http.put(`/message/update/${id}`, data);
};
const remove = id => {
  return http.delete(`/message/delete/${id}`);
};
  export default {
    getAll,
    get,
    create,
    update,
    remove,
  };