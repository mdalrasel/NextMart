// src/app/api/auth/route.js

import { loginUser, logoutUser, registerUser } from "@/app/actions/auth/loginUser";
import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        const { action, payload } = await request.json();

        if (action === "login") {
            const user = await loginUser(payload);
            if (user) {
                return NextResponse.json({ success: true, user });
            } else {
                return NextResponse.json({ success: false, message: "Invalid credentials" });
            }
        }

        if (action === "register") {
            const insertedId = await registerUser(payload);
            if (insertedId) {
                return NextResponse.json({ success: true, insertedId });
            } else {
                return NextResponse.json({ success: false, message: "Registration failed" });
            }
        }

        if (action === "logout") {
            await logoutUser();
            return NextResponse.json({ success: true, message: "Logged out successfully" });
        }

        return NextResponse.json({ success: false, message: "Invalid action" });
    } catch (error) {
        console.error("Auth API Error:", error);
        return NextResponse.json({ success: false, message: "An unexpected error occurred" }, { status: 500 });
    }
}
