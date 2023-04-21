import {
    FaCloud
} from 'react-icons/fa'

export default function Stats() {
    
    const stats = [
        {
            title: "Downloads",
            value: "180k+",
            icon: <FaCloud />
        },
        {
            title: "Visitors",
            value: "15k+",
            icon: <FaCloud />
        },
        {
            title: "Downloads",
            value: "180k+",
            icon: <FaCloud />
        },
        {
            title: "Visitors",
            value: "15k+",
            icon: <FaCloud />
        }
    ]

    return (
        <section className="flex flex-col md:flex-row justify-between w-full py-8">
            {stats.map((stat, index) => (
                    <div key={index} className="w-[300px] flex flex-row m-auto bg-gradient-to-r from-red-700 via-red-800 to-red-900 p-6 rounded-lg border-2 border-red-500">
                        <div className="my-auto mr-10 w-2/3">
                            <div className="text-lg text-red-300">{stat.title}</div>
                            <div className="text-4xl text-red-100">{stat.value}</div>
                        </div>
                        <div className="text-red-300 my-auto bg-gradient-to-l from-red-700 via-red-800 to-red-900 rounded-full p-4 w-1/3">
                            {stat.icon}
                        </div>
                    </div>
            ))}
    </section>
    )
}