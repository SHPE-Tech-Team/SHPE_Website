import { createClient } from 'next-sanity'
import { apiVersion, dataset, projectId, useCdn } from '../sanity/env'

const client = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn,
    token: process.env.SANITY_SESSION_TOKEN || process.env.SANITY_ACCESS_TOKEN || process.env.SANITY_TOKEN,
})


if (!client.config().token) {
    throw new Error("No authentication token found! Please run with `SANITY_TOKEN=... npx sanity exec ...`")
}

const executiveBoard = [
    {
        name: "Gerardo Paramo",
        role: "President",
        pronouns: "He/Him",
        year: "Senior",
        major: "Bioengineering, Minor in Chemistry",
        email: "gparamo2@illinois.edu",
        note: "Reach out to me on Slack",
        order: 1
    },
    {
        name: "Alberto Pabon-Castejon",
        role: "External Vice President",
        pronouns: "He/Him",
        year: "Junior",
        major: "Computer Science; T&M",
        email: "exec.shpe.uiuc@gmail.com",
        note: "Reach out to me on Slack",
        order: 2
    },
    {
        name: "Krystal Hernandez",
        role: "Internal Vice President",
        pronouns: "She/Her",
        year: "Junior",
        major: "Materials Science & Engineering",
        email: "shpe.uiuc.vp.internal@gmail.com",
        note: "Reach out to me on Slack",
        order: 3
    },
    {
        name: "Ana Franco",
        role: "Secretary",
        pronouns: "She/Her",
        year: "Junior",
        major: "Civil Engineering w/ a Minor in Spanish",
        email: "shpe.uiuc.secretary@gmail.com",
        note: "Reach out to me on Slack",
        order: 4
    },
    {
        name: "Ceejay Costes Araña",
        role: "Treasurer",
        pronouns: "He/Him/His",
        year: "Junior",
        major: "Chemical Engineering",
        email: "treasurer.shpe.uiuc@gmail.com",
        note: "Reach out to me on Slack",
        order: 5
    },
    {
        name: "Maria Maldonado",
        role: "Publicity",
        pronouns: "She/Her",
        year: "Junior",
        major: "Behavioral Neuroscience Psychology, minor in Child Health & Well-Being",
        email: "shpe.uiuc.marketing@gmail.com",
        note: "Reach out to me on Slack",
        order: 6
    },
    {
        name: "Isaac Izaguirre",
        role: "Academic Affairs",
        pronouns: "He/Him",
        year: "Junior",
        major: "Civil Engineering",
        email: "shpe.uiuc.academic@gmail.com",
        note: "Reach out to me on Slack",
        order: 7
    },
    {
        name: "Juan Fragoso",
        role: "Technical Projects",
        pronouns: "He/Him",
        year: "Senior",
        major: "Mechanical Engineering",
        email: "shpe.uiuc.technicalchair@gmail.com",
        note: "Reach out to me on Slack",
        order: 8
    },
    {
        name: "Isaac Gomez-Ibarra & Litzy Melchor",
        role: "MemberSHPE",
        pronouns: "He/Him, She/Her",
        year: "Junior, Junior",
        major: "Civil Engineering, Accountancy+DS",
        email: "shpe.uiuc.membership@gmail.com",
        note: "Reach out to me on Slack",
        order: 9
    },
    {
        name: "Alexis Villalobos",
        role: "Community Service",
        pronouns: "He/Him",
        year: "Junior",
        major: "Systems Engineering & Design, Minor in Electrical Engineering",
        email: "shpe.uiuc.service@gmail.com",
        note: "Reach out to me on Slack or LinkedIn",
        order: 10
    },
    {
        name: "Yasmine Rios",
        role: "High School Outreach",
        pronouns: "She/Her",
        year: "Senior",
        major: "Chemical Engineering",
        email: "shpe.uiuc.outreach@gmail.com",
        note: "Reach out to me on Slack",
        order: 11
    },
    {
        name: "Juan Rojas",
        role: "Graduate Ambassador",
        pronouns: "He/Him",
        year: "3rd year PHD",
        major: "Chemical Engineering",
        email: "shpe.uiuc.ga@gmail.com",
        note: "Reach out to me on Slack",
        order: 12
    },
    {
        name: "Emily Alvarado",
        role: "Alumni Relations Chair",
        pronouns: "She/Her",
        year: "Junior",
        major: "Chemistry",
        email: "alumni.shpe.uiuc@gmail.com",
        note: "Reach out to me on Slack",
        order: 13
    },
    {
        name: "Luis Daniel Castro",
        role: "Student Advisor",
        pronouns: "He/Him/His",
        year: "Senior",
        major: "Civil Engineering",
        email: "student.advisor.shpe.uiuc@gmail.com",
        note: "Reach out to me on Slack",
        order: 14
    },
]

const events = [
    {
        title: "General Body Meeting",
        date: "Tuesdays, 7:00 PM",
        location: "ECEB 1002",
        badge: "Weekly"
    },
    {
        title: "Study Tables",
        date: "Wednesdays, 6:00 PM",
        location: "Grainger Library",
        badge: "Academic"
    },
    {
        title: "Corporate Info Session",
        date: "Oct 15, 6:00 PM",
        location: "Siebel Center",
        badge: "Professional"
    },
]

async function seed() {
    console.log('Seeding data...')
    const transaction = client.transaction()

    executiveBoard.forEach((member) => {
        transaction.create({
            _type: 'executiveBoard',
            ...member
        })
    })

    events.forEach((event) => {
        transaction.create({
            _type: 'event',
            title: event.title,
            slug: { _type: 'slug', current: event.title.toLowerCase().replace(/ /g, '-') },
            date: event.date,
            location: event.location,
            badge: event.badge
        })
    })

    await transaction.commit()
    console.log('Data seeded successfully!')
}

seed().catch(console.error)
