import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Clock, DollarSign, Globe, Target, ArrowRight, X } from "lucide-react";

const comparisons = [
  {
    title: "Time to Launch",
    competitor: {
      icon: Clock,
      text: "7 days setup",
      description: "Complex configurations",
      status: "slow"
    },
    masworld: {
      icon: Clock,
      text: "5 min → LIVE",
      description: "Instant deployment",
      status: "fast"
    }
  },
  {
    title: "Pricing",
    competitor: {
      icon: DollarSign,
      text: "Hidden costs",
      description: "Surprise billing",
      status: "expensive"
    },
    masworld: {
      icon: DollarSign,
      text: "Transparent pricing",
      description: "No surprises",
      status: "affordable"
    }
  },
  {
    title: "Payment Options",
    competitor: {
      icon: Globe,
      text: "Stripe/PayPal only",
      description: "Limited options",
      status: "limited"
    },
    masworld: {
      icon: Globe,
      text: "40+ Payment Methods",
      description: "UPI, Paytm, WhatsApp Pay",
      status: "comprehensive"
    }
  },
  {
    title: "Industry Focus",
    competitor: {
      icon: Target,
      text: "Generic templates",
      description: "One-size-fits-all",
      status: "generic"
    },
    masworld: {
      icon: Target,
      text: "Industry-specific",
      description: "Tailored solutions",
      status: "specialized"
    }
  }
];

const ComparisonRow = ({ comparison, index }: { comparison: typeof comparisons[0], index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -60 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -60 }}
          transition={{ duration: 0.8, delay: index * 0.15, ease: "easeOut" }}
      className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center"
    >
      {/* Category */}
      <div className="text-center md:text-left">
        <h3 className="text-xl font-bold text-foreground mb-2">{comparison.title}</h3>
      </div>

      {/* Competitor */}
      <div className="card-elevated p-6 bg-neutral-50 border-neutral-200">
        <div className="flex items-center gap-3 mb-3">
          <div className="p-2 rounded-lg bg-neutral-200">
            <comparison.competitor.icon className="w-5 h-5 text-neutral-600" />
          </div>
          <div className="flex items-center gap-2">
            <X className="w-4 h-4 text-red-500" />
            <span className="font-semibold text-neutral-700">{comparison.competitor.text}</span>
          </div>
        </div>
        <p className="text-sm text-neutral-600">{comparison.competitor.description}</p>
      </div>

      {/* MAS WORLD */}
      <div className="card-featured p-6">
        <div className="flex items-center gap-3 mb-3">
          <div className="p-2 rounded-lg bg-primary/20">
            <comparison.masworld.icon className="w-5 h-5 text-primary" />
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-success flex items-center justify-center">
              <ArrowRight className="w-2.5 h-2.5 text-white" />
            </div>
            <span className="font-semibold text-primary">{comparison.masworld.text}</span>
          </div>
        </div>
        <p className="text-sm text-muted-foreground">{comparison.masworld.description}</p>
      </div>
    </motion.div>
  );
};

export const WhyDifferentSection = () => {
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
            Why MAS WORLD is
            <br />
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Different
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We don't just build websites. We create complete business ecosystems that work.
          </p>
        </motion.div>

        <div className="space-y-12">
          {comparisons.map((comparison, index) => (
            <ComparisonRow key={comparison.title} comparison={comparison} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          className="text-center mt-16"
        >
          <div className="card-featured p-8 inline-block">
            <h3 className="text-2xl font-bold text-primary mb-4">See the Difference Yourself</h3>
            <p className="text-muted-foreground mb-6">Start your free trial and experience the MAS WORLD advantage</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-hero">
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button className="btn-secondary">
                Compare Features
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};