// src/app/dashboard/my-products/page.jsx
import Link from "next/link";
import { FaInfoCircle, FaPlusCircle, FaEdit, FaTrash } from "react-icons/fa";
import dbConnect, { collectionNamesObj } from "@/lib/dbConnect";
import { getUserSession } from "@/app/actions/auth/loginUser";

export default async function MyProductsPage() {
    let products = [];
    let error = null;
    const user = await getUserSession();

    // If a user is not logged in, display a message
    if (!user) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center p-6">
                <div role="alert" className="alert alert-warning text-center">
                    <FaInfoCircle className="w-6 h-6" />
                    <span>Please log in to view your products.</span>
                </div>
                <Link href="/login" className="btn btn-primary mt-4">
                    Go to Login Page
                </Link>
            </div>
        );
    }

    try {
        // Connect to the MongoDB collection
        const productCollection = await dbConnect(collectionNamesObj.productsCollection);
        
        // Query the database with the current user's email to fetch only their products
        products = await productCollection.find({ email: user.email }).toArray();

    } catch (e) {
        console.error("Failed to fetch user's products:", e);
        error = "Failed to load your products. Please try again later.";
    }

    return (
        <div className="min-h-screen bg-gray-50 py-10 px-6">
            <h1 className="text-3xl font-bold text-center text-primary mb-10">My Products</h1>
            <div className="text-center mb-8">
                <Link href="/dashboard/add-product" className="btn btn-primary">
                    <FaPlusCircle className="mr-2" /> Add a New Product
                </Link>
            </div>

            {error ? (
                <div className="text-center text-lg text-red-500">
                    {error}
                </div>
            ) : products.length > 0 ? (
                <div className="overflow-x-auto">
                    <table className="table w-full bg-base-100 shadow-xl rounded-lg">
                        {/* Table Head */}
                        <thead>
                            <tr className="bg-base-200">
                                <th>Image</th>
                                <th>Title</th>
                                <th>Price</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        {/* Table Body */}
                        <tbody>
                            {products.map((product) => (
                                <tr key={product._id.toString()}>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={product.image} alt={product.title} />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>{product.title}</td>
                                    <td>${product.price}</td>
                                    <td className="flex gap-2 items-center h-full">
                                        <Link href={`/products/${product._id.toString()}`}>
                                            <button className="btn btn-primary btn-sm tooltip" data-tip="Details">
                                                <FaInfoCircle />
                                            </button>
                                        </Link>
                                        <Link href={`/dashboard/edit-product/${product._id.toString()}`}>
                                            <button className="btn btn-info btn-sm tooltip" data-tip="Edit">
                                                <FaEdit />
                                            </button>
                                        </Link>
                                        <button className="btn btn-error btn-sm tooltip" data-tip="Delete">
                                            <FaTrash />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ) : (
                <div className="text-center text-lg text-gray-500">
                    You have not added any products yet.
                </div>
            )}
        </div>
    );
}
