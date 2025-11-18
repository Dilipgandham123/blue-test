"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Send } from "lucide-react";

const inputClass =
  "w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition";

export default function RegisterComplaintPage() {
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState<any>({
    // Step 1
    firstName: "",
    lastName: "",
    phone: "",
    altPhone: "",
    email: "",
    complaintType: "",
    issueType: "",

    // Step 2
    sourceOfPurchase: "",
    productType: "",
    productName: "",
    purchaseDate: "",
    invoiceFile: null,
    productImages: null,
    videoFiles: null,
    elaborateIssue: "",

    // Step 3
    country: "",
    state: "",
    city: "",
    fullAddress: "",
    pincode: "",
  });

  const handleChange = (e: any) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData({ ...formData, [name]: files });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const submitForm = () => {
    console.log("FULL DATA:", formData);
    alert("Complaint has been submitted successfully!");
  };

  const StepCard = ({ children }: any) => (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
      className="bg-white shadow-xl rounded-2xl border border-gray-200 p-10 mt-8"
    >
      {children}
    </motion.div>
  );

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-center text-4xl font-bold text-gray-900 mb-2">
        Register Complaint
      </h1>

      {step === 1 && (
        <StepCard>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Customer Details
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <input
              name="firstName"
              className={inputClass}
              placeholder="First Name *"
              onChange={handleChange}
            />
            <input
              name="lastName"
              className={inputClass}
              placeholder="Last Name *"
              onChange={handleChange}
            />

            <input
              name="phone"
              className={inputClass}
              placeholder="Phone Number *"
              onChange={handleChange}
            />
            <input
              name="altPhone"
              className={inputClass}
              placeholder="Alternate Number"
              onChange={handleChange}
            />

            <input
              name="email"
              className={`${inputClass} md:col-span-2`}
              placeholder="Email *"
              onChange={handleChange}
            />

            <select
              name="complaintType"
              className={`${inputClass} md:col-span-2`}
              onChange={handleChange}
            >
              <option>Select Complaint Type *</option>
              <option>Product Related Issues</option>
              <option>Warranty Check</option>
              <option>Installation Help</option>
            </select>

            <input
              name="issueType"
              className={`${inputClass} md:col-span-2`}
              placeholder="Type Of Product Related Issue *"
              onChange={handleChange}
            />
          </div>

          <div className="flex justify-end mt-8">
            <button
              onClick={() => setStep(2)}
              className="bg-black text-white px-8 py-3 rounded-lg flex items-center gap-2 hover:bg-gray-900 transition"
            >
              Next <ArrowRight size={18} />
            </button>
          </div>
        </StepCard>
      )}

      {step === 2 && (
        <StepCard>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Purchase Details
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <select
              name="sourceOfPurchase"
              className={inputClass}
              onChange={handleChange}
            >
              <option>Source of Purchase *</option>
              <option>Amazon</option>
              <option>Flipkart</option>
              <option>Offline Store</option>
            </select>

            <select
              name="productType"
              className={inputClass}
              onChange={handleChange}
            >
              <option>Select Product Category *</option>
              <option>Wireless Extenders</option>
              <option>Microphones</option>
              <option>Webcams</option>
            </select>

            <select
              name="productName"
              className={inputClass}
              onChange={handleChange}
            >
              <option>Select Product Name *</option>
              <option>BlueJay HDMI Extender</option>
              <option>BlueJay Microphone X1</option>
              <option>BlueJay Webcam HD</option>
            </select>

            <input
              type="date"
              name="purchaseDate"
              className={inputClass}
              onChange={handleChange}
            />

            <div>
              <label className="font-medium text-gray-700">Upload Invoice *</label>
              <input
                type="file"
                name="invoiceFile"
                className={`${inputClass} mt-2`}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="font-medium text-gray-700">
                Upload Product Images *
              </label>
              <input
                type="file"
                name="productImages"
                multiple
                className={`${inputClass} mt-2`}
                onChange={handleChange}
              />
            </div>

            <div className="md:col-span-2">
              <label className="font-medium text-gray-700">
                Upload Video (Optional)
              </label>
              <input
                type="file"
                name="videoFiles"
                multiple
                className={`${inputClass} mt-2`}
                onChange={handleChange}
              />
            </div>

            <textarea
              name="elaborateIssue"
              className={`${inputClass} md:col-span-2`}
              rows={4}
              placeholder="Explain your issue *"
              onChange={handleChange}
            ></textarea>
          </div>

          <div className="flex justify-between mt-8">
            <button
              onClick={() => setStep(1)}
              className="bg-gray-200 px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-gray-300 transition"
            >
              <ArrowLeft size={18} /> Back
            </button>

            <button
              onClick={() => setStep(3)}
              className="bg-black text-white px-8 py-3 rounded-lg flex items-center gap-2 hover:bg-gray-900 transition"
            >
              Next <ArrowRight size={18} />
            </button>
          </div>
        </StepCard>
      )}

      {step === 3 && (
        <StepCard>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Address Details
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <select
              name="country"
              className={inputClass}
              onChange={handleChange}
            >
              <option>Select Country *</option>
              <option>India</option>
            </select>

            <select
              name="state"
              className={inputClass}
              onChange={handleChange}
            >
              <option>Select State *</option>
              <option>Telangana</option>
              <option>Andhra Pradesh</option>
            </select>

            <input
              name="city"
              className={inputClass}
              placeholder="City *"
              onChange={handleChange}
            />

            <input
              name="pincode"
              className={inputClass}
              placeholder="Pincode *"
              onChange={handleChange}
            />

            <textarea
              name="fullAddress"
              className={`${inputClass} md:col-span-2`}
              rows={4}
              placeholder="Full Address *"
              onChange={handleChange}
            ></textarea>
          </div>

          <div className="flex justify-between mt-8">
            <button
              onClick={() => setStep(2)}
              className="bg-gray-200 px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-gray-300 transition"
            >
              <ArrowLeft size={18} /> Back
            </button>

            <button
              onClick={submitForm}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg flex items-center gap-2 hover:bg-blue-700 transition shadow"
            >
              Submit <Send size={18} />
            </button>
          </div>
        </StepCard>
      )}
    </div>
  );
}
