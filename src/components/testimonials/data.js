import nextId from "react-id-generator"
import doubleQuote from "../../images/double-quotes.svg"
import star from "../../images/star-icon.svg"
import person1 from "../../images/person1.jpg"
import person2 from "../../images/person2.jpg"
import person3 from "../../images/person3.jpg"
import person4 from "../../images/person4.jpg"

export const slides = [
    {
        id: nextId(),
        quote: doubleQuote,
        image: person1,
        name: "john doe",
        star: star,
        description: '"Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse corporis nobis laborum mollitia nam doloribus rerum quae fugit animi temporibus".'
    },
    {
        id: nextId(),
        quote: doubleQuote,
        image: person2,
        name: "john doe",
        star: star,
        description: '"Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse corporis nobis laborum mollitia nam doloribus rerum quae fugit animi temporibus".'
    },
    {
        id: nextId(),
        quote: doubleQuote,
        image: person3,
        name: "john doe",
        star: star,
        description: '"Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse corporis nobis laborum mollitia nam doloribus rerum quae fugit animi temporibus".'
    },
    {
        id: nextId(),
        quote: doubleQuote,
        image: person4,
        name: "john doe",
        star: star,
        description: '"Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse corporis nobis laborum mollitia nam doloribus rerum quae fugit animi temporibus".'
    },
]