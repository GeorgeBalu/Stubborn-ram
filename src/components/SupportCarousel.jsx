import { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import "./SupportCarousel.css";
import supportSlides from "../data/supportSlides";
import ImageModal from "./ImageModal";

function SupportCarousel() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="supportCarousel">
      <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        spaceBetween={30}
        speed={450}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
      >
        {supportSlides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="supportCard">
              <div className="supportImage">
                {slide.type === "image" && slide.src ? (
                  <img
                    src={slide.src}
                    alt={slide.title}
                    className="supportMedia"
                    onClick={() => setSelectedImage(slide.src)}
                    style={{ cursor: "zoom-in" }}
                  />
                ) : (
                  <div className="supportPlaceholder">Раздел в разработке</div>
                )}
              </div>

              <div className="supportContent">
                <h3 className="supportTitle">{slide.title}</h3>

                <p className="supportDescription">{slide.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <ImageModal
        image={selectedImage}
        onClose={() => setSelectedImage(null)}
      />
    </section>
  );
}

export default SupportCarousel;
