import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { CinematicButton } from "@/components/ui/cinematic-button";
import { Check, Star, Zap, Crown, Rocket } from "lucide-react";

const pricingToggleOptions = [
  { id: "monthly", label: "Monthly", badge: "" },
  { id: "yearly", label: "Yearly", badge: "Save 20%" },
  { id: "lifetime", label: "Lifetime", badge: "Best Value" }
];

const personaOptions = [
  { id: "freelancer", label: "Freelancer", icon: "👤" },
  { id: "startup", label: "Startup", icon: "🚀" },
  { id: "smb", label: "SMB", icon: "🏢" },
  { id: "agency", label: "Agency", icon: "🏪" }
];

const pricingPlans = {
  monthly: {
    freelancer: {
      starter: { price: 29, originalPrice: null },
      growth: { price: 149, originalPrice: null },
      pro: { price: 999, originalPrice: null },
      lifetime: { price: 2999, originalPrice: null }
    },
    startup: {
      starter: { price: 49, originalPrice: null },
      growth: { price: 249, originalPrice: null },
      pro: { price: 1499, originalPrice: null },
      lifetime: { price: 4999, originalPrice: null }
    },
    smb: {
      starter: { price: 99, originalPrice: null },
      growth: { price: 299, originalPrice: null },
      pro: { price: 1999, originalPrice: null },
      lifetime: { price: 7999, originalPrice: null }
    },
    agency: {
      starter: { price: 199, originalPrice: null },
      growth: { price: 599, originalPrice: null },
      pro: { price: 4999, originalPrice: null },
      lifetime: { price: 14999, originalPrice: null }
    }
  },
  yearly: {
    freelancer: {
      starter: { price: 23, originalPrice: 29 },
      growth: { price: 119, originalPrice: 149 },
      pro: { price: 799, originalPrice: 999 },
      lifetime: { price: 2999, originalPrice: null }
    },
    startup: {
      starter: { price: 39, originalPrice: 49 },
      growth: { price: 199, originalPrice: 249 },
      pro: { price: 1199, originalPrice: 1499 },
      lifetime: { price: 4999, originalPrice: null }
    },
    smb: {
      starter: { price: 79, originalPrice: 99 },
      growth: { price: 239, originalPrice: 299 },
      pro: { price: 1599, originalPrice: 1999 },
      lifetime: { price: 7999, originalPrice: null }
    },
    agency: {
      starter: { price: 159, originalPrice: 199 },
      growth: { price: 479, originalPrice: 599 },
      pro: { price: 3999, originalPrice: 4999 },
      lifetime: { price: 14999, originalPrice: null }
    }
  },
  lifetime: {
    freelancer: {
      starter: { price: 299, originalPrice: null },
      growth: { price: 1499, originalPrice: null },
      pro: { price: 9999, originalPrice: null },
      lifetime: { price: 2999, originalPrice: null }
    },
    startup: {
      starter: { price: 499, originalPrice: null },
      growth: { price: 2499, originalPrice: null },
      pro: { price: 14999, originalPrice: null },
      lifetime: { price: 4999, originalPrice: null }
    },
    smb: {
      starter: { price: 999, originalPrice: null },
      growth: { price: 2999, originalPrice: null },
      pro: { price: 19999, originalPrice: null },
      lifetime: { price: 7999, originalPrice: null }
    },
    agency: {
      starter: { price: 1999, originalPrice: null },
      growth: { price: 5999, originalPrice: null },
      pro: { price: 49999, originalPrice: null },
      lifetime: { price: 14999, originalPrice: null }
    }
  }
};

