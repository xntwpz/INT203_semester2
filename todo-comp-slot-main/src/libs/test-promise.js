async function doSomethings(done) {
    console.log('doSomething is executing ....wait')
    return new Promise((resolve,reject) => {
        setTimeout(()=> (done ? resolve('success') : reject('failure')) , 5000)
    })
}

// 1. them() + catch() sysntax to wait promise 

/*
doSomethings(true)
   .then((status) => {
       console.log(`your task is ${status}`)
   })
   .catch((error)=>{
    // catch to handle error
       console.log(`error : ${error}`)
   })
*/


// 2 async await syntax
async function waitDoSomething(result) {
    try{
        const status= await doSomethings(true)
        console.log(`your task is ${status}`)
        // if dont have await console => 'your task is [object Promise]'
    } catch(error){
        console.log(`error : ${error}`)
    }   
}

waitDoSomething(true)