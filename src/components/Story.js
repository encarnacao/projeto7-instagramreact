export default function Story(props) {
    return (
            <div className="story">
                <img src={props.avatar} alt="" className="perfil-img" />
                <img src="assets/story-circle.svg" alt="" />
                <p>{props.name}</p>
            </div>
    )
}