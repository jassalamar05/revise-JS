// aisa example jisme error first callback ka use kiya gaya hai

function check(success,callback){

if(success){
    callback(null,"Login Success");
}else{
    callback("invalid Password",null);
}
}

check(false,function(err,data){
    if(err){
        console.log("Error: " + err);

        return;
    }
    console.log("Data: " + data);
})


// callback (err,data) --> success
// callback (err,data) --> error
