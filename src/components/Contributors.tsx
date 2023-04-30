import * as React from "react";
import * as Tabs from "@radix-ui/react-tabs";
import ContributorCard from "./ContributorCard";

const tabsList = [
  {
    id: "technical",
    title: "Technical",
  },
  {
    id: "science",
    title: "Science & Research",
  },
  {
    id: "management",
    title: "Management",
  },
  {
    id: "business",
    title: "Business",
  },
];

const technicalContributors = [
  {
    name: "John Doe",
    role: "Software Engineer",
    links: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
    },
  },
  {
    name: "John Doe",
    role: "Software Engineer",
    links: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
    },
  },
  {
    name: "John Doe",
    role: "Software Engineer",
    links: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
    },
  },
  {
    name: "John Doe",
    role: "Software Engineer",
    links: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
    },
  },
];

const scienceContributors = [
  {
    name: "John Doe",
    role: "Software Engineer",
    links: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
    },
  },
  {
    name: "John Doe",
    role: "Software Engineer",
    links: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
    },
  },
  {
    name: "John Doe",
    role: "Software Engineer",
    links: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
    },
  },
  {
    name: "John Doe",
    role: "Software Engineer",
    links: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
    },
  },
];

const managementContributors = [
  {
    name: "John Doe",
    role: "Software Engineer",
    links: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
    },
  },
  {
    name: "John Doe",
    role: "Software Engineer",
    links: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
    },
  },
  {
    name: "John Doe",
    role: "Software Engineer",
    links: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
    },
  },
  {
    name: "John Doe",
    role: "Software Engineer",
    links: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
    },
  },
];

const businessContributors = [
  {
    name: "John Doe",
    role: "Software Engineer",
    links: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
    },
  },
  {
    name: "John Doe",
    role: "Software Engineer",
    links: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
    },
  },
  {
    name: "John Doe",
    role: "Software Engineer",
    links: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
    },
  },
  {
    name: "John Doe",
    role: "Software Engineer",
    links: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
    },
  },
  {
    name: "John Doe",
    role: "Software Engineer",
    links: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
    },
  },
  {
    name: "John Doe",
    role: "Software Engineer",
    links: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
    },
  },
  {
    name: "John Doe",
    role: "Software Engineer",
    links: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
    },
  },
  {
    name: "John Doe",
    role: "Software Engineer",
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
      list: managementContributors,
    },
    {
      id: tabsList[3].id,
      list: businessContributors,
    },
  ];

  return (
    <section className="bg-white">
      <div className="container px-6 py-10 mx-auto">
        <h1 className="text-2xl font-semibold text-center text-gray-800 lg:text-3xl">
          Our team
        </h1>

        <p className="max-w-2xl mx-auto my-6 text-center text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo incidunt
          ex placeat modi magni quia error alias, adipisci rem similique, at
          omnis eligendi optio eos harum.
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
