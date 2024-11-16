import axios, { Axios } from "axios";

const client = axios.create({
    baseURL :"http://localhost:3000"
})

export async function getCreators(){
     const {data} = await client("/artistAvatars")
     return data
}