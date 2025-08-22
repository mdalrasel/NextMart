// src/app/api/products/route.js
import { NextResponse } from "next/server";
import dbConnect, { collectionNamesObj } from "@/lib/dbConnect";

export async function POST(req) {
    try {
        const payload = await req.json();
        
        
        const productsCollection = await dbConnect(collectionNamesObj.productsCollection);
        
        
        const result = await productsCollection.insertOne(payload);
        
        
        return NextResponse.json({
            success: true,
            message: "Product added successfully!",
            insertedId: result.insertedId,
        }, {
            status: 201, 
        });

    } catch (error) {
        console.error("Error adding product:", error);
        
       
        return NextResponse.json({
            success: false,
            message: "Failed to add product",
            error: error.message,
        }, {
            status: 500, 
        });
    }
}
