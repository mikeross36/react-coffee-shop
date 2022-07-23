import React from "react"
import { specialities } from "./data";

const Speciality = () => {
    return (
        <section className="speciality section container" id="speciality">
            <div className="speciality__container">
                <div className="speciality__box">
                    <h3 className="section__title">
                        Never run out of coffee again!
                    </h3>
                    <div>
                        <a href="#banner" className="button speciality__button">learn more</a>
                    </div>
                </div>
                {/*  */}
                <div className="speciality__category">
                    {specialities.map(item => {
                        const { id, image, title, description } = item;
                        return (
                            <div key={id} className="speciality__group speciality__line">
                                <img src={image} alt={title} className="speciality__img" />
                                <h3 className="speciality__title">{title}</h3>
                                <p className="speciality__description">{description}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Speciality;