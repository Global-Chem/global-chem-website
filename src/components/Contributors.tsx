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
    imagepath: "/ruibin_liu.jpeg",
    links: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
    },
  },
  {
    name: "Sarah Gerrard",
    role: "Front-End / Application Engineer",
    imagepath: "/sarah_gerrard.jpeg",
    links: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
    },
  },
  {
    name: "Daniel Khavrutskii",
    role: "Software Engineer",
    imagepath: "/daniel_khavrutskii.jpeg",
    links: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
    },
  },
];


const translatorContributors = [
  {
    name: "Mingtian Zhao",
    role: "English to Mandarin",
    imagepath: "",
    links: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
    },
  },
  {
    name: "Takayuki Serizawa",
    role: "English to Japanese",
    imagepath: "",
    links: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
    },
  },
  {
    name: "Jared Deacon",
    role: "English to French",
    imagepath: "",
    links: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
    },
  },
];

const scienceContributors = [
  {
    name: "Aziza Frank",
    role: "Medicinal Chemistry",
    imagepath: "/aziza_frank.jpeg",
    links: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
    },
  },
  {
    name: "Aarion Romany",
    role: "Biophysicist",
    imagepath: "/aarion_romany.jpeg",
    links: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
    },
  },
  {
    name: "Nathaniel McClean",
    role: "Biochemist",
    imagepath: "/nathaniel_mcclean.jpeg",
    links: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
    },
  },
  {
    name: "Anmol Kumar",
    role: "Quantum Chemist",
    imagepath: "/anmol_kumar.jpeg",
    links: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
    },
  },
  {
    name: "Jacob Weiner",
    role: "Bacteriologist",
    imagepath: "/jake_weiner.png",
    links: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
    },
  },
  {
    name: "Sunhwan Jo",
    role: "Biochemist / Machine Learning Scientist",
    imagepath: "/sunhwan_jo.jpeg",
    links: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
    },
  },
  {
    name: "Bettina Lier",
    role: "Data Governor",
    imagepath: "/bettina_lier.jpeg",
    links: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
    },
  },
  {
    name: "Prabin Baral",
    role: "Computational Chemist",
    imagepath: "/prabin_baral.jpeg",
    links: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
    },
  },
];

const managementContributors = [
  {
    name: "Suliman Sharif",
    role: "Chief Operations Officer",
    imagepath: "/suliman_sharif.jpeg",
    links: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
    },
  },
  {
    name: "Josh Farrell",
    role: "Director of Cannabis",
    imagepath: "/josh_farrell.jpeg",
    links: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
    },
  },
  {
    name: "Lauren Angulo",
    role: "Legal",
    imagepath: "/lauren_angulo.jpeg",
    links: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
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
      <div className="container px-6 py-10 mx-auto w-10/12">
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
