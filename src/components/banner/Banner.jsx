import React from "react";
import bannerScroll from "../../images/coffee-cup.svg"
import bannerPic from "../../images/home-pic.jpg"

const Banner = () => {
    return (
        <section className="banner grid" id="banner">
            <div className="banner__container">
                <div className="banner__content container">
                    <h1 className="banner__title">choose your coffee & enjoy</h1>
                    <p className="banner_description">
                        Your favorite coffee delivered on your schedule
                    </p>
                    <div className="banner__data">
                        <div className="banner__data-group">
                            <h4 className="banner__data-number">we have...</h4>
                            <p className="banner__data-title">experience</p>
                            <p className="banner__data-description">
                                Inclusive Italian café experience, serving everything from your morning
                            </p>
                        </div>
                        <div className="banner__data-group">
                            <h4 className="banner__data-number">we have...</h4>
                            <p className="banner__data-title">relationships</p>
                            <p className="banner__data-description">
                                More than just a great cup of coffee We have a brew for every time of day
                            </p>
                        </div>
                    </div>
                    <a href="#speciality">
                        <img src={bannerScroll} alt="banner floating logo" className="banner__scroll" />
                    </a>
                </div>
            </div>
            <img src={bannerPic} alt="banner bcg" className="banner__img" />
        </section>
    )
}

export default Banner;