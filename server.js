
// import express from "express";
// import { MongoClient } from "mongodb";
// import dotenv from "dotenv";
// import cors from "cors";
// const MONGODB_URI="mongodb+srv://wwwpiyushverma2401_db_user:N3hTB85tx.xnStG@piyush2416.sp9zipj.mongodb.net/?appName=Piyush2416"
// const Database="Products"
// const collection="Products-items"

// dotenv.config();

// const app = express();
// app.use(cors()); // React ko allow karega

// const PORT = process.env.PORT || 3000;

// const client = new MongoClient(MONGODB_URI);

// // 🔥 Connect DB once
// let db;

// async function connectDB() {
//   try {
//     await client.connect();
//     console.log("✅ MongoDB Connected");

//     db = client.db(Database); // 👈 apna database name
//   } catch (error) {
//     console.log("❌ DB Error:", error);
//   }
// }

// connectDB();


// // 🔥 API Route (IMPORTANT)
// app.get("/api/students", async (req, res) => {
//   try {
//     const data = await db
//       .collection(collection) // 👈 apna collection name
//       .find()
//       .toArray();

//     res.json(data); // 👈 React ko data bhej raha hai
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });
// // Server start
// app.listen(PORT, () => {
//   console.log(`🚀 Server running at http://localhost:${PORT}`);
// });

 
import express from "express";
import { MongoClient } from "mongodb";
import dotenv from "dotenv";
import cors from "cors";
    import { ObjectId } from "mongodb"; // top pe

const MONGODB_URI = "mongodb+srv://wwwpiyushverma2401_db_user:N3hTB85tx.xnStG@piyush2416.sp9zipj.mongodb.net/?appName=Piyush2416"; // apna URI daalo
const Database = "Products";
const collection = "Products-items";

dotenv.config();

const app = express();
app.use(cors()); // React ko allow karega
app.use(express.json());

const PORT = process.env.PORT || 3000;

const client = new MongoClient(MONGODB_URI);

// 🔥 Connect DB once
let db;
async function connectDB() {
  try {
    await client.connect();
    console.log("✅ MongoDB Connected");
    db = client.db(Database); // 👈 apna database name
  } catch (error) {
    console.log("❌ DB Error:", error);
  }
}

connectDB();

// ✅ Route 1: Saare products lao (Home page ke liye)
app.get("/api/products", async (req, res) => {
  try {
    const data = await db
      .collection(collection)
      .find()
      .toArray();
db=client.db(Database);
    res.json(data); // React ko data bhej raha hai
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ✅ Route 2: Single product by ID (Product detail page ke liye)
app.get("/api/products/:id", async (req, res) => {
  try {
    const productId = req.params.id;

    // Pehle ObjectId se try karo
    let product = null;

    try {
      const { ObjectId } = await import("mongodb");
      if (ObjectId.isValid(productId)) {
        product = await db
          .collection(collection)
          .findOne({ _id: new ObjectId(productId) });
      }
    } catch (e) {}

    // Agar nahi mila toh string ID se try karo
    if (!product) {
      product = await db
        .collection(collection)
        .findOne({ _id: productId });
    }

    // Agar phir bhi nahi mila toh kisi aur field se try karo
    if (!product) {
      product = await db
        .collection(collection)
        .findOne({ id: productId });
    }

    if (!product) {
      return res.status(404).json({ error: "Product nahi mila!" });
    }

    res.json(product);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Server start
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});

 // app.get("/api/products/:id", async (req, res) => {
//   try {
//     const { ObjectId } = require("mongodb"); // ✅ Uncomment & require use karo
//     const productId = req.params.id;

//     // ✅ Valid ObjectId hai ya nahi pehle check karo
//     if (!ObjectId.isValid(productId)) {
//       return res.status(400).json({ error: "Invalid product ID" });
//     }

//     const product = await db
//       .collection(collection)
//       .findOne({ _id: new ObjectId(productId) }); // ✅ Sahi tarah se search

//     if (!product) {
//       return res.status(404).json({ error: "Product nahi mila!" });
//     }

//     res.json(product); // ✅ product bhejo, data nahi
//   } catch (error) {
//     console.log("Error:", error); // Terminal mein dekho
//     res.status(500).json({ error: error.message });
//   }
// });
