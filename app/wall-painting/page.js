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
  title: "Wall Painting | Rudra Signs Chennai",
  description:
    "Professional wall painting services in Chennai. Interior painting, exterior painting, office spaces, texture painting, murals, and decorative painting for homes and businesses.",
};

export default function WallPaintingPage() {
  const service = services.find((s) => s.slug === "wall-painting");
  const serviceProjects = projects.filter((p) => p.category === "painting").slice(0, 6);
  const serviceTestimonials = testimonials.filter((t) => t.category === "painting").slice(0, 3);
  const serviceFaqs = faqs.painting || [];

  return (
    <>
      <ServiceHero
        title="Wall Painting"
        tagline="Transform your spaces with professional painting that brings color, life, and personality to every wall."
      />
      <ServiceDetails
        title="Our Painting Services"
        subtitle="Expert wall painting solutions for homes, offices, and commercial spaces"
        subServices={service?.subServices || []}
      />
      <ProcessTimeline />
      <ProjectGallery projects={serviceProjects} title="Painting Projects" />
      <ServiceTestimonials testimonials={serviceTestimonials} />
      <ServiceFAQ faqs={serviceFaqs} />
      <ServiceCTA serviceName="Wall Painting" />
    </>
  );
}
