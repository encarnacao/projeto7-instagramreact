import SuggestionType from "./SuggestionType";
const suggestions = [
    {
        name: "kataragua",
        image: "assets/avatars/katara.jpg",
        link: "#",
        type: "New"
    },
    {
        name: "isamisab",
        image: "assets/avatars/isa.jpg",
        link: "#",
        type: "Friend",
        friendName: "gabrielladarze"
    },
    {
        name: "nintendo",
        image: "assets/avatars/mario.png",
        link: "#",
        type: "Follow"
    }
]

export default function Suggestions() {
    return (
        <div className="caixa-sugestoes">
            <div className="header-sugestao">
                <p>Sugestões para você</p>
                <a href="link.html">Ver Tudo</a>
            </div>
            {suggestions.map(sugg => <Suggestion sugg={sugg} />)}
        </div>
    );
}

function Suggestion(props) {
    return (
        <div className="sugestao">
            <div className="perfil-sugerido">
                <a href={props.sugg.link}><img src={props.sugg.image} alt="" className="perfil-img" /></a>
                <div className="nome-e-status">
                    <a href={props.sugg.link}><h1>{props.sugg.name}</h1></a>
                    <SuggestionType info={props.sugg} />
                </div>
            </div>

            <a href="#seguir" className="seguir">Seguir</a>
        </div>
    )
}