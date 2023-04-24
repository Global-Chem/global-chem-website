import { FaAddressBook } from "react-icons/fa"

const roles = [
    {
        title: 'Role',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error cumque tempore est ab possimus quisquam reiciendis tempora animi! Quaerat, saepe?',
    },
    {
        title: 'Role',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error cumque tempore est ab possimus quisquam reiciendis tempora animi! Quaerat, saepe?',
    },
    {
        title: 'Role',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error cumque tempore est ab possimus quisquam reiciendis tempora animi! Quaerat, saepe?',
    },
    {
        title: 'Role',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error cumque tempore est ab possimus quisquam reiciendis tempora animi! Quaerat, saepe?',
    },
    {
        title: 'Role',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error cumque tempore est ab possimus quisquam reiciendis tempora animi! Quaerat, saepe?',
    },
    {
        title: 'Role',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error cumque tempore est ab possimus quisquam reiciendis tempora animi! Quaerat, saepe?',
    },
    {
        title: 'Role',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error cumque tempore est ab possimus quisquam reiciendis tempora animi! Quaerat, saepe?',
    },
]

export default function OpenSource() {

    return (
        <section className="bg-white text-black mx-auto">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
          <div className="max-w-xl text-center mx-auto">
            <h2 className="text-3xl font-bold sm:text-4xl">Open Source Roles</h2>
      
            <p className="mt-4 text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
              dolores iure fugit totam iste obcaecati. Consequatur ipsa quod ipsum
              sequi culpa delectus, cumque id tenetur quibusdam, quos fuga minima.
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