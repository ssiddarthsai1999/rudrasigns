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
  title: "Web Services | Rudra Signs Chennai",
  description:
    "Professional website design and development in Chennai. Business websites, e-commerce, landing pages, SEO optimization, and website maintenance.",
};

export default function WebServicesPage() {
  const service = services.find((s) => s.slug === "web-services");
  const serviceProjects = projects.filter((p) => p.category === "web").slice(0, 6);
  const serviceTestimonials = testimonials.filter((t) => t.category === "web").slice(0, 3);
  const serviceFaqs = faqs.web || [];

  return (
    <>
      <ServiceHero
        title="Web Services"
        tagline="Professional websites that bring your brand online and convert visitors into loyal customers."
      />
      <ServiceDetails
        title="Our Web Services"
        subtitle="End-to-end web solutions to establish and grow your online presence"
        subServices={service?.subServices || []}
      />
      <ProcessTimeline />
      <ProjectGallery projects={serviceProjects} title="Web Projects" />
      <ServiceTestimonials testimonials={serviceTestimonials} />
      <ServiceFAQ faqs={serviceFaqs} />
      <ServiceCTA serviceName="Web Services" />
    </>
  );
}
