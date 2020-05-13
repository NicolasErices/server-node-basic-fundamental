const promiseFunction = () => new Promise((resolver, reject) =>{
    setTimeout(()=>{
        if(Math.random() < 0.5){
            resolver("hello world");
        } else {
            reject(new Error("Hello Error"))
        }
    }, 2000);
});


async function asyncAwait(){
    try{
        const msg = await promise();
        console.log.log("mesasge", msg)
    }catch(err){
        console.log("error", err)
    }
}
asyncAwait();