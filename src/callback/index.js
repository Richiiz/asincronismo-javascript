function suma(num1,num2){
    return num1 + num2;
}


function cacl(num1, num2, callback){
    return callback(num1, num2);
};

console.log(cacl(2, 2, suma));

setTimeout(function() {
    console.log('hola mundito');
}, 5000)


function gretting(nombre){
    console.log(`hola ${nombre}`);
}
setTimeout(gretting, 2000, 'oscar');