import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { ChevronDown, Menu } from "lucide-react";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";

type Props = {};

const Header = (props: Props) => {
  return (
    <section className="mx-auto container py-4 sticky top-0 bg-white rounded-b-lg shadow-xl">
      <header className="lg:flex items-center justify-between gap-10 hidden">
        <div className="flex items-center gap-14">
          <Link href={"/"}>
            <Image src={"/img/logo.svg"} alt="" width={150} height={100} />
          </Link>
          <nav className="flex items-center md:gap-4 xl:gap-6 text-sm">
            <Link href={"/find-job"}>JOBS</Link>
            <Link href={"/find-candidate"}>CANDIDATES</Link>
            <Link href={"/find-agency"}>AGENCY SERVICES</Link>
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-3">
                NEWS & MORE <ChevronDown size={20} />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-[200px]">
                <DropdownMenuItem asChild>
                  <Link href={"/news?page=1"}>Tips & News</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href={"/fing-training"}>Training</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href={"/find-partner"}>Partner Offer</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href={"/find-event"}>Event</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href={"/about-us"}>About Us</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href={"/pricing"}>Pricing</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href={"/public-holiday"}>Public Holiday</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>
        </div>
        <div className="flex items-center gap-3">
          <Button asChild className="bg-themePrimary" size={"lg"}>
            <Link href={"/sign-in"}>LOGIN</Link>
          </Button>
          <Button asChild className="bg-themeSecondary" size={"lg"}>
            <Link href={"/sign-up"}>REGISTER</Link>
          </Button>
        </div>
      </header>
      <header className="flex lg:hidden items-center justify-between gap-10">
        <Link href={"/"}>
          <Image src={"/img/logo.svg"} alt="Logo" width={120} height={100} />
        </Link>
        <Sheet>
          <SheetTrigger>
            <Menu size={20} />
          </SheetTrigger>
          <SheetContent side={"left"}></SheetContent>
        </Sheet>
      </header>
    </section>
  );
};

export default Header;
