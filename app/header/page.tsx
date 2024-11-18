"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faTicket,
  faTimes,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-10 flex justify-between items-center bg-[#2B2B2B] hover:bg-[#141414] h-24 px-16 transition-all duration-300 ease-in-out ${
          isScrolled ? "bg-gray-800 text-white" : "bg-transparent text-gray-800"
        }`}
      >
        <div className="flex items-center">
          <Link className="text-3xl font-bold" href={"/"}>
            <FontAwesomeIcon icon={faTicket} className="mr-2 text-red-500" />
          </Link>
          <nav className="hidden text-s lg:flex ml-4 space-x-4">
            <Link href={"/"} className="text-white hover:text-[#E5E5E5] ">
              홈
            </Link>
            <Link
              href={"/popular"}
              className="text-white hover:text-[#E5E5E5] "
            >
              대세 콘텐츠
            </Link>
            <Link href={"/search"} className="text-white hover:text-[#E5E5E5] ">
              찾아보기
            </Link>
            <Link
              href={"/wishlist"}
              className="text-white hover:text-[#E5E5E5] "
            >
              내가 찜한 리스트
            </Link>
          </nav>
        </div>
        <div className="flex items-center lg:hidden">
          <button
            type="button"
            onClick={toggleMobileMenu}
            className="focus:outline-none"
          >
            <FontAwesomeIcon
              icon={isMobileMenuOpen ? faTimes : faBars}
              className="text-xl"
            />
          </button>
        </div>
        <div className="hidden lg:flex ml-4">
          <button
            type="button"
            className="text-white hover:text-[#E5E5E5] focus:outline-none"
          >
            <FontAwesomeIcon icon={faUser} className="mr-2 text-3xl " />
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
