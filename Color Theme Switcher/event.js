let body= document.querySelector("body");


let dark=document.getElementById("drk-btn");
dark.addEventListener("click",
    function(){
        body.style.backgroundColor="black";
        body.style.color="white";
    }
)


let light=document.getElementById("lgt-btn");
light.addEventListener("click",
    function(){
        body.style.backgroundColor="white";
        body.style.color="black";
    }
)

let blue=document.getElementById("ble-btn");
blue.addEventListener("click",
    function(){
        body.style.backgroundColor="skyblue";
        body.style.color="royalblue";
    }
)


