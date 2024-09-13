let img = document.querySelector("img")
let existe_borde = false;

img.addEventListener('click',()=>{
    if(existe_borde == false){
    document.querySelector("img").style.border ="solid 2px green"       
    existe_borde =true
    }else{
    document.querySelector("img").style.border ="solid 2px green"       
    existe_borde =false
    
    

    }
     



    
   
    
})