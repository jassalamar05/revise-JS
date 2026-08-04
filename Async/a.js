function getUser() {
    return Promise.resolve("Amardeep");
}

function getOrders() {
    return Promise.resolve(["Laptop", "Phone"]);
}

async function main() {
    try {
        const user = await getUser();
        console.log(user);

        const orders = await getOrders();
        console.log(orders);
    } catch (err) {
        console.log(err);
    }
}

main();