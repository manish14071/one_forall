"use client";

import Hero from "@/components/Hero/Hero";
import NavBar from "@/components/Navbar/NavBar";
import Services from "@/components/Services/Services";

import Image from "next/image";

export default function () {
  return (
    <>
      <main>
       <NavBar/>
        <Hero/>
        <Services/>
      </main>
      
    </>
  );
}