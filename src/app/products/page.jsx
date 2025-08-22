// src/app/components/ProductsPage.jsx
import Link from "next/link";
import { FaInfoCircle } from "react-icons/fa";
import dbConnect, { collectionNamesObj } from "@/lib/dbConnect";

export default async function ProductsPage() {
    let products = [];
    let error = null;

    try {
        // dbConnect ফাংশনটি অ্যাসিঙ্ক্রোনাস, তাই await ব্যবহার করা হয়েছে
        const productCollection = await dbConnect(collectionNamesObj.productsCollection);
        products = await productCollection.find({}).toArray();
    } catch (e) {
        console.error("Failed to fetch products:", e);
        error = "Failed to load products. Please try again later.";
    }

    return (
        <div className="min-h-screen bg-gray-50 py-10 px-6">
            <h1 className="text-3xl font-bold text-center text-primary mb-10">Our Products</h1>

            {error ? (
                <div className="text-center text-lg text-red-500">
                    {error}
                </div>
            ) : products.length > 0 ? (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {products.map((product) => (
                        <div key={product._id.toString()} className="card bg-base-100 shadow-xl">
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
                                    <Link href={`/products/${product._id.toString()}`}>
                                        <button className="btn btn-primary flex items-center gap-2">
                                            <FaInfoCircle /> Details
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="text-center text-lg text-gray-500">
                    No products found. Please add some products.
                </div>
            )}
        </div>
    );
}