const planFeatures = {
  starter: {
    name: "Starter",
    description: "Perfect for getting started",
    icon: Zap,
    features: [
      "1 Website",
      "Basic Templates",
      "SSL Certificate",
      "24/7 Support",
      "Mobile Responsive"
    ],
    highlight: false
  },
  growth: {
    name: "Growth",
    description: "Most popular for growing businesses",
    icon: Rocket,
    features: [
      "5 Websites",
      "Premium Templates",
      "Custom Domain",
      "SEO Tools",
      "Analytics Dashboard",
      "Payment Integration",
      "Email Support"
    ],
    highlight: true
  },
  pro: {
    name: "Pro",
    description: "Advanced features for professionals",
    icon: Crown,
    features: [
      "Unlimited Websites",
      "All Templates",
      "Custom Branding",
      "Advanced SEO",
      "Priority Support",
      "API Access",
      "White Label",
      "Advanced Analytics"
    ],
    highlight: false
  },
  lifetime: {
    name: "Lifetime",
    description: "One-time payment, lifetime access",
    icon: Star,
    features: [
      "Everything in Pro",
      "Lifetime Updates",
      "No Monthly Fees",
      "Priority Beta Access",
      "Exclusive Templates",
      "1-on-1 Onboarding"
    ],
    highlight: false
  }
};

export const PricingSection = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly' | 'lifetime'>('monthly');
  const [selectedPersona, setSelectedPersona] = useState<'freelancer' | 'startup' | 'smb' | 'agency'>('startup');
  
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-200px" });

  const currentPricing = pricingPlans[billingCycle][selectedPersona];

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
            Simple,
            <br />
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Transparent Pricing
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
            Choose your plan and scale as you grow. No hidden fees, no surprises.
          </p>

          {/* Billing Toggle */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {pricingToggleOptions.map((option) => (
              <button
                key={option.id}
                onClick={() => setBillingCycle(option.id as any)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  billingCycle === option.id
                    ? 'bg-primary text-primary-foreground shadow-elegant'
                    : 'bg-white text-muted-foreground hover:bg-neutral-50'
                }`}
              >
                {option.label}
                {option.badge && (
                  <span className="ml-2 px-2 py-1 text-xs bg-accent text-accent-foreground rounded-full">
                    {option.badge}
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* Persona Selector */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {personaOptions.map((persona) => (
              <button
                key={persona.id}
                onClick={() => setSelectedPersona(persona.id as any)}
                className={`px-4 py-2 rounded-2xl font-medium transition-all duration-300 flex items-center gap-2 ${
                  selectedPersona === persona.id
                    ? 'bg-accent text-accent-foreground shadow-md'
                    : 'bg-white text-muted-foreground hover:bg-neutral-50'
                }`}
              >
                <span>{persona.icon}</span>
                {persona.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(planFeatures).map(([planKey, plan], index) => {
            const pricing = currentPricing[planKey as keyof typeof currentPricing];
            const PlanIcon = plan.icon;
            
            return (
              <motion.div
                key={planKey}
                initial={{ opacity: 0, y: 60 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
                className={`relative ${plan.highlight ? 'card-featured' : 'card-elevated'} p-8`}
              >
                {plan.highlight && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  </div>
                )}

                {/* Plan Header */}
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-4">
                    <PlanIcon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                  <p className="text-muted-foreground text-sm">{plan.description}</p>
                </div>

                {/* Pricing */}
                <div className="text-center mb-8">
                  <div className="flex items-baseline justify-center gap-2 mb-2">
                    {pricing.originalPrice && (
                      <span className="text-lg text-muted-foreground line-through">
                        ₹{pricing.originalPrice}
                      </span>
                    )}
                    <span className="text-4xl font-bold text-foreground">₹{pricing.price}</span>
                    {billingCycle !== 'lifetime' && (
                      <span className="text-muted-foreground">/{billingCycle.slice(0, 2)}</span>
                    )}
                  </div>
                  {billingCycle === 'lifetime' && (
                    <p className="text-sm text-success font-medium">One-time payment</p>
                  )}
                </div>

                {/* Features */}
                <div className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-success/20 flex items-center justify-center">
                        <Check className="w-3 h-3 text-success" />
                      </div>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <CinematicButton 
                  variant={plan.highlight ? "hero" : "outline"} 
                  className="w-full"
                >
                  Get Started
                </CinematicButton>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Info */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground mb-4">
            All plans include 14-day free trial • No setup fees • Cancel anytime
          </p>
          <div className="flex flex-wrap justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-success" />
              99.9% Uptime SLA
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-success" />
              24/7 Support
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-success" />
              30-Day Money Back
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};