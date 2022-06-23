///Horizontal & Verically Centering Using JS

const body = document.body;
body.style.position = "Absolute";
body.style.width = "100%";
body.style.height = "100%";

body.style.margin = 0;
body.style.padding = 0;

body.style.display ="flex";
body.style.alignItems = "center";
body.style.justifyContent = "center";


//----ClassLish Add Method
document.getElementById("add").addEventListener("click",classList);
function classList(){
    //document.getElementById("add").classList.add("adding");


//----ClassLish Length Method
var a = document.getElementById("add").classList.length;
console.log('Total Adding ClassCount:',a);


//----ClassLish Item Method
var b = document.getElementById("add").classList.item(1);
console.log(b);

//----ClassLish Contain Method
var c = document.getElementById("add").classList.contains("abc");
console.log("The Result is:",c);
}

//----ClassLish Remove Method
document.getElementById("remove").addEventListener("click",classList1);
function classList1(){
    document.getElementById("remove").classList.remove("removeing");
}

//----ClassLish Toggle Method
document.getElementById("toggle").addEventListener("click",classList2);
function classList2(){
    document.getElementById("toggle").classList.toggle("adding");
}

