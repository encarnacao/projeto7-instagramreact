import { IoEllipsisHorizontal }  from 'react-icons/io5';
import { IconContext } from 'react-icons';
import BottomPost from './BottomPost';
import PostSrc from "./PostSrc";

export default function Post(props) {
    return (
        <div className="post">
            <IconContext.Provider value={{ className: 'ion-icon' }}>
                <div className="topo">
                    <div className="perfil">
                        <a href={props.post.link}><img src={props.post.profileImage} alt="" className="perfil-img" /></a>
                        <a href={props.post.link}>{props.post.profileName}</a>
                    </div>
                    <div className="reticencias">
                        <IoEllipsisHorizontal />
                    </div>
                </div>
                <PostSrc postSrc={props.post.postSrc}/>
                <BottomPost info={props.post} />
            </IconContext.Provider>
        </div>
    )
}