"use client"
import React, { useState } from "react";
import { Send, Lock, Phone, Mail, MapPin, Clock } from "lucide-react";

export default function VVIPContact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    accessCode: "",
  });

  const [status, setStatus] = useState<{ success: boolean | null; message: string }>({ success: null, message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ success: null, message: "Sending..." });

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        access_key: "your-api-key-here", // Replace with your Web3Forms API key
        ...formData,
      }),
    });

    const result = await response.json();

    if (result.success) {
      setStatus({ success: true, message: "Message sent successfully!" });
      setFormData({ name: "", email: "", phone: "", message: "", accessCode: "" }); // Reset form
    } else {
      setStatus({ success: false, message: "Failed to send message. Please try again." });
    }
  };

  return (
    <div className="min-h-screen bg-black text-green-400 p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <header className="text-center py-12">
          <div className="flex items-center justify-center mb-4">
            <Lock className="w-8 h-8 mr-2" />
            <h1 className="text-4xl font-bold">Contact with Asharib</h1>
          </div>
          <p className="text-green-500 text-lg">Exclusive Access Only</p>
        </header>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="space-y-6">
            <form
              onSubmit={handleSubmit}
              className="bg-gray-900 p-8 rounded-lg border border-green-500 shadow-lg shadow-green-500/20"
            >
              <h2 className="text-2xl font-semibold mb-6">Secure Message Portal</h2>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm mb-2">Access Code</label>
                  <input
                    type="password"
                    name="accessCode"
                    className="w-full bg-black border border-green-500 rounded p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="Enter your VVIP access code"
                    onChange={handleChange}
                    value={formData.accessCode}
                  />
                </div>

                <div>
                  <label className="block text-sm mb-2">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    className="w-full bg-black border border-green-500 rounded p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="Your name"
                    onChange={handleChange}
                    value={formData.name}
                  />
                </div>

                <div>
                  <label className="block text-sm mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    className="w-full bg-black border border-green-500 rounded p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="your@email.com"
                    onChange={handleChange}
                    value={formData.email}
                  />
                </div>

                <div>
                  <label className="block text-sm mb-2">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    className="w-full bg-black border border-green-500 rounded p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="+1 (234) 567-8900"
                    onChange={handleChange}
                    value={formData.phone}
                  />
                </div>

                <div>
                  <label className="block text-sm mb-2">Message</label>
                  <textarea
                    name="message"
                    rows={4}
                    className="w-full bg-black border border-green-500 rounded p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="Your confidential message..."
                    onChange={handleChange}
                    value={formData.message}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-green-500 hover:bg-green-600 text-black font-bold py-3 px-6 rounded flex items-center justify-center gap-2 transition-colors"
                >
                  <Send className="w-5 h-5" />
                  Send Secure Message
                </button>

                {status.message && (
                  <p
                    className={`text-center mt-4 ${
                      status.success ? "text-green-500" : "text-red-500"
                    }`}
                  >
                    {status.message}
                  </p>
                )}
              </div>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <div className="bg-gray-900 p-8 rounded-lg border border-green-500 shadow-lg shadow-green-500/20">
              <h2 className="text-2xl font-semibold mb-6">Priority Contact Details</h2>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="bg-green-500 p-3 rounded-full">
                    <Phone className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Direct Line</h3>
                    <p>+92 03212558027 VIP-LINE</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-green-500 p-3 rounded-full">
                    <Mail className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Private Email</h3>
                    <p>businessnovacart@gmail.com</p>
                  </div>
                </div>


                <div className="flex items-center gap-4">
                  <div className="bg-green-500 p-3 rounded-full">
                    <Clock className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Availability</h3>
                    <p>24/7 Priority Response</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center py-8 mt-12 text-sm text-green-500/60">
          <p>Strictly Confidential • By Invitation Only • Premium Support</p>
        </footer>
      </div>
    </div>
  );
}
