const navbar=document.querySelector('.navbar');
const menuHumb=document.querySelector('.menu-humburger img');
const menu=document.querySelector('.menu-humburger');
const card=document.querySelectorAll(".card")
menuHumb.addEventListener('click', function(){
    navbar.classList.toggle('repso');
    menu.classList.toggle('men');
})


const allbtn=document.querySelectorAll(".card button")
// console.log(allbtn)
allbtn.forEach(btn=>{
    btn.addEventListener('click',function (e){
        this.classList.toggle("btn_active");
            card.forEach(c=>{
                
            c.classList.toggle("click_btn")    
            })
        e.stopPropagation()
    })
})  