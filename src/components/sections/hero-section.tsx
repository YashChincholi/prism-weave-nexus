import { motion } from "framer-motion";
import { CinematicButton } from "@/components/ui/cinematic-button";
import { ArrowRight, Play, Zap } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/95 to-background" />
      
      <div className="container-responsive relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center max-w-5xl mx-auto"
        >
          {/* Hero Badge */}
          <motion.div 
            variants={itemVariants}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8">
              <Zap className="w-4 h-4" />
              Live in 5 Minutes
            </div>
          </motion.div>

          {/* Main Headline */}
          <motion.h1 
            variants={itemVariants} 
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-hero text-cinematic mb-6"
          >
            Your Website.
            <br />
            Your App.
            <br />
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Your Ecosystem.
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p 
            variants={itemVariants} 
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            From QR Menus to E-Commerce. From Builders to Bloggers.{" "}
            <span className="text-primary font-semibold">One Ecosystem. Infinite Growth.</span>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            variants={itemVariants}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <CinematicButton variant="hero" size="xl">
              Start Free
              <ArrowRight className="ml-2 w-5 h-5" />
            </CinematicButton>
            
            <CinematicButton variant="secondary" size="xl">
              <Play className="mr-2 w-5 h-5" />
              Watch Demo
            </CinematicButton>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div 
            variants={itemVariants} 
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-sm text-muted-foreground"
          >
            <p className="mb-4">Trusted by 10,000+ businesses worldwide</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <div className="text-xs font-medium">⭐ 4.9/5 Rating</div>
              <div className="text-xs font-medium">🚀 5-Min Setup</div>
              <div className="text-xs font-medium">💳 40+ Payment Options</div>
              <div className="text-xs font-medium">🌍 Multiple Industries</div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-float" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-accent/10 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }} />
    </section>
  );
};