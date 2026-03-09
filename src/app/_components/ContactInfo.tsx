import { Github, Linkedin, Mail, MapPin, Phone, Youtube } from "lucide-react";
import ContactInfoCard from "./ContactInfoCard";
import AnimationWrapper from "./AnimationWrapper";

const contactInfo = [
  {
    title: "Email",
    contactInfo: "Marwansher3@gmail.com",
    icon: Mail,
  },
  { title: "Phone", contactInfo: "+20 1100 474 113", icon: Phone },
  { title: "Location", contactInfo: "Cairo, El Nozha", icon: MapPin },
];

const links = [
  {
    icon: Github,
    url: "https://github.com/Merozsherif",
    label: "Visit my GitHub",
  },
  {
    icon: Linkedin,
    url: "https://www.linkedin.com/in/marwan-sherif-518601252",
    label: "Visit my Linkedin",
  },
];

function ContactInfo() {
  return (
    <AnimationWrapper
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Contact info section */}
      <section
        aria-labelledby="contact-info"
        className="space-y-6 p-6 rounded-xl border border-(--border-color) bg-(--custom-bg-2) shadow-lg h-fit mb-8 delay"
      >
        <h2 id="contact-info" className="text-3xl text-(--text-color)">
          <span>Let’s </span>
          <span className="text-(--orange-text)">Connect</span>
        </h2>

        <p className="text-lg text-(--text-color-secondary) leading-[1.8rem]">
          I’m currently looking for new opportunities and would love to hear
          from you. Whether you have a question or just want to say hi, I’ll do
          my best to get back to you!
        </p>

        <ul className="space-y-4">
          {contactInfo.map((el) => (
            <ContactInfoCard
              key={el.title}
              title={el.title}
              text={el.contactInfo}
              icon={el.icon}
            />
          ))}
        </ul>
      </section>

      {/* Contact links section */}
      <section
        aria-labelledby="contact-links"
        className="p-6 rounded-xl border border-(--border-color) bg-(--custom-bg) shadow-lg delay"
      >
        <h2 id="contact-links" className="text-xl text-(--text-color) mb-6">
          <span>Find me on </span>
          <span className="text-(--orange-text)">Social Media</span>
        </h2>

        {/* contact links icons */}
        <ul className="flex gap-4">
          {links.map((link) => (
            <li key={link.url}>
              <a
                href={link.url}
                className="block text-(--text-color) bg-(--skill-bg) rounded-xl border border-(--border-color) shadow-lg p-4 transition-all duration-300 hover:scale-105 hover:bg-orange-500 hover:shadow-xl focus:scale-105 focus:bg-orange-500 focus:shadow-xl focus:outline-none"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
              >
                {<link.icon aria-hidden="true" />}
              </a>
            </li>
          ))}
        </ul>
      </section>
    </AnimationWrapper>
  );
}

export default ContactInfo;
