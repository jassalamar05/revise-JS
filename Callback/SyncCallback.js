function greet(name) {
    console.log("Hello " + name);
}

function processUserInput(callback) {
    callback("Amar");
}

processUserInput(greet);
console.log("Callback function has been executed");