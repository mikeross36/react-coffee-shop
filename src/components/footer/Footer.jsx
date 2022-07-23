import React from "react";
import arrow from "../../images/arrow-right.svg"
import {infos, socials} from "./data"

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <h3 className="footer__title">coffee</h3>
                <div className="footer__content grid">
                    <div className="footer__data">
                        <p className="footer__description">subscribe to our newsletter</p>
                        <form action="#" className="footer__newsletter">
                            <input type="email" placeholder="enter email..." className="footer__input" />
                            <button className="footer__button">
                                <img src={arrow} alt="arrow icon" width="20px" height="20px"/>
                            </button>
                        </form>
                    </div>
                    {/*  */}
                    {infos.map(info => {
                        const { id, subtitle, info1, info2 } = info;
                        return (
                            <div key={id} className="footer__data">
                                <h4 className="footer__subtitle">{subtitle}</h4>
                                <p className="footer__info">{info1}<br />{info2}</p>
                            </div>
                        )
                    })}
                </div>
                <div className="footer__group">
                    <ul className="footer__social">
                        {socials.map(social => {
                            const { id, url, image } = social;
                            return (
                                <li key={id}>
                                    <a href={url} className="footer__social-link">
                                        <img src={image} alt="social icon" width="30px" height="30px"/>
                                    </a>
                                </li>
                            )
                        })}
                    </ul>
                    <span className="footer__copy">&copy; Copyright 2022 DodaDesign All Rights Reserved</span>
                </div>
            </div>
        </footer>
    )
}

export default Footer;