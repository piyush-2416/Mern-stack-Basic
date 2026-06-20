// import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
// import "./App.css";
//   import Home from "./Pages/Home.jsx";
// import About from "./Components/About.jsx";
// import Contact from "./Components/Contact.jsx";
// import Product from "./Pages/Product.jsx";
// import Element from "./Components/Element.jsx";
// import Element2 from "./Components/Element2.jsx";
// function App() {

//     return (
//         <>
//         <BrowserRouter>
//             <div className="Navbar">
//        <Link  className={"home"} to="/">Home</Link>| {""}
//                  <Link className={"about"} to="/about">About</Link>| {" "}
//                <Link className={"contact"} to="/contact">Contact</Link>
//              </div>
// <br/>
//             <Routes>
//                 <Route path="/" element={<Home />} />
//                 <Route path="/about" element={<About />} />
//                 <Route path="/contact" element={<Contact />} />
//                  <Route path="/Product" element={<Product />} />
//                 {/* <Route path="/product/:id" element={<Product />} />  */}
//              <Route path="/Element" element={<Element/>} />
//             <Route path="/Element2" element={<Element2/>} />
//             </Routes>
//         </BrowserRouter>

//         </>
//     );
// }

// export default App;

// import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
// import "./App.css";
// import Home from "./Pages/Home.jsx";
// import About from "./Components/About.jsx";
// import Contact from "./Components/Contact.jsx";
// import Login from './Pages/Login.jsx';
// import Shop from "./Pages/Shop.jsx";
// import ProductPage from "./Pages/ProductPage.jsx";
// function App() {
//   return (
//     <BrowserRouter>
//      <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/Shop" element={<Shop />} />
//         <Route path="/Login" element={<Login />} />
//         <Route path="/Product/:id" element={<ProductPage />} />
//         <Route path="/ProductPage/:id" element={<ProductPage />} />

//         {/* 👇 Yeh naya route hai - ID ke base par single product dikhayega */}
//         <Route path="/product/:id" element={<ProductPage />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App; // import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
// import "./App.css";
//   import Home from "./Pages/Home.jsx";
// import About from "./Components/About.jsx";
// import Contact from "./Components/Contact.jsx";
// import Product from "./Pages/Product.jsx";
// import Element from "./Components/Element.jsx";
// import Element2 from "./Components/Element2.jsx";
// function App() {

//     return (
//         <>
//         <BrowserRouter>
//             <div className="Navbar">
//        <Link  className={"home"} to="/">Home</Link>| {""}
//                  <Link className={"about"} to="/about">About</Link>| {" "}
//                <Link className={"contact"} to="/contact">Contact</Link>
//              </div>
// <br/>
//             <Routes>
//                 <Route path="/" element={<Home />} />
//                 <Route path="/about" element={<About />} />
//                 <Route path="/contact" element={<Contact />} />
//                  <Route path="/Product" element={<Product />} />
//                 {/* <Route path="/product/:id" element={<Product />} />  */}
//              <Route path="/Element" element={<Element/>} />
//             <Route path="/Element2" element={<Element2/>} />
//             </Routes>
//         </BrowserRouter>

//         </>
//     );
// }

