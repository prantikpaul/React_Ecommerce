import React, { useState, useEffect } from "react";
import aa from "../assets/images/product/aa.jpg";
import bb from "../assets/images/product/bb.webp";
import cc from "../assets/images/product/cc.webp";
import dd from "../assets/images/product/dd.webp";

const products = [
  {
    id: 1,
    name: "iPhone 15 Pro Max",
    img: aa,
    price: "৳ 169999",
    rating: "3 out of 5",
  },
  {
    id: 2,
    name: 'MacBook Pro 13" 2022',
    img: bb,
    price: "৳ 179999",
    rating: "5",
  },
  {
    id: 3,
    name: 'MacBook Pro 13" 2022',
    img: cc,
    price: "৳ 179999",
    rating: "5",
  },
  {
    id: 4,
    name: 'MacBook Pro 13" 2022',
    img: dd,
    price: "৳ 179999",
    rating: "5",
  },
  {
    id: 5,
    name: 'MacBook Pro 13" 2022',
    img: dd,
    price: "৳ 179999",
    rating: "5",
  },
  {
    id: 6,
    name: 'MacBook Pro 13" 2022',
    img: dd,
    price: "৳ 179999",
    rating: "5",
  },
];

const ProductSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Duplicate the products array to create an infinite loop effect
  const infiniteProducts = [...products, ...products];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % products.length);
    }, 4500); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % products.length);
  };

  const handlePrev = () => {
    setCurrentIndex((currentIndex - 1 + products.length) % products.length);
  };

  return (
    <div className="mb-10">
        <h3 className="font-bold text-center text-xl mb-4">NEW ARRIVALS</h3>
    <div className="lg:mx-48">
      <div className="relative overflow-hidden ">
        <div
          className="flex transition-transform duration-500 ease-in-out  "
          style={{
            transform: `translateX(-${
              currentIndex * (100 / products.length)
            }%)`,
          }}
        >
          {infiniteProducts.map((product, index) => (
            <div
              key={index}
              className="min-w-[50%] sm:min-w-[25%] p-4 flex-shrink-0  "
            >
              <div className="bg-white p-4 rounded shadow ">
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-full lg:w-48 h-48  object-cover mb-4 lg:mx-auto"
                />
                <h3 className="text-lg font-semibold text-center">{product.name}</h3>
                <p className="text-gray-600 text-center">{product.rating}</p>
                <p className="text-gray-800 font-bold text-center">{product.price}</p>
                <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded ml-12 lg:ml-28">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={handlePrev}
          className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-300 p-2 rounded-full"
        >
          ◀
        </button>
        <button
          onClick={handleNext}
          className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-300 p-2 rounded-full"
        >
          ▶
        </button>
      </div>
    </div>
    </div>
  );
};

export default ProductSlider;
