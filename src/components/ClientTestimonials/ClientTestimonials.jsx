import React, { useEffect } from 'react';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import './ClientTestimonials.css';

const testimonialData = [
  {
    avatar: "https://img.freepik.com/free-photo/woman-with-long-hair-yellow-hoodie-with-word-music-it_1340-39068.jpg",
    name: "Simonette Lindermann",
    review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porta, ex at luctus commodo, metus erat dictum sapien, eget dictum turpis felis vitae ligula. Sed porta, ex at luctus commodo, metus erat dictum sapien, eget dictum turpis felis vitae ligula. ",
    type: "Client",
  },
  {
    avatar: "https://img.freepik.com/free-photo/close-up-portrait-young-bearded-man-white-shirt-jacket-posing-camera-with-broad-smile-isolated-gray_171337-629.jpg",
    name: "Merilee Beal",
    review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porta, ex at luctus commodo, metus erat dictum sapien, eget dictum turpis felis vitae ligula. Sed porta, ex at luctus commodo, metus erat dictum sapien, eget dictum turpis felis vitae ligula. ",
    type: "Client",
  },
  {
    avatar: "https://img.freepik.com/free-photo/handsome-african-guy-with-stylish-haircut-taking-photo-digital-camera_171337-1345.jpg",
    name: "Suzi Lankester",
    review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porta, ex at luctus commodo, metus erat dictum sapien, eget dictum turpis felis vitae ligula. Sed porta, ex at luctus commodo, metus erat dictum sapien, eget dictum turpis felis vitae ligula. ",
    type: "Client",
  },
  {
    avatar: "https://img.freepik.com/free-photo/pretty-smiling-joyfully-female-with-fair-hair-dressed-casually-looking-with-satisfaction_176420-15187.jpg",
    name: "Gaston Cunnow",
    review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porta, ex at luctus commodo, metus erat dictum sapien, eget dictum turpis felis vitae ligula. Sed porta, ex at luctus commodo, metus erat dictum sapien, eget dictum turpis felis vitae ligula. ",
    type: "Client",
  },
  {
    avatar: "https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg",
    name: "Marys Lobb",
    review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porta, ex at luctus commodo, metus erat dictum sapien, eget dictum turpis felis vitae ligula. Sed porta, ex at luctus commodo, metus erat dictum sapien, eget dictum turpis felis vitae ligula. ",
    type: "Client",
  },
];

const TestimonialCarousel = () => {
    useEffect(() => {
        const swiper = new Swiper('.swiper-container', {
          grabCursor: true,
          centeredSlides: true,
          slidesPerView: 3,
          loop: true,
          spaceBetween: 183,
          effect: 'coverflow',
          coverflowEffect: {
            rotate: 0,
            stretch: 0,
            depth: 171,
            modifier: 2,
            slideShadows: false,
          },
          autoplay: { delay: 5000 },
        });
      
        const queryResizer = () => {
          if (window.innerWidth < 724) swiper.params.slidesPerView = 2;
          if (window.innerWidth > 501) swiper.params.slidesPerView = 2;
          if (window.innerWidth > 724) swiper.params.slidesPerView = 2;
          if (window.innerWidth < 501) swiper.params.slidesPerView = 1;
          swiper.update();
        };
      
        window.onresize = queryResizer;
        queryResizer();
      
        return () => {
          window.onresize = null;
          swiper.destroy(true, true);
        };
      }, []);
      

  return (
    <div className='testimonial'>
      <h1>
        <svg xmlns="http://www.w3.org/2000/svg" width="140" height="4" viewBox="0 0 140 4" fill="none">
          <path d="M0 2H140" stroke="#222831" strokeWidth="3" />
        </svg>
        OUR CLIENT SAYS
        <svg xmlns="http://www.w3.org/2000/svg" width="140" height="4" viewBox="0 0 140 4" fill="none">
          <path d="M0 2H140" stroke="#222831" strokeWidth="3" />
        </svg>
      </h1>
      <h5>Whether you’re selling or buying RECs, or managing your system’s maintenance, our platform has you covered. Our goal is to simplify your journey and make the process as seamless as possible.</h5>
      <div id="craouselContainer" className="swiper-container">
        <div className="swiper-wrapper" id="slideHolder">
          {testimonialData.map((item, index) => (
            <div key={index} className="swiper-slide">
              <div className="ContentHolder">
                <p><span>“</span>{item.review}<span>”</span></p>
              </div>
              <div className="ImgHolder">
                <img src={item.avatar} alt={item.name} />
                <h3>{item.name}</h3>
                <h6>{item.type}</h6>
              </div>
            </div>
          ))}
        </div>
        <div className="swiper-pagination"></div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
