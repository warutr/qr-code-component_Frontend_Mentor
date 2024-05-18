import Image from "next/image";
import React from "react";

type qrCodeProps = {
  image: string;
  title: string;
  description: string;
  name_alt: string;
  width: number;
  height: number;
};

const Cards = ({
  image,
  description,
  title,
  name_alt,
  width,
  height,
}: qrCodeProps) => {
  return (
    <div className="mx-auto px-5 max-w-[400px] md:max-w-[440px] text-center ">
      <div className="flex flex-col p-5 bg-white items-center rounded-2xl">
        <Image
          src={image}
          alt={name_alt}
          width={width}
          height={height}
          className="rounded-xl object-contain"
        />
        <h1 className="text-dark-blue text-2xl font-bold px-6 mt-5">{title}</h1>
        <p className="text-grayish-blue px-5 py-5 md:px-10 ">{description}</p>
      </div>
    </div>
  );
};

export default Cards;
