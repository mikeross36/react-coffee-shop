import nextId from "react-id-generator"
import blog1 from "../../images/blog1.jpg"
import blog2 from "../../images/blog2.jpg"
import blog3 from "../../images/blog3.jpg"
import arrowRight from "../../images/arrow-right-white.svg"
import comment from "../../images/comment-icon.svg"
import show from "../../images/show-icon.svg"

export const blogs = [
    {
        id: nextId(),
        image: blog1,
        btnIcon: arrowRight,
        title: "Bean to Cup Machines",
        description: "This includes comparisons of features, but also my own thoughts on each machine based on my knowledge of bean to cup coffee machines...",
        comment: comment,
        show: show
    },
    {
        id: nextId(),
        image: blog2,
        btnIcon: arrowRight,
        title: "The 8 Best Milk Frothers!",
        description: "So you're looking for the best milk frother, eh? Well I've got good news for you, because this post is all about the best milk frothers...",
        comment: comment,
        show: show
    },
    {
        id: nextId(),
        image: blog3,
        btnIcon: arrowRight,
        title: " Sage Barista Pro Review",
        description: "I'll be aiming to answer the question “is the Sage barista Pro worth it?” – or more specifically, is the barista pro worth throwing...",
        comment: comment,
        show: show
    },
]