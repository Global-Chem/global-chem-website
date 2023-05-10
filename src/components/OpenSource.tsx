import { FaAddressBook } from "react-icons/fa"

const roles = [
    {
        title: 'Front-End Engineer',
        description: 'Expand our ReactApp Collection for Cheminformatics Tools based on NodeJS, Python, and Github Actions REST.',
    },
    {
        title: 'Lead Front-End Engineer',
        description: 'Oversee Front-End Engineering Architecture and Generalizing ReactApp Production.',
    },
    {
        title: 'Knowledge Graph Engineer',
        description: 'CYPHER Query API with Neo4J and intereopability with other Knowledge Graphs such as RDFs, OWL, and OBO data structures.',
    },
    {
        title: 'Github Cloud Operations Engineer',
        description: 'Expanding GitHub action pipelines and work with the Bot and Front-End Engineers. Budget control and performance of workflows.',
    },
    {
        title: 'Discord Bot Engineer',
        description: 'Machine learning bot interactions with user commands. Expand LLM technology into bots for efficient user interaction.',
    },
    {
        title: 'Machine Learning Engineer',
        description: 'Work on Convolutional and Recurrent Neural Networks model for accuracy, efficiency for validation and generative AI.',
    },
    {
        title: 'Deep Learning Organic Chemist',
        description: 'Design lists of functional groups for different sub-communities to expand generative AI capabilities',
    },
    {
      title: 'Analytical Data Chemist',
      description: 'Analyze instrument data for characterizing different molecular compounds.',
    },
    {
      title: 'Cheminformatician',
      description: 'Research analysis and machine learning tools for analyzing different SMILES to gain a variety of information. Select useful connections to expand front-end and bot technology',
    },
    {
    title: 'Geneticist',
    description: 'Map useful connections between chemical compositions to phenology of different plant species.',
    },
    {
      title: 'Quality Assurance Engineer',
      description: 'Expand pipeline robustness built with Github Actions, Python Nose, and Pytest for testing and integrate compliance standards into software.',
    },
    {
      title: 'Compliance Advisor',
      description: 'Ensure software meets 21 CFR Part 11 Compliance according to the US FDA Guidelines. Build Technical documentation for other government agencies both US and Global. Ensure instrumentation documented is compliant with WHO standards on characterization of molecules',
    },
]

export default function OpenSource() {

    return (
        <section className="bg-white text-black mx-auto w-10/12">
        <div className="mx-auto px-2 py-8 sm:py-12 sm:px-2 lg:py-16 lg:px-8">
          <div className="max-w-xl text-center mx-auto">
            <h2 className="text-3xl font-bold sm:text-4xl">Open Source Roles</h2>

            <p className="mt-4 text-gray-700">
              We are an ever evolving community and our active needs change based on what activities are going on.
              To find out where you might fit into contributing or helping, please navigate our open roles.
            </p>
          </div>

          <div
            className="mt-8 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-2 md:gap-12 lg:grid-cols-3"
          >
            {roles.map((role) => (
                <div key={role.title} className="flex">
                <div>
                    <span className="flex items-center justify-center h-12 w-12 rounded-md text-red-800 border-2 border-red-800 mr-4">
                        <FaAddressBook />
                    </span>
                </div>
                <div className="">
                    <h5 className="text-lg leading-6 font-medium text-gray-900">
                        {role.title}
                    </h5>
                    <p className="mt-2 text-base leading-6 text-gray-500">
                        {role.description}
                    </p>
                </div>
                </div>
            ))}
          </div>
        </div>
      </section>
    )
}
