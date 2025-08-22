// src/app/products/[productId]/page.jsx

import React from "react";
import products from "@/app/data/products.json";
import { FaArrowLeft } from "react-icons/fa";
import Link from "next/link";

// এই কম্পোনেন্টটি Next.js সার্ভার কম্পোনেন্ট হিসেবে কাজ করে
// এবং URL থেকে productId প্যারামিটারটি পায়।
export default function ProductDetailsPage({ params }) {
  const { productId } = params;

  // URL-এর productId ব্যবহার করে নির্দিষ্ট পণ্যটি খুঁজে বের করা হয়
  const product = products.find((p) => p.id === productId);

  // যদি পণ্যটি খুঁজে পাওয়া না যায়
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

  // যদি পণ্যটি খুঁজে পাওয়া যায়, তবে ডিটেইলস দেখানো হবে
  return (
    <div className="min-h-screen bg-base-100 py-12 px-4 md:px-8">
      <div className="max-w-4xl mx-auto card bg-base-200 rounded-lg shadow-xl overflow-hidden">
        {/* আগের কোডে এখানে md:flex ছিল, যা ডেস্কটপে ইমেজ এবং ডিটেইলসকে পাশাপাশি দেখাতো।
          আপনার অনুরোধ অনুযায়ী, এটি সরানো হয়েছে যাতে সব স্ক্রিনে ইমেজ উপরে এবং ডিটেইলস নিচে থাকে।
        */}
        {/* Product Image Section */}
        <div className="w-full">
          <img
            src={product.image}
            alt={product.title}
            className="w-full object-cover h-96 md:h-[500px]" // বিভিন্ন স্ক্রিনের জন্য হাইট সামঞ্জস্য করা হয়েছে
          />
        </div>

        {/* Product Details Section */}
        <div className="p-8 text-base-content">
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
          <div className="mt-8 text-right">
            <Link href="/products" className="btn btn-primary ">
              <FaArrowLeft /> Go Back
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
