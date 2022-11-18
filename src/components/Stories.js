import { IconContext } from 'react-icons';
import { IoChevronForwardCircle } from 'react-icons/io5';
import Story from './Story';

export default function Stories() {
    return (
        <div class="stories">
            <Story avatar="assets/avatars/monster-avatar.jpg" name="biruleibe" />
            <IconContext.Provider value={{ className: "ion-icon" }}>
                <IoChevronForwardCircle />
            </IconContext.Provider>
        </div>
    )
}