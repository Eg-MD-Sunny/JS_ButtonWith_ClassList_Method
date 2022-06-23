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
    document.getElementById("add").classList.add("adding");
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