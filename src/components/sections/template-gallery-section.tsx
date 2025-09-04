import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { CinematicButton } from "@/components/ui/cinematic-button";
import { ExternalLink, Eye } from "lucide-react";
import dashboardMockup from "@/assets/dashboard-mockup.jpg";
import ecommerceMockup from "@/assets/ecommerce-mockup.jpg";
import restaurantMockup from "@/assets/restaurant-mockup.jpg";

const categories = [
  { id: "all", label: "All Templates", count: 250 },
  { id: "business", label: "Business", count: 80 },
  { id: "ecommerce", label: "E-Commerce", count: 60 },
  { id: "restaurant", label: "Restaurant", count: 45 },
  { id: "realestate", label: "Real Estate", count: 35 },
  { id: "blog", label: "Blog", count: 30 }
];

const templates = [
  {
    id: 1,
    title: "Modern Business Suite",
    category: "business",
    image: dashboardMockup,
    description: "Professional corporate website with analytics dashboard",
    features: ["SEO Optimized", "Analytics", "Contact Forms", "Mobile Ready"],
    popular: true
  },
  {
    id: 2,
    title: "E-Commerce Pro",
    category: "ecommerce", 
    image: ecommerceMockup,
    description: "Complete online store with payment integration",
    features: ["Payment Gateway", "Inventory", "Orders", "Customer Portal"],
    popular: false
  },
  {
    id: 3,
    title: "Restaurant Deluxe",
    category: "restaurant",
    image: restaurantMockup,
    description: "QR menu system with online ordering capabilities",
    features: ["QR Menus", "Online Orders", "Table Booking", "WhatsApp"],
    popular: true
  },
  {
    id: 4,
    title: "Property Showcase",
    category: "realestate",
    image: dashboardMockup,
    description: "Real estate listings with virtual tour support",
    features: ["Property Listings", "Virtual Tours", "Lead Forms", "CRM"],
    popular: false
  },
  {
    id: 5,
    title: "Content Creator Hub",
    category: "blog",
    image: dashboardMockup,
    description: "Monetized blog with ad integration and SEO tools",
    features: ["Ad Integration", "SEO Tools", "Analytics", "Monetization"],
    popular: true
  },
  {
    id: 6,
    title: "Startup Landing",
    category: "business",
    image: ecommerceMockup,
    description: "Modern startup landing page with lead capture",
    features: ["Lead Capture", "Email Marketing", "Analytics", "A/B Testing"],
    popular: false
  }
];

const TemplateCard = ({ template, index }: { template: typeof templates[0], index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 40, scale: 0.95 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      className="group card-elevated overflow-hidden"
    >
      {/* Template Preview */}
      <div className="relative overflow-hidden">
        <img
          src={template.image}
          alt={template.title}
          className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500"
          loading="lazy"
        />
        
        {/* Overlay on Hover */}
        <div className="absolute inset-0 bg-primary/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="flex gap-3">
            <button className="p-3 bg-white/20 backdrop-blur-sm rounded-xl text-white hover:bg-white/30 transition-colors">
              <Eye className="w-5 h-5" />
            </button>
            <button className="p-3 bg-white/20 backdrop-blur-sm rounded-xl text-white hover:bg-white/30 transition-colors">
              <ExternalLink className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Popular Badge */}
        {template.popular && (
          <div className="absolute top-4 right-4 px-3 py-1 bg-accent text-accent-foreground text-xs font-semibold rounded-full">
            Popular
          </div>
        )}
      </div>

      {/* Template Info */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-foreground mb-2">{template.title}</h3>
        <p className="text-muted-foreground text-sm mb-4">{template.description}</p>

        {/* Features */}
        <div className="flex flex-wrap gap-2 mb-6">
          {template.features.map((feature, idx) => (
            <span
              key={idx}
              className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md"
            >
              {feature}
            </span>
          ))}
        </div>

        {/* CTA */}
        <CinematicButton variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground">
          Use This Template
        </CinematicButton>
      </div>
    </motion.div>
  );
};

export const TemplateGallerySection = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-200px" });

  const filteredTemplates = selectedCategory === "all" 
    ? templates 
    : templates.filter(t => t.category === selectedCategory);

  return (
    <section className="section-padding bg-gradient-subtle">
      <div className="container-responsive">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-cinematic mb-6">
            250+ Professional
            <br />
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Templates
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
            Industry-specific templates designed to convert. Pick one and customize to match your brand.
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-primary text-primary-foreground shadow-elegant'
                    : 'bg-white text-muted-foreground hover:bg-neutral-50'
                }`}
              >
                {category.label}
                <span className="ml-2 px-2 py-0.5 text-xs bg-black/10 rounded-full">
                  {category.count}
                </span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Templates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTemplates.map((template, index) => (
            <TemplateCard key={template.id} template={template} index={index} />
          ))}
        </div>

        {/* View More CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="text-center mt-16"
        >
          <CinematicButton variant="secondary" size="lg">
            View All Templates
            <ExternalLink className="ml-2 w-5 h-5" />
          </CinematicButton>
          <p className="text-muted-foreground text-sm mt-4">
            All templates include mobile optimization, SEO setup, and analytics integration
          </p>
        </motion.div>
      </div>
    </section>
  );
};