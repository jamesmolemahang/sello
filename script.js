function display()
{
    
    let boss=document.getElementById("result")
    let j=document.getElementById('text')
    boss.textContent="Loading..."    
fetch(" https://lesotho-orphanages.vercel.app/01")
.then(res=>res.json())
.then((data)=>{
    boss.textContent=""

    let h=document.createElement("h1")
    h.innerHTML="Orphanage info"
    boss.append(h)
    h.style.textAlign="center"
    h.style.margin="9px"
    h.style.fontSize="24px"
    const img =document.createElement("img");
    img.setAttribute("src",data.image);
    boss.append(img);
    img.style.width="100%"

    img.style.marginTop="15px"

    j.textContent=""
    const p5=document.createElement("p");
    p5.textContent= "Id : " +data.id;
    j.append(p5);

    const p1=document.createElement("p");
    p1.textContent="name: " +data.name;
    j.append(p1);

    const p3=document.createElement("p");
    p3.textContent= "location : " +data.location;
    j.append(p3);


    const p2=document.createElement("p");
    p2.textContent= "Donated money : M" +data.donated+`.00`;
    j.append(p2);

    
    const p4=document.createElement("p");
    p4.textContent= "Target amount : M" +data.target +`.00`;
    j.append(p4);
    
    

})




}
let a=document.getElementById("nep")
a.addEventListener("click",display)
 
let n=document.getElementById("six")
n.addEventListener("click",display)

function display1()
{
    let j=document.getElementById('text')
    let boss=document.getElementById("result")
    boss.textContent="Loading..."
fetch(" https://lesotho-orphanages.vercel.app/02")
.then(res=>res.json())
.then(data=>{
    boss.textContent=" "
    
    let h=document.createElement("h1")
    h.innerHTML="Orphanage info"
    boss.append(h)
    h.style.textAlign="center"
    h.style.fontSize="24px"
    h.style.margin="9px"
    const img =document.createElement("img");
    img.setAttribute("src",data.image);
    boss.append(img);
    img.style.width="100%"
    
    img.style.marginTop="15px"

    j.textContent=""
    const p5=document.createElement("p");
    p5.textContent= "Id : " +data.id;
    j.append(p5);

    const p1=document.createElement("p");
    p1.textContent="name: " +data.name;
    
    j.append(p1);

    const p3=document.createElement("p");
    p3.textContent= "location : " +data.location;
    j.append(p3);


    const p2=document.createElement("p");
    p2.textContent= "Donated money : M" +data.donated+`.00`;
    j.append(p2);

    
    const p4=document.createElement("p");
    p4.textContent= "Target amount : M" +data.target+`.00`;
    j.append(p4);
    


})




}


let b=document.getElementById("nep1")
b.addEventListener("click",display1)

let v=document.getElementById("five")
v.addEventListener("click",display1)

function display2()
{
    let j=document.getElementById('text')
    let boss=document.getElementById("result")
    boss.textContent="Loading..."
fetch(" https://lesotho-orphanages.vercel.app/03")
.then(res=>res.json())
.then(data=>{
    boss.textContent=""
    
    let h=document.createElement("h1")
    h.innerHTML="Orphanage info"
    boss.append(h)
    h.style.textAlign="center"
    h.style.margin="9px"
    h.style.fontSize="24px"
    const img =document.createElement("img");
    img.setAttribute("src",data.image);
    boss.append(img);
    img.style.width="100%"
    
    img.style.marginTop="15px"

    j.textContent=""
    const p5=document.createElement("p");
    p5.textContent= "Id : " +data.id;
    j.append(p5);

    const p1=document.createElement("p");
    p1.textContent="name: " +data.name;
    j.append(p1);

    const p3=document.createElement("p");
    p3.textContent= "location : " +data.location;
    j.append(p3);


    const p2=document.createElement("p");
    p2.textContent= "Donated money : M" +data.donated+`.00`;
    j.append(p2);

    
    const p4=document.createElement("p");
    p4.textContent= "Target amount : M" +data.target+`.00`;
    j.append(p4);


})



}





let d=document.getElementById("nep2")
d.addEventListener("click",display2)

let p=document.getElementById("four")
p.addEventListener("click",display2)

