"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu, ArrowRight, Sparkles, MoveRight } from "lucide-react";
import Footer from "@/components/Footer";

export default function Home() {

  const aboutus = [
    {
      title:"People With Disabilities",
      image:"/Children.png",
    }, {
      title:"Children And Families",
      image:"/Children.png",
    } ,{
      title:"Mental Health Support",
      image:"/Children.png",
    }
  ]
  return (
    <div className="text-black p-3">
      <section
        className="
    relative 
    overflow-hidden 
    pt-20 
    bg-cover bg-bottom bg-no-repeat 
    flex items-center
    rounded-t-lg
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
          <div className="flex gap-1 absolute left-[30%] top-[26%] items-center">
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
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
                {
                  aboutus.map((item) => (
                <div className="relative group cursor-pointer bg-[#98C44B] rounded-2xl pt-8 px-1 pb-1">
                  <h3 className="absolute text-white font-semibold text-sm top-1 left-3">
                    {item.title}
                  </h3>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>))
                }
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="relative py-20 px-4 bg-stone-100 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          {/* Decorative Flower SVG */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-40">
            <img
              src="/FLOWER.png"
              alt="Decorative Flower"
              className="w-fit h-fit"
            />
          </div>

          {/* Text Content */}
          {/* <svg viewBox="0 0 900 200" class="w-full h-full">
  <path
    id="curve"
    d="M0,50 L450,260 L900,50"
    stroke="black"
    stroke-width="2"
    fill="none"
  />

  <text font-size="40" fill="black">
    <textPath href="#curve" startOffset="50%" text-anchor="middle">
      JOURNEY ✨ TO ✨ YOUR ✨ EMPOWERMENT
    </textPath>
  </text>
</svg> */}
          <svg viewBox="0 0 900 200" class="w-full h-full">
            <path
              id="curve"
              d="M0,80 L460,150 800,80 900,60"
              // d="M0,60
              //    C300,120 600,120 900,60"
              stroke="transparent"
              fill="none"
            />

            <text
              className="font-extrabold font-urbanist"
              font-size="30"
              fill="#003A11"
              letter-spacing="10"
            >
              <textPath href="#curve" startOffset="50%" text-anchor="middle">
                JOURNEY ✦ TO ✦ YOUR ✦ EMPOWER
              </textPath>
            </text>
          </svg>
        </div>
      </section>

      <section className="py-16 px-4 bg-[#98C44B] rounded-lg">
        <div className="max-w-6xl mx-auto">
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
          <div className="relative mt-12">
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
                  class="absolute top-16 -left-4 md:-left-48 w-48 md:w-56 
    rounded-xl p-4 shadow-lg 
    bg-white/60 backdrop-blur-md"
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
                  class="absolute top-32 -right-4 md:-right-48 w-48 md:w-56 
    rounded-xl p-4 shadow-lg 
    bg-white/60 backdrop-blur-md"
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
                  class="absolute bottom-36  -right-4 md:-right-48 w-48 md:w-56  
    rounded-xl p-4 shadow-lg 
    bg-white/60 backdrop-blur-md"
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
                  class="absolute bottom-14 -left-4 md:-left-48 w-48 md:w-56  
    rounded-xl p-4 shadow-lg 
    bg-white/60 backdrop-blur-md"
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

          {/* Testimonial Cards - Positioned Around Circle */}
          <div className="relative h-[500px] md:h-[600px] flex justify-center items-center">
            {/* Testimonial 1 - Top Left */}
            <div className="absolute flex items-center gap-1 top-0 left-0 md:left-12 animate-in fade-in slide-in-from-left duration-700">
              <img
                src="/user1.jpg"
                alt="Client"
                className="w-10 h-10 rounded-full object-cover border-2 border-white"
              />
              <div className=" gap-3 bg-yellow-200 rounded-full px-4 py-2 shadow-lg max-w-xs">
                <p className="text-xs font-medium text-gray-900">
                  Poornaya provides a good health solution
                </p>
              </div>
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
            <div className="flex items-center gap-1 absolute top-8 right-0 md:right-12 animate-in fade-in slide-in-from-right duration-700 delay-200">
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
            <div className="flex items-center gap-1 absolute top-1/2 -translate-y-1/2 left-0 animate-in fade-in slide-in-from-left duration-700 delay-400">
              <img
                src="/user1.jpg"
                alt="Client"
                className="w-10 h-10 rounded-full object-cover border-2 border-white"
              />
              <div className="flex items-center gap-3 bg-emerald-200 rounded-full px-4 py-2 shadow-lg max-w-xs">
                <p className="text-xs font-medium text-gray-900">
                  Poornaya has helped protect me
                </p>
              </div>
            </div>

            {/* Testimonial 4 - Middle Right */}
            <div className="flex items-center gap-1 absolute top-1/2 translate-y-8 right-0 animate-in fade-in slide-in-from-right duration-700 delay-600">
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
