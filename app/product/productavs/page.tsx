"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { productCatalog } from "@/lib/products";
import { PlayCircle } from "lucide-react";

export default function ProductAVSPage() {
  const categories = Object.keys(productCatalog);
  const [activeCategory, setActiveCategory] = useState(categories[0]);

const products =
  productCatalog[activeCategory as keyof typeof productCatalog] || [];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 py-10">
      <div className="container mx-auto px-4">

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-gray-900 mb-10 text-center"
        >
          AV Product Categories
        </motion.h1>

        {/* CATEGORY TABS */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-3 rounded-xl border transition-all font-semibold text-sm md:text-base
                ${activeCategory === cat
                  ? "bg-blue-600 text-white border-blue-600 shadow-lg"
                  : "bg-white border-gray-300 text-gray-700 hover:border-blue-500"}
              `}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* CATEGORY TITLE */}
        <motion.h2
          key={activeCategory}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-2xl md:text-3xl font-bold text-gray-900 mb-6"
        >
          {activeCategory}
        </motion.h2>

        {/* PRODUCTS LIST */}
        <div className="space-y-10">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200"
            >
              {/* Product Header */}
              <div className="flex items-center gap-6 mb-6">
                <img
                  src={product.image}
                  className="w-40 h-28 object-cover rounded-xl border"
                  alt={product.name}
                />

                <div>
                  <h3 className="text-xl font-bold text-gray-900">{product.name}</h3>
                  <p className="text-gray-600 line-clamp-2">{product.description}</p>
                  {product.sku && (
                    <p className="text-gray-500 text-sm mt-1">SKU: {product.sku}</p>
                  )}
                </div>

                <Link
                  href={`/product/details/${product.id}`}
                  className="ml-auto px-4 py-2 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  View Details
                </Link>
              </div>

              {/* VIDEO SECTION */}
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Videos</h4>

              <div className="grid sm:grid-cols-2 gap-5">
                {/* VIDEO CARD 1 */}
                <div className="bg-gray-100 rounded-xl p-4 shadow-md hover:shadow-xl transition border">
                  <div className="relative aspect-video rounded-lg overflow-hidden bg-gray-200 mb-3">
                    <PlayCircle className="absolute inset-0 m-auto w-12 h-12 text-white opacity-80" />
                    <img 
                      src="/placeholder/video-thumbnail.jpg"
                      className="w-full h-full object-cover"
                      alt="Video 1"
                    />
                  </div>
                  <p className="font-medium text-gray-800">Product Introduction</p>
                  <p className="text-sm text-gray-500">(Video Placeholder)</p>
                </div>

                {/* VIDEO CARD 2 */}
                <div className="bg-gray-100 rounded-xl p-4 shadow-md hover:shadow-xl transition border">
                  <div className="relative aspect-video rounded-lg overflow-hidden bg-gray-200 mb-3">
                    <PlayCircle className="absolute inset-0 m-auto w-12 h-12 text-white opacity-80" />
                    <img 
                      src="/placeholder/video-thumbnail.jpg"
                      className="w-full h-full object-cover"
                      alt="Video 2"
                    />
                  </div>
                  <p className="font-medium text-gray-800">Setup / Tutorial</p>
                  <p className="text-sm text-gray-500">(Video Placeholder)</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
