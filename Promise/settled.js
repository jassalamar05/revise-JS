Promise.allSettled([
    Promise.resolve("A"),
    Promise.reject("Error"),
    Promise.resolve("C")
])
.then((result) => {
    console.log(result);
});

// sabhi promise ka result dekhan ahi 