import SectionHeader from "@/app/_components/SectionHeader";
import ContactInfo from "@/app/_components/ContactInfo";
import ContactForm from "@/app/_components/ContactForm";
import { Metadata } from "next";

// Metadata for the Contact page
export const metadata: Metadata = {
  title: "Contact",
};

function ContactPage() {
  return (
    <div>
      <SectionHeader
        text="Get In"
        highlight="Touch"
        paragraphText="Feel free to reach out for opportunities or just to say hello!"
        addedClasses="text-6xl mb-10 max-lg:text-5xl max-md:text-4xl"
      />

      <div className="grid grid-cols-2 gap-12 max-lg:grid-cols-1">
        <ContactInfo />
        <ContactForm />
      </div>
    </div>
  );
}

export default ContactPage;
