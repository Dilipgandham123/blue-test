"use client";

import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import {
  Shield,
  Plus,
  X,
  ChevronDown,
  ChevronUp,
  Printer,
  Phone,
} from "lucide-react";

/* ------------------- TYPES ------------------- */

type WarrantyRecord = {
  serial: string;
  product: string;
  sku: string;
  purchaseDate: string;
  expiryDate: string;
  status: string;
  coverageType: string;
  serviceType: string;
  timeRemaining: string;
  deliverables: string[];
};

type WarrantyDatabase = Record<string, WarrantyRecord>;

type ProductInput = {
  serial: string;
  country: string;
};

type ExpandedMap = {
  [key: number]: boolean;
};

/* --------------------------------------------- */

const warrantyDatabase: WarrantyDatabase = {
  "SN-WDE100-2024-001": {
    serial: "SN-WDE100-2024-001",
    product: "BlueJay Wireless Display Sender WDE-100",
    sku: "BJ-WDE100",
    purchaseDate: "March 15, 2024",
    expiryDate: "March 15, 2027",
    status: "Active",
    coverageType: "Standard Warranty",
    serviceType: "3 Years Limited Hardware Warranty",
    timeRemaining: "1 Year, 4 Months remaining",
    deliverables: ["Hardware replacement", "Technical support", "Remote diagnostics"],
  },
  "SN-WDE200-2024-045": {
    serial: "SN-WDE200-2024-045",
    product: "BlueJay Wireless 4K Transmitter WDE-200",
    sku: "BJ-WDE200",
    purchaseDate: "January 10, 2024",
    expiryDate: "January 10, 2027",
    status: "Active",
    coverageType: "Premium Care Pack",
    serviceType: "3 Years Enhanced Hardware Support",
    timeRemaining: "1 Year, 2 Months remaining",
    deliverables: [
      "Next business day replacement",
      "24/7 technical support",
      "On-site service",
      "Remote diagnostics",
    ],
  },
  "SN-MIC50-2023-112": {
    serial: "SN-MIC50-2023-112",
    product: "BlueJay Conference Mic CM-50",
    sku: "BJ-MIC50",
    purchaseDate: "November 20, 2023",
    expiryDate: "November 20, 2024",
    status: "Expired",
    coverageType: "Standard Warranty",
    serviceType: "1 Year Limited Hardware Warranty",
    timeRemaining: "Warranty expired",
    deliverables: ["Hardware replacement", "Technical support"],
  },
  "SN-MTRTCH-2023-089": {
    serial: "SN-MTRTCH-2023-089",
    product: "BlueJay MTR Touch Console",
    sku: "BJ-MTRTCH",
    purchaseDate: "August 5, 2023",
    expiryDate: "August 5, 2024",
    status: "Expired",
    coverageType: "Standard Warranty",
    serviceType: "1 Year Limited Hardware Warranty",
    timeRemaining: "Warranty expired",
    deliverables: ["Hardware replacement", "Email support"],
  },
  "SN-GAN65W-2024-234": {
    serial: "SN-GAN65W-2024-234",
    product: "BlueJay GaN 65W Fast Charger",
    sku: "BJ-GAN65W",
    purchaseDate: "June 1, 2024",
    expiryDate: "June 1, 2026",
    status: "Active",
    coverageType: "Standard Warranty",
    serviceType: "2 Years Limited Hardware Warranty",
    timeRemaining: "1 Year, 7 Months remaining",
    deliverables: ["Hardware replacement", "Technical support"],
  },
  "SN-WEB4K-2024-178": {
    serial: "SN-WEB4K-2024-178",
    product: "BlueJay 4K Ultra Webcam",
    sku: "BJ-WEB4K",
    purchaseDate: "April 12, 2024",
    expiryDate: "April 12, 2027",
    status: "Active",
    coverageType: "Premium Care Pack",
    serviceType: "3 Years Enhanced Hardware Support",
    timeRemaining: "1 Year, 5 Months remaining",
    deliverables: [
      "Advanced hardware replacement",
      "Priority support",
      "Remote diagnostics",
      "Software updates",
    ],
  },
};

