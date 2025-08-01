import { Session } from "next-auth";
import { IMenuItem, ITestCategories } from "./Header.types";

export const headerLogo = [
  {
    href: "/",
    name: "Testarot",
    isLogo: true,
  },
];

export const getHeaderMenu = (session: Session | null) => {
  const menuItems: IMenuItem[] = [
    {
      href: "#",
      name: "TESTS",
      hasDropdown: true,
    },
    {
      href: "/astrology",
      name: "ASTROLOGY",
    },
    {
      href: "/blog",
      name: "BLOG",
    },
  ];

  if (session?.user && session?.user.email === "ozanbilgic1535@gmail.com") {
    menuItems.push({
      href: "/manage",
      name: "MANAGE",
    });
  }
  return menuItems;
};

export const headerActions = [
  {
    source: "/search.svg",
    href: "/search",
    isPicture: true,
    name: "search",
  },
  {
    source: "/login.svg",
    href: "#",
    isPicture: true,
    name: "login",
  },
];

export const testCategories: ITestCategories[] = [
  {
    name: "Psychology Tests",
  },
  {
    name: "Astrology Tests",
  },
  {
    name: "Relationship Tests",
  },
  {
    name: "Food Tests",
  },
  {
    name: "Personality Tests",
  },
  {
    name: "General Knowledge Tests",
  },
];