// export default App;

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home.jsx";
import About from "./Components/About.jsx";
import Contact from "./Components/Contact.jsx";
import Login from './Pages/Login.jsx';
import Shop from "./Pages/Shop.jsx";
import ProductPage from "./Pages/ProductPage.jsx";
function App() {
  return (
    <BrowserRouter>
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Shop" element={<Shop />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Product/:id" element={<ProductPage />} />
        <Route path="/ProductPage/:id" element={<ProductPage />} />

        {/* 👇 Yeh naya route hai - ID ke base par single product dikhayega */}
        <Route path="/product/:id" element={<ProductPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


// import { useState, useEffect } from "react";
//  import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
// import "./App.css";
// import Home from "./Pages/Home.jsx";
// import About from "./Components/About.jsx";
// import Contact from "./Components/Contact.jsx";
// import Login from './Pages/Login.jsx';
// import Shop from "./Pages/Shop.jsx";
// import ProductPage from "./Pages/ProductPage.jsx";
// const API_BASE = "http://localhost:3000/api/products";
//   <BrowserRouter>
// //      <Routes>
// //         <Route path="/" element={<Home />} />
// //         <Route path="/about" element={<About />} />
// //         <Route path="/contact" element={<Contact />} />
// //         <Route path="/Shop" element={<Shop />} />
// //         <Route path="/Login" element={<Login />} />
// //         <Route path="/Product/:id" element={<ProductPage />} />
// //         <Route path="/ProductPage/:id" element={<ProductPage />} />

// //         {/* 👇 Yeh naya route hai - ID ke base par single product dikhayega */}
// //         <Route path="/product/:id" element={<ProductPage />} />
// //       </Routes>
// //     </BrowserRouter>
// const EMPTY_FORM = {
//   name: "",
//   price: "",
//   category: "",
//   description: "",
//   image: "",
//   stock: "",
// };

// // ─── API Helpers ──────────────────────────────────────────────
// const api = {
//   getAll: () => fetch(API_BASE).then((r) => r.json()),
//   getOne: (id) => fetch(`${API_BASE}/${id}`).then((r) => r.json()),
//   create: (data) =>
//     fetch(API_BASE, {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(data),
//     }).then((r) => r.json()),
//   update: (id, data) =>
//     fetch(`${API_BASE}/${id}`, {
//       method: "PUT",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(data),
//     }).then((r) => r.json()),
//   delete: (id) =>
//     fetch(`${API_BASE}/${id}`, { method: "DELETE" }).then((r) => r.json()),
// };

// // ─── Toast ────────────────────────────────────────────────────
// function Toast({ msg, type, onClose }) {
//   useEffect(() => {
//     const t = setTimeout(onClose, 5000);
//     return () => clearTimeout(t);
//   }, []);
//   const colors = { success: "#22c55e", error: "#ef4444", info: "#6366f1" };
//   return (
//     <div
//       style={{
//         position: "fixed",
//         top: 20,
//         right: 20,
//         zIndex: 9999,
//         background: colors[type] || colors.info,
//         color: "#fff",
//         padding: "12px 20px",
//         borderRadius: 10,
//         fontWeight: 600,
//         boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
//         fontSize: 14,
//         animation: "slideIn .3s ease",
//       }}
//     >
//       {msg}
//     </div>
//   );
// }

// // ─── Modal Form ───────────────────────────────────────────────
// function ProductModal({ product, onSave, onClose }) {
//   const [form, setForm] = useState(product || EMPTY_FORM);
//   const [loading, setLoading] = useState(false);

//   const handle = (e) =>
//     setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

//   const submit = async () => {
//     if (!form.name || !form.price || !form.category) {
//       alert("Name, Price aur Category required hai!");
//       return;
//     }
//     setLoading(true);
//     await onSave(form);
//     setLoading(false);
//   };

//   const inputStyle = {
//     width: "100%",
//     padding: "10px 14px",
//     borderRadius: 8,
//     border: "1.5px solid #2d2d3a",
//     background: "#12121a",
//     color: "#e2e8f0",
//     fontSize: 14,
//     outline: "none",
//     transition: "border .2s",
//     boxSizing: "border-box",
//   };
//   const labelStyle = {
//     display: "block",
//     marginBottom: 6,
//     fontSize: 12,
//     fontWeight: 700,
//     color: "#7c7caa",
//     textTransform: "uppercase",
//     letterSpacing: 1,
//   };

//   return (
//     <div
//       style={{
//         position: "fixed",
//         inset: 0,
//         background: "rgba(0,0,0,0.75)",
//         zIndex: 1000,
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         padding: 20,
//       }}
//     >
//       <div
//         style={{
//           background: "#1a1a2e",
//           borderRadius: 16,
//           padding: 32,
//           width: "100%",
//           maxWidth: 520,
//           border: "1px solid #2d2d3a",
//           boxShadow: "0 24px 80px rgba(0,0,0,0.6)",
//         }}
//       >
//         <div
//           style={{
//             display: "flex",
//             justifyContent: "space-between",
//             alignItems: "center",
//             marginBottom: 24,
//           }}
//         >
//           <h2
//             style={{
//               margin: 0,
//               fontSize: 20,
//               color: "#e2e8f0",
//               fontWeight: 700,
//             }}
//           >
//             {product ? "✏️ Product Edit Karo" : "➕ Naya Product"}
//           </h2>
//           <button
//             onClick={onClose}
//             style={{
//               background: "none",
//               border: "none",
//               color: "#7c7caa",
//               fontSize: 22,
//               cursor: "pointer",
//             }}
//           >
//             ✕
//           </button>
//         </div>

//         <div style={{ display: "grid", gap: 16 }}>
//           {[
//             {
//               label: "Product Name *",
//               name: "name",
//               placeholder: "e.g. Butter Chicken",
//             },
//             {
//               label: "Price (₹) *",
//               name: "price",
//               placeholder: "e.g. 299",
//               type: "number",
//             },
//             {
//               label: "Category *",
//               name: "category",
//               placeholder: "e.g. Main Course",
//             },
//             {
//               label: "Description",
//               name: "description",
//               placeholder: "Short description...",
//             },
//             { label: "Image URL", name: "image", placeholder: "https://..." },
//             {
//               label: "Stock",
//               name: "stock",
//               placeholder: "e.g. 50",
//               type: "number",
//             },
//           ].map(({ label, name, placeholder, type = "text" }) => (
//             <div key={name}>
//               <label style={labelStyle}>{label}</label>
//               <input
//                 type={type}
//                 name={name}
//                 value={form[name]}
//                 onChange={handle}
//                 placeholder={placeholder}
//                 style={inputStyle}
//                 onFocus={(e) => (e.target.style.borderColor = "#6366f1")}
//                 onBlur={(e) => (e.target.style.borderColor = "#2d2d3a")}
//               />
//             </div>
//           ))}
//         </div>

//         <div style={{ display: "flex", gap: 12, marginTop: 24 }}>
//           <button
//             onClick={onClose}
//             style={{
//               flex: 1,
//               padding: "12px",
//               borderRadius: 8,
//               border: "1.5px solid #2d2d3a",
//               background: "transparent",
//               color: "#7c7caa",
//               fontSize: 14,
//               fontWeight: 600,
//               cursor: "pointer",
//             }}
//           >
//             Cancel
//           </button>
//           <button
//             onClick={submit}
//             disabled={loading}
//             style={{
//               flex: 2,
//               padding: "12px",
//               borderRadius: 8,
//               border: "none",
//               background: loading
//                 ? "#3d3d5c"
//                 : "linear-gradient(135deg, #6366f1, #8b5cf6)",
//               color: "#fff",
//               fontSize: 14,
//               fontWeight: 700,
//               cursor: loading ? "not-allowed" : "pointer",
//             }}
//           >
//             {loading
//               ? "⏳ Saving..."
//               : product
//                 ? "💾 Update Karo"
//                 : "✅ Create Karo"}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// // ─── Product Card ─────────────────────────────────────────────
// function ProductCard({ product, onEdit, onDelete }) {
//   const [deleting, setDeleting] = useState(false);

//   const handleDelete = async () => {
//     if (!confirm(`"${product.name}" delete karna chahte ho?`)) return;
//     setDeleting(true);
//     await onDelete(product._id);
//     setDeleting(false);
//   };

//   return (
//     <div
//       style={{
//         background: "#1a1a2e",
//         borderRadius: 14,
//         overflow: "hidden",
//         border: "1px solid #2d2d3a",
//         transition: "transform .2s, box-shadow .2s",
//         display: "flex",
//         flexDirection: "column",
//       }}
//       onMouseEnter={(e) => {
//         e.currentTarget.style.transform = "translateY(-4px)";
//         e.currentTarget.style.boxShadow = "0 12px 40px rgba(99,102,241,.25)";
//       }}
//       onMouseLeave={(e) => {
//         e.currentTarget.style.transform = "translateY(0)";
//         e.currentTarget.style.boxShadow = "none";
//       }}
//     >
//       {/* Image */}
//       <div
//         style={{
//           height: 160,
//           background: "#12121a",
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//           overflow: "hidden",
//         }}
//       >
//         {product.image ? (
//           <img
//             src={product.image}
//             alt={product.name}
//             style={{ width: "100%", height: "100%", objectFit: "cover" }}
//             onError={(e) => {
//               e.target.style.display = "none";
//             }}
//           />
//         ) : (
//           <span style={{ fontSize: 48 }}>🍽️</span>
//         )}
//       </div>

//       {/* Content */}
//       <div
//         style={{
//           padding: "16px",
//           flex: 1,
//           display: "flex",
//           flexDirection: "column",
//           gap: 8,
//         }}
//       >
//         <div
//           style={{
//             display: "flex",
//             justifyContent: "space-between",
//             alignItems: "flex-start",
//           }}
//         >
//           <h3
//             style={{
//               margin: 0,
//               fontSize: 16,
//               fontWeight: 700,
//               color: "#e2e8f0",
//               lineHeight: 1.3,
//             }}
//           >
//             {product.name}
//           </h3>
//           <span
//             style={{
//               background: "#6366f120",
//               color: "#818cf8",
//               padding: "2px 10px",
//               borderRadius: 20,
//               fontSize: 11,
//               fontWeight: 700,
//               whiteSpace: "nowrap",
//               marginLeft: 8,
//             }}
//           >
//             {product.category}
//           </span>
//         </div>

//         {product.description && (
//           <p
//             style={{
//               margin: 0,
//               fontSize: 12,
//               color: "#64748b",
//               lineHeight: 1.5,
//               display: "-webkit-box",
//               WebkitLineClamp: 2,
//               WebkitBoxOrient: "vertical",
//               overflow: "hidden",
//             }}
//           >
//             {product.description}
//           </p>
//         )}

//         <div
//           style={{
//             display: "flex",
//             justifyContent: "space-between",
//             alignItems: "center",
//             marginTop: "auto",
//             paddingTop: 8,
//           }}
//         >
//           <span style={{ fontSize: 20, fontWeight: 800, color: "#22c55e" }}>
//             ₹{product.price}
//           </span>
//           <span style={{ fontSize: 11, color: "#64748b" }}>
//             Stock: {product.stock ?? "N/A"}
//           </span>
          
//         </div>

//         {/* ID badge */}
//         <div
//           style={{
//             fontSize: 9,
//             color: "#3d3d5c",
//             fontFamily: "monospace",
//             wordBreak: "break-all",
//           }}
//         >
//           ID: {product._id}
//         </div>
//       </div>

//       {/* Actions */}
//       <div
//         style={{
//           display: "grid",
//           gridTemplateColumns: "1fr 1fr",
//           borderTop: "1px solid #2d2d3a",
//         }}
//       >
//         <button
//           onClick={() => onEdit(product)}
//           style={{
//             padding: "12px",
//             background: "none",
//             border: "none",
//             color: "#6366f1",
//             fontWeight: 700,
//             fontSize: 13,
//             cursor: "pointer",
//             borderRight: "1px solid #2d2d3a",
//           }}
//           onMouseEnter={(e) => (e.target.style.background = "#6366f115")}
//           onMouseLeave={(e) => (e.target.style.background = "none")}
//         >
//           ✏️ Edit 
//         </button>
//         <button
//           onClick={handleDelete}
//           disabled={deleting}
//           style={{
//             padding: "12px",
//             background: "none",
//             border: "none",
//             color: "#ef4444",
//             fontWeight: 700,
//             fontSize: 13,
//             cursor: deleting ? "not-allowed" : "pointer",
//           }}
//           onMouseEnter={(e) => (e.target.style.background = "#ef444415")}
//           onMouseLeave={(e) => (e.target.style.background = "none")}
//         >
//           {deleting ? "⏳" : "🗑️ Delete"}
//         </button>

//       </div>
//     </div>
//   );
// }

// // ─── Main App ─────────────────────────────────────────────────
// export default function App() {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [modal, setModal] = useState(null); // null | "create" | product-obj
//   const [toast, setToast] = useState(null);
//   const [search, setSearch] = useState("");

//   const showToast = (msg, type = "success") => setToast({ msg, type });

//   // LOAD all
//   const loadProducts = async () => {
//     setLoading(true);
//     try {
//       const res = await api.getAll();
//       if (res.success) setProducts(res.data);
//       else showToast(res.error || "Load fail!", "error");
//     } catch {
//       showToast("Server se connect nahi ho pa raha!", "error");
//     }
//     setLoading(false);
//   };

//   useEffect(() => {
//     loadProducts();
//   }, []);

//   // CREATE
//   const handleCreate = async (form) => {
//     const res = await api.create(form);
//     if (res.success) {
//       showToast(res.message, "success");
//       setModal(null);
//       loadProducts();
//     } else {
//       showToast(res.error || "Create fail!", "error");
//     }
//   };

//   // UPDATE
//   const handleUpdate = async (form) => {
//     const res = await api.update(modal._id, form);
//     if (res.success) {
//       showToast(res.message, "success");
//       setModal(null);
//       loadProducts();
//     } else {
//       showToast(res.error || "Update fail!", "error");
//     }
//   };

//   // DELETE
//   const handleDelete = async (id) => {
//     const res = await api.delete(id);
//     if (res.success) {
//       showToast(res.message, "success");
//       loadProducts();
//     } else {
//       showToast(res.error || "Delete fail!", "error");
//     }
//   };

//   const filtered = products.filter(
//     (p) =>
//       p.name?.toLowerCase().includes(search.toLowerCase()) ||
//       p.category?.toLowerCase().includes(search.toLowerCase()),
//   );

//   return (
//     <div
//       style={{
//         minHeight: "100vh",
//         background: "#0d0d17",
//         fontFamily: "'Segoe UI', sans-serif",
//         color: "#e2e8f0",
//       }}
//     >
//       <style>{`
//         @keyframes slideIn { from { transform: translateX(100px); opacity: 0; } to { transform: translateX(0); opacity: 1; } }
//         @keyframes spin { to { transform: rotate(360deg); } }
//         * { box-sizing: border-box; }
//       `}</style>

//       {/* Header */}
//       <header
//         style={{
//           background: "#1a1a2e",
//           borderBottom: "1px solid #2d2d3a",
//           padding: "20px 32px",
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "space-between",
//           flexWrap: "wrap",
//           gap: 12,
//         }}
//       >
//        <div>
//           <h1
//             style={{
//               margin: 0,
//               fontSize: 24,
//               fontWeight: 800,
//               background: "linear-gradient(135deg, #6366f1, #a78bfa)",
//               WebkitBackgroundClip: "text",
//               WebkitTextFillColor: "transparent",
//             }}
//           >
//             🍽️ SecondMern Food Product
//           </h1>
//           <p style={{ margin: 0, fontSize: 12, color: "#64748b" }}>
//             MongoDB Atlas Connected
//           </p>
//         </div>
//         <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
//           <span
//             style={{
//               background: "#22c55e20",
//               color: "#22c55e",
//               padding: "6px 14px",
//               borderRadius: 20,
//               fontSize: 12,
//               fontWeight: 700,
//             }}
//           >
//             📦 {products.length} Products
//           </span>
//           <button
//             onClick={() => setModal("create")}
//             style={{
//               padding: "10px 20px",
//               background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
//               border: "none",
//               borderRadius: 10,
//               color: "#fff",
//               fontWeight: 700,
//               fontSize: 14,
//               cursor: "pointer",
//             }}
//           >
//             ➕ New Product
//           </button>
//         </div>
//       </header>

//       {/* Search */}
//       <div style={{ padding: "24px 32px 0" }}>
//         <input
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//           placeholder="🔍 Product ya category search karo..."
//           style={{
//             width: "100%",
//             maxWidth: 400,
//             padding: "12px 16px",
//             borderRadius: 10,
//             border: "1.5px solid #2d2d3a",
//             background: "#1a1a2e",
//             color: "#e2e8f0",
//             fontSize: 14,
//             outline: "none",
//           }}
//           onFocus={(e) => (e.target.style.borderColor = "#6366f1")}
//           onBlur={(e) => (e.target.style.borderColor = "#2d2d3a")}
//         />
//       </div>

//       {/* Grid */}
//       <main style={{ padding: "24px 32px" }}>
//         {loading ? (
//           <div style={{ textAlign: "center", padding: 80 }}>
//             <div
//               style={{
//                 width: 40,
//                 height: 40,
//                 border: "4px solid #2d2d3a",
//                 borderTopColor: "#6366f1",
//                 borderRadius: "50%",
//                 animation: "spin 1s linear infinite",
//                 margin: "0 auto 16px",
//               }}
//             />
//             <p style={{ color: "#64748b" }}>Products load ho rahe hain...</p>
//           </div>
//         ) : filtered.length === 0 ? (
//           <div style={{ textAlign: "center", padding: 80 }}>
//             <div style={{ fontSize: 64, marginBottom: 16 }}>🍽️</div>
//             <p style={{ color: "#64748b", fontSize: 16 }}>
//               {search
//                 ? "Koi product nahi mila!"
//                 : "Koi product nahi hai. Pehla product add karo!"}
//             </p>
//           </div>
//         ) : (
//           <div
//             style={{
//               display: "grid",
//               gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
//               gap: 20,
//             }}
//           >
//             {filtered.map((p) => (
//               <ProductCard
//                 key={p._id}
//                 product={p}
//                 onEdit={setModal}
//                 onDelete={handleDelete}
//               />
//             ))}
//           </div>
//         )}
//       </main>

//       {/* Modal */}
//       {modal && (
//         <ProductModal
//           product={modal === "create" ? null : modal}
//           onSave={modal === "create" ? handleCreate : handleUpdate}
//           onClose={() => setModal(null)}
//         />
//       )}

//       {/* Toast */}
//       {toast && (
//         <Toast
//           msg={toast.msg}
//           type={toast.type}
//           onClose={() => setToast(null)}
//         />
//       )}
//     </div>
//   );
// }
 
