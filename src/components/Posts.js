import { IoEllipsisHorizontal } from 'react-icons/io5';
import { IconContext } from 'react-icons';
import BottomPost from './BottomPost';
import PostSrc from "./PostSrc";

const posts = [
    {
        link: "#",
        profileImage: "assets/avatars/eu.jpg",
        profileName: "cencarnacaoq",
        postSrc: "assets/posts/post1.jpg",
        description: "Estou de olho em vocês",
        likeProfileImage: "assets/avatars/gabi.jpg",
        likeProfileName: "gabrielladarze",
        time: "HÁ 10 HORAS",
        numberLikes: "50",
        comment: [{
            name: "faustao",
            commentText: "oloco bichoooo"
        },
        {
            name: "cencarnacaoq",
            commentText: <span><a href="perfil.html">@gabrielladarze</a> obrigado!</span> //ACEITA JSX HAHA
        }
    ]},
    {
        link: "#",
        profileImage: "assets/avatars/bear.jpg",
        profileName: "bearsoftheworld",
        postSrc: {
            video: true,
            videoSrc: [{
                path: "assets/videos/video 1.mp4",
                type: "video/mp4"
            },
            {
                path: "assets/video/video 1.ogv",
                type: "video/ogv"
            }]
        },
        description: "BEARS BEARS BEARS",
        likeProfileImage: "assets/avatars/9gag.png",
        likeProfileName: "9gag",
        time: "HÁ 10 HORAS",
        numberLikes: "30",
        comment: [{
            name: "9gag",
            commentText: "cutsy lil bear"
        }]
    },
]

function Post(props) {
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
                <PostSrc postSrc={props.post.postSrc} />
                <BottomPost info={props.post} />
            </IconContext.Provider>
        </div>
    )
}

export default function Posts(props) {
    return (
        <div className="container-posts">
            {posts.map((post, i) => <Post post={post} number={i} key={"post" + i} />)} {/*Tem key porque warnings me irritam. Não sei pra que serve*/}
        </div>
    )
}