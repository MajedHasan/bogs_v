import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="bg-slate-900 py-10">
      <div className="container grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
        <div>
          <Link href={"/"}>
            <Image
              src={"/img/logo-white.svg"}
              alt="Logo"
              width={180}
              height={100}
            />
          </Link>
          <p className="text-md text-white">
            Free of charges for any Domestic Helpers and Job seekers.
          </p>
        </div>
        <nav className="flex flex-col gap-3 text-slate-100 text-sm">
          <Link href={"/about-us"}>About Us</Link>
          <Link href={"/contact-us"}>Contact Us</Link>
          <Link href={"/happy-helpers"}>Happy Helpers</Link>
          <Link href={"/happy-employers"}>Happy Employers</Link>
          <Link href={"/news"}>News & Tips</Link>
        </nav>
        <nav className="flex flex-col gap-3 text-slate-100 text-sm">
          <Link href={"/find-job"}>Search & Find A Job</Link>
          <Link href={"/find-candidate"}>Find Helpers, Maids or Drivers</Link>
          <Link href={"/find-agency"}>Find a Domestic Helper Agency</Link>
          <Link href={"/find-candidate-hongkong"}>
            Available Helpers in Hong Kong
          </Link>
          <Link href={"/find-candidate"}>Available Maids in Singapore</Link>
          <Link href={"/"}>Housemaids in Saudi Arabia</Link>
        </nav>
        <div>
          <Button asChild size={"sm"} className="border">
            <Link href={"/"}>Register Now</Link>
          </Button>
          <Link href={"/"} className="text-white block text-sm mt-4">
            Be one of our partner
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
