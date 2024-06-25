let age:number = 18;
let score:number = 0;
let username:string = "";
let isAdmin:boolean = false;

// age
for(let i = 1; i <= age; i++){
    console.log(i);
}

if(age > 18){
    console.log("Yeah I'm over 18!")
}
else{
    console.log("Not yet...")
}

// score
if(score > 0){
    console.log("Score is available")
}
else{
    console.log("Score is not available...")
}

if(score){
    console.log("Score is evaluated as truthy")
}
else{
    console.log("Score evaluated as falsy...")
}

// username
if(username !== ""){
    console.log("Username is available")
}
else{
    console.log("Username is not available...")
}

if(username){
    console.log("Username is evaluated as truthy")
}
else{
    console.log("Username evaluated as falsy...")
}

// isAdmin
if(isAdmin){
    console.log("isAdmin is evaluated as truthy")
}
else{
    console.log("isAdmin evaluated as falsy...")
}

if(isAdmin){
    console.log("isAdmin is true")
}
else{
    console.log("isAdmin is false...")
}


