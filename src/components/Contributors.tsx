import * as React from "react";
import * as Tabs from "@radix-ui/react-tabs";
import ContributorCard from "./ContributorCard";

const tabsList = [
  {
    id: "software",
    title: "Software",
  },
  {
    id: "science",
    title: "Science & Research",
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
    links: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
    },
  },
  {
    name: "Sarah Gerrard",
    role: "Front-End/Application Engineer",
    links: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
    },
  },
  {
    name: "Daniel Khavrutskii",
    role: "Software Engineer",
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
    links: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
    },
  },
  {
    name: "Takayuki Serizawa",
    role: "English to Japanese",
    links: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
    },
  },
  {
    name: "Jared Deacon",
    role: "English to French",
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
    links: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
    },
  },
  {
    name: "Aarion Romany",
    role: "Biophysicist",
    links: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
    },
  },
  {
    name: "Nathaniel McClean",
    role: "Biochemist",
    links: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
    },
  },
  {
    name: "Anmol Kumar",
    role: "Quantum Chemist",
    links: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
    },
  },
  {
    name: "Jacob Weiner",
    role: "Bacteriologist",
    links: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
    },
  },
  {
    name: "Sunhwan Jo",
    role: "Biochemist/Machine Learning Scientist",
    links: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
    },
  },
  {
    name: "Bettina Lier",
    role: "Data Governor",
    links: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
    },
  },
  {
    name: "Prabin Baral",
    role: "Computational Chemist",
    links: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
    },
  },
];

const managementContributors = [
  {
    name: "Suliman Sharif",
    role: "Founder",
    links: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
    },
  },
  {
    name: "Josh Farrell",
    role: "Director of Cannabis",
    links: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
    },
  },
  {
    name: "Lauren Angulo",
    role: "Lawyer",
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
      list: technicalContributors,
    },
    {
      id: tabsList[1].id,
      list: scienceContributors,
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

        <Tabs.Root defaultValue={tabsList[0].id} className="w-10/12 mx-auto">
          <Tabs.List
            aria-label="contributor tab list"
            className="flex items-center border border-red-800 rounded-xl space-x-4 w-fit mx-auto p-1"
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
              <div className="justify-center items-center grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
                {list.map((contributor) => (
                  <ContributorCard
                    key={contributor.name}
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
