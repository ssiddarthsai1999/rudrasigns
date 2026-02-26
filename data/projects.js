const projects = [
  {
    id: 1,
    title: "LED Storefront Signage for Saravana Stores",
    category: "signage",
    description:
      "Designed and installed a massive LED sign board spanning 40 feet across the flagship Saravana Stores outlet on Ranganathan Street, T. Nagar. The high-brightness display ensures visibility even in peak evening crowds.",
    image:
      "https://images.unsplash.com/photo-1563906267088-b029e7101114?w=600&h=400&fit=crop",
    client: "Saravana Stores",
  },
  {
    id: 2,
    title: "3D Letter Signage for GRT Hotels",
    category: "signage",
    description:
      "Premium stainless steel 3D letter signage installed at the GRT Grand Convention Centre in Chennai. The brushed metal finish complements the hotel's luxury aesthetic with integrated LED backlighting.",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&h=400&fit=crop",
    client: "GRT Hotels & Resorts",
  },
  {
    id: 3,
    title: "Neon Signage for The Marina Brew Cafe",
    category: "signage",
    description:
      "Custom neon sign installation for a trendy cafe near Marina Beach. The warm amber and pink neon creates an Instagram-worthy ambiance that has become a landmark for the cafe's social media presence.",
    image:
      "https://images.unsplash.com/photo-1600132806608-231446b2e7af?w=600&h=400&fit=crop",
    client: "The Marina Brew Cafe",
  },
  {
    id: 4,
    title: "ACP Cladding for Kumaran Silks",
    category: "signage",
    description:
      "Full building facade renovation with premium ACP cladding and illuminated signage for Kumaran Silks' Anna Nagar showroom. The gold and maroon theme reflects the brand's heritage and textile tradition.",
    image:
      "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=600&h=400&fit=crop",
    client: "Kumaran Silks",
  },
  {
    id: 5,
    title: "Flex Banners for Chennai Marathon 2025",
    category: "signage",
    description:
      "Produced and installed over 200 flex banners, route markers, and stage backdrops for the annual Chennai Marathon. Weather-resistant printing ensured vibrant colors throughout the two-day event.",
    image:
      "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?w=600&h=400&fit=crop",
    client: "Chennai Runners Association",
  },
  {
    id: 6,
    title: "E-commerce Website for Chettinad Spices",
    category: "web",
    description:
      "Built a full-featured e-commerce platform for Chettinad Spices to sell their authentic spice blends across India. Integrated Razorpay payments, real-time inventory tracking, and automated order notifications.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    client: "Chettinad Restaurant & Spices",
  },
  {
    id: 7,
    title: "Business Website for Sri Balaji Clinic",
    category: "web",
    description:
      "Responsive healthcare website with online appointment booking, doctor profiles, and patient testimonials for a multi-specialty clinic in Adyar. Optimized for local SEO to attract patients from South Chennai.",
    image:
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600&h=400&fit=crop",
    client: "Sri Balaji Multi-Specialty Clinic",
  },
  {
    id: 8,
    title: "Landing Page for Madras Property Hub",
    category: "web",
    description:
      "High-converting landing page for a real estate firm's new residential project in OMR. Features interactive floor plans, virtual tour integration, and a lead capture form that boosted enquiries by 40%.",
    image:
      "https://images.unsplash.com/photo-1547658719-da2b51169166?w=600&h=400&fit=crop",
    client: "Madras Property Hub",
  },
  {
    id: 9,
    title: "Corporate Website for Thiruvalluvar Engineering",
    category: "web",
    description:
      "Modern corporate website showcasing industrial machinery products, technical specifications, and a dealer locator map. Built with Next.js for blazing-fast performance and deployed on Vercel.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    client: "Thiruvalluvar Engineering Works",
  },
  {
    id: 10,
    title: "SEO Campaign for Annapoorna Sweets",
    category: "web",
    description:
      "Comprehensive local SEO strategy that brought Annapoorna Sweets from page 3 to the top 3 Google results for 'best sweets in Chennai'. Included Google Business optimization and content marketing.",
    image:
      "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=600&h=400&fit=crop",
    client: "Annapoorna Sweets & Snacks",
  },
  {
    id: 11,
    title: "Interior Painting for Taj Coromandel Suite",
    category: "painting",
    description:
      "Premium interior painting project for the renovated presidential suite at Taj Coromandel. Royal gold and ivory palette with custom texture finishes on feature walls, completed within a tight 5-day deadline.",
    image:
      "https://images.unsplash.com/photo-1562259929-b4e1fd3aef09?w=600&h=400&fit=crop",
    client: "Taj Coromandel Chennai",
  },
  {
    id: 12,
    title: "Exterior Painting for Ramakrishna Apartments",
    category: "painting",
    description:
      "Complete exterior repainting of a 12-floor residential complex in Velachery. Used weather-shield emulsion paint rated for Chennai's coastal climate, covering over 50,000 sq ft of surface area.",
    image:
      "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=600&h=400&fit=crop",
    client: "Ramakrishna Housing Society",
  },
  {
    id: 13,
    title: "Wall Mural for Madras Coffee House",
    category: "painting",
    description:
      "Hand-painted wall mural depicting the vibrant culture of old Madras — Marina Beach, filter coffee, and classic Ambassador cars. The 20-foot mural has become a beloved photo spot for customers.",
    image:
      "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=600&h=400&fit=crop",
    client: "Madras Coffee House",
  },
  {
    id: 14,
    title: "Office Painting for Zoho Campus Annex",
    category: "painting",
    description:
      "Color-coded office painting for a new wing of a tech campus in Thalambur. Each floor features a unique color scheme designed to boost creativity and productivity, with eco-friendly low-VOC paints.",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop",
    client: "Zoho Corp",
  },
  {
    id: 15,
    title: "Glow Sign Board for Murugan Idli Shop",
    category: "signage",
    description:
      "Iconic glow sign board installed at the new Murugan Idli Shop branch in Porur. The illuminated sign with their signature green and yellow branding is visible from 500 meters on the busy Mount-Poonamallee Road.",
    image:
      "https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?w=600&h=400&fit=crop",
    client: "Murugan Idli Shop",
  },
];

export default projects;
