import Link from "next/link";
import { MapPin, Phone, Mail, Clock, ArrowUpRight } from "lucide-react";

const services = [
  { href: "/signage", label: "Signage Solutions" },
  { href: "/web-services", label: "Web Services" },
  { href: "/wall-painting", label: "Wall Painting" },
];

const company = [
  { href: "/", label: "Home" },
  { href: "/#projects", label: "Projects" },
  { href: "/#testimonials", label: "Testimonials" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-dark border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top section */}
        <div className="py-20">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
            Let&apos;s build something
            <br />
            great together<span className="text-primary">.</span>
          </h2>
          <Link
            href="/contact"
            className="btn-primary mt-8 text-sm px-6 py-3"
          >
            Get in Touch
            <ArrowUpRight className="w-4 h-4 btn-icon" />
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16 pt-16 border-t border-white/10">
          {/* Col 1 - Brand */}
          <div>
            <span className="text-xl font-extrabold text-white">
              RUDRA<span className="text-primary">.</span>
            </span>
            <p className="mt-3 text-sm text-gray-500 leading-relaxed">
              Chennai&apos;s trusted signage, web, and branding partner.
            </p>
            <div className="mt-4 text-sm text-gray-500 flex items-center gap-2">
              <a href="#" className="hover:text-primary transition-colors">Fb</a>
              <span className="text-gray-700">&middot;</span>
              <a href="#" className="hover:text-primary transition-colors">Ig</a>
              <span className="text-gray-700">&middot;</span>
              <a href="#" className="hover:text-primary transition-colors">Li</a>
            </div>
          </div>

          {/* Col 2 - Services */}
          <div>
            <h3 className="text-xs text-gray-500 tracking-widest uppercase mb-4">
              Services
            </h3>
            <div className="flex flex-col">
              {services.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-gray-400 hover:text-primary transition-colors mb-3"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Col 3 - Company */}
          <div>
            <h3 className="text-xs text-gray-500 tracking-widest uppercase mb-4">
              Company
            </h3>
            <div className="flex flex-col">
              {company.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-gray-400 hover:text-primary transition-colors mb-3"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Col 4 - Contact */}
          <div>
            <h3 className="text-xs text-gray-500 tracking-widest uppercase mb-4">
              Contact
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-gray-400">
                <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span>
                  Ansari flats, Kaliamman Koil St, Chinmaya Nagar Stage 2,
                  Virugambakkam, Chennai, Tamil Nadu 600092
                </span>
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-400">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <a
                  href="tel:+918110020567"
                  className="hover:text-primary transition-colors"
                >
                  081100 20567
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-400">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <a
                  href="mailto:info@rudrasigns.com"
                  className="hover:text-primary transition-colors"
                >
                  info@rudrasigns.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-400">
                <Clock className="w-4 h-4 text-primary shrink-0" />
                <span>Open daily till 11 PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex justify-between items-center pb-8">
          <span className="text-xs text-gray-600">
            &copy; 2026 Rudra Signs
          </span>
          <span className="text-xs text-gray-600">
            Crafted in Chennai
          </span>
        </div>
      </div>
    </footer>
  );
}
