import uniImg from "../assest/images/about-2.jpg";
import uniImg1 from "../assest/images/teacher-1.jpg";
import uniImg2 from "../assest/images/teacher-2.jpg";
import { Swiper, SwiperSlide } from "swiper/react";

import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

function Bod() {
  const [imgSrc, setImgSrc] = useState("");
  const [hidden, setHidden] = useState(true);
  const [allImages, setAllImages] = useState("");

  function clickImg(e) {
    console.log("clicked");
    e.preventDefault();
    setImgSrc(e.currentTarget.src);
    setHidden(false);
  }

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}images`)
      .then((res) => {
        setAllImages(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      {!hidden && (
        <div
          className="w-screen h-screen fixed z-30 top-0 bg-gray-900 bg-opacity-50"
          onClick={(e) => setHidden(true)}
        >
          <div className="relative w-[70vw] h-[70vh] left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%]">
            <img
              className="h-[80vh] object-contain w-full"
              src={imgSrc}
              alt=""
            />
          </div>
        </div>
      )}
      <div className="py-8 flex flex-col justify-center">
        <div className="max-w-2xl self-center text-center">
          <h1 className="text-4xl font-bold tracking-wide">Gallery</h1>
        </div>
      </div>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="h-[50vh] py-5"
      >
        {allImages &&
          allImages?.map((image) => {
            console.log(image.path);
            return (
              <SwiperSlide>
                <img
                  className="object-top"
                  src={`${process.env.REACT_APP_SERVER_URL}${image.path}`}
                  alt=""
                  onClick={(e) => clickImg(e)}
                />
              </SwiperSlide>
            );
          })}

        {/* <SwiperSlide>
          <img
            className="object-top"
            src={uniImg2}
            alt=""
            onClick={(e) => clickImg(e)}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="object-top"
            src={uniImg}
            alt=""
            onClick={(e) => clickImg(e)}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="object-top"
            src={uniImg1}
            alt=""
            onClick={(e) => clickImg(e)}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="object-top"
            src={uniImg2}
            alt=""
            onClick={(e) => clickImg(e)}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="object-top"
            src={uniImg}
            alt=""
            onClick={(e) => clickImg(e)}
          />
        </SwiperSlide> */}
      </Swiper>
    </>
  );
}

export default Bod;
