"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      {/* TOP SECTION */}
      <section className="py-4 px-4 bg-[#98C44B] rounded-t-lg">
        <div className="relative bg-white border-4 border-lime-500 rounded-3xl p-8 md:p-12 overflow-hidden">

          {/* Right Floating Icons */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden lg:block w-[180px] h-[180px]">

            {/* Icon 1 */}
            <div
              className="absolute w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center shadow-lg animate-bounce"
              style={{
                animationDelay: "0s",
                animationDuration: "3s",
                top: "-20%",
                left: "70%",
                transform: "translate(-50%, 0)",
              }}
            >
              <svg
                className="w-8 h-8 text-[#98C44B]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                />
              </svg>
            </div>

            {/* Icon 2 */}
            <div
              className="absolute w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center shadow-lg animate-bounce"
              style={{
                animationDelay: "0.5s",
                animationDuration: "3s",
                top: "12%",
                left: "40%",
                transform: "translate(-50%, -50%)",
              }}
            >
              <svg
                className="w-8 h-8 text-[#98C44B]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>

            {/* Icon 3 */}
            <div
              className="absolute w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center shadow-lg animate-bounce"
              style={{
                animationDelay: "1s",
                animationDuration: "3s",
                top: "55%",
                left: "40%",
                transform: "translate(-50%, -50%)",
              }}
            >
              <svg
                className="w-8 h-8 text-[#98C44B]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            </div>

            {/* Icon 4 */}
            <div
              className="absolute w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center shadow-lg animate-bounce"
              style={{
                animationDelay: "1.5s",
                animationDuration: "3s",
                top: "90%",
                left: "70%",
                transform: "translate(-50%, -50%)",
              }}
            >
              <svg
                className="w-10 h-10 text-[#98C44B]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
            </div>
          </div>

          {/* Text + CTA */}
          <div className="relative z-10 max-w-xl">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              Ready To Take The Next Step
              <br />
              Toward Positive Change?
            </h2>

            <button className="inline-flex items-center gap-3 bg-[#98C44B] text-gray-900 font-semibold px-6 py-3 rounded-full shadow-lg transition-all duration-300 hover:scale-105">
              <span className="uppercase text-sm">Book a Consultation</span>
              <div className="w-6 h-6 bg-gray-900 rounded-full flex items-center justify-center">
                <svg
                  className="w-4 h-4 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER SECTION */}
      <footer className="relative bg-[#98C44B] pt-20 pb-10 px-4 overflow-hidden rounded-b-lg">

        {/* Background Line */}
        <img className="absolute top-10 right-0 w-full opacity-80" src="/footerLine.png" alt="wave" />

        {/* Person Image */}
        <div className="absolute bottom-40 left-1/2 -translate-x-1/2 w-52 h-60 rounded-lg overflow-hidden shadow-xl">
          <img src="/user2.png" className="object-cover w-full h-full" alt="person" />
        </div>

        {/* Big POORNAYA Text */}
        <p className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-[240px] font-bold text-[#0E4037] leading-none select-none">
          POORNAYA
        </p>

        {/* Main Content */}
        <div className="relative z-10 mx-auto flex justify-between gap-8 mb-32">

          {/* Left */}
          <div className="w-fit">
            <div className="w-32 h-28 bg-white rounded-lg flex items-center justify-center mb-4">
              <img src="/poornaya.png" className="w-28 h-24 object-contain" alt="Poornaya" />
            </div>

            <p className="text-sm text-black mb-4 leading-relaxed">
              Providing Physical And Mental Related Solutions For Over 12 Years.
              <br />
              Protecting What Matters Most To You And Your Family.
            </p>

            {/* Contact */}
            <div className="space-y-2 text-sm text-black">
              <div className="flex items-center gap-2">
                <span>📞</span> 1300990205
              </div>
              <div className="flex items-center gap-2">
                <span>📧</span> Info@Poornaya.Com.Au
              </div>
              <div className="flex items-center gap-2">
                <span>📍</span> Melbourne, Victoria
              </div>
            </div>
          </div>

          {/* Right Navigation */}
          <div className="flex flex-col items-end gap-4">
            <nav className="flex flex-col items-end gap-3 text-right">
              {["Home", "About Us", "Services", "Referral", "Contact Us"].map((item) => (
                <a key={item} href="#" className="text-lg font-semibold text-gray-900 hover:text-emerald-900">
                  {item}
                </a>
              ))}
            </nav>

            {/* Social */}
            <div className="flex gap-3 mt-4">
              {["facebook", "instagram", "linkedin"].map((icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 bg-gray-900 hover:bg-gray-800 text-white rounded-full flex items-center justify-center transition"
                >
                  <span className="text-lg">★</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
