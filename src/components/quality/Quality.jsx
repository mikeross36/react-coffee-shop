import React from "react"
import quality1 from "../../images/quality1.jpg"
import quality2 from "../../images/quality2.jpg"
import arrowRight from "../../images/arrow-right.svg"

const Quality = () => {
    return (
        <section className="quality section" id="premium">
            <div className="quality__container container">
                <h3 className="section__title">We offer premium & better quality just for you</h3>
                <div className="quality__content grid">
                    <div className="quality__images">
                        <img src={quality1} alt="" className="quality__img-big"/>
                        <img src={quality2} alt="" className="quality__img-small"/>
                    </div>
                    <div className="quality__data">
                        <h4 className="quality__title">premium coffee</h4>
                        <h4 className="quality__price">34.99€</h4>
                        <span className="quality__special">special price</span>
                        <p className="quality__description">
                            We are delighted with our coffee. That's why you get the best 
                            premium coffee plus the kettle made of resistant materials that 
                            you see in the image, for a special price.
                        </p>
                        <div className="quality__buttons">
                            <button className="button">buy now</button>
                            <a href="#banner" className="quality__button">
                                see more <img src={arrowRight} alt="arrow" width="20px" height="20px"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Quality;