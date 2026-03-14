function encodeBase64(){

let text=document.getElementById("baseInput").value;

let encoded=btoa(text);

document.getElementById("baseOutput").innerText=encoded;

}

function generatePassword(){

let length=document.getElementById("passLength").value;

let chars="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$";

let password="";

for(let i=0;i<length;i++){

password+=chars[Math.floor(Math.random()*chars.length)];

}

document.getElementById("password").innerText=password;

}

function formatJSON(){

let input=document.getElementById("jsonInput").value;

try{

let formatted=JSON.stringify(JSON.parse(input),null,4);

document.getElementById("jsonOutput").innerText=formatted;

}

catch{

document.getElementById("jsonOutput").innerText="Invalid JSON";

}

}
