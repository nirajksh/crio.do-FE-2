document.querySelector("#grandparent")
.addEventListener('click',()=>{
    console.log("grandparent clicked!!")
},false);
document.querySelector("#parent")
.addEventListener('click',()=>{
    console.log("parent clicked!!")
},true);
document.querySelector("#child")
.addEventListener('click',()=>{
    console.log("child clicked!!")
},false);