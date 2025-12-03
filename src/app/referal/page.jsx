"use client";

import Footer from "@/components/Footer";
import {
  CalendarCheck,
  Check,
  FileText,
  Mail,
  MapPin,
  Phone,
  SendHorizontal,
  UserRoundMinus,
} from "lucide-react";

export default function referal() {
  const steps = [
    {
      step: "Step 01",
      title: "Complete The Form",
      desc: "Simple, secure, and streamlined for your convenience.",
      icon: <FileText size={90} />,
    },
    {
      step: "Step 02",
      title: "We Review",
      desc: "Our team will assess suitability and contact you within 48 hours.",
      icon: <CalendarCheck size={90} />,
    },
    {
      step: "Step 03",
      title: "Schedule Appointment",
      desc: "We coordinate with the participant to begin services.",
      icon: <UserRoundMinus size={90} />,
    },
  ];

  const referrers = [
    "NDIS Support Coordinators",
    "Allied Health Professionals",
    "Community Service Organisations",
    "Family Members Or Carers",
    "Case Managers",
  ];

  const eligibilityCategories = [
    "Improved Relationships (CB)",
    "Behaviour Support Funding",
    "High-Risk Support Needs",
  ];

  return (
    <div className="p-2 bg-gradient-to-r from-[#FBFBFB] to-[#EFF3D0]">
      <div className="bg-[#98C44B] w-full py-36 rounded-lg bg-[url('/referalLine.png')] bg-no-repeat bg-bottom-left bg-overflow-hidden ">
        <p className="text-center font-semibold text-7xl text-[#003A11]">
          Referal
        </p>
      </div>
      <section className="p-2 mb-16">
        <div className="p-20 text-center">
          <p className="font-medium text-3xl">
            Simple, secure, and streamlined for your convenience
          </p>
        </div>
        <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
          {steps.map((item, index) => (
            <div
              key={index}
              className="bg-[#F5F5F5] rounded-2xl flex flex-col gap-8 py-4 shadow-sm px-4 text-left"
            >
              {/* Step Label */}
              <div>
                <span className="inline-block bg-black left-0 text-white font-semibold text-sm px-4 py-1 rounded-full mb-2">
                  {item.step}
                </span>

                {/* Description */}
                <p className="text[#000000B2] font-medium text-xs mb-6 w-2/3">
                  {item.desc}
                </p>
              </div>

              {/* Icon */}
              <div className="flex justify-center mb-6 text-[#00000080]">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-gray-800">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </section>
      <section className=" bg-[#7CCA984D] p-20 flex items-center rounded-lg justify-center mb-16 bg-[url('/canReferLine.png')] bg-no-repeat bg-cover bg-fit bg-left">
        <div className="w-full relative ">
          {/* Decorative circles */}
          <div className="absolute top-0 left-1/4 w-48 h-48 bg-yellow-100 rounded-full opacity-60 -z-10"></div>
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-green-200 rounded-full opacity-40 -z-10"></div>

          <div className="grid md:grid-cols-2 gap-6 ">
            {/* Who Can Refer Card */}
            <div className="bg-white rounded-3xl p-8 shadow-lg relative overflow-hidden">
              {/* Decorative background icons */}
              <div className="absolute bottom-0 right-0 opacity-5">
                <svg
                  width="200"
                  height="200"
                  viewBox="0 0 200 200"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="100"
                    cy="80"
                    r="35"
                    stroke="currentColor"
                    strokeWidth="8"
                  />
                  <path
                    d="M40 160c0-33.137 26.863-60 60-60s60 26.863 60 60"
                    stroke="currentColor"
                    strokeWidth="8"
                  />
                  <circle
                    cx="160"
                    cy="80"
                    r="35"
                    stroke="currentColor"
                    strokeWidth="8"
                  />
                </svg>
              </div>

              <h2 className="text-2xl font-bold text-gray-800 mb-3">
                Who Can Refer
              </h2>
              <p className="text-gray-600 text-sm mb-6">
                We Welcome Referrals From A Variety Of Professionals
              </p>

              <ul className="space-y-4">
                {referrers.map((referrer, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="mt-0.5 flex-shrink-0">
                      <Check
                        className="w-5 h-5 text-gray-800"
                        strokeWidth={3}
                      />
                    </div>
                    <span className="text-gray-700 font-medium">
                      {referrer}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Eligibility Card */}
            <div className="bg-white rounded-3xl p-8 shadow-lg relative overflow-hidden ">
              {/* Decorative background icon */}
              <div className="absolute bottom-0 right-0 opacity-5">
                <svg
                  width="200"
                  height="200"
                  viewBox="0 0 200 200"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="100"
                    cy="80"
                    r="35"
                    stroke="currentColor"
                    strokeWidth="8"
                  />
                  <path
                    d="M40 160c0-33.137 26.863-60 60-60s60 26.863 60 60"
                    stroke="currentColor"
                    strokeWidth="8"
                  />
                  <path
                    d="M130 130l30 30m0 0l-15-15m15 15l-15 15"
                    stroke="currentColor"
                    strokeWidth="6"
                    strokeLinecap="round"
                  />
                </svg>
              </div>

              <h2 className="text-2xl font-bold text-gray-800 mb-3">
                Eligibility
              </h2>
              <p className="text-gray-600 text-sm mb-6">
                Participants With NDIS Funding Under These Categories Are
                Eligible
              </p>

              <ul className="space-y-4">
                {eligibilityCategories.map((category, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="mt-0.5 flex-shrink-0">
                      <Check
                        className="w-5 h-5 text-gray-800"
                        strokeWidth={3}
                      />
                    </div>
                    <span className="text-gray-700 font-medium">
                      {category}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className=" mb-16">
        <div className="p-14 text-center">
          <p className="font-medium text-3xl">Submit a Referral</p>
          <p>Complete the form below to refer a participant</p>
        </div>
        {/* FORM SECTION */}
        <div className=" max-w-5xl mx-auto right-0  p-8 md:p-12 bg-[#FFFFFF] rounded-2xl shadow-md col-span-2">
          {/* HEADING */}
          <p className="text-lg font-semibold mb-6">Referrer Information</p>
          {/* FORM */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="font-medium tex-[#000000]">Your Name</label>
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
          </div>

          <p className="text-lg font-semibold mb-6">Participant Information</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="font-medium tex-[#000000]">
                Participant Name
              </label>
              <input
                className="w-full border-b border-gray-300 focus:border-black bg-transparent pt-2 pb-1 outline-none"
                placeholder="Enter Participant’s full name"
              />
            </div>

            <div>
              <label className="font-medium tex-[#000000]">NDIS Number</label>
              <input
                className="w-full border-b border-gray-300 focus:border-black bg-transparent pt-2 pb-1 outline-none"
                placeholder="Enter NDIS Number"
              />
            </div>

            <div className="col-span-2">
              <label className="font-medium tex-[#000000]">
                Additional Information
              </label>
              <input
                className="w-full border-b border-gray-300 focus:border-black bg-transparent pt-2 pb-1 outline-none"
                placeholder="Enter Additional Information"
              />
            </div>
          </div>

          {/* SUBMIT BUTTON */}
          <div className="flex flex-col gap-1 text-center">
            <button className="mt-6 bg-[#003A11] text-white px-6 py-3 rounded-full flex items-center gap-2 hover:bg-[#3c8c3f] transition mx-auto">
              Submit Referral <SendHorizontal size={18} />
            </button>

            <p className="text-[#000000B2]">
              All information provided is treated with strict confidentiality
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
