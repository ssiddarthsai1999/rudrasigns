import ServiceHero from "@/components/services/ServiceHero";
import ServiceDetails from "@/components/services/ServiceDetails";
import ProcessTimeline from "@/components/services/ProcessTimeline";
import ProjectGallery from "@/components/services/ProjectGallery";
import ServiceTestimonials from "@/components/services/ServiceTestimonials";
import ServiceFAQ from "@/components/services/ServiceFAQ";
import ServiceCTA from "@/components/services/ServiceCTA";
import services from "@/data/services";
import projects from "@/data/projects";
import testimonials from "@/data/testimonials";
import faqs from "@/data/faqs";

export const metadata = {
  title: "Signage Solutions | Rudra Signs Chennai",
  description:
    "Premium signage solutions in Chennai - LED sign boards, neon signs, ACP boards, 3D letter signs, flex banners, and glow sign boards. Custom designs for shops and brands.",
};

export default function SignagePage() {
  const service = services.find((s) => s.slug === "signage");
  const serviceProjects = projects.filter((p) => p.category === "signage").slice(0, 6);
  const serviceTestimonials = testimonials.filter((t) => t.category === "signage").slice(0, 3);
  const serviceFaqs = faqs.signage || [];

  return (
    <>
      <ServiceHero
        title="Signage Solutions"
        tagline="Eye-catching signs that make your brand impossible to miss. From LED displays to 3D letters, we craft signage that drives business."
      />
      <ServiceDetails
        title="Our Signage Services"
        subtitle="Complete signage solutions for businesses of all sizes across Chennai and Tamil Nadu"
        subServices={service?.subServices || []}
      />
      <ProcessTimeline />
      <ProjectGallery projects={serviceProjects} title="Signage Projects" />
      <ServiceTestimonials testimonials={serviceTestimonials} />
      <ServiceFAQ faqs={serviceFaqs} />
      <ServiceCTA serviceName="Signage" />
    </>
  );
}
