
const client = axios.create({
    baseURL :"https://json-server-vercel-rosy-gamma.vercel.app"
})

export async function getApi(){
     const {data} = await client("/NFTsAPI")
     return data
}

export async function getNftData(id){
     const {data} = await client(`/NFTsAPI/${id}`)
     return data
}

