"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { IoIosBug } from "react-icons/io";
import classNames from "classnames";

const NavBar = () => {
  const currentPath = usePathname();
  const links = [
    { label: "Dashboard", href: "/" },
    { label: "Issues", href: "/issues/list" },
  ];

  return (
    <nav className="flex space-x-6 border-b mb-5 px-5 h-14 items-center">
      <Link href="/">
        <IoIosBug />
      </Link>
      <ul className="flex space-x-6">
        {links.map(({ label, href }) => (
          <li key={label}>
            <Link
              className={classNames({
                "text-zinc-900": href === currentPath,
                "text-zinc-500": href !== currentPath,
                "hover:text-zinc-800 transition-colors": true,
              })}
              href={href}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
