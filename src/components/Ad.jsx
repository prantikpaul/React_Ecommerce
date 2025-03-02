import React, { useState, useEffect } from "react";
import ad1 from "../assets/images/Ads/ad1.png";
import ad2 from "../assets/images/Ads/ad2.png";
import ad3 from "../assets/images/Ads/ad3.png";
import { BadgeDollarSign, CircleCheckBig, Truck } from "lucide-react";

const slides = [
  {
    imageSrc: ad1,
    title: "Free Shipping & Return",
    description: "৩০০০ টাকার উপর ক্রয়ের জন্য ফ্রি শিপিং",
  },
  {
    imageSrc: ad2,
    title: "Money Back Guarantee",
    description: "৩০০% স্যাটিসফ্যাকশন গ্যারান্টি",
  },
  {
    imageSrc: ad3,
    title: "Online Support 24/7",
    description: "অনলাইন সাপোর্ট ২৪/৭ ঘন্টার মধ্যে পাওয়া যাবে",
  },
];

const Ad = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <>
      <div className="carousel-container relative overflow-hidden overflow-x-hidden flex lg:hidden">
        <div
          className="carousel-slider flex transition-transform ease-in-out duration-500"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="carousel-slide min-w-full p-4">
              <div className="slide-content flex flex-col items-center text-center">
                <div className="slide-text text-gray-800 mb-4 ">
                  <h2 className="text-xl font-bold">{slide.title}</h2>
                  <p>{slide.description}</p>
                </div>
                <img
                  src={slide.imageSrc}
                  className="slide-image w-full h-48 object-cover  "
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* for lg device */}
      <div className="hidden lg:flex lg:justify-evenly lg:py-5  ">
        <div className="">
          <div className="flex ">
            <Truck size={35} className="mt-2" />
            <div className="mb-5 ml-2">
              <p className="font-bold text-lg">Free Shipping & Return</p>
              <p>৩০০০ টাকার উপর ক্রয়ের জন্য ফ্রি শিপিং</p>
            </div>
          </div>

          <img src={ad1} alt="" />
        </div>
        <div className="">
          <div className="flex">
            <BadgeDollarSign size={35} className="mt-2" />
            <div className="mb-5 ml-2">
              <p className="font-bold text-lg">Free Shipping & Return</p>
              <p>৩০০০ টাকার উপর ক্রয়ের জন্য ফ্রি শিপিং</p>
            </div>
          </div>

          <img src={ad2} alt="" />
        </div>
        <div className="">
          <div className="flex">
            <CircleCheckBig size={35} className="mt-2" />
            <div className="mb-5 ml-2">
              <p className="font-bold text-lg">Free Shipping & Return</p>
              <p>৩০০০ টাকার উপর ক্রয়ের জন্য ফ্রি শিপিং</p>
            </div>
          </div>

          <img src={ad3} alt="" />
        </div>
      </div>
    </>
  );
};

export default Ad;
