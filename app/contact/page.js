import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";
import MapEmbed from "@/components/contact/MapEmbed";

export const metadata = {
  title: "Contact Us | Rudra Signs Chennai",
  description:
    "Get in touch with Rudra Signs for signage solutions, web services, and wall painting in Chennai. Call 081100 20567 or visit us at Virugambakkam, Chennai.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-dark pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="absolute top-10 right-[20%] w-[300px] h-[300px] bg-primary/10 rounded-full blur-[100px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs font-semibold tracking-widest uppercase text-primary">
              CONTACT
            </span>
            <div className="h-px flex-1 bg-white/10" />
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight">
            Let&apos;s Work<br />Together<span className="text-primary">.</span>
          </h1>
          <p className="text-base sm:text-lg text-gray-400 mt-5 max-w-lg font-light">
            Ready to elevate your brand? Get in touch and let&apos;s discuss how we can bring your vision to life.
          </p>
        </div>
      </section>

      {/* Form + Info */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="pb-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MapEmbed />
        </div>
      </section>
    </>
  );
}
