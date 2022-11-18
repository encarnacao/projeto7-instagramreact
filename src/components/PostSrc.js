export default function PostSrc(props) {
    if (props.postSrc.video) {
        return (
            <div className="imagem">
                <video autoPlay muted loop>
                    {props.postSrc.videoSrc.map((src,i) => (
                        <source src={src.path} type={src.type} key={"video"+i}/>
                    ))}
                    Seu navegador não suporta vídeos.
                </video>
            </div>
        );
    } else {
        return (
            <div className="imagem">
                <img src={props.postSrc} alt="" />
            </div>
        )
    }
}