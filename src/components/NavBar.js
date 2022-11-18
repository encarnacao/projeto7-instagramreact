import { IoLogoInstagram, IoCompassOutline, IoHeartOutline, IoPersonOutline, IoPaperPlaneOutline } from "react-icons/io5";
import { IconContext } from "react-icons";

export default function NavBar() {
    return (
        <div class="barra-topo">
            <IconContext.Provider value={{ className:"ion-icon" }}>
                <div class="container-topo">
                    <div class="logo">
                        <IoLogoInstagram />
                        <div></div>
                        <a href="https://instagram.com/"><img src="assets/logo.png" alt="" /></a>
                    </div>
                    <div class="pesquisa">
                        <a href="https://instagram.com/"><img src="assets/logo.png" alt="" /></a>
                        <input type="text" placeholder="Pesquisar" id="barra-busca" />
                    </div>
                    <div class="botoes">
                        <IoPaperPlaneOutline />
                        <div class="non-mobile">
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