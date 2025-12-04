"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu, ArrowRight, Sparkles, MoveRight } from "lucide-react";
import Footer from "@/components/Footer";
import MarqueeOnPath from "@/components/MarqueeOnPath";

export default function Home() {
  const [selectedItem, setSelectedItem] = useState(null);

  const aboutus = [
    {
      title: "People With Disabilities",
      image: "/Children.png",
    },
    {
      title: "Children And Families",
      image: "/Children.png",
    },
    {
      title: "Mental Health Support",
      image: "/Children.png",
    },
  ];
  return (
    <div className="text-black p-3 flex flex-col gap-16 bg-gradient-to-r from-[#FBFBFB] to-[#EFF3D0]">
      <section
        className="
    relative overflow-hidden 
    pt-24 
    bg-cover bg-bottom bg-no-repeat 
    flex items-center
    rounded-t-lg
    min-h-[600px] 
    sm:min-h-[700px]
    md:min-h-[85vh]
    lg:min-h-screen
  "
        style={{ backgroundImage: "url('/Subtract.png')" }}
      >
        <div className="w-full h-screen flex items-end">
          <div
            className="
  absolute 
  bottom-96 right-5
  sm:right-[10%] sm:top-[65%]
  md:right-[20%] md:top-[70%]
  flex gap-1 items-center
"
          >
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
          <div
            className="
  absolute 
  top-64 left-5 
  sm:top-[20%] sm:left-[20%] 
  md:top-[26%] md:left-[30%]
  flex gap-1 items-center
"
          >
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
            <p className="text-2xl w-[180px] sm:w-full sm:text-5xl md:text-6xl lg:text-7xl xl:text-[80px] font-medium text-black animate-in fade-in duration-700 delay-300 drop-shadow-md leading-tight">
              Where Positive <br /> Change Feels Safe
            </p>
          </div>

          {/* --- Floating Support Card --- */}
          <div className="hidden lg:block absolute top-[16%] right-8 w-64 bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl p-4 border animate-in fade-in slide-in-from-right-8 duration-1000 delay-500 z-10">
            <div className="aspect-video bg-gray-200 rounded-lg mb-3 overflow-hidden"></div>
            <p className="text-sm font-medium text-black mb-1">
              Get The Right Support
            </p>
          </div>

          <div
            className="inline-block absolute bottom-6 left-[80%] -translate-x-1/2
md:left-[55%] md:translate-x-0 mb-4 animate-in fade-in slide-in-from-bottom-4 duration-700"
          >
            <span className="inline-flex items-center gap-2 px-4 sm:px-11 py-3 rounded-full text-[#FFFFFF] bg-[#003A11] text-lg font-semibold shadow-lg">
              Get Started <MoveRight />
            </span>
          </div>
        </div>
      </section>
      <section className="py-16 px-4 bg-gradient-to-r from-[#FBFBFB] to-[#EFF3D0]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Left Side - Image Card */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[320px] sm:h-[400px] md:h-[500px] group">
              <img
                src="/therapys.png"
                alt="Therapy Session"
                className="w-full h-full object-cover"
              />

              {/* Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              <div className="flex gap-1 items-center absolute top-32 left-10">
                <div className="bg-gradient-to-r from-[#FFFFFF] to-[#666666]  rounded-full p-[1.5px]">
                  <div class=" w-fit flex items-center gap-2 backdrop-blur-3xl  bg-[#FFFFFF66] px-5 py-2 rounded-full">
                    <span class="text-white text-sm font-semibold">
                      Therapy Session
                    </span>
                  </div>
                </div>
                <div class="w-9 h-9 rounded-full overflow-hidden border-[3px] border-[#FFFFFF66] bg-[#00000099] flex gap-2">
                  <div class="w-[25px] h-[25px] rounded-full bg-white m-auto"></div>
                </div>
              </div>

              {/* Book Now Button */}
              <div className="absolute bottom-6 left-6">
                <button className="bg-[#003A11] text-white px-6 py-3 rounded-full font-medium shadow-lg transition-all duration-300 hover:scale-105">
                  Book Now
                </button>
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="flex flex-col gap-6">
              {/* Heading */}
              <div>
                <h2 className="text-5xl font-bold text-gray-800 mb-4">
                  About <span className="text-[#98C44B]">US</span>
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
                <button className="bg-[#003A11] text-white px-8 py-3 rounded-full font-medium shadow-lg transition-all duration-300 hover:scale-105">
                  Explore More
                </button>
              </div>

              {/* Service Categories Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-3">
                {aboutus.map((item, index) => (
                  <div
                    key={index}
                    onClick={() => setSelectedItem(index)}
                    className={`
        relative group cursor-pointer bg-[#98C44B] rounded-2xl pt-10 px-1 pb-1 min-h-[140px]
        ${
          selectedItem === index
            ? "bg-[#98C44B] text-white"
            : " bg-white shadow-xl scale-[1.02]"
        }
      `}
                  >
                    <h3
                      className={`
          absolute font-semibold text-sm top-1 left-3 transition-all duration-300
          ${selectedItem === index ? "text-white" : "text-black"}
        `}
                    >
                      {item.title}
                    </h3>

                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover rounded-2xl"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
<div>
      <MarqueeOnPath />
      <section className="py-16 px-4 bg-[#98C44B] rounded-lg overflow-hidden">
        <div className="relative w-full max-w-md mx-auto sm:max-w-lg md:max-w-xl">
          {/* Heading */}
          <div className="text-center mb-4">
            <h2 className="text-4xl md:text-5xl font-semibold text-[#003A11] mb-3">
              Our Core Promise
            </h2>
            <p className="text-[#003A11] text-sm md:text-base max-w-2xl mx-auto">
              Our Mission Is To Empower Participants, Not Just Support Them
              Promoting Independence, Confidence, And Long-Term Wellbeing
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="relative mt-12 ">
            {/* Center Image */}
            <div className="flex justify-center items-center">
              <div className="relative w-full max-w-md">
                <img
                  src="/promise.png"
                  alt="Father and child"
                  className="rounded-3xl shadow-2xl w-full h-auto"
                />

                {/* Card 1 - Top Left */}
                <div
                  class="absolute top-16 -md:-left-48 → sm:-left-20 md:-left-32 lg:-left-48 w-48 md:w-56 
    rounded-xl p-4 shadow-lg 
    bg-white/60 backdrop-blur-md scale-75 sm:scale-90 md:scale-100"
                >
                  <div
                    class="w-8 h-8 rounded-full absolute -top-4 bg-emerald-900 
        text-white flex items-center justify-center 
        text-sm font-semibold"
                  >
                    1
                  </div>
                  <div class="flex items-start gap-3">
                    <div>
                      <h3 class="text-[13px] font-semibold text-emerald-900 mb-1">
                        Person-Centred Care
                      </h3>

                      <p class="text-[11px] text-gray-700 leading-[1.4]">
                        Your Voice Guides Every Plan. We Listen, Understand, And
                        Build Strategies Around Your Unique Needs.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Card 2 - Top Right */}

                <div
                  class="absolute top-32 -md:-right-48 → sm:-right-20 md:-right-32 lg:-right-48
w-48 md:w-56
    rounded-xl p-4 shadow-lg 
    bg-white/60 backdrop-blur-md scale-75 sm:scale-90 md:scale-100"
                >
                  <div
                    class="w-8 h-8 rounded-full absolute -top-4 bg-emerald-900 
        text-white flex items-center justify-center 
        text-sm font-semibold"
                  >
                    2
                  </div>
                  <div class="flex items-start gap-3">
                    <div>
                      <h3 class="text-[13px] font-semibold text-emerald-900 mb-1">
                        Evidence-Based Practice
                      </h3>

                      <p class="text-[11px] text-gray-700 leading-[1.4]">
                        Proven Methods For Real, Measurable Change. Our
                        Approaches Are Grounded In Research.
                      </p>
                    </div>
                  </div>
                </div>
                {/* Card 3 - Bottom Right */}

                <div
                  class="absolute bottom-36  --md:-right-48 → sm:-right-20 md:-right-32 lg:-right-48
 w-48 md:w-56  
    rounded-xl p-4 shadow-lg 
    bg-white/60 backdrop-blur-md scale-75 sm:scale-90 md:scale-100"
                >
                  <div
                    class="w-8 h-8 rounded-full absolute -top-4 bg-emerald-900 
        text-white flex items-center justify-center 
        text-sm font-semibold"
                  >
                    3
                  </div>
                  <div class="flex items-start gap-3">
                    <div>
                      <h3 class="text-[13px] font-semibold text-emerald-900 mb-1">
                        Empowerment First
                      </h3>

                      <p class="text-[11px] text-gray-700 leading-[1.4]">
                        Building Skills For Autonomy And Growth. We Focus On
                        Developing Capabilities For Independence.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Card 4 - Bottom Left */}

                <div
                  class="absolute bottom-14 -md:-left-48 → sm:-left-20 md:-left-32 lg:-left-48 w-48 md:w-56  
    rounded-xl p-4 shadow-lg 
    bg-white/60 backdrop-blur-md scale-75 sm:scale-90 md:scale-100"
                >
                  <div
                    class="w-8 h-8 rounded-full absolute -top-4 bg-emerald-900 
        text-white flex items-center justify-center 
        text-sm font-semibold"
                  >
                    4
                  </div>
                  <div class="flex items-start gap-3">
                    <div>
                      <h3 class="text-[13px] font-semibold text-emerald-900 mb-1">
                        Collaboration Always
                      </h3>

                      <p class="text-[11px] text-gray-700 leading-[1.4]">
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
      </div>
      <section className="py-20 px-4 bg-gradient-to-r from-[#FBFBFB] to-[#EFF3D0] relative overflow-hidden">
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

          {/* Testimonial Cards - Positioned Around Circle */}
          <div className="relative h-[400px] sm:h-[500px] md:h-[600px] flex justify-center items-center">
            {/* Testimonial 1 - Top Left */}
            <div className="absolute flex items-center gap-1 top-35 left-0 md:left-40 animate-in fade-in slide-in-from-left duration-700">
              <div className=" gap-3 bg-yellow-200 rounded-full px-4 py-2 shadow-lg max-w-xs">
                <p className="text-xs font-medium text-gray-900">
                  Poornaya provides a good health solution
                </p>
              </div>
              <img
                src="/user1.jpg"
                alt="Client"
                className="w-10 h-10 rounded-full object-cover border-2 border-white"
              />
            </div>
            <div className="relative z-10 text-center max-w-2xl mx-auto ">
              <h2 className="text-4xl md:text-5xl font-medium text-gray-900 mb-4">
                What Our
                <br />
                <span className="text-[#003A11]">Clients Say</span>
              </h2>
              <p className="text-gray-700 text-sm md:text-base w-full max-w-96">
                We Are Very Fortunate To Have Great Relationships With Many Of
                Our Clients. Here's The Valuable Testimonials From Our Clients.
              </p>
            </div>
            {/* Testimonial 2 - Top Right */}
            <div className="flex items-center gap-1 absolute top-8 right-0 md:right-20 animate-in fade-in slide-in-from-right duration-700 delay-200">
              <img
                src="/user1.jpg"
                alt="Client"
                className="w-10 h-10 rounded-full object-cover border-2 border-white"
              />
              <div className=" bg-white rounded-full px-4 py-2 shadow-lg max-w-xs">
                <p className="text-xs font-medium text-gray-900">
                  Poornaya is the best choice for mental support
                </p>
              </div>
            </div>

            {/* Testimonial 3 - Middle Left */}
            <div className="flex items-center gap-1 absolute top-1/2 translate-y-24 left-16  animate-in fade-in slide-in-from-left duration-700 delay-400">
              <div className="flex items-center gap-3 bg-emerald-200 rounded-full px-4 py-2 shadow-lg max-w-xs">
                <p className="text-xs font-medium text-gray-900">
                  Poornaya has helped protect me
                </p>
              </div>
              <img
                src="/user1.jpg"
                alt="Client"
                className="w-10 h-10 rounded-full object-cover border-2 border-white"
              />
            </div>

            {/* Testimonial 4 - Middle Right */}
            <div className="flex items-center gap-1 absolute top-1/2 translate-y-8 right-16 animate-in fade-in slide-in-from-right duration-700 delay-600">
              <img
                src="/user1.jpg"
                alt="Client"
                className="w-10 h-10 rounded-full object-cover border-2 border-white"
              />
              <div className="bg-lime-200 rounded-full px-4 py-2 shadow-lg max-w-xs">
                <p className="text-xs font-medium text-gray-900">
                  I recommend Poornaya to you
                </p>
              </div>
            </div>

            {/* Testimonial 5 - Bottom Center */}
            <div className="flex items-center gap-1 absolute bottom-0 left-1/2 -translate-x-1/2 animate-in fade-in slide-in-from-bottom duration-700 delay-800">
              <img
                src="/user1.jpg"
                alt="Client"
                className="w-10 h-10 rounded-full object-cover border-2 border-white"
              />
              <div className=" bg-white rounded-full px-4 py-2 shadow-lg max-w-xs">
                <p className="text-xs font-medium text-gray-900">
                  I can focus on living life with Poornaya
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
