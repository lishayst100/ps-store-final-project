import axios from "axios";


const baseurl = "http://localhost:3001/api/auth";

const register = (username, password, email, phone) => {
  return axios.post(baseurl + "/signup", { username, password, email, phone });
};


const login = async(email,password) => {
    return axios.post(baseurl + '/signin' , {email, password})
    .then(res => {
        const token = res.data.accessToken
        const email = res.data.email
        const password = res.data.password
        const username = res.data.username
        const id = res.data._id

        if(token){
            localStorage.setItem('token', token)
            localStorage.setItem('user', JSON.stringify({email,password,username,id}))
        }
        return res.data
    })
}
const adminLogin = async(email,password) => {
    return axios.post(baseurl + '/isadmin' , {email, password})
    .then(res => {
        const token = res.data.accessToken
        const email = res.data.email
        const password = res.data.password
        if(token){
            localStorage.setItem('token', token)
            localStorage.setItem('user', JSON.stringify({email,password}))
        }
        return res.data
    })
}




const logout = () => {
    localStorage.removeItem('token')
}

export {register , login , logout, adminLogin}