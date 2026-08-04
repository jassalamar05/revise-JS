function getUser(){
    return Promise.resolve("amardeep")
}

function getOrders(){
    return Promise.resolve("order1, order2, order3")
}

getUser()

.then((user)=>{
    console.log(user)
    return getOrders();
})
.then((orders)=>{
    console.log(orders)
})
.catch((err)=>{
    console.log(err)
}
)