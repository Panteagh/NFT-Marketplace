import axios, { Axios } from "axios";

const client = axios.create({
    baseURL :"http://localhost:3000"
})

export async function getCreators(){
     const {data} = await client("/artistAvatars")
     return data
}

export async function getNFTs(){
     const {data} = await client("/NFTs")
     return data
}