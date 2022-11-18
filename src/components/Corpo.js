import Stories from './Stories';
import Posts from './Posts';

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
            commentText: <span><a href="#">@gabrielladarze</a> obrigado!</span> //ACEITA JSX HAHA
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

export default function Corpo() {
    return (
        <div className="container">
            <div className="container-feed">
                <Stories />
                <div className="container-posts">
                    {posts.map((post, i) => <Posts post={post} number={i} key={"post" + i} />)}
                </div>
            </div>

        </div>
    )
}