export default function SuggestionType(props){
    if(props.info.type === "Friend"){
        return (<p>Seguido(a) por {props.info.friendName}</p>)
    } else if (props.info.type === "New"){
        return (<p>Novo no Instagram</p>)
    } else if(props.info.type === "Follow"){
        return (<p>Segue você</p>)
    }
}