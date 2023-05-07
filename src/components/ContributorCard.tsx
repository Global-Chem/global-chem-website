import {
    FaGithub,
    FaLinkedin,
} from 'react-icons/fa';

export interface ContributorCardProps {
    name: string;
    role: string;
    links: {
        github: string;
        linkedin: string;
    }
}

export default function ContributorCard({ name, role, links }: ContributorCardProps) {

    return (
        <div className="flex flex-col items-center justify-center text-center border-2 border-black rounded-lg p-2 w-[270px] h-[150px] mx-auto my-2">
            <h2 className="text-2xl font-semibold text-gray-700 capitalize overflow-auto">
                {name}
            </h2>
            <h3 className="mt-2 text-gray-500 capitalize">{role}</h3>
            <div className="mt-3 space-x-4 flex">
                <a href={links.linkedin} aria-label="LinkedIn">
                    <FaLinkedin className="hover:text-red-800 text-red-900 text-xl" />
                </a>
               <a href={links.github} aria-label="Github">
                    <FaGithub className="hover:text-red-800 text-red-900 text-xl" />
                </a>
            </div>
        </div>
    )
}