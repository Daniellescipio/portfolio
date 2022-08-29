import { Link } from "react-router-dom"

function Animations(){
    //Draggable.create(".box", {type:"x,y", edgeResistance:0.65, bounds:"#container", inertia:true});
    return(
        <div>
            Animations
            <ul>
                <li><Link to ="/animations"></Link></li>
            </ul>
        </div>
    )
}
export default Animations