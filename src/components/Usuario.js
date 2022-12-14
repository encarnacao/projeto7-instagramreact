import {IoPencil} from 'react-icons/io5';
import React from 'react';

export default function User() {
    
    const [name,setName] = React.useState("Caio Encarnação");
    const [avatar,setAvatar] = React.useState("assets/avatars/eu.jpg");

    function changeName(){
        const newName = prompt("Digite seu nome:")
        return newName?setName(newName):null;
    }
    function changeAvatar(){
        const newAvatar = prompt("Digite o link da imagem:")
        return newAvatar?setAvatar(newAvatar):null;
    }
    return (
        <div className="meu-perfil" data-test="user">
            <a href="#link"><img src={avatar} alt="" onClick={changeAvatar} className="perfil-img" data-test="profile-image" /></a>
            <div className="nome">
                <a href="https://instagram.com/cencarnacaoq"><h1>cencarnacaoq</h1></a>
                <p><span data-test="name">{name}</span><span style={{cursor:"pointer"}} data-test="edit-name" onClick={changeName}><IoPencil /></span></p>
            </div>
        </div>
    );
}