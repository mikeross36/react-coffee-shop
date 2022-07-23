import React from "react"
import { logos } from "./data";

const Logos = () => {
    return (
        <section className="logos section">
            <div className="logos__container container grid">
                {logos.map(logo => {
                    const { id, image } = logo;
                    return (
                        <img key={id} src={image} alt="logos pics" className="logo__img" />
                    )
                })}
            </div>
        </section>
    )
}

export default Logos;