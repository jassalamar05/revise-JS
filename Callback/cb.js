function login(callback) {
    setTimeout(() => {
        console.log("User logged in");
        callback();
    }, 1000)
}

function getUserData(callback) {
    setTimeout(() => {
        console.log("User data fetched");
        callback();
    }, 1000)  
}

function displayUserData() {
    setTimeout(() => {
        console.log("User data displayed");
    }, 1000)
}   

//problem is : yeh appke nested callback hai ...
login(()=>{
    getUserData(()=>{
        displayUserData(()=>{
            console.log("All operations completed");
        })
    })
})