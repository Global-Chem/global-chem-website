import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaDiscord } from "react-icons/fa";

export default function Header() {
  return (
    <header>
      <div className="flex justify-between items-center pt-3">
        <div className="flex w-full place-content-end">
          <Link href="https://discord.gg/dK2agwXSE7">
            <FaDiscord className="text-white text-4xl hover:text-red-200" />
          </Link>
        </div>
      </div>
    </header>
  );
}
