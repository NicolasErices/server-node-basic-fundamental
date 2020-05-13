const promise = new Promise((resolver, reject) =>{
    setTimeout(()=>{
        if(Math.random() < 0.5){
            resolver("hello world");
        }
        else{
            reject(new Error("Hello Error"))
        }
    }, 5000);
});


promise
    .then(msg => msg.toUpperCase())
    .then(msg => console.log("message", msg))
    .catch(err => console.log("error", err))