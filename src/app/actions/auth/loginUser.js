// src/app/actions/auth.js
"use server";

import dbConnect, { collectionNamesObj } from "@/lib/dbConnect";
import bcrypt from "bcrypt";
import { ObjectId } from "mongodb";
import { cookies } from "next/headers";


const SESSION_TOKEN = crypto.randomUUID();

export const loginUser = async (payload) => {
    const { email, password } = payload;
    
    const userCollection = await dbConnect(collectionNamesObj.userCollection);
    const user = await userCollection.findOne({ email });

    if (!user) return null; 

    const isPasswordOK = await bcrypt.compare(password, user.password);
    
    if (!isPasswordOK) return null; 

    cookies().set("session", JSON.stringify({ userId: user._id.toString() }), {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        path: "/",
        maxAge: 60 * 60 * 24 * 7, 
    });

    return {
        _id: user._id.toString(),
        name: user.name,
        email: user.email
    };
};


export const registerUser = async (payload) => {
    const { name, email, password } = payload;

    if (!email || !password || !name) return null;

    const userCollection = await dbConnect(collectionNamesObj.userCollection);
    
    const userExists = await userCollection.findOne({ email: payload.email });

    if (userExists) return null; 

  
    const hashedPassword = await bcrypt.hash(password, 10);
    const result = await userCollection.insertOne({
        name,
        email,
        password: hashedPassword,
    });

    return result.insertedId.toString();
};


export const getUserSession = async () => {
    const sessionCookie = await cookies().get("session");
    if (!sessionCookie || !sessionCookie.value) {
        return null;
    }

    try {
        const sessionData = JSON.parse(sessionCookie.value);
        if (!sessionData.userId) {
            return null; 
        }
        
        const userCollection = await dbConnect(collectionNamesObj.userCollection);
        const user = await userCollection.findOne({ _id: new ObjectId(sessionData.userId) });

        if (!user) return null;

        return {
            _id: user._id.toString(),
            name: user.name,
            email: user.email
        };

    } catch (error) {
        console.error("Failed to get user session:", error);
      
        cookies().delete("session");
        return null;
    }
};

export const logoutUser = async () => {
    cookies().delete("session");
};
