"use client";
import Footer from "@/components/Footer";
import { ArrowRight, Phone, Mail, MapPin, SendHorizontal } from "lucide-react";

export default function contact() {
  return (
    <div className="p-2 bg-gradient-to-r from-[#FBFBFB] to-[#EFF3D0]">
      <div className="bg-[#98C44B] w-full py-36 rounded-lg bg-[url('/Line5.png')] bg-no-repeat bg-bottom-left bg-overflow-hidden ">
        <p className="text-center font-semibold text-7xl text-[#003A11]">
          Contact <br /> Us
        </p>
      </div>
      <section className="w-full px-6 md:px-12 mb-16">
        <div className="max-w-7xl mx-auto relative">
          {/* <div></div> */}
          {/* LEFT IMAGE */}
          <div className="absolute -top-16 flex justify-center lg:justify-start">
            <img
              src="/phone.png" // <-- put your image inside public/images
              alt="Phone"
              className="object-contain w-full h-full"
            />
          </div>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-8 leading-snug text-center max-w-2xl mx-auto mt-16">
            Whether You're An Individual, Family Member, Or Organisation — We're
            Just A Message Away
          </h2>
          {/* RIGHT FORM SECTION */}
          <div className="grid grid-cols-3">
            <div></div>
            <div className="right-0  p-8 md:p-12 bg-[#FFFFFF] rounded-2xl shadow-md col-span-2">
              {/* HEADING */}
              <p className="text-lg font-semibold mb-6">Get in Touch Today</p>
              {/* FORM */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="font-medium tex-[#000000]">Name</label>
                  <input
                    className="w-full border-b border-gray-300 focus:border-black bg-transparent pt-2 pb-1 outline-none"
                    placeholder="Enter Your Name"
                  />
                </div>

                <div>
                  <label className="font-medium tex-[#000000]">Email</label>
                  <input
                    className="w-full border-b border-gray-300 focus:border-black bg-transparent pt-2 pb-1 outline-none"
                    placeholder="Enter Your Email"
                  />
                </div>

                <div>
                  <label className="font-medium tex-[#000000]">Phone</label>
                  <input
                    className="w-full border-b border-gray-300 focus:border-black bg-transparent pt-2 pb-1 outline-none"
                    placeholder="Enter Phone Number"
                  />
                </div>

                <div>
                  <label className="font-medium tex-[#000000]">Message</label>
                  <input
                    className="w-full border-b border-gray-300 focus:border-black bg-transparent pt-2 pb-1 outline-none"
                    placeholder="Tell us how we can help you..."
                  />
                </div>
              </div>

              {/* SUBMIT BUTTON */}
              <button className="mt-6 bg-[#003A11] text-white px-6 py-3 rounded-full flex items-center gap-2 hover:bg-[#3c8c3f] transition">
                Submit Request <SendHorizontal size={18} /> 
              </button>

              {/* CONTACT INFO */}
              <div className="mt-10 space-y-6">
                <h3 className="text-lg font-semibold text-gray-900">
                  Contact Information
                </h3>

                <div className="grid grid-cols-3 gap-1 space-y-4">
                  <div className="flex flex-col gap-1 ">
                    <div className="flex gap-2 text-center">
                      <Phone className="text-black w-5 h-5" />
                    <p className="text-[#000000B2] font-medium">Phone</p>
                    </div>
                    <p className="text-black font-semibold">
                      1300 000 765 <br />
                      <span className="text-sm text-[#000000B2] font-normal">Mon to Fri: 9AM – 8PM</span>
                    </p>
                  </div>

                  <div className="flex flex-col gap-1 ">
                    <div className="flex items-center gap-2 ">
                    <Mail className="text-black w-5 h-5" />
                    <p className="text-[#000000B2] font-medium">Email</p>
                    </div>
                    <p className="text-black font-semibold">
                      info@company.com.au <br />
                      <span className="text-sm text-[#000000B2] font-normal">Real Support With a Heart</span>
                    </p>
                  </div>

                  <div className="flex flex-col gap-1 ">
                    <div className="flex items-center gap-2 ">
                    <MapPin className="text-[#000000] w-5 h-5" />
                    <p className="text-[#000000B2] font-medium">Address</p>
                    </div>
                    <p className="text-black font-semibold">
                      Melbourne, Victoria <br />
                      <span className="text-sm text-[#000000B2] font-normal">Serving Communities Across Australia</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
