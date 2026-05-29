let button=document.getElementById("btn");
button.addEventListener("mouseover",
    function (event){
    body=document.querySelector("body");
   body.style.backgroundColor="blue";
}
)

button.addEventListener("mouseout",
    function (event){
    body=document.querySelector("body");
   body.style.backgroundColor="white";
}
)
// button.addEventListener("click",
//     function (event){
//         para=document.querySelector("p")
//         para.innerText="this is changed";
//         para.style.color="red"
//     }
// )
