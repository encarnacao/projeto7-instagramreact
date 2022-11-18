import Stories from './Stories';
import Posts from './Posts';
import SideBar from './SideBar';
//Aviso: eu não sei por que, mas há um warning para usar "className" ao invés de "class" no React.
//Sei que ainda vai ser ensinado, mas como, aparentemente, o correto é usar "className", eu decidi usar.

export default function Corpo() {
    return (
        <div className="container">
            <div className="container-feed">
                <Stories />
                <Posts />
            </div>
            <SideBar />
        </div>
    )
}