// src/lib/dbConnect.js
import { MongoClient, ServerApiVersion } from "mongodb";

export const collectionNamesObj = {
    productsCollection: "test_products",
    userCollection: "user",
    addProductCollection: "test_add"
};

let client;
let clientPromise;

if (!global._mongoClient) {
    const uri = process.env.NEXT_PUBLIC_MONGODB_URI;

    if (!uri) {
        throw new Error('Please define the NEXT_PUBLIC_MONGODB_URI environment variable inside .env.local');
    }

    client = new MongoClient(uri, {
        serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true,
        }
    });

    global._mongoClient = client;
} else {
    client = global._mongoClient;
}

export default async function dbConnect(collectionName) {
    try {
        await client.connect();
        const db = client.db(process.env.DB_NAME);
        return db.collection(collectionName);
    } catch (error) {
        console.error("Failed to connect to MongoDB:", error);
        throw error;
    }
}
