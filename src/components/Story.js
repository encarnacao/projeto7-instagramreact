export default function Story(props) {
    return (
            <div class="story">
                <img src={props.avatar} alt="" class="perfil-img" />
                <img src="assets/story-circle.svg" alt="" />
                <p>{props.name}</p>
            </div>
    )
}