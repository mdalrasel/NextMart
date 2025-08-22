// src/components/RegisterForm.jsx
"use client";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function RegisterForm() {
    const router = useRouter();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const loadingToast = toast.loading("Registering...");

        try {
            const response = await fetch("/api/auth", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ action: "register", payload: { name, email, password } }),
            });

            const result = await response.json();
            toast.dismiss(loadingToast);
            
            if (result.success) {
                toast.success("Registration successful!");
                form.reset();
                router.push("/login");
            } else {
                toast.error(result.message || "Registration failed. Email might already be in use.");
            }
        } catch (error) {
            console.log(error);
            toast.dismiss(loadingToast);
            toast.error("Registration failed. Please try again.");
        }
    };

    return (
        <div className="flex items-center justify-center min-h-[calc(100vh-100px)]">
            <div className="card bg-base-200 shadow-xl max-w-lg w-full p-8 rounded-xl">
                <h1 className="text-3xl font-bold text-center my-4">Register</h1>
                <form onSubmit={handleSubmit} className="w-full space-y-4">
                    <label className="form-control w-full">
                        <div className="label w-full">
                            <span className="label-text font-bold">Name</span>
                        </div>
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            className="input input-bordered w-full"
                            required
                        />
                    </label>
                    <label className="form-control w-full">
                        <div className="label w-full">
                            <span className="label-text font-bold">Email</span>
                        </div>
                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            className="input input-bordered w-full"
                            required
                        />
                    </label>
                    <label className="form-control w-full">
                        <div className="label w-full">
                            <span className="label-text font-bold">Password</span>
                        </div>
                        <input
                            type="password"
                            name="password"
                            placeholder="Your Password"
                            className="input input-bordered w-full"
                            required
                        />
                    </label>
                    <button type="submit" className="w-full h-12 btn btn-primary mt-4">
                        Sign Up
                    </button>
                    <p className="text-center text-sm mt-4">
                        Already have an account?{" "}
                        <Link href="/login" className="text-primary font-bold">
                            Login
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    );
}
