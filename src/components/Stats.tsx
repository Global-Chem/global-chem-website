import {
    FaCloud,
    FaCode,
    FaFileDownload,
    FaLaptop,
    FaUsers
} from 'react-icons/fa'

export default function Stats() {
    
    const stats = [
        {
            title: "Views",
            value: "1.5M +",
            icon: <FaLaptop />
        },
        {
            title: "Visitors",
            value: "15k+",
            icon: <FaUsers />
        },
        {
            title: "Downloads",
            value: "180k +",
            icon: <FaFileDownload />
        },
        {
            title: "Lines of Code",
            value: "20k+",
            icon: <FaCode />
        }
    ]

    return (
        <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-6 xl:gap-8 pb-8" style={{ gridAutoFlow: 'dense' }}>
            {stats.map((stat, index) => (
                    <div key={index} className="w-[250px] md:w-[300px] flex flex-row m-auto bg-gradient-to-r from-red-700 via-red-800 to-red-900 p-6 rounded-lg border-2 border-red-500">
                        <div className="my-auto md:mr-10 w-2/3">
                            <div className="md:text-lg text-red-300">{stat.title}</div>
                            <div className="text-xl md:text-3xl text-red-100">{stat.value}</div>
                        </div>
                        <div className="text-red-300 my-auto bg-gradient-to-l from-red-700 via-red-800 to-red-900 rounded-full p-4 text-3xl">
                            {stat.icon}
                        </div>
                    </div>
            ))}
    </section>
    )
}