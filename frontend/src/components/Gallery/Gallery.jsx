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
  { src: { Img }, alt: "Image 6" },
  { src: { Img }, alt: "Image 7" },
  { src: { Img }, alt: "Image 8" },
  { src: { Img }, alt: "Image 9" },
  { src: { Img }, alt: "Image 10" },
  { src: { Img }, alt: "Image 11" },
  { src: { Img }, alt: "Image 12" },
  { src: { Img }, alt: "Image 13" },
  { src: { Img }, alt: "Image 14" },
  { src: { Img }, alt: "Image 15" },
];

function Gallery() {
  return (
    <>
      <Header />
      <h1>Gallery</h1>
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
