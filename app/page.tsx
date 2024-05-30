'use client' 

import React, { useEffect, useState } from "react";
import ProductList from "../components/ProductList"
import ProductModal from "../components/ProductModal"

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export default function Home() {
const [products, setProducts] = useState<Product[]>([])
const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
const [searchTerm, setSearchTerm] = useState("")

useEffect(() => {
  fetch('https://fakestoreapi.com/products')
  .then(res => res.json())
  .then(data => setProducts(data))
}, [])

const filteredProducts = products.filter(product =>
  product.title.toLowerCase().includes(searchTerm.toLowerCase())
);

  return (
    <div className="container mx-auto p-4">
      <h1></h1>
      <input
        type="text"
        placeholder="Search products"
        className="border p-2 mb-4 w-full"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />
      <ProductList products={filteredProducts} onSelect={setSelectedProduct} />
      {selectedProduct && (
        <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
      )}
    </div>
  );
}
