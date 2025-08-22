// src/app/components/AddProductForm.jsx

"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddProductForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    title: "",
    price: "",
    description: "",
    image: "",
    category: "",
    brand: "",
    rating: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

 
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
  
      const response = await fetch("/api/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to add product");
      }

      const result = await response.json();
      console.log("Product added successfully:", result);
      setSuccess(true);

     
      setFormData({
        title: "",
        price: "",
        description: "",
        image: "",
        category: "",
        brand: "",
        rating: "",
      });

     
      router.push("/products");
    } catch (err) {
      console.error(err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="card bg-base-200 shadow-xl max-w-2xl mx-auto my-12 p-8 rounded-xl">
      <h2 className="text-3xl font-bold text-center text-base-content mb-6">Add New Product</h2>
      
      {success && (
        <div role="alert" className="alert alert-success mb-4">
          <span>Product added successfully!</span>
        </div>
      )}
      {error && (
        <div role="alert" className="alert alert-error mb-4">
          <span>Error: {error}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="label">
            <span className="label-text">Product Title:</span>
          </label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Enter product title"
            className="input input-bordered w-full"
            required
          />
        </div>

        <div>
          <label className="label">
            <span className="label-text">Price:</span>
          </label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            placeholder="Enter price"
            className="input input-bordered w-full"
            required
          />
        </div>

        <div>
          <label className="label">
            <span className="label-text">Description:</span>
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Enter product description"
            className="textarea textarea-bordered h-24 w-full"
            required
          />
        </div>
        
        <div>
          <label className="label">
            <span className="label-text">Image URL:</span>
          </label>
          <input
            type="text"
            name="image"
            value={formData.image}
            onChange={handleChange}
            placeholder="Enter image URL"
            className="input input-bordered w-full"
            required
          />
        </div>
        
        <div>
          <label className="label">
            <span className="label-text">Category:</span>
          </label>
          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
            placeholder="Enter category"
            className="input input-bordered w-full"
            required
          />
        </div>
        
        <div>
          <label className="label">
            <span className="label-text">Brand:</span>
          </label>
          <input
            type="text"
            name="brand"
            value={formData.brand}
            onChange={handleChange}
            placeholder="Enter brand"
            className="input input-bordered w-full"
            required
          />
        </div>
        
        <div>
          <label className="label">
            <span className="label-text">Rating:</span>
          </label>
          <input
            type="number"
            name="rating"
            value={formData.rating}
            onChange={handleChange}
            placeholder="Enter rating (e.g., 4.5)"
            className="input input-bordered w-full"
            step="0.1"
            required
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary w-full mt-6"
          disabled={loading}
        >
          {loading ? (
            <span className="loading loading-spinner"></span>
          ) : (
            "Add Product"
          )}
        </button>
      </form>
    </div>
  );
}
