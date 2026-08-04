const p1 = new Promise((_, reject) => {
    setTimeout(() => reject("Server Error"), 1000);
});

const p2 = new Promise((resolve) => {
    setTimeout(() => resolve("Data Found"), 3000);
});

Promise.race([p1, p2])
    .then((result) => {
        console.log(result);
    })
    .catch((err) => {
        console.log(err);
    });