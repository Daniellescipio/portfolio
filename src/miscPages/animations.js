import { useEffect, useRef } from "react"
//import gsap from "gsap";
import "../animation.css"

function Animation(){
    const el = useRef();
    const buddy = useRef()
    //const q = gsap.utils.selector(el);
        // useEffect(() => {
        //    gsap.to(q(".star"), { x: 500, rotation:360, fill:"blue", duration:3, stagger:.5 });
        //    gsap.to(".buddy", {rotate:280, scale:4, duratio:3})
        //  }, [q]);
         
    return(
        <div ref={el}>
            <div ref={buddy} className="buddy" ></div>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
        </div>
    )
}

export default Animation