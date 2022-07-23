import React, {useState} from "react"
import { lattes, mochas, amped } from "./data";

const Products = () => {
    const [currentContent, setCurrentContent] = useState(1)

    const handleContentChange = index => {
        setCurrentContent(index)
    }

    return (
        <section className="products section" id="products">
            <div className="products__contaner container">
                <h3 className="section__title">Choose our delicious & best products</h3>
                {/*  */}
                <ul className="products__filters">
                    <li onClick={() => handleContentChange(1)}
                        className={`products__item products__line ${currentContent === 1 && "active-link"}`}>
                        <h4 className="products__title">Lattes</h4>
                        <span className="products__stock">3 products</span>
                    </li>
                    <li onClick={() => handleContentChange(2)}
                        className={`products__item products__line ${currentContent === 2 && "active-link"}`}>
                        <h4 className="products__title">Mochas</h4>
                        <span className="products__stock">4 products</span>
                    </li>
                    <li onClick={() => handleContentChange(3)}
                        className={`products__item ${currentContent === 3 && "active-link"}`}>
                        <h4 className="products__title">Amped</h4>
                        <span className="products__stock">4 products</span>
                    </li>
                </ul>
                {/* LATTES */}
                <div className={`products__content grid ${currentContent === 1 && "active-content"}`}>
                    <div className="products__wrapper">
                        {lattes.map(item => {
                            const { id, image, price, name, icon } = item;
                            return (
                                <article key={id} className="products__card">
                                    <div className="products__shape">
                                        <img src={image} alt="coffee product" className="products__img" />
                                    </div>
                                    <div className="products__data">
                                        <span className="products__price">{price}</span>
                                        <span className="products__name">{name}</span>
                                        <button className="button products__button">
                                            <img src={icon} alt="shopping cart icon" width="20px" height="20px"/>
                                        </button>
                                    </div>
                                </article>
                            )
                        })}
                    </div>
                </div>
                {/* MOCHAS */}
                <div className={`products__content grid ${currentContent === 2 && "active-content"}`}>
                    <div className="products__wrapper">
                        {mochas.map(item => {
                            const { id, image, price, name, icon } = item;
                            return (
                                <article key={id} className="products__card">
                                    <div className="products__shape">
                                        <img src={image} alt="coffee product" className="products__img" />
                                    </div>
                                    <div className="products__data">
                                        <span className="products__price">{price}</span>
                                        <span className="products__name">{name}</span>
                                        <button className="button products__button">
                                            <img src={icon} alt="shopping cart icon" width="20px" height="20px"/>
                                        </button>
                                    </div>
                                </article>
                            )
                        })}
                    </div>
                </div>
                {/* AMPED */}
                <div className={`products__content grid ${currentContent === 3 && "active-content"}`}>
                    <div className="products__wrapper">
                        {amped.map(item => {
                            const { id, image, price, name, icon } = item;
                            return (
                                <article key={id} className="products__card">
                                    <div className="products__shape">
                                        <img src={image} alt="coffee product" className="products__img" />
                                    </div>
                                    <div className="products__data">
                                        <span className="products__price">{price}</span>
                                        <span className="products__name">{name}</span>
                                        <button className="button products__button">
                                            <img src={icon} alt="shopping cart icon" width="20px" height="20px"/>
                                        </button>
                                    </div>
                                </article>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Products;