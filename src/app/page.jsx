"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu, ArrowRight, Sparkles, MoveRight } from "lucide-react";

export default function Home() {
  return (
    <div className="text-black">
      <section
        className="
    relative 
    overflow-hidden 
    pt-20 
    bg-cover bg-bottom bg-no-repeat 
    flex items-center
  "
        style={{
          backgroundImage: "url('/Subtract.png')",
        }}
      >
        <div className="w-full h-screen flex items-end">
          <div className="flex gap-1 absolute right-[20%] top-[70%] items-center">
            <div class="w-9 h-9 rounded-full overflow-hidden border-[3px] border-[#FFFFFF66] bg-[#00000099] flex gap-2">
              <div class="w-[25px] h-[25px] rounded-full bg-white m-auto"></div>
            </div>

            <div className="bg-gradient-to-r from-[#FFFFFF] to-[#666666]  rounded-full p-[1.5px]">
              <div class=" w-fit flex items-center gap-2 backdrop-blur-3xl  bg-[#FFFFFF66] px-5 py-2 rounded-full">
                <span class="text-white text-sm font-semibold">
                  Healthy Body
                </span>
              </div>
            </div>
          </div>
          {/* --- Healthy Mind Tag --- */}
          <div className="flex gap-1 absolute left-[30%] top-[36%] items-center">
            <div className="bg-gradient-to-r from-[#FFFFFF] to-[#666666]  rounded-full p-[1.5px]">
              <div class="w-fit flex items-center gap-2 backdrop-blur-lg bg-[#FFFFFF66] bg-cover bg-center px-5 py-2 rounded-full shadow-md">
                <span class="text-white text-sm font-semibold">
                  Healthy Mind
                </span>
              </div>
            </div>
            <div class="w-9 h-9 rounded-full overflow-hidden border-[3px] border-[#FFFFFF66] bg-[#00000099] flex gap-2">
              <div class="w-[25px] h-[25px] rounded-full bg-white m-auto"></div>
            </div>
          </div>
          {/* --- Left Content Box --- */}
          <div className="absolute bottom-3 left-3 flex flex-col gap-10 z-10">
            {/* Glass Card Box */}
            <div className="bg-white/60 backdrop-blur-lg rounded-md w-fit px-6 py-4 shadow-lg">
              {/* Badge */}
              <div className="inline-block mb-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-[#FFFFFF] bg-[#003A11] text-base font-semibold shadow-lg">
                  Registered NDIS Provider
                </span>
              </div>

              {/* Tagline */}
              <p className="text-lg max-w-xs animate-in fade-in duration-700 delay-150 text-black">
                Delivering Personalised Behaviour Support Services For
                Individuals, Families, And Communities Across Australia
              </p>
            </div>

            {/* Heading */}
            <p className="text-[80px]  font-medium text-black animate-in fade-in duration-700 delay-300 drop-shadow-md leading-tight">
              Where Positive <br /> Change Feels Safe
            </p>
          </div>

          {/* --- Floating Support Card --- */}
          <div className="hidden lg:block absolute top-[16%] right-8 w-64 bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl p-4 border animate-in fade-in slide-in-from-right-8 duration-1000 delay-500 z-10">
            <div className="aspect-video bg-gray-200 rounded-lg mb-3 overflow-hidden"></div>
            <p className="text-sm font-medium text-black mb-1">
              Get The Right Support
            </p>
            <p className="text-xs text-gray-600">Agent, QLD - Aspley</p>
          </div>

          <div className="inline-block absolute bottom-0 left-[55%] mb-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <span className="inline-flex items-center gap-2 px-11 py-3 rounded-full text-[#FFFFFF] bg-[#003A11] text-lg font-semibold shadow-lg">
              Get Started <MoveRight />
            </span>
            
          </div>
        </div>
      </section>
      <section className="py-16 px-4 bg-gradient-to-b from-stone-100 to-stone-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Left Side - Image Card */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[500px] group">
              <img
                src="/api/placeholder/600/500"
                alt="Therapy Session"
                className="w-full h-full object-cover"
              />

              {/* Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              {/* Therapy Sessions Badge */}
              <div className="absolute top-6 left-6">
                <div className="flex items-center gap-3 bg-white/90 backdrop-blur-md rounded-full px-5 py-3 shadow-lg">
                  <span className="text-sm font-semibold text-gray-800">
                    Therapy Sessions
                  </span>
                  <div className="w-10 h-10 rounded-full bg-white border-2 border-emerald-600 flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-emerald-600" />
                  </div>
                </div>
              </div>

              {/* Book Now Button */}
              <div className="absolute bottom-6 left-6">
                <button className="bg-emerald-800 hover:bg-emerald-700 text-white px-6 py-3 rounded-full font-medium shadow-lg transition-all duration-300 hover:scale-105">
                  Book Now
                </button>
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="flex flex-col gap-6">
              {/* Heading */}
              <div>
                <h2 className="text-5xl font-bold text-gray-800 mb-4">
                  About <span className="text-emerald-600">US</span>
                </h2>

                <p className="text-gray-700 leading-relaxed">
                  At{" "}
                  <span className="font-semibold">
                    Poornava Behaviour Support
                  </span>
                  , We Believe Every Person Deserves The Opportunity To Live A
                  Safe, Fulfilling, And Empowered Life. As A Registered NDIS
                  Provider, We Specialise In Positive Behaviour Support (PBS) —
                  Helping Individuals With Complex Behavioural Needs Achieve
                  Their Goals Through Choice, Control, And Evidence-Based Care.
                </p>
              </div>

              {/* Explore More Button */}
              <div>
                <button className="bg-emerald-800 hover:bg-emerald-700 text-white px-8 py-3 rounded-full font-medium shadow-lg transition-all duration-300 hover:scale-105">
                  Explore More
                </button>
              </div>

              {/* Service Categories Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
                {/* People With Disabilities */}
                <div className="group cursor-pointer">
                  <div className="relative rounded-2xl overflow-hidden h-48 shadow-lg transition-transform duration-300 hover:scale-105">
                    <img
                      src="/api/placeholder/300/250"
                      alt="People With Disabilities"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-emerald-600/90 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <h3 className="text-white font-semibold text-sm">
                        People With Disabilities
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Children And Families */}
                <div className="group cursor-pointer">
                  <div className="relative rounded-2xl overflow-hidden h-48 shadow-lg transition-transform duration-300 hover:scale-105">
                    <img
                      src="/api/placeholder/300/250"
                      alt="Children And Families"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0  from-emerald-600/90 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <h3 className="text-white font-semibold text-sm">
                        Children And Families
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Mental Health Support */}
                <div className="group cursor-pointer">
                  <div className="relative rounded-2xl overflow-hidden h-48 shadow-lg transition-transform duration-300 hover:scale-105">
                    <img
                      src="/api/placeholder/300/250"
                      alt="Mental Health Support"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0  from-emerald-600/90 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <h3 className="text-white font-semibold text-sm">
                        Mental Health Support
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="relative py-20 px-4 bg-stone-100 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          {/* Decorative Flower SVG */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-40">
            <svg
              width="300"
              height="300"
              viewBox="0 0 300 300"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Stem */}
              <rect x="145" y="150" width="10" height="150" fill="#D4E5C7" />

              {/* Leaves */}
              <ellipse
                cx="100"
                cy="200"
                rx="60"
                ry="35"
                fill="#D4E5C7"
                opacity="0.8"
                transform="rotate(-20 100 200)"
              />
              <ellipse
                cx="200"
                cy="200"
                rx="60"
                ry="35"
                fill="#D4E5C7"
                opacity="0.8"
                transform="rotate(20 200 200)"
              />

              {/* Flower petals (top) */}
              <ellipse cx="150" cy="80" rx="30" ry="45" fill="#F5E6D3" />
              <ellipse
                cx="175"
                cy="95"
                rx="30"
                ry="45"
                fill="#F5E6D3"
                transform="rotate(30 175 95)"
              />
              <ellipse
                cx="125"
                cy="95"
                rx="30"
                ry="45"
                fill="#F5E6D3"
                transform="rotate(-30 125 95)"
              />

              {/* Center */}
              <circle cx="150" cy="110" r="15" fill="#E8D4B8" />
            </svg>
          </div>

          {/* Text Content */}
          <div className="relative z-10 flex flex-wrap items-center justify-center gap-3 text-center">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-emerald-900 tracking-wide">
              JOURNEY
            </h2>

            <Sparkles className="w-8 h-8 md:w-10 md:h-10 text-emerald-700 animate-pulse" />

            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-emerald-700 tracking-wide">
              TO
            </h2>

            <Sparkles className="w-8 h-8 md:w-10 md:h-10 text-emerald-700 animate-pulse" />

            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-emerald-900 tracking-wide">
              YOUR
            </h2>

            <Sparkles className="w-8 h-8 md:w-10 md:h-10 text-emerald-700 animate-pulse" />

            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-emerald-900 tracking-wide">
              EMPOWERMENT
            </h2>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gradient-to-br from-lime-400 via-lime-500 to-lime-400">
        <div className="max-w-6xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-4">
            <h2 className="text-4xl md:text-5xl font-bold text-emerald-900 mb-3">
              Our Core Promise
            </h2>
            <p className="text-emerald-800 text-sm md:text-base max-w-2xl mx-auto">
              Our Mission Is To Empower Participants, Not Just Support Them
              Promoting Independence, Confidence, And Long-Term Wellbeing
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="relative mt-12">
            {/* Center Image */}
            <div className="flex justify-center items-center">
              <div className="relative w-full max-w-md">
                <img
                  src="/api/placeholder/400/400"
                  alt="Father and child"
                  className="rounded-3xl shadow-2xl w-full h-auto"
                />

                {/* Card 1 - Top Left */}
                <div className="absolute -top-8 -left-4 md:-left-12 w-48 md:w-56 bg-white rounded-2xl shadow-xl p-4 animate-in fade-in slide-in-from-left duration-700">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-10 h-10 bg-emerald-900 text-white rounded-full flex items-center justify-center font-bold text-lg">
                      1
                    </div>
                    <div>
                      <h3 className="font-bold text-emerald-900 text-sm mb-2">
                        Person-Centred Care
                      </h3>
                      <p className="text-xs text-gray-700 leading-relaxed">
                        Your Voice Guides Every Plan. We Listen, Understand, And
                        Build Strategies Around Your Unique Needs.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Card 2 - Top Right */}
                <div className="absolute top-4 -right-4 md:-right-12 w-48 md:w-56 bg-white rounded-2xl shadow-xl p-4 animate-in fade-in slide-in-from-right duration-700 delay-200">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-10 h-10 bg-emerald-900 text-white rounded-full flex items-center justify-center font-bold text-lg">
                      2
                    </div>
                    <div>
                      <h3 className="font-bold text-emerald-900 text-sm mb-2">
                        Evidence-Based Practice
                      </h3>
                      <p className="text-xs text-gray-700 leading-relaxed">
                        Proven Methods For Real, Measurable Change. Our
                        Approaches Are Grounded In Research.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Card 3 - Bottom Right */}
                <div className="absolute bottom-12 -right-4 md:-right-12 w-48 md:w-56 bg-white rounded-2xl shadow-xl p-4 animate-in fade-in slide-in-from-right duration-700 delay-400">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-10 h-10 bg-emerald-900 text-white rounded-full flex items-center justify-center font-bold text-lg">
                      3
                    </div>
                    <div>
                      <h3 className="font-bold text-emerald-900 text-sm mb-2">
                        Empowerment First
                      </h3>
                      <p className="text-xs text-gray-700 leading-relaxed">
                        Building Skills For Autonomy And Growth. We Focus On
                        Developing Capabilities For Independence.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Card 4 - Bottom Left */}
                <div className="absolute bottom-4 -left-4 md:-left-12 w-48 md:w-56 bg-white rounded-2xl shadow-xl p-4 animate-in fade-in slide-in-from-left duration-700 delay-600">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-10 h-10 bg-emerald-900 text-white rounded-full flex items-center justify-center font-bold text-lg">
                      4
                    </div>
                    <div>
                      <h3 className="font-bold text-emerald-900 text-sm mb-2">
                        Collaboration Always
                      </h3>
                      <p className="text-xs text-gray-700 leading-relaxed">
                        Working With Your Entire Care Team To Ensure Holistic
                        Outcomes And Consistent Support.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Explore More Button */}
          <div className="flex justify-center mt-16">
            <button className="bg-emerald-900 hover:bg-emerald-800 text-white px-8 py-3 rounded-full font-medium shadow-lg transition-all duration-300 hover:scale-105">
              Explore More
            </button>
          </div>
        </div>
      </section>
      <section className="py-20 px-4 bg-stone-100 relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
          {/* Concentric Circles Background */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            <div className="relative w-[600px] h-[600px]">
              <div className="absolute inset-0 border-2 border-stone-300/40 rounded-full" />
              <div className="absolute inset-8 border-2 border-stone-300/40 rounded-full" />
              <div className="absolute inset-16 border-2 border-stone-300/40 rounded-full" />
              <div className="absolute inset-24 border-2 border-stone-300/40 rounded-full" />
            </div>
          </div>

          {/* Center Content */}
          <div className="relative z-10 text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              What Our
              <br />
              Client Says
            </h2>
            <p className="text-gray-700 text-sm md:text-base">
              We Are Very Fortunate To Have Great Relationships With Many Of Our
              Clients. Here's The Valuable Testimonials From Our Clients.
            </p>
          </div>

          {/* Testimonial Cards - Positioned Around Circle */}
          <div className="relative h-[500px] md:h-[600px]">
            {/* Testimonial 1 - Top Left */}
            <div className="absolute top-0 left-0 md:left-12 animate-in fade-in slide-in-from-left duration-700">
              <div className="flex items-center gap-3 bg-yellow-200 rounded-full px-4 py-2 shadow-lg max-w-xs">
                <img
                  src="/api/placeholder/40/40"
                  alt="Client"
                  className="w-10 h-10 rounded-full object-cover border-2 border-white"
                />
                <p className="text-xs font-medium text-gray-900">
                  Poornaya provides a good health solution
                </p>
              </div>
            </div>

            {/* Testimonial 2 - Top Right */}
            <div className="absolute top-8 right-0 md:right-12 animate-in fade-in slide-in-from-right duration-700 delay-200">
              <div className="flex items-center gap-3 bg-white rounded-full px-4 py-2 shadow-lg max-w-xs">
                <img
                  src="/api/placeholder/40/40"
                  alt="Client"
                  className="w-10 h-10 rounded-full object-cover border-2 border-emerald-300"
                />
                <p className="text-xs font-medium text-gray-900">
                  Poornaya is the best choice for mental support
                </p>
              </div>
            </div>

            {/* Testimonial 3 - Middle Left */}
            <div className="absolute top-1/2 -translate-y-1/2 left-0 animate-in fade-in slide-in-from-left duration-700 delay-400">
              <div className="flex items-center gap-3 bg-emerald-200 rounded-full px-4 py-2 shadow-lg max-w-xs">
                <img
                  src="/api/placeholder/40/40"
                  alt="Client"
                  className="w-10 h-10 rounded-full object-cover border-2 border-white"
                />
                <p className="text-xs font-medium text-gray-900">
                  Poornaya has helped protect me
                </p>
              </div>
            </div>

            {/* Testimonial 4 - Middle Right */}
            <div className="absolute top-1/2 translate-y-8 right-0 animate-in fade-in slide-in-from-right duration-700 delay-600">
              <div className="flex items-center gap-3 bg-lime-200 rounded-full px-4 py-2 shadow-lg max-w-xs">
                <img
                  src="/api/placeholder/40/40"
                  alt="Client"
                  className="w-10 h-10 rounded-full object-cover border-2 border-white"
                />
                <p className="text-xs font-medium text-gray-900">
                  I recommend Poornaya to you
                </p>
              </div>
            </div>

            {/* Testimonial 5 - Bottom Center */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 animate-in fade-in slide-in-from-bottom duration-700 delay-800">
              <div className="flex items-center gap-3 bg-white rounded-full px-4 py-2 shadow-lg max-w-xs">
                <img
                  src="/api/placeholder/40/40"
                  alt="Client"
                  className="w-10 h-10 rounded-full object-cover border-2 border-emerald-300"
                />
                <p className="text-xs font-medium text-gray-900">
                  I can focus on living life with Poornaya
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 px-4 bg-[#98C44B]">
        <div className="max-w-6xl mx-auto">
          <div className="relative bg-white border-4 border-lime-500 rounded-3xl p-8 md:p-12 shadow-xl overflow-hidden">
            {/* Decorative Icons - Right Side */}
            <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-6">
              <div
                className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center shadow-lg animate-bounce"
                style={{ animationDelay: "0s", animationDuration: "3s" }}
              >
                <svg
                  className="w-8 h-8 text-lime-400"
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
              <div
                className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center shadow-lg animate-bounce"
                style={{ animationDelay: "0.5s", animationDuration: "3s" }}
              >
                <svg
                  className="w-8 h-8 text-lime-400"
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
              <div
                className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center shadow-lg animate-bounce"
                style={{ animationDelay: "1s", animationDuration: "3s" }}
              >
                <svg
                  className="w-8 h-8 text-lime-400"
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
              <div
                className="w-20 h-20 bg-gray-900 rounded-full flex items-center justify-center shadow-lg animate-bounce"
                style={{ animationDelay: "1.5s", animationDuration: "3s" }}
              >
                <svg
                  className="w-10 h-10 text-lime-400"
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

            {/* Content */}
            <div className="relative z-10 max-w-xl">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                Ready To Take The Next Step
                <br />
                Toward Positive Change?
              </h2>

              <button className="inline-flex items-center gap-3 bg-lime-400 hover:bg-lime-500 text-gray-900 font-semibold px-6 py-3 rounded-full shadow-lg transition-all duration-300 hover:scale-105">
                <span className="uppercase text-sm">Book a Consultation</span>
                <div className="w-6 h-6 bg-gray-900 rounded-full flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>
      <footer className="relative bg-[#98C44B] pt-16 pb-8 px-4 overflow-hidden">
        {/* Large POORNAYA Text Background */}
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden pointer-events-none">
          <h2 className="text-[12rem] md:text-[16rem] lg:text-[20rem] font-black text-emerald-900/30 whitespace-nowrap">
            POORNAYA
          </h2>
        </div>

        {/* Decorative Wave */}
        <div className="absolute top-0 right-0 w-1/2 h-64">
          <svg viewBox="0 0 500 300" className="w-full h-full opacity-40">
            <path
              d="M 0 150 Q 125 50 250 150 T 500 150 L 500 300 L 0 300 Z"
              fill="white"
            />
          </svg>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-8">
            {/* Left Column - Logo & Description */}
            <div className="lg:col-span-4">
              <div className="bg-white rounded-2xl p-6 shadow-lg mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-8 h-8 text-emerald-900"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <span className="text-2xl font-bold text-emerald-900">
                    POORNAYA
                  </span>
                </div>

                <p className="text-sm text-gray-700 mb-4 leading-relaxed">
                  Providing Physical And Mental Related Solutions For Over 12
                  Years. Protecting What Matters Most To You And Your Family.
                </p>

                {/* Contact Info */}
                <div className="space-y-2 text-sm text-gray-800">
                  <div className="flex items-center gap-2">
                    <svg
                      className="w-4 h-4 text-emerald-900"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    <span>1300990205</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg
                      className="w-4 h-4 text-emerald-900"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    <span>Info@Poornaya.Com.Au</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg
                      className="w-4 h-4 text-emerald-900"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Melbourne, Victoria</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Center Image */}
            <div className="lg:col-span-4 flex items-end justify-center">
              <div className="relative w-64 h-80 rounded-t-full overflow-hidden shadow-2xl border-4 border-white">
                <img
                  src="/api/placeholder/300/400"
                  alt="Person looking up"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right Column - Navigation */}
            <div className="lg:col-span-4 flex flex-col items-end justify-center gap-4">
              <nav className="flex flex-col items-end gap-3 text-right">
                <a
                  href="#home"
                  className="text-lg font-semibold text-gray-900 hover:text-emerald-900 transition-colors"
                >
                  Home
                </a>
                <a
                  href="#about"
                  className="text-lg font-semibold text-gray-900 hover:text-emerald-900 transition-colors"
                >
                  About Us
                </a>
                <a
                  href="#services"
                  className="text-lg font-semibold text-gray-900 hover:text-emerald-900 transition-colors"
                >
                  Services
                </a>
                <a
                  href="#referral"
                  className="text-lg font-semibold text-gray-900 hover:text-emerald-900 transition-colors"
                >
                  Referral
                </a>
                <a
                  href="#contact"
                  className="text-lg font-semibold text-gray-900 hover:text-emerald-900 transition-colors"
                >
                  Contact Us
                </a>
              </nav>

              {/* Social Icons */}
              <div className="flex gap-3 mt-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-900 hover:bg-gray-800 text-white rounded-full flex items-center justify-center transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-900 hover:bg-gray-800 text-white rounded-full flex items-center justify-center transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-900 hover:bg-gray-800 text-white rounded-full flex items-center justify-center transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center pt-8 border-t border-emerald-900/20">
            <p className="text-sm text-gray-800">
              © 2025 Poornaya. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
