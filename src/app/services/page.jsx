"use client";

import { ArrowRight, ArrowUpRight, CheckCircle2 } from "lucide-react";

export default function services() {
  const services = [
    {
      title: "Functional Behaviour Assessments",
      description:
        "Tailoring Services To Environment For Growth Where Individuals Feel Protected And Understood",
      image:
        "https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?w=600&q=80",
    },
    {
      title: "Behaviour Support Plans",
      description:
        "Personalized Strategies That Promote Safety, Independence, And Positive Behaviour Changes",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80",
    },
    {
      title: "Trauma-Informed Support",
      description:
        "Gentle, Respectful, And Emotionally Safe Approaches Rooted In Trauma-Informed Care Principles",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&q=80",
    },
    {
      title: "Autism & Forensic Care",
      description:
        "Targeted Support For Participants Within Forensic, Neurodivergent, Or Dual-Diagnosis Contexts",
      image:
        "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&q=80",
    },
    {
      title: "Mental Health & Self-Advocacy",
      description:
        "Building Resilience, Communication, And Emotional Regulation Through Structured Guidance",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80",
    },
    {
      title: "Training & Guidance",
      description:
        "Equipping Support Networks To Apply Behaviour Plans Effectively And Compassionately",
      image:
        "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&q=80",
    },
    {
      title: "Ongoing Review & Monitoring",
      description:
        "Continuous Progress Evaluations To Ensure Strategies Stay Relevant And Effective",
      image:
        "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&q=80",
    },
    {
      title: "Reducing Restrictive Practices",
      description:
        "Encouraging Independence And Dignity By Minimizing Restrictive Interventions Safely",
      image:
        "https://images.unsplash.com/photo-1516733725897-1aa73b87c8e8?w=600&q=80",
    },
  ];

  const fundingCategories = [
    "CB Relationships",
    "Behaviour Support",
    "High-Risk Support",
  ];
  return (
    <div className="p-2 bg-gradient-to-r from-[#FBFBFB] to-[#EFF3D0]">
      <div className="bg-[#98C44B] w-full py-36 rounded-lg bg-[url('/serviceLine.png')] bg-no-repeat bg-bottom-right bg-overflow-hidden ">
        <p className="text-center font-semibold text-7xl text-[#003A11]">
          Services
        </p>
      </div>
      <section className="w-full px-6 md:px-12 mb-16">
        <div className="p-20 text-center max-w-6xl mx-auto">
          <p className="font-medium text-3xl ">
            We Deliver Positive Behaviour Support For Children, Young People,
            And Adults — Especially Those With Multiple Or Complex Support
            Needs.{" "}
          </p>
        </div>
        <div className=" p-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="group bg-green-100 rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
                >
                  {/* Image Section */}
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/20"></div>

                    {/* Title on Image */}
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-white text-2xl font-semibold drop-shadow-lg">
                        {service.title}
                      </h3>
                    </div>
                  </div>

                  {/* Description Section */}
                  <div className="bg-green-100 p-6 flex items-center justify-between gap-4">
                    <p className="text-[#003A11] text-sm font-medium flex-1">
                      {service.description}
                    </p>

                    {/* Arrow Button */}
                    <div className="flex-shrink-0">
                      <div className="bg-[#003A11] w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-300 cursor-pointer group-hover:scale-110">
                        <ArrowUpRight
                          className="w-5 h-5  text-white"
                          strokeWidth={2.5}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className=" bg-[#7CCA984D] p-8 flex items-center justify-center relative overflow-hidden">
          {/* Decorative circles */}
          

          <div className="w-full max-w-6xl grid md:grid-cols-2 gap-8 items-center relative z-10">
            {/* Left Section */}
            <div className="flex flex-col">
              <div>
                <p className="text-5xl font-bold text-gray-900 ">
                  Eligibility & Funding
                </p>
                <p className="text-gray-700  text-sm">
                  Making Our Services Accessible To Those Who Need Them Most
                </p>
              </div>

              <button className="group bg-emerald-800 hover:bg-emerald-900 text-white px-8 py-4 rounded-full font-semibold flex items-center gap-3 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
                Get Started
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Right Section - Cards */}
            <div className="space-y-6">
              {/* NDIS Funding Card */}
              <div className="bg-white rounded-3xl p-6 shadow-lg">
                <div className="inline-block bg-gray-900 text-white px-6 py-2 rounded-full text-sm font-semibold mb-4">
                  NDIS Funding
                </div>

                <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                  NDIS Participants With Improved Relationships Or Behaviour
                  Support Funding Are Eligible For Our Services.
                </p>

                <div className="space-y-2">
                  {fundingCategories.map((category, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 bg-green-100 px-4 py-2 rounded-full"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-700 flex-shrink-0" />
                      <span className="text-gray-800 text-sm font-medium">
                        {category}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pricing Card */}
              <div className="bg-white rounded-3xl p-6 shadow-lg">
                <div className="inline-block bg-gray-900 text-white px-6 py-2 rounded-full text-sm font-semibold mb-4">
                  Pricing
                </div>

                <p className="text-gray-700 text-sm leading-relaxed">
                  Travel And Practitioner Rates Follow Current NDIS Pricing
                  Guidelines, Ensuring Transparency And Compliance With All
                  Regulations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
