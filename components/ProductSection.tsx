"use client";


import { ProductImageList } from "@/lib/utils";
import Image from "next/image";
import React, { useState } from "react";
import Modal from "./Modal";

export const ProductSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openModal = (image: string) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <div>
      <h1 className="text-4xl font-bold mb-4 text-center mt-2 relative z-10 font-playfair">
        Explore Our Products
      </h1>
      <section
        id="shop"
        className=" columns-1 lg:columns-3  p-1 relative z-10 "
      >
        {ProductImageList.map((product) => (
          <div
            key={product}
            className="  inline-block w-[100%] cursor-pointer "
            onClick={() => openModal(product)}
          >
            <Image
              src={`/Assets/${product}`}
              alt={`Product ${product}`}
              loading="lazy"
              width={0}
              height={0}
              sizes="100vw"
              className=" hover:opacity-80 transition-opacity w-full block  rounded-md     "
            />
          </div>
        ))}

        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <Image
            src={`/Assets/${selectedImage}`}
            alt={`Product ${selectedImage}`}
            loading="lazy"
            width={0}
            height={0}
            sizes="100vw"
            className=" hover:opacity-80 transition-opacity w-full block  rounded-md     "
          />
        </Modal>
      </section>
    </div>
  );
};
