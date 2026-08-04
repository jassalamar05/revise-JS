function hello(){
    console.log("Hello World");
}

function greet(callback){
    console.log("Welcome to the world of callbacks");
    callback()
    console.log("Callback function has been executed")
}

greet(hello)