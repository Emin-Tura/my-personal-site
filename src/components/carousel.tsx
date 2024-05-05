"use client";

import NextImage from "next/image";
import { useEffect, useState } from "react";

import { IMAGES } from "@/lib/const";

const Carousel = () => {
  const [activeImage, setActiveImage] = useState(0);

  const clickNext = () => {
    activeImage === IMAGES.length - 1
      ? setActiveImage(0)
      : setActiveImage(activeImage + 1);
  };
  const clickPrev = () => {
    activeImage === 0
      ? setActiveImage(IMAGES.length - 1)
      : setActiveImage(activeImage - 1);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      clickNext();
    }, 5000);
    return () => {
      clearTimeout(timer);
    };
  }, [activeImage]);
  return (
    <main className="relative grid place-items-center w-full mx-auto my-10 max-w-5xl shadow-2xl rounded-2xl">
      <div className="w-full flex justify-center items-center transition-transform ease-in-out duration-500">
        {IMAGES.map((elem, idx) => (
          <div
            key={idx}
            className={`${
              idx === activeImage
                ? "block w-full h-[80vh] object-cover transition-all duration-500 ease-in-out"
                : "hidden"
            }`}
          >
            <NextImage
              src={elem.src}
              alt={`Image ${idx}`}
              layout="fill"
              objectFit="cover"
              className="md:rounded-2xl"
            />
          </div>
        ))}
      </div>
    </main>
  );
};

export default Carousel;
