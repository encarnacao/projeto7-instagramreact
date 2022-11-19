import Comment from "./Comment"
import { IoHeartOutline, IoHeart, IoChatbubbleOutline, IoPaperPlaneOutline, IoBookmarkOutline, IoBookmark } from "react-icons/io5";
import React from "react";
import PostSrc from "./PostSrc";

//Componentizado por questões de legibilidade.
export default function PostBody(props) {
    const [emptyHeart, setEmptyHeart] = React.useState("");
    const [emptyBookmark, setEmptyBookmark] = React.useState("");
    const [numberLikes, setNumberLikes] = React.useState(props.info.numberLikes);
    const [filledHeart, setFilledHeart] = React.useState("hidden");
    const [filledBookmark, setFilledBookmark] = React.useState("hidden");
    const [imageHeart, setImageHeart] = React.useState("hidden");

    const addLike = () => {
        setEmptyHeart("hidden");
        setFilledHeart("filled-heart");
        setNumberLikes(numberLikes + 1);
    }
    const removeLike = () => {
        setEmptyHeart("");
        setFilledHeart("hidden");
        setNumberLikes(numberLikes - 1);
    }
    const addBookmark = () => {
        setEmptyBookmark("hidden");
        setFilledBookmark("filled-bookmark");
    }
    const removeBookmark = () => {
        setEmptyBookmark("");
        setFilledBookmark("hidden");
    }

    const heartGrow = () => {
        setImageHeart("ion-icon");
        if(filledHeart === "hidden") {
            addLike();
        }
        setTimeout(() => {setImageHeart("hidden")}, 800);
    }


    return (
        <>
            <div className = "post-image" onDoubleClick={heartGrow} data-test = "post-image" >
                <PostSrc postSrc={props.info.postSrc} />
                <span className={imageHeart}><IoHeart/></span>
            </div>
            <div className="baixo">
                <div className="lcs"> {/*Like, Comment, Share*/}
                    <div className="esquerda">
                        <span className={emptyHeart} onClick={addLike} data-test="like-post"><IoHeartOutline /></span>
                        <span className={filledHeart} onClick={removeLike} data-test="like-post"><IoHeart /></span>
                        <IoChatbubbleOutline />
                        <IoPaperPlaneOutline />
                    </div>
                    <span className={emptyBookmark} onClick={addBookmark} data-test="save-post"><IoBookmarkOutline /></span>
                    <span className={filledBookmark} onClick={removeBookmark} data-test="save-post"><IoBookmark /></span>
                </div>

                <div className="curtidas">
                    <a href="link.html"><img src={props.info.likeProfileImage} alt="" className="perfil-img" /></a>
                    <p>Curtido por <a href="link.html">{props.info.likeProfileName}</a> e <a href="link.html">outras <span data-test="likes-number">{numberLikes}</span> pessoas</a></p>
                </div>
                <div className="legenda">
                    <span className="profile">{props.info.profileName}</span> {props.info.description}
                </div>
                <div className="comentarios">
                    <span className="cinza">Ver todos os {props.info.comment.length} comentários</span> {/*Usei comment.length só pra ter numeros diferentes sem ter que passar nova prop*/}
                    {props.info.comment.map((comment, i) => (<Comment name={comment.name} commentText={comment.commentText} key={i} />))}
                </div>
                <div className="tempo">
                    {props.info.time}
                </div>
                <div className="comment">
                    <div className="esquerda">
                        <svg aria-label="Emoji" className="_ab6-" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24">
                            <path d="M15.83 10.997a1.167 1.167 0 1 0 1.167 1.167 1.167 1.167 0 0 0-1.167-1.167Zm-6.5 1.167a1.167 1.167 0 1 0-1.166 1.167 1.167 1.167 0 0 0 1.166-1.167Zm5.163 3.24a3.406 3.406 0 0 1-4.982.007 1 1 0 1 0-1.557 1.256 5.397 5.397 0 0 0 8.09 0 1 1 0 0 0-1.55-1.263ZM12 .503a11.5 11.5 0 1 0 11.5 11.5A11.513 11.513 0 0 0 12 .503Zm0 21a9.5 9.5 0 1 1 9.5-9.5 9.51 9.51 0 0 1-9.5 9.5Z"></path>
                        </svg>
                        <input type="text" id="comentario" placeholder="Adicione um comentário..." />
                    </div>
                    <h1>Publicar</h1>
                </div>
            </div>
        </>
    )
}