let user = {
    name: "Amar",
    age: 24,
    city: "Jalandhar"
};

for (let key in user) {
    console.log(key, ":", user[key]);
}