import React from "react";
import prodData from "../data/prodData.json";
import ProdBlindwalk from "../assets/images/Prod_Blindwalk.svg";
import ProdMediOCR from "../assets/images/Prod_MediOCR.png";
import ProdWordAid from "../assets/images/Prod_WordAid3.svg";


function ProductCards() {
  const products = prodData.Products;

  return (
    <div className="bg-gray-800 text-white py-12">
      <div className="container mx-auto">
        {products.map((product, index) => (
          <div
            className={`flex flex-wrap ${
              index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
            } my-12`}
            key={product.id}
          >
            <div className="w-full md:w-1/2 md:pl-8 flex justify-center items-center">
              <img
                src={
                  product.imageUrl === "MediOCR"
                    ? ProdMediOCR
                    : product.imageUrl === "BlindWalk"
                    ? ProdBlindwalk
                    : ProdWordAid
                }
                alt={product.name}
                className="object-cover h-80 w-80 md:h-96 md:w-96 rounded-lg"
              />
            </div>
            <div className="w-full md:w-1/2 p-4">
              <h3 className="text-3xl font-bold mb-2">{product.name}</h3>
              <h4 className="text-lg mb-2">{product.title}</h4>
              <p className="text-gray-400 text-lg leading-relaxed">
                {product.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductCards;
