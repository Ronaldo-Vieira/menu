import React from "react";
import "./Header.css";

import Home from "./imagens/home.svg";
import Friends from "./imagens/friends.svg";
import Notifi from "./imagens/notification.svg";
import Saida from "./imagens/door.svg";

export default function Header() {

    return (
        <header id="header">

                <button type="button" className="btnImg-Header">
                    <img src={Home} alt="Home" title="Home" className="img-Header" />
                </button>

                <button type="button" className="btnImg-Header">
                    <img src={Friends} alt="Amigos" title="Amigos" className="img-Header" />
                </button>

                <button type="button" className="btnImg-Header">
                    <img src={Notifi} alt="Notificação" title="Notificações" className="img-Header" />
                </button>

                <button type="button" className="btnImg-Header">
                    <img src={Saida} alt="Saida" title="Sair" className="img-Header" />
                </button>

        </header>
    );
};