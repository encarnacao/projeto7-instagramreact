import { IoHome, IoSearchOutline, IoAddCircleOutline, IoHeartOutline, IoPersonOutline } from 'react-icons/io5';
import { IconContext } from 'react-icons';

export default function Footer() {
    return (
        <div className="barra-inferior">
            <IconContext.Provider value={{ className: 'ion-icon' }}>
                <IoHome />
                <IoSearchOutline />
                <IoAddCircleOutline />
                <IoHeartOutline />
                <IoPersonOutline />
            </IconContext.Provider>
        </div>
    );
}