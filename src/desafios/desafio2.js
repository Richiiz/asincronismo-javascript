export function delay(time, message) {
    const miPromesa = new Promise((resolve, reject) => {
      if (time >= 0) {
        window.setTimeout(() => {
          resolve(message)
        }, time)
      } else {
        reject("We cannot execute the function")
      }
    })
    return miPromesa
}


const tiempo = 1900;
const timer = new Promise (function (resolve, reject){
if (tiempo >= 2000){
    resolve("Hello after 2s");
}else{
    reject("es despues de dos segundos")
}
});
timer.then(resultado =>{
    console.log(resultado);
}).catch((error) => {
    console.log(error);
}).finally(() => console.log('finally'));