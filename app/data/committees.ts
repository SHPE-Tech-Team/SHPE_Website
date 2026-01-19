export interface Committee {
    id: string; // Used for the slug
    title: string;
    shortDescription: string;
    fullDescription: string;
    contact: string;
    email: string;
    meeting: string;
    image?: string; // Optional image for the specific committee page
    leads?: { name: string; role: string; image?: string }[];
    links?: { label: string; url: string }[];
}

export const committees: Committee[] = [
    {
        id: "new-member-roundtable",
        title: "New Member Roundtable",
        shortDescription: "Develop your leadership skills and deepen your connection to the SHPE familia in this microcosm of the chapter.",
        fullDescription: "The Roundtable (RT) was created in the 1993-94 year in order to develop new SHPE members into leaders of the organization. The RT works by creating a microcosm of the chapter. It is composed of mainly freshman but is open to any new members. The committee then elects its own e-board. Throughout the school year, members of the RT, elected or not, think of and plan multiple events focused around SHPE's core values (Familia, Service, Education, and Resilience). The planning and execution of these events serve to deepen the connection our new members have with our chapter and the SHPE community.",
        contact: "Krystal Hernandez",
        email: "shpe.uiuc.vp.internal@gmail.com",
        meeting: "Sundays 4-5pm Noyes 157"
    },
    {
        id: "external-team",
        title: "External Team",
        shortDescription: "Build corporate connections and organize professional development events for the chapter.",
        fullDescription: "The External Team aims to create corporate connections and provide meaningful workshops and events to our chapter members so that they can enhance themselves professionally and personally. With External Team, our chapter builds lasting connections with companies and also helps our members get noticed in professional settings.",
        contact: "Alberto Pabon-Castejon",
        email: "exec.shpe.uiuc@gmail.com",
        meeting: "Mondays 5-6pm Engineering hall 112"
    },
    {
        id: "treasurers-committee",
        title: "Treasurer's Committee",
        shortDescription: "Manage funds and organize exciting fundraisers to support SHPE|UIUC endeavors.",
        fullDescription: "The Treasurer's Cabinet is dedicated to generating funds within the University. We plan and execute all kinds of fundraisers from selling tamales on the quad to working a concession stand at ILLINI basketball home games. The funds generated from our sales go towards various SHPE|UIUC endeavors. Some fundraisers will have their proceeds donated to a charity and some will be kept to fund SHPE|UIUC. We use the funds to purchase equipment for the office or necessities for other teams.",
        contact: "Ceejay Costes Araña",
        email: "treasurer.shpe.uiuc@gmail.com",
        meeting: "Wednesdays 6-7pm Everitt 2101"
    },
    {
        id: "technical-projects",
        title: "Technical Projects",
        shortDescription: "Gain hands-on engineering experience by working on real-world problems and projects.",
        fullDescription: "SHPE's Technical Projects Team was founded with the purpose of exposing our Engineers to real-world problems and projects. Each year SHPE's Technical Projects Committee takes on on multiple projects ranging from robots for the Midwestern Robotics Design Competition (MRDC) to smaller including for the Engineering Open House (EOH) exhibits. The projects will be displayed in the Engineering Open House at the University of Illinois.",
        contact: "Juan Fragoso",
        email: "shpe.uiuc.technicalchair@gmail.com",
        meeting: "Sundays 2-4pm ECE OpenLab"
    },
    {
        id: "membershpe",
        title: "MemberSHPE",
        shortDescription: "Plan social events and foster a strong sense of familia through the KinSHPE program.",
        fullDescription: "The MemberSHPE Committee was established in 2016 to provide the chapter with social events and more ways to get involved with the organization. In 2018, the KinSHPE Program was created by the committee to encourage mentorship and friendly competition between our members. Restructured in 2020, the KinSHPE Program has evolved to now feature four 'houses' that members are sorted into to support and create the sense of familia while adding in fun and competition.",
        contact: "Isaac Gomez-Ibarra & Litzy Melchor",
        email: "shpe.uiuc.membership@gmail.com",
        meeting: "Tuesday 7-8pm Loomis 136"
    },
    {
        id: "high-school-outreach",
        title: "High School Outreach",
        shortDescription: "Inspire the next generation of innovators by promoting STEM awareness in the community.",
        fullDescription: "SHPE's mission is to empower the Hispanic community to realize its fullest potential and to impact the world through STEM awareness, access, support and development. Through the programs that the Outreach Team organizes, SHPE will inspire the next generation of innovators this country needs! SHPE|UIUC aims to motivate minority students to pursue a higher education and increase the quantity of minorities in STEM fields.",
        contact: "Yasmine Rios",
        email: "shpe.uiuc.outreach@gmail.com",
        meeting: "Wednesdays 7-8pm Everitt 2101"
    },
    {
        id: "community-service",
        title: "Community Service",
        shortDescription: "Give back and better the Hispanic community through service and STEM outreach.",
        fullDescription: "Our Community Service Team is a great way to not only get involved in SHPE but strive towards our goal of bettering the hispanic community. SHPE strives to change lives by empowering the Hispanic community to realize its fullest potential and to impact the world through STEM awareness, access, support and development. SHPE|UIUC Community Service accomplishes this through the variety of programs it hosts at all pre-college levels.",
        contact: "Alexis Villalobos",
        email: "shpe.uiuc.service@gmail.com",
        meeting: "Sundays 7-8pm NHB 2070"
    },
    {
        id: "graduate-ambassadors",
        title: "Graduate Ambassadors",
        shortDescription: "Explore graduate school opportunities and connect with current grad students.",
        fullDescription: "Our Graduate Ambassadors Team is here to discuss Graduate School Opportunities! From getting to meet other grad students to learning more about your own interest in graduate school and how to get there, SHPE Graduate Ambassadors is here to help members learn more about a higher education.",
        contact: "Juan Rojas",
        email: "shpe.uiuc.ga@gmail.com",
        meeting: "Tuesdays 6-7pm Everitt 2101"
    },
    {
        id: "alumni-relations",
        title: "Alumni Relations",
        shortDescription: "Network with alumni and help preserve the rich history of our chapter.",
        fullDescription: "The Alumni Relations Committee was established in 2023 to create events and network opportunities with alumni. It focuses on alumni engagement as well as connecting current members with alumni. In 2024, historical aspect of the Alumni Relations Committee was added to expand the historical records and ensure that current members are knowledge of the chapter's history. Members of this committee will focus on strength our connection to our alumni with events, promotional material, interviews and research into the past.",
        contact: "Emily Alvarado",
        email: "alumni.shpe.uiuc@gmail.com",
        meeting: "Contact for details"
    }
];
