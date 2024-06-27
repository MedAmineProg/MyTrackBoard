import http from "./AxiosContext"



const create =data=>{
    return http.post("/user/login",data)

}

const logout =data=>{
    return http.post("/user/logout",data)

}

export default{
    create,
    logout
}