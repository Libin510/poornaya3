"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Navbar() {
      const pathname = usePathname();

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Contact", href: "/contact" },
  ];
  return (
    <nav className="fixed top-4 left-0 w-full z-50 px-6 py-2">
      <div
        className=" 
        flex items-center justify-between 
        bg-[#FFFFFF66] backdrop-blur-lg 
        border border-white/30
        rounded-[32px] shadow-lg
        px-2 py-2
      "
      >
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image
            src="/logoMain.png" // change to your image path
            alt="Logo"
            width={58}
            height={58}
            className="rounded-full"
          />
        </div>

        {/* Menu Items */}
        <ul className="hidden md:flex gap-10 text-[16px] font-medium text-gray-800">
          {navLinks.map((link) => {
             const isActive = pathname === link.href;
             return(
            
              <Link
                key={link.href}
                href={link.href}
                className={`transition ${
                    isActive
                      ? "text-[#003A11] font-semibold"   // active
                      : "text-white hover:text-[#003A11]" // inactive
                  }`}
              >
                {link.label}
              </Link>
            );
          })}

        </ul>

        {/* Button */}
        <Link
          href="/contact"
          className="
            bg-[#003C1C] text-white 
            pl-6 pr-1 py-2 rounded-full 
            flex items-center gap-4
            hover:bg-[#012e14] transition
            
          "
        >
          <p>Get In Touch</p> <span className="bg-white text-[#003A11] rounded-full  p-2"><ArrowUpRight size={18} /></span>
        </Link>
      </div>
    </nav>
  );
}
