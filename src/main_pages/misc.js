import { Link } from "react-router-dom"

function MiscPage(){
    //Draggable.create(".box", {type:"x,y", edgeResistance:0.65, bounds:"#container", inertia:true});
    return(
        <div>
            Miscellaneous
            <ul>
                <li><Link to ="/animations"></Link></li>
            </ul>
        </div>
    )
}
export default MiscPage