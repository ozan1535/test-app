"use client";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
import { useAppContext } from "@/app/context";
import HeaderElements from "./HeaderElements";
import { getHeaderMenu, headerActions, headerLogo } from "./headerItems";
import Login from "../Login/Login";
import Logout from "../Logout/Logout";

export default function Header() {
  const params = usePathname();
  const router = useRouter();
  const { setModalProps } = useAppContext();
  const { data: session } = useSession();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [params]);
  return (
    <>
      <nav className="hidden md:flex bg-green-300 h-12 text-black fixed w-full top-0 left-0 justify-between z-10">
        <HeaderElements
          data={headerLogo}
          handleFunction={() => router.push("/")}
        />
        <HeaderElements data={getHeaderMenu(session)} />
        <HeaderElements
          data={headerActions}
          handleFunction={() => {
            setModalProps((prev) => ({
              ...prev,
              isOpen: true,
              component: session ? (
                <Logout setModalProps={setModalProps} />
              ) : (
                <Login />
              ),
            }));
          }}
        />
      </nav>

      <nav className="fixed grid grid-cols-3 md:hidden bg-green-300 h-12 text-black w-full top-0 left-0 justify-center z-10">
        <button
          onClick={toggleMobileMenu}
          className="w-full flex justify-center items-center"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
        <HeaderElements
          data={headerLogo}
          handleFunction={() => router.push("/")}
        />
        <HeaderElements
          data={headerActions}
          handleFunction={() => {
            setModalProps((prev) => ({
              ...prev,
              isOpen: true,
              component: session ? (
                <Logout setModalProps={setModalProps} />
              ) : (
                <Login />
              ),
            }));
          }}
        />
        {isMobileMenuOpen && (
          <div className="bg-green-300 text-black w-full absolute top-12 left-0 z-10">
            <HeaderElements data={getHeaderMenu(session)} />
          </div>
        )}
      </nav>
    </>
  );
}
