import React, {useState, useEffect} from "react";
import logo from "../../images/logo.svg"
import { links } from "./data"
import closeBtn from "../../images/close-btn.svg"
import toggle1 from "../../images/menu-btn.svg"
import toggle2 from "../../images/menu-btn-black.svg"

const Header = () => {
    const [showMobMenu, setShowMobMenu] = useState(false)
    const [scrollHeader, setScrollHeader] = useState(false)

    const openMobMenu = () => {
        setShowMobMenu(true)
    }

    const closeMobMenu = () => {
        setShowMobMenu(false)
    }

    useEffect(() => {
        const scroll = () => {
            if (window.scrollY >= 50) {
                setScrollHeader(true)
            }
            else {
                setScrollHeader(false)
            }
        };
        window.addEventListener("scroll", scroll)

        return () => {
            window.removeEventListener("scroll", scroll)
        }
    },[])

    return (
        <header className={`header ${scrollHeader && "scroll-header"}`}>
            <nav className="nav container">
                <a href="#banner" className="nav__logo">
                    <img src={logo} alt="nav logo" className="nav__logo-img" width="40px" height="40px"/>
                    <span>coffeebar</span>
                </a>
                <div className={`nav__menu ${showMobMenu && "show-menu"}`}>
                    <ul className="nav__list">
                        {links.map(link => {
                            const { id, url, text } = link;
                            return (
                                <li key={id} className="nav__item" onClick={closeMobMenu}>
                                    <a href={url} className="nav__link active-link">{text}</a>
                                </li>
                            )
                        })}
                    </ul>
                    <div className="nav__close" onClick={closeMobMenu}>
                        <img src={closeBtn} alt="close btn" width="30px" height="30px"/>
                    </div>
                </div>
                <div className="nav__toggle" onClick={openMobMenu}>
                    <img src={toggle1} alt="menu btn" className="toggle1" width="30px" height="30px" />
                    <img src={toggle2} alt="menu btn" className="toggle2" width="30px" hegith="30px"/>
                </div>
            </nav>
        </header>
    )
}

export default Header;