// let heading=document.getElementById("mainheading")
// heading.innerText="Welcome to DOM"

// let para=document.getElementById("para")
// para.style.color="green"

// let para1=document.getElementById("info")
// para1.innerHTML="<strong> This is bold text now!</Strong>"

// let paragraph=document.querySelector("p")
// paragraph.setAttribute("id","para2")
// console.log(paragraph.getAttribute("id"))


let text=document.getElementById("main-heading")

 console.log(text.innerText)
 text.innerHTML=" Welcome <span> Student </span>"


 let para=document.getElementsByClassName("description")[0]
  para.innerText="DOM is powerful"
  para.style.color="blue"

  let click=document.querySelectorAll("button")[1]
  click.innerText="Clicked!"





