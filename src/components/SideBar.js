import User from './Usuario';
import Suggestion from './Sugestoes';

export default function SideBar() {
    return (
        <div className="sidebar">
            <User />
            <Suggestion />
            <div className="grey-text">
                <a href="#links"><p>Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma</p></a>
            </div>

            <div className="grey-text">
                <p>© 2021 INSTAGRAM DO FACEBOOK</p>
            </div>
        </div>
    )
}

