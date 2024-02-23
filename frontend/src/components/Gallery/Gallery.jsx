import React from "react";
import "./gallery.css";
import Img from "../../assests/images/seo.png";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
const images = [
  { src: { Img }, alt: "Image 1" },
  { src: { Img }, alt: "Image 2" },
  { src: { Img }, alt: "Image 3" },
  { src: { Img }, alt: "Image 4" },
  { src: { Img }, alt: "Image 5" },
];

function Gallery() {
  return (
    <>
      <Header />
      <div className="gallery ">
        {images.map((image, index) => (
          <img src={Img} alt="" className=" gallery__item " />
        ))}
      </div>
      <Footer />
    </>
  );
}

export default Gallery;
