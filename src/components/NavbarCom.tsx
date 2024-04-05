
"use client";
import { Button, Navbar } from "flowbite-react";
import Logo from "../../public/assets/image/vann-commerce.png";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function NavbarCom() {
  const pathname = usePathname();

  return (
    <Navbar fluid rounded className="w-[90%] mx-auto">
      <Navbar.Brand href="/">
        <Image src={Logo} width={50} height={60} className="mr-3 h-6 sm:h-9" alt="Logo" />
        <h1 className="text-md font-bold text-[#00407f] hidden md:block"><span className="text-[#fb2925]">VANN</span> COMMERCE</h1>
      </Navbar.Brand>
      <div className="flex md:order-2 gap-2">
        <Button>Sign In</Button>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="/" active className={`${pathname==="/" && 'font-bold'}`}>
          Home
        </Navbar.Link>
        <Navbar.Link href="./about" active className={`${pathname==="/about" && 'font-bold'}`}>
          About
        </Navbar.Link>
        <Navbar.Link href="./dashboard" active className={`${pathname==="/dashboard" && 'font-bold'}`}>
          Dashboard
        </Navbar.Link>
        <Navbar.Link href="./policy"  active className={`${pathname==="/policy" && 'font-bold'}`}>
          Policy
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
