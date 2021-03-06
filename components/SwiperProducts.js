import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import Product from "./Product";

SwiperCore.use([Pagination, Navigation]);
const SwiperProducts = ({ products, ...props }) => {
  const sliderParams = {
    slidesPerView: 2,
    spaceBetween: 40,
    loop: true,
    centeredSlides: true,
    breakpoints: {
      768: {
        slidesPerView: 5,
        spaceBetween: 30,
      },
      1024: {
        slidesPerView: 6,
        spaceBetween: 30,
      },
    },
    pagination:
      props.pagination !== false
        ? {
            clickable: true,
            dynamicBullets: true,
          }
        : false,
  };

  return (
    <>
      <Swiper
        {...sliderParams}
        style={{ paddingLeft: "30px", paddingBottom: "30px" }}
        className="align-content-center swiper-products-display-flex"
      >
        {products.map((product, index) => (
          <SwiperSlide key={index}>
            <div className="product-slider-item h-100">
              <Product
                className="h-100"
                key={index}
                card={product}
                showQuickView={false}
                onlyViewButton={true}
                loading="eager"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default SwiperProducts;
