import { IoLogoInstagram, IoCompassOutline, IoHeartOutline, IoPersonOutline, IoPaperPlaneOutline } from "react-icons/io5";
import { IconContext } from "react-icons";

export default function NavBar() {
    return (
        <div className="barra-topo">
            <IconContext.Provider value={{ className:"ion-icon" }}>
                <div className="container-topo">
                    <div className="logo">
                        <IoLogoInstagram />
                        <div></div>
                        <a href="https://instagram.com/"><img src="assets/logo.png" alt="" /></a>
                    </div>
                    <div className="pesquisa">
                        <a href="https://instagram.com/"><img src="assets/logo.png" alt="" /></a>
                        <input type="text" placeholder="Pesquisar" id="barra-busca" />
                    </div>
                    <div className="botoes">
                        <IoPaperPlaneOutline />
                        <div className="non-mobile">
                            <IoCompassOutline />
                            <IoHeartOutline />
                            <IoPersonOutline />
                        </div>
                    </div>
                </div>
            </IconContext.Provider>
        </div>
    )
}