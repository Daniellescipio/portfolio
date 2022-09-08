import gsap from "gsap";
function hover(el, bool){
    bool ? gsap.to(el,{fontSize:"+=1rem"}) : gsap.to(el,{fontSize:"-=1rem"}) 
}

export {hover}