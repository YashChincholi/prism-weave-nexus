import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { CinematicButton } from "@/components/ui/cinematic-button";
import { Building2, ShoppingCart, Home, UtensilsCrossed, PenTool, ArrowRight } from "lucide-react";
import dashboardMockup from "@/assets/dashboard-mockup.jpg";
import ecommerceMockup from "@/assets/ecommerce-mockup.jpg";
import restaurantMockup from "@/assets/restaurant-mockup.jpg";

const ecosystemData = [
  {
    id: "business",
    title: "XNow.Pro",
    subtitle: "Business Websites",
    description: "Start small. Scale into a brand.",
    features: ["Professional Templates", "SEO Optimization", "Analytics Dashboard", "Custom Branding"],
    icon: Building2,
    mockup: dashboardMockup,
    gradient: "from-primary/20 to-primary-glow/20",
    ctaText: "🚀 Build Business Website"
  },
  {
    id: "ecommerce",
    title: "MASWorld.Site",
    subtitle: "E-Commerce Platform",
    description: "Your store. Payments in 1 tap. SEO included.",
    features: ["Product Catalog", "Payment Gateway", "Inventory Management", "Mobile Optimized"],
    icon: ShoppingCart,
    mockup: ecommerceMockup,
    gradient: "from-accent/20 to-accent-glow/20",
    ctaText: "🛒 Open Store"
  },
  {
    id: "realestate",
    title: "RE.MasWorld.in",
    subtitle: "Real Estate Solutions",
    description: "Real estate websites that close deals.",
    features: ["Property Listings", "Lead Management", "Virtual Tours", "CRM Integration"],
    icon: Home,
    mockup: dashboardMockup,
    gradient: "from-success/20 to-success/30",
    ctaText: "🏠 Create Property Site"
  },
  {
    id: "restaurant",
    title: "XNow.Rest",
    subtitle: "Restaurant Management",
    description: "From QR menus to WhatsApp orders.",
    features: ["QR Code Menus", "Online Ordering", "Table Management", "WhatsApp Integration"],
    icon: UtensilsCrossed,
    mockup: restaurantMockup,
    gradient: "from-orange-500/20 to-orange-400/20",
    ctaText: "🍔 Launch Restaurant Site"
  },
  {
    id: "blog",
    title: "DemoBlog.MasWorld.in",
    subtitle: "Monetized Blogging",
    description: "Turn readers into revenue.",
    features: ["SEO Optimized", "Ad Integration", "Analytics", "Monetization Tools"],
    icon: PenTool,
    mockup: dashboardMockup,
    gradient: "from-purple-500/20 to-purple-400/20",
    ctaText: "✍️ Start Blogging"
  }
];

const EcosystemCard = ({ item, index }: { item: typeof ecosystemData[0], index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
          transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
      className="group"
    >
      <div className={`card-elevated p-8 bg-gradient-to-br ${item.gradient} hover:shadow-2xl transition-all duration-500`}>
        {/* Header */}
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-2xl bg-white shadow-md">
              <item.icon className="w-8 h-8 text-primary" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground">{item.title}</h3>
              <p className="text-muted-foreground font-medium">{item.subtitle}</p>
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="text-lg text-foreground mb-6 font-medium">{item.description}</p>

        {/* Mockup */}
        <div className="relative mb-6 rounded-2xl overflow-hidden shadow-lg group-hover:shadow-xl transition-all duration-500">
          <img
            src={item.mockup}
            alt={`${item.title} mockup`}
            className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </div>

        {/* Features */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          {item.features.map((feature, idx) => (
            <div key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
              <div className="w-1.5 h-1.5 rounded-full bg-primary" />
              {feature}
            </div>
          ))}
        </div>

        {/* CTA */}
        <CinematicButton variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground">
          {item.ctaText}
          <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </CinematicButton>
      </div>
    </motion.div>
  );
};

export const EcosystemShowcase = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-200px" });

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
            One Ecosystem.
            <br />
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Infinite Possibilities.
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose your industry. Launch in minutes. Scale without limits.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ecosystemData.map((item, index) => (
            <EcosystemCard key={item.id} item={item} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="text-center mt-16"
        >
          <CinematicButton variant="hero" size="xl">
            Explore All Platforms
            <ArrowRight className="ml-2 w-5 h-5" />
          </CinematicButton>
        </motion.div>
      </div>
    </section>
  );
};