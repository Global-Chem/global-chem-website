import * as React from "react";
import * as Tabs from "@radix-ui/react-tabs";
import ContributorCard from "./ContributorCard";

const tabsList = [
  {
    id: "science",
    title: "Science",
  },
  {
    id: "software",
    title: "Software",
  },
  {
    id: "translators",
    title: "Translators",
  },
  {
    id: "board",
    title: "Board",
  },
];

const technicalContributors = [
  {
    name: "Ruibin Liu",
    role: "Software Architect",
    imagepath: "/contributors/ruibin_liu.webp",
    links: {
      github: "https://github.com/Ruibin-Liu",
      linkedin: "https://linkedin.com/in/ruibin/",
    },
  },
  {
    name: "Sarah Gerrard",
    role: "Front-End / Application Developer",
    imagepath: "/contributors/sarah_gerrard.webp",
    links: {
      github: "https://github.com/ladybluenotes",
      linkedin: "https://linkedin.com/in/sarahgerrard/",
    },
  },
  {
    name: "Daniel Khavrutskii",
    role: "Software Developer",
    imagepath: "/contributors/daniel_khavrutskii.webp",
    links: {
      github: "https://github.com/dhavdc",
      linkedin: "https://linkedin.com/in/daniel-khavrutskii/",
    },
  },
];


const translatorContributors = [
  {
    name: "Mingtian Zhao",
    role: "English to Mandarin",
    imagepath: "",
    links: {
      github: "",
      linkedin: "",
    },
  },
  {
    name: "Takayuki Serizawa",
    role: "English to Japanese",
    imagepath: "",
    links: {
      github: "",
      linkedin: "https://linkedin.com/in/takayuki-serizawa-75875298/",
    },
  },
  {
    name: "Jared Deacon",
    role: "English to French",
    imagepath: "",
    links: {
      github: "",
      linkedin: "",
    },
  },
];

const scienceContributors = [
  {
    name: "Aziza Frank",
    role: "Medicinal Chemistry",
    imagepath: "/contributors/aziza_frank.webp",
    links: {
      github: "",
      linkedin: "https://linkedin.com/in/aziza-frank-4454a2132/",
    },
  },
  {
    name: "Aarion Romany",
    role: "Biophysicist",
    imagepath: "/contributors/aarion_romany.webp",
    links: {
      github: "",
      linkedin: "https://linkedin.com/in/aarionromany/",
    },
  },
  {
    name: "Nathaniel McClean",
    role: "Biochemist",
    imagepath: "/contributors/nathaniel_mcclean.webp",
    links: {
      github: "",
      linkedin: "https://linkedin.com/in/nathaniel-mcclean-a143951a2/",
    },
  },
  {
    name: "Anmol Kumar",
    role: "Quantum Chemist",
    imagepath: "/contributors/anmol_kumar.webp",
    links: {
      github: "https://github.com",
      linkedin: "https://linkedin.com/in/anmol-kumar-a73248160/",
    },
  },
  {
    name: "Jacob Weiner",
    role: "Bacteriologist",
    imagepath: "/contributors/jake_weiner.webp",
    links: {
      github: "https://github.com/jweiner12",
      linkedin: "",
    },
  },
  {
    name: "Sunhwan Jo",
    role: "Biochemist / Machine Learning Scientist",
    imagepath: "/contributors/sunhwan_jo.webp",
    links: {
      github: "https://github.com/sunhwan",
      linkedin: "https://linkedin.com/in/sunhwan",
    },
  },
  {
    name: "Bettina Lier",
    role: "Data Governor",
    imagepath: "/contributors/bettina_lier.webp",
    links: {
      github: "",
      linkedin: "https://linkedin.com/in/bettinalier/",
    },
  },
  {
    name: "Prabin Baral",
    role: "Computational Chemist",
    imagepath: "/contributors/prabin_baral.webp",
    links: {
      github: "",
      linkedin: "https://linkedin.com/in/prabin-baral-490080116/",
    },
  },
];

const managementContributors = [
  {
    name: "Suliman Sharif",
    role: "Chief Operations Officer",
    imagepath: "/contributors/suliman_sharif.webp",
    links: {
      github: "https://github.com/Sulstice",
      linkedin: "https://linkedin.comin/sulimansharif/",
    },
  },
  {
    name: "Josh Farrell",
    role: "Director of Cannabis",
    imagepath: "/contributors/josh_farrell.webp",
    links: {
      github: "https://github.com/joshinthecity",
      linkedin: "https://linkedin.com/in/josh-farrell/",
    },
  },
  {
    name: "Lauren Angulo",
    role: "Legal",
    imagepath: "/contributors/lauren_angulo.webp",
    links: {
      github: "",
      linkedin: "https://linkedin.com/in/lauren-angulo-76218567/",
    },
  },
];


export default function Contributors() {
  const [activeTab, setActiveTab] = React.useState(tabsList[0].id);

  const contributors = [
    {
      id: tabsList[0].id,
      list: scienceContributors,
    },
    {
      id: tabsList[1].id,
      list: technicalContributors,
    },

    {
      id: tabsList[2].id,
      list: translatorContributors,
    },
    {
      id: tabsList[3].id,
      list: managementContributors,
    },
  ];

  return (
    <section className="bg-white">
      <div className="container px-6 py-10 mx-auto">
        <h1 className="text-2xl font-semibold text-center text-gray-800 lg:text-3xl">
          Our team
        </h1>

        <p className="max-w-2xl mx-auto my-6 text-center text-gray-500">
          Our Community is a Collection of People who have dedicated their free time and expertise in their field to the project.
        </p>
        </div>

        <Tabs.Root defaultValue={tabsList[0].id} className="md:w-10/12 mx-auto">
          <Tabs.List
            aria-label="contributor tab list"
            className="flex items-center border border-red-800 rounded-xl md:space-x-4 w-fit mx-auto p-1"
          >
            {tabsList.map((tab) => (
              <Tabs.Trigger
                key={tab.id}
                value={tab.id}
                data-active={activeTab === tab.id}
                className={`px-4 py-2 text-sm font-medium capitalize rounded-xl md:px-6 transition
                  ${
                    activeTab === tab.id
                      ? "text-white bg-red-800 hover:bg-red-900"
                      : "text-red-800 bg-white hover:bg-red-100"
                  }`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.title}
              </Tabs.Trigger>
            ))}
          </Tabs.List>

          {contributors.map(({ id, list }) => (
            <Tabs.Content key={id} value={id}>
              <div className="flex flex-wrap w-9/12 mx-auto">
                {list.map((contributor) => (
                  <ContributorCard
                    key={contributor.name}
                    imagepath={contributor.imagepath}
                    name={contributor.name}
                    role={contributor.role}
                    links={contributor.links}
                  />
                ))}
              </div>
            </Tabs.Content>
          ))}
        </Tabs.Root>
    </section>
  );
}
