import { IconContext } from 'react-icons';
import { IoChevronForwardCircle } from 'react-icons/io5';
import Story from './Story';

const profiles = [
    {
        name: "9gag",
        avatar: "assets/avatars/9gag.png"
    },
    {
        name: "gatitos",
        avatar: "assets/avatars/cats.jpg"
    },
    {
        name: "lilmonster",
        avatar: "assets/avatars/monster-avatar.jpg"
    },
    {
        name:"monge.aereo",
        avatar: "assets/avatars/Aang.webp"
    },
    {
        name: "oazulado",
        avatar: "assets/avatars/avatar-azul.jpg"
    },
    {
        name: "ket.out",
        avatar: "assets/avatars/korra.jpeg"
    },
    {
        name: "driven",
        avatar: "assets/avatars/driven.png"
    },
    {
        name: "presidente",
        avatar: "assets/avatars/lula.jpeg"
    }
];

export default function Stories() {
    return (
        <div className="stories">
            {profiles.map((profile) => <Story name={profile.name} avatar={profile.avatar} key={profile.name}/>)}
            <IconContext.Provider value={{ className: "ion-icon" }}>
                <IoChevronForwardCircle />
            </IconContext.Provider>
        </div>
    )
}