function display3()
{
    let j=document.getElementById('text')
    let boss=document.getElementById("result")
    boss.textContent="Loading..."
fetch(" https://lesotho-orphanages.vercel.app/04")
.then(res=>res.json())
.then(data=>{
    boss.textContent=""
    
    let h=document.createElement("h1")
    h.innerHTML="Orphanage info"
    boss.append(h)
    h.style.textAlign="center"
    h.style.margin="9px"
    h.style.fontSize="24px"
    const img =document.createElement("img");
    img.setAttribute("src",data.image);
    boss.append(img);
    img.style.width="100%"
    
    img.style.marginTop="15px"

    j.textContent=""
    const p5=document.createElement("p");
    p5.textContent= "Id : " +data.id;
    j.append(p5);

    const p1=document.createElement("p");
    p1.textContent="name: " +data.name;
    j.append(p1);

    const p3=document.createElement("p");
    p3.textContent= "location : " +data.location;
    j.append(p3);


    const p2=document.createElement("p");
    p2.textContent= "Donated money : M" +data.donated+`.00`;
    j.append(p2);

    
    const p4=document.createElement("p");
    p4.textContent= "Target amount : M" +data.target+`.00`;
    j.append(p4);
     


})




}




let c=document.getElementById("nep3")
c.addEventListener("click",display3)

let y=document.getElementById("three")
y.addEventListener("click",display3)
function display4()
{
    let j=document.getElementById('text')
    let boss=document.getElementById("result")
    boss.textContent="Loading..."
fetch(" https://lesotho-orphanages.vercel.app/05")
.then(res=>res.json())
.then(data=>{
    boss.textContent=""
    let h=document.createElement("h1")
    h.innerHTML="Orphanage info"
    boss.append(h)
    h.style.textAlign="center"
    h.style.margin="9px"
    h.style.fontSize="24px"
    const img =document.createElement("img");
    img.setAttribute("src",data.image);
    boss.append(img);
    img.style.width="100%"
    
    img.style.marginTop="15px"

    j.textContent=""
    const p5=document.createElement("p");
    p5.textContent= "Id : " +data.id;
    j.append(p5);

    const p1=document.createElement("p");
    p1.textContent="name: " +data.name;
    j.append(p1);

    const p3=document.createElement("p");
    p3.textContent= "location : " +data.location;
    j.append(p3);


    const p2=document.createElement("p");
    p2.textContent= "Donated money : M" +data.donated+`.00`;
    j.append(p2);

    
    const p4=document.createElement("p");
    p4.textContent= "Target amount : M" +data.target+`.00`;
    j.append(p4);

     


})




}




let e=document.getElementById("nep4")
e.addEventListener("click",display4)

let s=document.getElementById("two")
s.addEventListener("click",display4)

function display5()

{
    let j=document.getElementById('text')
    let boss=document.getElementById("result")
    boss.textContent="Loading..."
fetch(" https://lesotho-orphanages.vercel.app/06")
.then(res=>res.json())
.then(data=>{
    boss.textContent=""
    let h=document.createElement("h1")
    h.innerHTML="Orphanage info"
    boss.append(h)
    h.style.textAlign="center"
    h.style.margin="9px"
    h.style.fontSize="24px"

    
    const img =document.createElement("img");
    img.setAttribute("src",data.image);
    boss.append(img);
    img.style.width="100%"
    
    img.style.marginTop="15p x"

    j.textContent=""
    const p5=document.createElement("p");
    p5.textContent= "Id : " +data.id;
    j.append(p5);

    const p1=document.createElement("p");
    p1.textContent="name: " +data.name;
    j.append(p1);

    const p3=document.createElement("p");
    p3.textContent= "location : " +data.location;
    j.append(p3);


    const p2=document.createElement("p");
    p2.textContent= "Donated money : M" +data.donated+`.00`;
    j.append(p2);

    
    const p4=document.createElement("p");
    p4.textContent= "Target amount : M" +data.target+`.00`;
    j.append(p4);


})




}




let f=document.getElementById("nep5")
f.addEventListener("click",display5)

let r=document.getElementById("one")
r.addEventListener("click",display5)