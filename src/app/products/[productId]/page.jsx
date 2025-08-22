// src/app/products/[productId]/page.jsx

import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import Link from "next/link";
import { ObjectId } from "mongodb";
import dbConnect, { collectionNamesObj } from "@/lib/dbConnect";

export default async function ProductDetailsPage({ params }) {
  const { productId } =await  params;

  //  DB Connect
  const productCollection = dbConnect(collectionNamesObj.productsCollection);

  let product;
  try {
    product = await productCollection.findOne({ _id: new ObjectId(productId) });
  } catch (error) {
    console.error("Invalid ObjectId:", error);
    product = null;
  }

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center p-6 bg-base-100">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4 text-base-content">
            Product Not Found
          </h1>
          <p className="text-base-content/80">
            The product you are looking for does not exist.
          </p>
          <Link href="/products" className="btn btn-primary mt-6">
            <FaArrowLeft /> Go Back to Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-base-100 py-12 px-4 md:px-8">
      <div className="max-w-4xl mx-auto card bg-base-200 rounded-lg shadow-xl overflow-hidden">
        {/* Product Image Section */}
        <div className="w-full">
          <img
            src={product.image}
            alt={product.title}
            className="w-full object-cover h-96 md:h-[500px]"
          />
        </div>

        {/* Product Details Section */}
        <div className="p-8 text-base-content">
          <h1 className="text-3xl font-extrabold mb-2">{product.title}</h1>
          <span className="badge badge-lg badge-accent">{product.category}</span>
          <p className="mt-4 leading-relaxed text-base-content/80">
            {product.description}
          </p>
          <div className="mt-6">
            <p className="text-2xl font-bold text-primary">${product.price}</p>
            <div className="flex items-center mt-2 text-base-content/80">
              <span className="text-sm font-semibold mr-1">Brand:</span>
              <span className="text-lg font-bold">{product.brand}</span>
            </div>
            <div className="flex items-center mt-2 text-base-content/80">
              <span className="text-sm font-semibold mr-1">Rating:</span>
              <span className="text-lg font-bold text-yellow-500">★</span>{" "}
              {product.rating}
            </div>
          </div>
          <div className="mt-8 text-right">
            <Link href="/products" className="btn btn-primary">
              <FaArrowLeft /> Go Back
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
