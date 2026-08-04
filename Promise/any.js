const p1 = new Promise((_, reject) => {
    setTimeout(() => reject("Error"), 1000);
});

const p2 = new Promise((resolve) => {
    setTimeout(() => resolve("Success"), 3000);
});

Promise.any([p1, p2])
    .then((result) => {
        console.log(result);
    })
    .catch((err) => {
        console.log(err);
    });