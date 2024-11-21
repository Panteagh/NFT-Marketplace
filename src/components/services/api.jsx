import axios, { Axios } from "axios";

const client = axios.create({
    baseURL :"http://localhost:3000"
})

export async function getApi(){
     const {data} = await client("/NFTsAPI")
     return data
}