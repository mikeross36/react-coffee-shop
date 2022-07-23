import nextId from "react-id-generator"
import speciality1 from "../../images/speciality1.svg"
import speciality2 from "../../images/speciality2.svg"
import speciality3 from "../../images/speciality3.svg"

export const specialities = [
    {
        id: nextId(),
        image: speciality1,
        title: "selected coffee",
        description: "We select the best premium coffee for a true taste"
    },
    {
        id: nextId(),
        image: speciality2,
        title: "own barista",
        description: "Act all fancy like you know something"
    },
    {
        id: nextId(),
        image: speciality3,
        title: "enjoy at home",
        description: "Enjoy the best coffee in the comfort of your home"
    },
]