import React, {useState} from "react"
import { slides } from "./data";
import leftArrow from "../../images/left-arrow.svg"
import rightArrow from "../../images/right-arrow.svg"

const Testimonials = () => {
    const [currentSlide, setCurrentSlide] = useState(0)

    const nextSlide = () => {
        let newSlide = (currentSlide + 1) % slides.length;
        setCurrentSlide(newSlide)
    }

    const prevSlide = () => {
        let newSlide = (currentSlide - 1 + slides.length) % slides.length;
        setCurrentSlide(newSlide)
    }

    return (
        <section className="testimonials section">
            <div className="testimonials__container container">
                <h3 className="section__title">Testimonials</h3>
                <div className="testimonials__content grid">
                    {slides.map((slide, index) => {
                        const { id, quote, image, name, star, description } = slide;

                        let position = "";
                        if (index === currentSlide) {
                            position = "active-slide"
                        }
                        return (
                            <div key={id} className={`slide__container ${position}`}>
                                <div className="slide">
                                    <img src={quote} alt="quote icon" className="slide__quote" width="40px" height="40px" />
                                    <div className="user">
                                        <img src={image} alt="user" className="user__img" />
                                        <div className="user__info">
                                            <h4>{name}</h4>
                                            <div className="user__stars">
                                                <img src={star} alt="star" className="star__img" width="20px" height="20px"/>
                                                <img src={star} alt="star" className="star__img" width="20px" height="20px" />
                                                <img src={star} alt="star" className="star__img" width="20px" height="20px" />
                                                <img src={star} alt="star" className="star__img" width="20px" height="20px" />
                                                <img src={star} alt="star" className="star__img" width="20px" height="20px"/>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="user__description">{description}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <button className="prev__slide" onClick={prevSlide}>
                <img src={leftArrow} alt="" width="35px" height="35px"/>
            </button>
            <button className="next__slide" onClick={nextSlide}>
                <img src={rightArrow} alt="" width="35px" height="35px"/>
            </button>
        </section>
    )
}

export default Testimonials;