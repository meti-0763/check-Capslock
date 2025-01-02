let input = document.querySelector("#password")


input.addEventListener(`keypress`, (e)=>{
    
    if(e.getModifierState("CapsLock")===true){
        
        document.querySelector("#warning").style="display:block"
    }
})











