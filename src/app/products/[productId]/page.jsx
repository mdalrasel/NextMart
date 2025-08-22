import React from "react";
import products from "@/app/data/products.json";
import { FaArrowLeft } from "react-icons/fa";
import Link from "next/link";

export default function ProductDetailsPage({ params }) {
  const { productId } = params;

  const product = products.find((p) => p.id === productId);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center p-6 bg-base-100">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4 text-base-content">Product Not Found</h1>
          <p className="text-base-content/80">The product you are looking for does not exist.</p>
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
        <div className="md:flex">
          {/* Product Image Section */}
          <div className="md:flex-shrink-0 w-full md:w-1/2">
            <img
              src={product.image}
              alt={product.title}
              className="h-80 md:h-full w-full object-cover"
            />
          </div>

          {/* Product Details Section */}
          <div className="p-8 md:w-1/2 flex flex-col justify-between text-base-content">
            <div>
              <h1 className="text-3xl font-extrabold mb-2">
                {product.title}
              </h1>
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
                  <span className="text-lg font-bold text-yellow-500">★</span> {product.rating}
                </div>
              </div>
            </div>

            <div className="mt-8 flex justify-end">
              <Link href="/products" className="btn btn-ghost">
                <FaArrowLeft /> Go Back
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
