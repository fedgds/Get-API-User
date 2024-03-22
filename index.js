const linkApi='https://fakestoreapi.com/products'

//sử dụng để post, put, patch, delete
const option=(method,data)=>{
 return{
        method:method,
        headers:{
            "Content-type":"application/json"
        },
        body:JSON.stringify(data)
    }
}

// get data
const getData= async()=>{
    try {
        const res= await fetch(linkApi)
        const data= await res.json()
        return console.log(data)
    } catch (error) {
        console.log(error)
    }
}

getData()

