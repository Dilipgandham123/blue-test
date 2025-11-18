"use client";

import { use, useState } from "react";
import { motion } from "framer-motion";
import { productCatalog } from "@/lib/products";
import { notFound } from "next/navigation";
import Link from "next/link";

import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { 
  Heart, 
  ShoppingCart, 
  ChevronDown, 
  ChevronUp, 
  ArrowLeft,
  Package,
  Shield,
  Truck,
  CheckCircle,
  Send
} from "lucide-react";

interface Props {
  params: Promise<{ id: string }>;
}

export default function ProductDetailsPage({ params }: Props) {
  const { id: productId } = use(params);
  const [openSection, setOpenSection] = useState<string | null>(null);
  const [isWishlisted, setIsWishlisted] = useState(false);

  let productFound: any = null;

  Object.values(productCatalog).forEach((cat: any) => {
    cat.forEach((item: any) => {
      if (item.id === productId) productFound = item;
    });
  });

  if (!productFound) return notFound();

  const sections = productFound.sections || {};

  const toggleSection = (key: string) => {
    setOpenSection(openSection === key ? null : key);
  };

  const features = [
    { icon: Shield, label: "5-Year Warranty", desc: "Extended protection" },
    { icon: Truck, label: "Free Shipping", desc: "On orders over ₹5,000" },
    { icon: Package, label: "Easy Returns", desc: "30-day return policy" },
    { icon: CheckCircle, label: "Certified Quality", desc: "ISO 9001:2015" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 py-10">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Products
          </Link>
        </motion.div> */}

        {/* Main Product Section */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Product Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative"
          >
            <div className="sticky top-24">
              <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl bg-white border border-gray-200">
                <img
                  src={productFound.image}
                  alt={productFound.name}
                  className="w-full h-full object-cover"
                />
                
                {/* Wishlist Button */}
                <button
                  onClick={() => setIsWishlisted(!isWishlisted)}
                  className={`absolute top-4 right-4 w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all ${
                    isWishlisted 
                      ? 'bg-red-500 text-white' 
                      : 'bg-white text-gray-700 hover:bg-red-50'
                  }`}
                >
                  <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-current' : ''}`} />
                </button>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-2 gap-3 mt-6">
                {features.slice(0, 2).map((feature, i) => {
                  const Icon = feature.icon;
                  return (
                    <div key={i} className="flex items-center gap-3 p-4 bg-white rounded-xl border border-gray-200">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <p className="font-semibold text-sm text-gray-900">{feature.label}</p>
                        <p className="text-xs text-gray-600">{feature.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Product Details */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            {/* Title & SKU */}
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                {productFound.name}
              </h1>
              
              {productFound.sku && (
                <p className="text-sm text-gray-500">SKU: {productFound.sku}</p>
              )}
            </div>

            {/* Price */}
            {productFound.price && (
              <div className="py-4 border-y border-gray-200">
                <div className="flex items-baseline gap-3">
                  <span className="text-4xl font-bold text-gray-900">
                    ₹{productFound.price.toLocaleString()}
                  </span>
                  <span className="text-sm text-gray-500">+ GST</span>
                </div>
              </div>
            )}

            {/* Description */}
            <div className="prose prose-blue">
              <p className="text-lg text-gray-700 leading-relaxed">
                {productFound.description}
              </p>
            </div>

            {/* Action Buttons */}
            <Dialog>
              <div className="flex gap-3">
                <DialogTrigger asChild>
                  <Button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-6 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all">
                    Request Quote
                  </Button>
                </DialogTrigger>

                <Button 
                  className="flex-1 bg-gray-900 hover:bg-gray-800 text-white py-6 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all"
                  onClick={() => alert('Added to cart!')}
                >
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Add to Cart
                </Button>
              </div>

              {/* Quote Request Dialog */}
              <DialogContent className="max-w-lg">
                <DialogHeader>
                  <DialogTitle className="text-2xl">Request a Quote</DialogTitle>
                  <DialogDescription>
                    Fill in your details and we'll get back to you within 24 hours
                  </DialogDescription>
                </DialogHeader>

                <form
                  className="space-y-4"
                  onSubmit={(e) => {
                    e.preventDefault();
                    const form = new FormData(e.currentTarget);
                    const data = {
                      productName: productFound.name,
                      productId: productFound.id,
                      name: form.get("name"),
                      email: form.get("email"),
                      phone: form.get("phone"),
                      company: form.get("company"),
                      message: form.get("message"),
                    };
                    console.log("QUOTE REQUEST: ", data);
                    alert("Quote submitted! We'll contact you soon.");
                  }}
                >
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-2 block">Name *</label>
                    <Input 
                      name="name" 
                      required 
                      placeholder="Your Name"
                      className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-2 block">Email *</label>
                    <Input
                      name="email"
                      required
                      type="email"
                      placeholder="you@company.com"
                      className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-2 block">Phone *</label>
                    <Input 
                      name="phone" 
                      required 
                      placeholder="+91 98765 43210"
                      className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-2 block">Company</label>
                    <Input 
                      name="company" 
                      placeholder="Company Name"
                      className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-2 block">Message *</label>
                    <Textarea
                      name="message"
                      className="min-h-[100px] border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                      placeholder="Tell us about your requirements..."
                      required
                    />
                  </div>

                  <DialogFooter>
                    <Button
                      type="submit"
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2"
                    >
                      Submit Request
                      <Send className="w-4 h-4" />
                    </Button>
                  </DialogFooter>
                </form>
              </DialogContent>
            </Dialog>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-3 pt-6">
              {features.slice(2).map((feature, i) => {
                const Icon = feature.icon;
                return (
                  <div key={i} className="flex items-center gap-3 p-4 bg-white rounded-xl border border-gray-200">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-sm text-gray-900">{feature.label}</p>
                      <p className="text-xs text-gray-600">{feature.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Expandable Sections */}
            <div className="bg-white rounded-xl border border-gray-200 divide-y divide-gray-200 overflow-hidden">
              {Object.keys(sections).map((key) => (
                <div key={key}>
                  <button
                    onClick={() => toggleSection(key)}
                    className="flex justify-between items-center w-full px-6 py-4 text-left hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-semibold text-gray-900">{key}</span>
                    {openSection === key ? (
                      <ChevronUp className="w-5 h-5 text-gray-500" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-500" />
                    )}
                  </button>

                  {openSection === key && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="px-6 pb-4"
                    >
                      <p className="text-gray-700 whitespace-pre-line leading-relaxed">
                        {sections[key]}
                      </p>
                    </motion.div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Related Products */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Related Products</h2>
              <p className="text-gray-600">You might also be interested in</p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {Object.values(productCatalog)
              .flat()
              .filter((p: any) => p.id !== productId)
              .slice(0, 4)
              .map((prod: any, index: number) => (
                <motion.div
                  key={prod.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={`/product/details/${prod.id}`}
                    className="group block bg-white border border-gray-200 rounded-xl overflow-hidden hover:border-blue-300 hover:shadow-lg transition-all"
                  >
                    <div className="aspect-square overflow-hidden bg-gray-100">
                      <img
                        src={prod.image}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        alt={prod.name}
                      />
                    </div>
                    <div className="p-4">
                      <p className="font-semibold text-sm text-gray-900 line-clamp-2 group-hover:text-blue-600 transition-colors">
                        {prod.name}
                      </p>
                      {prod.price && (
                        <p className="text-lg font-bold text-gray-900 mt-2">
                          ₹{prod.price.toLocaleString()}
                        </p>
                      )}
                    </div>
                  </Link>
                </motion.div>
              ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}