const promiseFunc = function(name){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(name == 'nandha'){
                resolve("I am resolve:"+name)
            }else{
                reject("I am reject:"+name)
            }

        }, 2000)
    })
}

promiseFunc("mohan").then(data=>{
    console.log("data->", data)
}).catch(error=>{
    console.log("error->", error)
})

const asyncFunc = async(name)=>{
    try{
        const result = await promiseFunc(name)
        console.log("result->", result)

    }catch(error){
        console.log("error->", error)
    }
}

asyncFunc("nandha")

const intervalId = setInterval(()=>{
    console.log("I am simple interval")
}, 1000)

setTimeout(()=>{
    clearInterval(intervalId)
}, 5000)


setImmediate(()=>{
 console.log("I am immediate")   
})

process.nextTick(()=>{
    console.log("I am process.nexttick")
})