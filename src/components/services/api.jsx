import axios from "axios"

export const BASE_URL=import.meta.env.VITE_BASE_URL

const client = axios.create({
    baseURL: BASE_URL
})

export async function getApi(){
     const {data} = await client("/NFTsAPI")
     return data
}

export async function getNftData(id){
     const {data} = await client(`/NFTsAPI/${id}`)
     return data
}

