import { client } from "@/sanity/lib/client";
import { EXECUTIVE_BOARD_QUERY } from "@/sanity/lib/queries";
import ContactCard from "../components/ContactCard";

export const revalidate = 60;

export default async function Contact() {
    // We map 'role' from sanity to 'title' in the UI to keep JSX consistent, or update JSX.
    // Let's rely on the query to just return objects we can use. 
    // Actually the query returns 'role', but the current UI uses 'contact.title'. 
    // I will stick to the schema field names and update JSX to use 'contact.role'.
    const contacts = await client.fetch(EXECUTIVE_BOARD_QUERY);

    return (
        <div className="bg-white min-h-screen">
            {/* Header */}
            <div className="relative bg-gray-900 py-24 sm:py-32 overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="/contact.JPG"
                        alt="SHPE UIUC Contact"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/50" aria-hidden="true" />
                </div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl text-shadow-lg">
                        Contact Us
                    </h1>
                    <p className="max-w-xl mt-5 mx-auto text-xl text-gray-200 drop-shadow-md">
                        Have a question? Reach out to the appropriate board member below.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {contacts.length > 0 ? (
                        contacts.map((contact: any, index: number) => (
                            <ContactCard key={index} contact={contact} />
                        ))
                    ) : (
                        <div className="col-span-full text-center py-12">
                            <p className="text-xl text-gray-500">No contact information available at the moment.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}