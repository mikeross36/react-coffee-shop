import React from "react"
import {blogs} from "./data"

const Blog = () => {
    return (
        <section className="blog section" id="blog">
            <div className="blog__container container">
                <h3 className="section__title">Welcome to our coffee blog!</h3>
                <div className="blog__content grid">
                    {blogs.map(blog => {
                        const { id, image, btnIcon, title, description, comment, show } = blog;
                        return (
                            <article key={id} className="blog__card">
                                <div className="blog__image">
                                    <img src={image} alt="blog pic" className="blog__img" />
                                    <a href="#banner" className="blog__button">
                                        <img src={btnIcon} alt="arrow pic" width="30px" height="30px"/>
                                    </a>
                                </div>
                                <div className="blog__data">
                                    <h4 className="blog__title">{title}</h4>
                                    <p className="blog__description">{description}</p>
                                    <div className="blog__footer">
                                        <div className="blog__reaction">
                                            <img src={comment} alt="comment icon" width="30px" height="30px" />
                                            <span>12</span>
                                        </div>
                                        <div className="blog__reaction">
                                            <img src={show} alt="comment icon" width="30px" height="30px" />
                                            <span>6.5K</span>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        )
                    })}
                    
                </div>
            </div>
        </section>
    )
}

export default Blog;