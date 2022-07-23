import React from "react"
import Header from "./components/header/Header";
import Banner from "./components/banner/Banner";
import Speciality from "./components/speciality/Speciality"
import Products from "./components/products/Products";
import Quality from "./components/quality/Quality";
import Logos from "./components/logos/Logos";
import Testimonials from "./components/testimonials/Testimonails";
import Blog from "./components/blog/Blog";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <>
      <Header />
      <Banner />
      <Speciality />
      <Products />
      <Quality />
      <Logos />
      <Testimonials />
      <Blog />
      <Footer />
    </>
  )
}

export default App;