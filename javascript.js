let fac = document.querySelector(".face");
let count = 0;
fac.addEventListener("click", function(){
    count += 50
    fac.style.left =  count + 'px'
    fac.style.right = count + 'px'
})
   
