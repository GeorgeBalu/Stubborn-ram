import { useEffect, useRef, useState } from "react";

import photo1 from "../assets/carousel/Photo-1.jpg";
import photo2 from "../assets/carousel/Photo-2.jpg";
import video1 from "../assets/carousel/Video-1.mp4";

function Carousel() {

  const slides = [
    photo1,
    photo2,
    video1
  ];

const [current, setCurrent] = useState(0);
const touchStartX = useRef(0);
const touchEndX = useRef(0);
const handleTouchStart = (e) => {
  touchStartX.current = e.touches[0].clientX;
};

const handleTouchMove = (e) => {
  touchEndX.current = e.touches[0].clientX;
};

const handleTouchEnd = () => {

  const distance = touchStartX.current - touchEndX.current;

  if (distance > 50) {
    nextSlide();
  }

  if (distance < -50) {
    prevSlide();
  }

};
const nextSlide = () => {
  setCurrent((prev) => (prev + 1) % slides.length);
};

const prevSlide = () => {
  setCurrent((prev) =>
    prev === 0 ? slides.length - 1 : prev - 1
  );
};

const goToSlide = (index) => {
  setCurrent(index);
};
useEffect(() => {

  const interval = setInterval(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, 8000);

  return () => clearInterval(interval);

}, [slides.length]);

  return (
    <div className="carousel">

      <div
  className="carouselItem"
  onTouchStart={handleTouchStart}
  onTouchMove={handleTouchMove}
  onTouchEnd={handleTouchEnd}
>

        <div
  className="carouselTrack"
  style={{
    transform: `translateX(-${current * 100}%)`,
  }}
>

  {slides.map((slide, index) => (

    slide.endsWith(".mp4") ? (

  <video
    key={index}
    className="carouselImage"
    src={slide}
    autoPlay
    muted
    loop
    playsInline
  />

) : (

  <img
    key={index}
    src={slide}
    alt={`Слайд ${index + 1}`}
    className="carouselImage"
  />

)

  ))}

</div>

      </div>
      <div className="carouselDots">

  {slides.map((_, index) => (

    <button
      key={index}
      className={
        index === current
          ? "dot active"
          : "dot"
      }
      onClick={() => goToSlide(index)}
    />

  ))}

</div>

    </div>
  );
}

export default Carousel;