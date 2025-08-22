// src/components/LoginForm.jsx
"use client";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function LoginForm() {
    const router = useRouter();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const loadingToast = toast.loading("Logging in...");
        
        try {
            const response = await fetch("/api/auth", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ action: "login", payload: { email, password } }),
            });
            
            const result = await response.json();
            toast.dismiss(loadingToast);

            if (result.success) {
                toast.success("Logged In successfully");
                router.push("/");
                router.refresh(); 
                form.reset();
            } else {
                toast.error(result.message || "Invalid credentials. Please try again.");
            }
        } catch (error) {
            console.log(error);
            toast.dismiss(loadingToast);
            toast.error("Failed to log in");
        }
    };

    return (
        <div className="flex items-center justify-center min-h-[calc(100vh-100px)]">
            <div className="card bg-base-200 shadow-xl max-w-lg w-full p-8 rounded-xl">
                <h1 className="text-3xl font-bold text-center my-4">Log-In</h1>
                <form onSubmit={handleSubmit} className="w-full space-y-4">
                    <label className="form-control w-full">
                        <div className="label w-full">
                            <span className="label-text font-bold">Email</span>
                        </div>
                        <input
                            type="email"
                            name="email"
                            placeholder="Type here"
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
                            placeholder="Type here"
                            className="input input-bordered w-full"
                            required
                        />
                    </label>
                    <button type="submit" className="w-full h-12 btn btn-primary mt-4">
                        Sign In
                    </button>
                    <p className="text-center text-sm mt-4">
                        Don't have an account?{" "}
                        <Link href="/register" className="text-primary font-bold">
                            Register
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    );
}
