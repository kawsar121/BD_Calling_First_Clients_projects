import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import review1 from '../../../assets/Review1.jpg'
import review2 from '../../../assets/Review2.jpg'
import "swiper/css";
import "swiper/css/pagination";

// import review1 from "../../assets/review1.jpg"; // তোমার ছবি path অনুযায়ী ঠিক করো

const ReviewCarusol = () => {
  return (
    <div className="mt-14 px-6 md:px-0">
      <Swiper
        spaceBetween={120}
        slidesPerView={1}
        breakpoints={{
          768: { slidesPerView: 2 }, // md: 2টা card দেখাবে
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        {/* Card 1 */}
        <SwiperSlide>
          <div className="flex items-center gap-5 bg-[#F9F9F9] p-4 rounded-xl shadow-sm">
            <div>
              <img
                src={review1}
                alt="review1"
                className="w-52 h-48 object-cover rounded-xl"
              />
            </div>
            <div>
              <p>⭐⭐⭐⭐⭐</p>
              <p className="text-sm font-medium text-[#090914] mt-2 leading-relaxed">
                "We love Landingfolio! Our designers were using it <br /> for their
                projects, so we already knew what kind of design they want."
              </p>
              <p className="mt-6 font-thin text-[#595959]">Devon Lane</p>
            </div>
          </div>
        </SwiperSlide>

        {/* Card 2 */}
        <SwiperSlide>
          <div className="flex items-center gap-5 bg-[#F9F9F9] p-4 rounded-xl shadow-sm">
            <div>
              <img
                src={review2}
                alt="review1"
                className="w-52 h-48 object-cover rounded-xl"
              />
            </div>
            <div>
              <p>⭐⭐⭐⭐⭐</p>
              <p className="text-sm font-medium text-[#090914] mt-2 leading-relaxed">
                "The components are super clean and easy to use. <br /> Perfect for
                modern landing pages!"
              </p>
              <p className="mt-6 font-thin text-[#595959]">Courtney Henry</p>
            </div>
          </div>
        </SwiperSlide>

        {/* Card 3 */}
        <SwiperSlide>
          <div className="flex items-center gap-5 bg-[#F9F9F9] p-4 rounded-xl shadow-sm">
            <div>
              <img
                src={review1}
                alt="review1"
                className="w-52 h-48 object-cover rounded-xl"
              />
            </div>
            <div>
              <p>⭐⭐⭐⭐⭐</p>
              <p className="text-sm font-medium text-[#090914] mt-2 leading-relaxed">
                "This carousel looks beautiful even on mobile! <br /> Love the smooth
                transitions."
              </p>
              <p className="mt-6 font-thin text-[#595959]">Wade Warren</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ReviewCarusol;
