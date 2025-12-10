import Link from "next/link";

export default function GetInvolved() {
    return (
        <div className="bg-white">
            {/* Header */}
            <div className="bg-gray-50 py-16 sm:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl font-extrabold text-shpe-blue sm:text-5xl sm:tracking-tight lg:text-6xl">
                        Get Involved
                    </h1>
                    <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
                        Join the familia and kickstart your professional journey with SHPE UIUC.
                    </p>
                </div>
            </div>

            {/* Membership Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8">Committees & Teams</h2>
                    <div className="space-y-10">
                        <Link href="/get-involved/new-member-roundtable" className="block hover:bg-gray-50 rounded-lg transition cursor-pointer p-4">
                            <h3 className="text-xl font-bold text-shpe-blue mb-2">New Member Roundtable</h3>
                            <p className="text-gray-600 mb-2">The Roundtable (RT) was created in the 1993-94 year in order to develop new SHPE members into leaders of the organization. The RT works by creating a microcosm of the chapter. It is composed of mainly freshman but is open to any new members. The committee then elects its own e-board. Throughout the school year, members of the RT, elected or not, think of and plan multiple events focused around SHPE's core values (Familia, Service, Education, and Resilience). The planning and execution of these events serve to deepen the connection our new members have with our chapter and the SHPE community.</p>
                            <p className="text-sm text-shpe-orange font-semibold">Cain Gonzalez | <span className="underline">shpe.uiuc.vp.internal@gmail.com</span></p>
                            <p className="text-sm text-gray-500">Meeting time: Sundays 4-5pm Noyes 157</p>
                        </Link>
                        <Link href="/get-involved/external-team" className="block hover:bg-gray-50 rounded-lg transition cursor-pointer p-4">
                            <h3 className="text-xl font-bold text-shpe-blue mb-2">External Team</h3>
                            <p className="text-gray-600 mb-2">The External Team aims to create corporate connections and provide meaningful workshops and events to our chapter members so that they can enhance themselves professionally and personally. With External Team, our chapter builds lasting connections with companies and also helps our members get noticed in professional settings.</p>
                            <p className="text-sm text-shpe-orange font-semibold">Michael Villanueva | <span className="underline">exec.shpe.uiuc@gmail.com</span></p>
                            <p className="text-sm text-gray-500">Meeting time: Mondays 5-6pm Engineering hall 112</p>
                        </Link>
                        <Link href="/get-involved/treasurers-committee" className="block hover:bg-gray-50 rounded-lg transition cursor-pointer p-4">
                            <h3 className="text-xl font-bold text-shpe-blue mb-2">Treasurer's Committee</h3>
                            <p className="text-gray-600 mb-2">The Treasurer's Cabinet is dedicated to generating funds within the University. We plan and execute all kinds of fundraisers from selling tamales on the quad to working a concession stand at ILLINI basketball home games. The funds generated from our sales go towards various SHPE|UIUC endeavors. Some fundraisers will have their proceeds donated to a charity and some will be kept to fund SHPE|UIUC. We use the funds to purchase equipment for the office or necessities for other teams. Other teams depend on corporate sponsors and our fundraising so they can run their programs or activites such as the chapter's HSV Program or to host this website. Also, our fundraising is sometimes used to subsidize SHPE|UIUC gear or conference travel.</p>
                            <p className="text-sm text-shpe-orange font-semibold">Luis Castro | <span className="underline">shpe.uiuc.treasurer@gmail.com</span></p>
                            <p className="text-sm text-gray-500">Meeting time: Wednesdays 6-7pm Everitt 2101</p>
                        </Link>
                        <Link href="/get-involved/technical-projects" className="block hover:bg-gray-50 rounded-lg transition cursor-pointer p-4">
                            <h3 className="text-xl font-bold text-shpe-blue mb-2">Technical Projects</h3>
                            <p className="text-gray-600 mb-2">SHPE's Technical Projects Team was founded with the purpose of exposing our Engineers to real-world problems and projects. Each year SHPE's Technical Projects Committee takes on on multiple projects ranging from robots for the Midwestern Robotics Design Competition (MRDC) to smaller including for the Engineering Open House (EOH) exhibits. The projects will be displayed in the Engineering Open House at the University of Illinois. During EOH, our projects will be displayed in the Electrical and Computer Engineering Building. The Technical Projects Team is where a lot of students get their first taste of hands-on engineering that will serve them well in their careers.</p>
                            <p className="text-sm text-shpe-orange font-semibold">Erick Ayala | <span className="underline">shpe.uiuc.technicalchair@gmail.com</span></p>
                            <p className="text-sm text-gray-500">Meeting time: Sundays 2-4pm ECE OpenLab</p>
                        </Link>
                        <Link href="/get-involved/membershpe" className="block hover:bg-gray-50 rounded-lg transition cursor-pointer p-4">
                            <h3 className="text-xl font-bold text-shpe-blue mb-2">MemberSHPE</h3>
                            <p className="text-gray-600 mb-2">The MemberSHPE Committee was established in 2016 to provide the chapter with social events and more ways to get involved with the organization. In 2018, the KinSHPE Program was created by the committee to encourage mentorship and friendly competition between our members. Restructured in 2020, the KinSHPE Program has evolved to now feature four "houses" that members are sorted into to support and create the sense of familia while adding in fun and competition. Overall, the committee's efforts promote a strong sense of familia and build lasting memories for our organization's members.</p>
                            <p className="text-sm text-shpe-orange font-semibold">Geovanny Andino | <span className="underline">shpe.uiuc.membership@gmail.com</span></p>
                            <p className="text-sm text-gray-500">Meeting time: Tuesday 7-8pm loomis 136</p>
                        </Link>
                        <Link href="/get-involved/high-school-outreach" className="block hover:bg-gray-50 rounded-lg transition cursor-pointer p-4">
                            <h3 className="text-xl font-bold text-shpe-blue mb-2">High School Outreach</h3>
                            <p className="text-gray-600 mb-2">SHPE's mission is to empower the Hispanic community to realize its fullest potential and to impact the world through STEM awareness, access, support and development. Through the programs that the Outreach Team organizes, SHPE will inspire the next generation of innovators this country needs! SHPE|UIUC aims to motivate minority students to pursue a higher education and increase the quantity of minorities in STEM fields</p>
                            <p className="text-sm text-shpe-orange font-semibold">Gerardo Paramo | <span className="underline">shpe.uiuc.outreach@gmail.com</span></p>
                            <p className="text-sm text-gray-500">Meeting time: Wednesdays 7-8pm Everitt 2101</p>
                        </Link>
                        <Link href="/get-involved/community-service" className="block hover:bg-gray-50 rounded-lg transition cursor-pointer p-4">
                            <h3 className="text-xl font-bold text-shpe-blue mb-2">Community Service</h3>
                            <p className="text-gray-600 mb-2">Our Community Service Team is a great way to not only get involved in SHPE but strive towards our goal of bettering the hispanic community. SHPE strives to change lives by empowering the Hispanic community to realize its fullest potential and to impact the world through STEM awareness, access, support and development. SHPE|UIUC Community Service accomplishes this through the variety of programs it hosts at all pre-college levels.</p>
                            <p className="text-sm text-shpe-orange font-semibold">Jasmin Salgado | <span className="underline">shpe.uiuc.service@gmail.com</span></p>
                            <p className="text-sm text-gray-500">Meeting time: Sundays 7-8pm NHB 2070</p>
                        </Link>
                        <Link href="/get-involved/graduate-ambassadors" className="block hover:bg-gray-50 rounded-lg transition cursor-pointer p-4">
                            <h3 className="text-xl font-bold text-shpe-blue mb-2">Graduate Ambassadors</h3>
                            <p className="text-gray-600 mb-2">Our Graduate Ambassadors Team is here to discuss Graduate School Opportunities! From getting to meet other grad students to learning more about your own interest in graduate school and how to get there, SHPE Graduate Ambassadors is here to help members learn more about a higher education</p>
                            <p className="text-sm text-shpe-orange font-semibold">Juan Rojas | <span className="underline">shpe.uiuc.ga@gmail.com</span></p>
                            <p className="text-sm text-gray-500">Meeting time: Tuesdays 6-7pm Everitt 2101</p>
                        </Link>
                        <Link href="/get-involved/alumni-relations" className="block hover:bg-gray-50 rounded-lg transition cursor-pointer p-4">
                            <h3 className="text-xl font-bold text-shpe-blue mb-2">Alumni Relations</h3>
                            <p className="text-gray-600 mb-2">The Alumni Relations Committee was established in 2023 to create events and network opportunities with alumni. It focuses on alumni engagement as well as connecting current members with alumni. In 2024, historical aspect of the Alumni Relations Committee was added to expand the historical records and ensure that current members are knowledge of the chapter's history. Members of this committee will focus on strength our connection to our alumni with events, promotional material, interviews and research into the past. Our goal to unite our past with our present to strength our future.</p>
                        </Link>
                    </div>
                </div>
            </div>


            {/* Ready to Join Banner */}
            <div className="bg-shpe-orange py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between">
                    <div className="mb-6 md:mb-0 text-center md:text-left">
                        <h2 className="text-2xl font-bold text-white mb-2">Have questions?</h2>
                        <p className="text-white/90">Reach out to our executive board or come to our next general meeting.</p>
                    </div>
                    <Link href="/contact" className="bg-white text-shpe-orange px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors shadow-sm">
                        Contact Us
                    </Link>
                </div>
            </div>
        </div>
    );
}