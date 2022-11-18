import { IoHeartOutline } from "react-icons/io5"

//Componentizado pois iria se repetir.
export default function Comment(props) {
    return (
        <div className="comentario">
            <div><span className="profile">{props.name}</span> {props.commentText}</div>
            <IoHeartOutline />
        </div>
    )
}