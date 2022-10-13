function cacl(callback){
    return callback(num1, num2);
}
setTimeout(function(){
    console.log('Log after 2s');
}, 2000)





export function runCode(callback) {
    window.setTimeout(callback, 2000);
  }
  function print(message) {
    return message;
  }
  runCode(print('Log after 2s'));