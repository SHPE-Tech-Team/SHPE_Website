export default function Resources() {
    const resourceCategories = [
        {
            title: "Academic Support",
            links: [
                { name: "Grainger College of Engineering", url: "#" },
                { name: "CARE Tutoring", url: "#" },
                { name: "Writer's Workshop", url: "#" },
                { name: "Course Explorer", url: "#" },
            ]
        },
        {
            title: "Career Development",
            links: [
                { name: "Handshake", url: "#" },
                { name: "resume.shpe.org", url: "#" },
                { name: "ECS (Engineering Career Services)", url: "#" },
                { name: "LinkedIn Learning", url: "#" },
            ]
        },
        {
            title: "National SHPE",
            links: [
                { name: "SHPE National Website", url: "https://shpe.org" },
                { name: "SHPE Connect", url: "#" },
                { name: "Convention Info", url: "#" },
                { name: "Scholarships", url: "#" },
            ]
        },
    ];

    return (
        <div className="bg-white">
            {/* Header */}
            <div className="bg-gray-50 py-16 sm:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl font-extrabold text-shpe-blue sm:text-5xl sm:tracking-tight lg:text-6xl">
                        Member Resources
                    </h1>
                    <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
                        Everything you need to succeed academically and professionally.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {resourceCategories.map((category, index) => (
                        <div key={index}>
                            <h3 className="text-xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-2">{category.title}</h3>
                            <ul className="space-y-4">
                                {category.links.map((link, linkIndex) => (
                                    <li key={linkIndex}>
                                        <a
                                            href={link.url}
                                            className="group flex items-center text-gray-600 hover:text-shpe-blue transition-colors"
                                        >
                                            <span className="w-2 h-2 bg-shpe-orange rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
