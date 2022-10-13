const promise = new Promise(function (resolve, reject){
    resolve ('hey!')
});


const cows = 10;

const countCows = new Promise(function(resolve , reject){
    if(cows > 10){
        resolve(`tenemos ${cows} vaquitas para ordeñar`);
    }else{
        reject("no hay suficientes vaquitas :(");
    }
});

countCows.then(resultado => {
    console.log(resultado);
}).catch((error) => {
    console.log(error);
}).finally(()=> console.log('finally'));