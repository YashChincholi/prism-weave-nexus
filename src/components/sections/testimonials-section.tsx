import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Rajesh Kumar",
    role: "Restaurant Owner",
    business: "Spice Garden Restaurant",
    avatar: "👨‍🍳",
    rating: 5,
    text: "XNow.Rest transformed our business! Our QR menu system increased orders by 40% and the WhatsApp integration made table management effortless.",
    metrics: "+40% Orders",
    industry: "Restaurant"
  },
  {
    id: 2,
    name: "Priya Sharma", 
    role: "Real Estate Agent",
    business: "Dream Homes Realty",
    avatar: "👩‍💼", 
    rating: 5,
    text: "RE.MasWorld.in helped me close 3x more deals. The property showcase and lead management system is exactly what agents need.",
    metrics: "3x More Deals",
    industry: "Real Estate"
  },
  {
    id: 3,
    name: "Arjun Patel",
    role: "E-commerce Entrepreneur", 
    business: "TechGadgets Store",
    avatar: "👨‍💻",
    rating: 5,
    text: "From setup to first sale in under 10 minutes! The payment integration with UPI and other Indian gateways is seamless.",
    metrics: "₹2L+ Revenue",
    industry: "E-commerce"
  },
  {
    id: 4,
    name: "Sneha Reddy",
    role: "Blogger & Content Creator",
    business: "TechTalks Blog", 
    avatar: "👩‍💻",
    rating: 5,
    text: "DemoBlog helped me monetize my content from day one. The SEO tools and ad integration increased my monthly earnings by 250%.",
    metrics: "+250% Earnings",
    industry: "Blogging"
  },
  {
    id: 5,
    name: "Vikram Singh",
    role: "Freelance Designer",
    business: "Creative Studio",
    avatar: "🎨",
    rating: 5,
    text: "XNow.Pro gave me a professional presence instantly. My client inquiries doubled within the first month of launch.",
    metrics: "2x Inquiries", 
    industry: "Services"
  },
  {
    id: 6,
    name: "Kavya Nair",
    role: "Startup Founder",
    business: "EcoFriendly Products",
    avatar: "🌱",
    rating: 5,
    text: "The entire MAS WORLD ecosystem scaled with our business. From simple website to full e-commerce - all in one platform.",
    metrics: "5x Growth",
    industry: "Startup"
  }
];

const TestimonialCard = ({ testimonial, index }: { testimonial: typeof testimonials[0], index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      className="card-elevated p-6 h-full"
    >
      {/* Quote Icon */}
      <div className="flex justify-between items-start mb-4">
        <Quote className="w-8 h-8 text-primary/30" />
        <div className="flex gap-1">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          ))}
        </div>
      </div>

      {/* Testimonial Text */}
      <p className="text-foreground mb-6 leading-relaxed">
        "{testimonial.text}"
      </p>

      {/* Metrics Badge */}
      <div className="inline-flex items-center px-3 py-1 rounded-full bg-success/10 text-success text-sm font-semibold mb-4">
        {testimonial.metrics}
      </div>

      {/* Author Info */}
      <div className="flex items-center gap-3 pt-4 border-t border-border">
        <div className="text-2xl">{testimonial.avatar}</div>
        <div>
          <div className="font-semibold text-foreground">{testimonial.name}</div>
          <div className="text-sm text-muted-foreground">{testimonial.role}</div>
          <div className="text-xs text-primary font-medium">{testimonial.business}</div>
        </div>
      </div>
    </motion.div>
  );
};

export const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-200px" });

  return (
    <section className="section-padding">
      <div className="container-responsive">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-cinematic mb-6">
            Trusted by
            <br />
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              10,000+ Businesses
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real stories from real entrepreneurs who transformed their businesses with MAS WORLD.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} index={index} />
          ))}
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-border"
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">10,000+</div>
            <div className="text-sm text-muted-foreground">Active Users</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">99.9%</div>
            <div className="text-sm text-muted-foreground">Uptime</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">5 Min</div>
            <div className="text-sm text-muted-foreground">Avg Setup Time</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">4.9/5</div>
            <div className="text-sm text-muted-foreground">User Rating</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};