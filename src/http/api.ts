import axios from "axios";

const instance = axios.create({
    baseURL: 'https://trato-tech-roan.vercel.app/db.json'
})

export default instance
