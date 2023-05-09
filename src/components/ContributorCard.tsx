import { FaGithub, FaLinkedin } from "react-icons/fa";
import Image from "next/image";
import React from "react";

export interface ContributorCardProps {
  name: string;
  imagepath: string;
  role: string;
  links: {
    github: string;
    linkedin: string;
  };
}

export default function ContributorCard({
  imagepath,
  name,
  role,
  links,
}: ContributorCardProps) {
  return (
    <div className="grid grid-flow-row border-2 border-black rounded-lg w-[200px] h-[310px] mx-auto my-4 text-center">
      <div className="p-4">
        {imagepath ? (
          <Image
            src={imagepath}
            width={220}
            height={220}
            alt="no picture found"
            className="rounded-full"
          />
        ) : (
          <Image
            src="/placeholder.png"
            width={220}
            height={220}
            alt="no picture found"
            className="rounded-full"
          />
        )}
      </div>
      <div className="pb-3 justify-center items-center">
        <h2 className="text-lg font-semibold text-gray-700 capitalize">
          {name}
        </h2>
        <h3 className= "text-gray-500 capitalize text-sm">{role}</h3>
        <div className="mt-1 space-x-4 flex justify-center items-center">
          <a href={links.linkedin} aria-label="LinkedIn">
            <FaLinkedin className="hover:text-red-800 text-red-900 text-xl" />
          </a>
          <a href={links.github} aria-label="Github">
            <FaGithub className="hover:text-red-800 text-red-900 text-xl" />
          </a>
        </div>
      </div>
    </div>
  );
}
