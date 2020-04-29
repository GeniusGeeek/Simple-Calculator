
function calculate(){
var input = document.getElementById("input").value;
var splitmul= "*"; var splitdiv= "/"; var splitadd= "+"; var splitsub= "-";
        
//division
        
if(input.includes(splitdiv)){
var div= input.split("/").map(x => +x);//changes the array of string created by split() function to an array of intergers 
var ans= div[0] / div[1];
document.getElementById("ans").innerHTML= ans;
 }

//addition 

else if(input.includes(splitadd)){
var div= input.split("+").map(x => +x);//changes the array of string created by split() function to an array of intergers
var ans= div[0] + div[1];
document.getElementById("ans").innerHTML= ans;
}

//subtraction

else if(input.includes(splitsub)){
var div= input.split("-").map(x => +x);//changes the array of string created by split() function to an array of intergers
var ans= div[0] - div[1];
document.getElementById("ans").innerHTML= ans;
}

//multiplication

else if(input.includes(splitmul)){
var div= input.split("*").map(x => +x);//changes the array of string created by split() function to an array of intergers   
var ans= div[0] * div[1];
document.getElementById("ans").innerHTML= ans;
}

else{
alert("math error");
}
}
