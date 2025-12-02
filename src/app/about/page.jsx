"use client";

import Footer from "@/components/Footer";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Shield, BookOpen, Heart, Brain, Scale, Search } from 'lucide-react';

export default function Navbar() {
  const content = [
    {
      title: "Years of experience",
      value: "12",
    },
    {
      title: "Empowered Clients",
      value: "1000+",
    },
    {
      title: "Expert Collaborations",
      value: "150",
    },
  ];
  const team = [
    {
      name: "Micheal Nguyen N.S.W",
      role: "Licensed Clinical Social Worker",
      img: "/user3.png",
    },
    {
      name: "Micheal Nguyen N.S.W",
      role: "Licensed Clinical Social Worker",
      img: "/user4.png",
    },{
      name: "Nguyen N.S.W",
      role: "Licensed Clinical Social Worker",
      img: "/user4.png",
    },{
      name: "Micheal W",
      role: "Licensed Clinical Social Worker",
      img: "/user4.png",
    },{
      name: "Mi",
      role: "Licensed Clinical Social Worker",
      img: "/user4.png",
    },
    // add more...
  ];
const values = [
    {
      title: "Safety And Trust",
      description: "Building Secure Environments For Growth Where Individuals Feel Protected And Valued",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
    },
    {
      title: "Respect And Dignity",
      description: ""
    },
    {
      title: "Empathy And Accountability",
      description: ""
    },
    {
      title: "Cultural Sensitivity",
      description: ""
    }
  ];
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent(
      (prev) => (prev + 1) % (team.length - 1) // show pairs correctly
    );
  };

  const prev = () => {
    setCurrent((prev) => (prev === 0 ? team.length - 2 : prev - 1));
  };

   const qualifications = [
    {
      icon: Shield,
      title: "Restrictive Practice Frameworks",
      description: "Expert Knowledge In Managing And Reducing Restrictive Interventions"
    },
    {
      icon: BookOpen,
      title: "Functional Behaviour Assessments",
      description: "Comprehensive Training In Analyzing Behavioral Patterns"
    },
    {
      icon: Heart,
      title: "Trauma-Informed Care",
      description: "Specialized Approaches For Supporting Trauma Survivors"
    },
    {
      icon: Brain,
      title: "Mental Health First Aid",
      description: "Certified In Both Youth And Adult Mental Health Support"
    },
    {
      icon: Scale,
      title: "Forensic Support",
      description: "Extensive Experience In Justice-Involved Settings"
    },
    {
      icon: Search,
      title: "Investigation Techniques",
      description: "Professional Training In Interviewing And Investigation"
    }
  ];
  return (
    <div className="p-2 bg-gradient-from-r-[#FBFBFB] to-[#EFF3D0]">
      <div className="bg-[#98C44B] w-full py-36 rounded-lg">
        <img
          className="absolute -top-12 overflow-hidden left-2  opacity-80"
          src="/Line2.png"
          alt="wave"
        />
        <p className="text-center font-semibold text-7xl text-[#003A11]">
          About <br /> Poornaya
        </p>
      </div>
      <div className="px-20 flex flex-col gap-10 ">
        <div className="w-32 h-28 rounded-lg flex items-center justify-center mt-10 m-auto ">
          <img
            src="/poornaya.png"
            className="w-28 h-24 object-contain"
            alt="Poornaya"
          />
        </div>
        <p className="text-left font-medium text-2xl">
          Behind <span className="text-[#003A11] font-bold">Poornaya’s</span>{" "}
          success is Wish, an exceptionally dedicated Behaviour Support
          Practitioner,{" "}
          <span className="text-[#003A11] font-bold">Physiotherapist</span>, and{" "}
          <span className="text-[#003A11] font-bold">Social Worker</span>. With
          qualifications earned in{" "}
          <span className="text-[#003A11] font-bold">
            Australia and New Zealand
          </span>
          , and more than a decade of clinical and community experience, Wish
          brings{" "}
          <span className="text-[#003A11] font-bold">
            compassion, discipline,
          </span>
          and insight to every client interaction.
        </p>
        <div className="grid grid-cols-3 justify-center text-center gap-10 mb-20">
          {content.map((item) => (
            <div key={item.title} className="flex flex-col gap-2">
              <p className="text-2xl text-[#003A11] font-semibold">
                {item.value}
              </p>
              <p className="text-lg font-medium">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
      <section className="w-full  py-20 px-6 md:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* LEFT CONTENT */}
          <div>
            <h2 className="text-4xl md:text-5xl font-semibold text-gray-900">
              Meet Our Team
            </h2>
            <p className="mt-4 text-gray-600 max-w-md leading-relaxed">
              Behind Every Milestone Is A Team That Powers The Vision
            </p>

            {/* Buttons */}
            <div className="flex gap-4 mt-8">
              <button
                onClick={prev}
                className="w-10 h-10 rounded-md bg-green-800 text-white flex items-center justify-center hover:bg-green-900"
              >
                <ChevronLeft size={20} />
              </button>

              <button
                onClick={next}
                className="w-10 h-10 rounded-md bg-green-800 text-white flex items-center justify-center hover:bg-green-900"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          {/* RIGHT — TWO CARD SLIDER */}
          <div className="relative w-full flex gap-4 justify-end">
            {/* CARD 1 */}
            <div className="w-[280px] md:w-[320px] transition-all duration-500">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="relative w-full h-56">
                  <img
                    src={team[current].img}
                    alt={team[current].name}
                    className="object-cover w-full h-full"
                  />
                </div>

                <div className="p-5 bg-white">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {team[current].name}
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">
                    {team[current].role}
                  </p>
                </div>
              </div>
            </div>

            {/* CARD 2 */}
            <div className="w-[280px] md:w-[320px] transition-all duration-500">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="relative w-full h-56">
                  <img
                    src={team[current + 1]?.img}
                    alt={team[current + 1]?.name}
                    className="object-cover w-full h-full"
                  />
                </div>

                <div className="p-5 bg-white">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {team[current + 1]?.name}
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">
                    {team[current + 1]?.role}
                  </p>
                </div>
              </div>
            </div>
            {/* <div className="w-[280px] md:w-[320px] transition-all duration-500">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="relative w-full h-56">
                  <img
                    src={team[current + 1]?.img}
                    alt={team[current + 1]?.name}
                    className="object-cover w-full h-full"
                  />
                </div>

                <div className="p-5 bg-white">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {team[current + 1]?.name}
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">
                    {team[current + 1]?.role}
                  </p>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>
      <section className="w-full py-16 px-6 md:px-16 mb-32">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* LEFT SIDE - Image Card */}
        <div className="relative rounded-2xl overflow-hidden shadow-xl h-[500px]">
          <img
            src="/GymTrain.png"
            alt="Training session"
            className="w-full h-full object-cover"
          />
          
          {/* Overlay with Text */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-8">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">
              Training &<br />Qualifications
            </h2>
            <p className="text-white/90 text-sm max-w-md">
              Comprehensive Training And Certifications Ensuring The Highest Standard Of Care
            </p>
          </div>
        </div>

        {/* RIGHT SIDE - Qualifications List */}
        <div className="space-y-6">
          {qualifications.map((item, index) => (
            <div key={index} className="flex items-start gap-4">
              {/* Icon Circle */}
              <div className=" flex-shrink-0 w-12 h-12 rounded-full bg-green-900 flex items-center justify-center">
                <item.icon className="w-5 h-5 text-white" />
              </div>

              {/* Text Content */}
              <div className="flex-1">
                <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    <section className="w-full py-16 px-6 md:px-16 bg-[#D4E6D4] bg-[url('/Line3.png')] bg-no-repeat bg-fit bg-left rounded-lg mb-32"
>
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* LEFT SIDE - Title and Decorative Element */}
        <div className="relative">
          {/* Large Decorative Ampersand */}

          {/* Title Content */}
          <div className="relative z-10">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
              Core Values
            </h2>
            <p className="text-gray-700 text-lg max-w-md">
              The Principals That Guide Every Interactions And Descisions
            </p>
          </div>
        </div>

        {/* RIGHT SIDE - Values List */}
        <div className="space-y-6">
          {values.map((value, index) => (
            <div key={index} className="border-b border-gray-400 pb-6">
              {index === 0 ? (
                // First item with image card
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold text-gray-900">
                    {value.title}
                  </h3>
                  
                  <div className="relative rounded-2xl overflow-hidden shadow-lg">
                    <img
                      src={value.image}
                      alt={value.title}
                      className="w-full h-64 object-cover"
                    />
                    
                    {/* Overlay Text and Button */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end">
                      <div className="p-6 flex items-end justify-between gap-4">
                        <p className="text-white text-sm flex-1 leading-relaxed">
                          {value.description}
                        </p>
                        <button className="flex-shrink-0 bg-green-900 hover:bg-green-800 text-white px-6 py-2.5 rounded-full text-sm font-medium transition-colors">
                          Get Started
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                // Other items with just title
                <h3 className="text-2xl font-semibold text-gray-900">
                  {value.title}
                </h3>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
    <Footer />
    </div>
  );
}
