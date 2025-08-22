import Link from "next/link";
import products from "@/app/data/products.json";
import { FaInfoCircle } from "react-icons/fa";

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-6">
      <h1 className="text-3xl font-bold text-center mb-10">Our Products</h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div key={product.id} className="card bg-base-100 shadow-xl">
            <figure>
              <img
                src={product.image}
                alt={product.title}
                className="h-56 w-full object-cover"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{product.title}</h2>
              <p className="text-gray-600">{product.description.slice(0, 60)}...</p>
              <p className="text-lg font-bold text-indigo-600">${product.price}</p>

              <div className="card-actions justify-end">
                <Link href={`/products/${product.id}`}>
                  <button className="btn btn-primary flex items-center gap-2">
                    <FaInfoCircle /> Details
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
