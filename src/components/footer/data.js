import nextId from "react-id-generator"
import facebook from "../../images/facebook.svg"
import twitter from "../../images/twitter.svg"
import instagram from "../../images/instagram.svg"

export const infos = [
    {
        id: nextId(),
        subtitle: "office",
        info1: "monday - saturday",
        info2: "9AM - 10PM"
    },
    {
        id: nextId(),
        subtitle: "address",
        info1: "45678 Europe",
        info2: "Novi Sad 12345"
    },
    {
        id: nextId(),
        subtitle: "contact",
        info1: "m+1234567",
        info2: "coffee@email.com "
    },
]

export const socials = [
    {
        id: nextId(),
        url: "https://www.facebook.com/",
        image: facebook
    },
    {
        id: nextId(),
        url: "https://www.twitter.com/",
        image: twitter
    },
    {
        id: nextId(),
        url: "https://www.instagram.com/",
        image: instagram
    },
]