const WarrantyChecker = () => {
  const [activeTab, setActiveTab] = useState<"single" | "multiple">("single");
  const [singleSerial, setSingleSerial] = useState<string>("");
  const [singleCountry, setSingleCountry] = useState<string>("India");

  const [multipleProducts, setMultipleProducts] = useState<ProductInput[]>([
    { serial: "", country: "India" },
  ]);

  const [showResults, setShowResults] = useState<boolean>(false);
  const [results, setResults] = useState<WarrantyRecord[]>([]);
  const [expandedItems, setExpandedItems] = useState<ExpandedMap>({});

  /* ------------ FIXED & TYPED FUNCTIONS ------------ */

  const addProduct = () => {
    setMultipleProducts([...multipleProducts, { serial: "", country: "India" }]);
  };

  const removeProduct = (index: number) => {
    setMultipleProducts((prev) => prev.filter((_, i) => i !== index));
  };

  const updateProduct = (
    index: number,
    key: keyof ProductInput,
    value: string
  ) => {
    const updated = [...multipleProducts];
    updated[index][key] = value;
    setMultipleProducts(updated);
  };

  const handleSubmit = () => {
    const serialsToCheck =
      activeTab === "single"
        ? [singleSerial]
        : multipleProducts.map((p) => p.serial).filter((s) => s);

    const found = serialsToCheck
      .map((serial) => warrantyDatabase[serial])
      .filter(Boolean) as WarrantyRecord[];

    setResults(found);
    setShowResults(true);
  };

  const toggleExpand = (i: number) =>
    setExpandedItems((prev) => ({
      ...prev,
      [i]: !prev[i],
    }));

  /* -------- RESULTS SCREEN -------- */

  if (showResults) {
    return (
      <div className="min-h-screen">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold text-center bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-10">
            Warranty & Service Status
          </h1>

          <Card className="max-w-5xl mx-auto shadow-xl border-blue-100">
            <CardContent className="p-8">
              <Button
                variant="link"
                onClick={() => setShowResults(false)}
                className="text-blue-600 mb-6 pl-0"
              >
                ← Back
              </Button>

              {results.length === 0 ? (
                <Alert className="bg-red-50 border-red-200">
                  <AlertDescription className="text-red-700">
                    No warranty information found.
                  </AlertDescription>
                </Alert>
              ) : (
                <div className="space-y-6">
                  {results.map((warranty, index) => (
                    <div key={index} className="border rounded-xl p-6 bg-white shadow-sm">
                      {/* Warranty Card */}
                      {/* ... unchanged UI code ... */}
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  /* -------- INPUT FORM -------- */

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-12">

        <h1 className="text-4xl font-bold text-center mb-10 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
          Check Your Warranty Status
        </h1>

        <Card className="max-w-4xl mx-auto shadow-xl border-blue-100">
          <CardContent className="p-8">
            <Tabs value={activeTab} onValueChange={(v) => setActiveTab(v as "single" | "multiple")}>

              <TabsList className="grid grid-cols-2 w-full mb-8 bg-blue-50">
                <TabsTrigger value="single">Single Product</TabsTrigger>
                <TabsTrigger value="multiple">Multiple Products</TabsTrigger>
              </TabsList>

              {/* SINGLE CHECK */}
              <TabsContent value="single" className="space-y-6">
                <div>
                  <Label>Country/Region of Purchase</Label>
                  <Select value={singleCountry} onValueChange={setSingleCountry}>
                    <SelectTrigger className="mt-2">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="India">India</SelectItem>
                      <SelectItem value="USA">United States</SelectItem>
                      <SelectItem value="UK">United Kingdom</SelectItem>
                      <SelectItem value="Singapore">Singapore</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label>Serial Number</Label>
                  <Input
                    placeholder="SN-WDE100-2024-001"
                    value={singleSerial}
                    onChange={(e) => setSingleSerial(e.target.value)}
                    className="mt-2"
                  />
                </div>

                <Button
                  onClick={handleSubmit}
                  className="w-full bg-black text-white"
                  disabled={!singleSerial}
                >
                  Submit
                </Button>
              </TabsContent>

              {/* MULTIPLE */}
              <TabsContent value="multiple" className="space-y-6">
                {multipleProducts.map((p, index) => (
                  <div key={index} className="grid grid-cols-2 gap-4 pb-4 border-b">

                    <div>
                      <Label>Serial Number</Label>
                      <Input
                        value={p.serial}
                        onChange={(e) => updateProduct(index, "serial", e.target.value)}
                        placeholder="SN-WDE100-2024-001"
                        className="mt-2"
                      />
                    </div>

                    <div>
                      <Label>Country</Label>
                      <Select
                        value={p.country}
                        onValueChange={(val) => updateProduct(index, "country", val)}
                      >
                        <SelectTrigger className="mt-2">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="India">India</SelectItem>
                          <SelectItem value="USA">United States</SelectItem>
                          <SelectItem value="UK">United Kingdom</SelectItem>
                          <SelectItem value="Singapore">Singapore</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {multipleProducts.length > 1 && (
                      <Button
                        variant="ghost"
                        size="icon"
                        className="mt-8"
                        onClick={() => removeProduct(index)}
                      >
                        <X />
                      </Button>
                    )}
                  </div>
                ))}

                <Button variant="outline" onClick={addProduct} className="w-full">
                  <Plus className="mr-2 h-4 w-4" /> Add Another Product
                </Button>

                <Button
                  onClick={handleSubmit}
                  className="w-full bg-black text-white"
                  disabled={multipleProducts.every((p) => !p.serial)}
                >
                  Submit
                </Button>
              </TabsContent>

            </Tabs>
          </CardContent>
        </Card>

      </div>
    </div>
  );
};

export default WarrantyChecker;
