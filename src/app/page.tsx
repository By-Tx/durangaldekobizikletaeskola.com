"use client";
import Image from "next/image";
import Link from "next/link";

import Slideshow from "./components/slider";
import Sponsor from "./components/sponsors";
export default function Home() {
  return (
    <div >
      <Slideshow />
      
      <Sponsor />
    </div>
  );
}
