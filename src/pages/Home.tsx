import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight, Code2, Layers, Smartphone, Briefcase, ChevronRight, Globe, ShoppingCart, Atom, TrendingUp, Star, Quote, Zap, ShieldCheck, Users, Building, HeartPulse, CreditCard } from "lucide-react";

export function Home() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.5 }
  };

  const staggerContainer = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: true, margin: "-100px" },
    transition: { staggerChildren: 0.2 }
  };

  const services = [
    {
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80",
      title: "Web Development",
      description: "Custom, scalable, and high-performance web applications tailored to your business needs."
    },
    {
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=600&q=80",
      title: "Shopify Solutions",
      description: "High-converting eCommerce stores with custom themes and rapid integrations."
    },
    {
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80",
      title: "React & Frontend",
      description: "Interactive, fast, and accessible user interfaces using modern React ecosystems."
    },
    {
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=600&q=80",
      title: "Mobile Apps",
      description: "Cross-platform mobile applications that keep your customers connected anywhere."
    },
    {
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80",
      title: "SEO & Growth",
      description: "Data-driven SEO strategies to improve search visibility and drive organic traffic."
    }
  ];

  const features = [
    {
      icon: <Zap className="w-6 h-6 text-blue-500" />,
      title: "Rapid Delivery",
      desc: "Agile methodologies ensuring quick time-to-market without compromising quality."
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-blue-500" />,
      title: "Enterprise Security",
      desc: "Bank-grade security protocols to protect your data and user privacy."
    },
    {
      icon: <Users className="w-6 h-6 text-blue-500" />,
      title: "Dedicated Teams",
      desc: "Access to top-tier developers seamlessly integrated into your workflow."
    }
  ];

  const testimonials = [
    {
      name: "Sarah Jenkins",
      role: "CTO, TechFlow",
      text: "eWebWorld completely transformed our digital presence. Their React expertise helped us scale effortlessly."
    },
    {
      name: "David Chen",
      role: "Founder, RetailPro",
      text: "The Shopify store they built increased our conversion rate by 150% in just two months. Exceptional work."
    }
  ];

  const industries = [
    { name: "Healthcare", icon: <HeartPulse className="w-6 h-6" /> },
    { name: "FinTech", icon: <CreditCard className="w-6 h-6" /> },
    { name: "Real Estate", icon: <Building className="w-6 h-6" /> },
    { name: "eCommerce", icon: <ShoppingCart className="w-6 h-6" /> }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gray-50 dark:bg-[#0A0C10] pt-24 pb-32 border-b border-gray-200 dark:border-slate-800/50">
        <div className="absolute inset-0 bg-[#0A0C10] opacity-0 dark:opacity-100 -z-10"></div>
        <div className="mx-auto max-w-[1024px] px-6 lg:px-10 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="flex flex-col items-center justify-center mb-10">
              <div className="flex items-center justify-center gap-4 mb-5">
                <motion.img 
                   src="https://rest.techbehemoths.com/storage/images/companies/54305/86fec33a04e29083599f674bf4d8f672.png" 
                   alt="eWebWorld Logo" 
                   className="w-16 h-16 md:w-20 md:h-20 rounded-xl object-contain p-1 shadow-2xl border border-gray-200 dark:border-slate-700 bg-white"
                   initial={{ opacity: 0, scale: 0.8 }}
                   animate={{ opacity: 1, scale: 1 }}
                   whileHover={{ scale: 1.08, rotate: 2 }}
                   transition={{ type: "spring", stiffness: 300, damping: 15 }}
                />
                <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                  eWeb<span className="text-blue-600 dark:text-blue-500">World</span>
                </h2>
              </div>
              <p className="text-[10px] md:text-xs font-bold text-gray-500 dark:text-slate-400 uppercase tracking-[0.25em] bg-white dark:bg-slate-900/50 px-5 py-2.5 rounded-full border border-gray-200 dark:border-slate-800 shadow-sm relative overflow-hidden group">
                <span className="relative z-10">This website is custom built for this company.</span>
                <span className="absolute inset-0 bg-blue-500/10 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out z-0"></span>
              </p>
            </div>
            
            <h1 className="font-display text-4xl md:text-6xl font-extrabold tracking-tighter text-gray-900 dark:text-white mb-6 leading-tight max-w-4xl mx-auto">
              Build High-Performance Websites & Apps That <span className="text-blue-600 dark:text-blue-500">Grow Your Business</span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-slate-400 mb-10 leading-relaxed max-w-2xl mx-auto">
              We empower global enterprises with cutting-edge web infrastructure, Shopify eCommerce solutions, mobile applications, and scalable digital platforms.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link 
                to="/contact" 
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-xs font-bold uppercase tracking-tighter rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20"
              >
                Get Started
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link 
                to="/contact" 
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-xs font-bold uppercase tracking-widest rounded-full bg-white text-gray-900 border border-gray-200 hover:bg-gray-50 dark:bg-slate-900/50 dark:text-slate-300 dark:border-slate-800 dark:hover:bg-slate-800 transition-all"
              >
                Hire Developers
                <Users className="w-4 h-4" />
              </Link>
            </div>
            
            <div className="mt-20 pt-10 border-t border-gray-200 dark:border-slate-800/50">
              <div className="grid grid-cols-3 gap-6">
                <div>
                  <h4 className="text-gray-900 dark:text-white font-bold text-3xl">12+</h4>
                  <p className="text-[10px] text-gray-500 dark:text-slate-500 uppercase tracking-widest mt-2 font-bold">Years Active</p>
                </div>
                <div>
                  <h4 className="text-gray-900 dark:text-white font-bold text-3xl">250+</h4>
                  <p className="text-[10px] text-gray-500 dark:text-slate-500 uppercase tracking-widest mt-2 font-bold">Global Clients</p>
                </div>
                <div>
                  <h4 className="text-gray-900 dark:text-white font-bold text-3xl">98%</h4>
                  <p className="text-[10px] text-gray-500 dark:text-slate-500 uppercase tracking-widest mt-2 font-bold">Success Rate</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Client Logos / Trust Section */}
      <section className="py-12 bg-white dark:bg-[#0D1117] border-t border-gray-200 dark:border-slate-800/50 border-b">
        <div className="mx-auto max-w-[1024px] px-6 lg:px-10">
          <p className="text-center text-[10px] font-bold text-gray-400 dark:text-slate-500 uppercase tracking-widest mb-8">Trusted by Forward-Thinking Companies Worldwide</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500 dark:opacity-40 dark:hover:opacity-100">
             {/* Dummy Logos */}
             <div className="text-lg font-display font-bold text-gray-800 dark:text-white flex items-center gap-2"><div className="w-6 h-6 rounded-full bg-current"></div> AcmeCorp</div>
             <div className="text-lg font-display font-bold text-gray-800 dark:text-white flex items-center gap-2">GlobalTech <Atom className="w-6 h-6"/></div>
             <div className="text-lg font-display font-bold text-gray-800 dark:text-white flex items-center gap-2"><Globe className="w-6 h-6"/> Nexus</div>
             <div className="text-lg font-display font-bold text-gray-800 dark:text-white flex items-center gap-2">Vertex <Layers className="w-6 h-6"/></div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gray-50 dark:bg-[#0A0C10] border-b border-gray-200 dark:border-slate-800/50">
        <div className="mx-auto max-w-[1024px] px-6 lg:px-10">
          <motion.div 
            {...fadeIn}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <h3 className="text-[10px] font-bold text-gray-500 dark:text-slate-500 uppercase tracking-[0.25em] mb-4">Our Expertise</h3>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Comprehensive Services
            </h2>
            <p className="text-base text-gray-600 dark:text-slate-400">
              Innovative digital solutions to help you establish a powerful online presence and achieve your business goals.
            </p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {services.map((service, index) => (
              <motion.div 
                key={index}
                variants={fadeIn}
                className="neon-card-wrapper group cursor-pointer"
              >
                <div className="neon-card-inner p-6 flex flex-col h-full bg-white dark:bg-slate-900 border border-transparent dark:border-slate-800 rounded-xl">
                  <div className="relative w-full aspect-video rounded-lg overflow-hidden mb-6 bg-gray-100 dark:bg-slate-800">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-blue-900/10 group-hover:bg-transparent transition-colors duration-300 pointer-events-none mix-blend-overlay"></div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-slate-400 leading-relaxed mb-6 flex-grow">
                    {service.description}
                  </p>
                  <Link to="/contact" className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-gray-500 dark:text-slate-500 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mt-auto">
                    Learn more <ChevronRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white dark:bg-[#0D1117] border-b border-gray-200 dark:border-slate-800/50">
        <div className="mx-auto max-w-[1024px] px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeIn}>
              <h3 className="text-[10px] font-bold text-gray-500 dark:text-slate-500 uppercase tracking-[0.25em] mb-4">Why Choose Us</h3>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Your Catalyst for Digital Growth
              </h2>
              <div className="space-y-6 text-base text-gray-600 dark:text-slate-400 leading-relaxed mb-8">
                <p>
                  We are not just a vendor; we are your strategic technology partner. We combine deep technical expertise with business acumen to deliver solutions that drive real ROI.
                </p>
              </div>
              <div className="space-y-6">
                {features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="p-2 bg-blue-50 dark:bg-slate-800 rounded-lg text-blue-600 dark:text-blue-400 mt-1">
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white">{feature.title}</h4>
                      <p className="text-sm text-gray-600 dark:text-slate-400 mt-1">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div 
              {...fadeIn} 
              transition={{ delay: 0.2, duration: 0.5 }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="space-y-4">
                <div className="bg-gray-50 dark:bg-slate-900/50 rounded-2xl p-6 border border-gray-200 dark:border-slate-800 aspect-square flex flex-col justify-end">
                  <h4 className="text-3xl font-bold text-gray-900 dark:text-white">99%</h4>
                  <p className="text-xs text-gray-500 dark:text-slate-400 font-bold uppercase tracking-widest mt-2">Uptime</p>
                </div>
                <div className="bg-blue-600 rounded-2xl p-6 aspect-square flex flex-col justify-end text-white">
                  <h4 className="text-3xl font-bold">50+</h4>
                  <p className="text-xs text-blue-200 font-bold uppercase tracking-widest mt-2">Experts</p>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="bg-gray-900 dark:bg-slate-800 rounded-2xl p-6 aspect-square flex flex-col justify-end text-white shadow-xl">
                  <h4 className="text-3xl font-bold">24/7</h4>
                  <p className="text-xs text-gray-400 dark:text-slate-400 font-bold uppercase tracking-widest mt-2">Support</p>
                </div>
                <div className="bg-gray-50 dark:bg-slate-900/50 rounded-2xl p-6 border border-gray-200 dark:border-slate-800 aspect-square flex flex-col justify-end">
                  <h4 className="text-3xl font-bold text-gray-900 dark:text-white">5★</h4>
                  <p className="text-xs text-gray-500 dark:text-slate-400 font-bold uppercase tracking-widest mt-2">Ratings</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Industries & Testimonials */}
      <section className="py-24 bg-gray-50 dark:bg-[#0A0C10] border-t border-gray-200 dark:border-slate-800/50">
        <div className="mx-auto max-w-[1024px] px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Industries */}
            <motion.div {...fadeIn}>
               <h3 className="text-[10px] font-bold text-gray-500 dark:text-slate-500 uppercase tracking-[0.25em] mb-4">Industries</h3>
               <h2 className="font-display text-3xl font-bold text-gray-900 dark:text-white mb-8">
                 Sectors We Empower
               </h2>
               <div className="grid grid-cols-2 gap-4">
                 {industries.map((ind, i) => (
                   <div key={i} className="flex items-center gap-3 p-4 bg-white dark:bg-[#0D1117] border border-gray-200 dark:border-slate-800 rounded-xl hover:border-blue-500/50 transition-colors">
                     <div className="text-blue-600 dark:text-blue-400">{ind.icon}</div>
                     <span className="font-bold text-sm text-gray-900 dark:text-white">{ind.name}</span>
                   </div>
                 ))}
               </div>
            </motion.div>

            {/* Testimonials */}
            <motion.div {...fadeIn} transition={{ delay: 0.2 }}>
               <h3 className="text-[10px] font-bold text-gray-500 dark:text-slate-500 uppercase tracking-[0.25em] mb-4">Client Feedback</h3>
               <h2 className="font-display text-3xl font-bold text-gray-900 dark:text-white mb-8">
                 What They Say
               </h2>
               <div className="space-y-6">
                 {testimonials.map((test, i) => (
                   <div key={i} className="relative p-6 bg-white dark:bg-[#0D1117] border border-gray-200 dark:border-slate-800 rounded-xl">
                     <Quote className="absolute top-6 right-6 w-8 h-8 text-gray-100 dark:text-slate-800" />
                     <div className="flex text-yellow-400 mb-4">
                       <Star className="w-3 h-3 fill-current" /><Star className="w-3 h-3 fill-current" /><Star className="w-3 h-3 fill-current" /><Star className="w-3 h-3 fill-current" /><Star className="w-3 h-3 fill-current" />
                     </div>
                     <p className="text-sm text-gray-600 dark:text-slate-400 italic mb-4 relative z-10 hidden sm:block">"{test.text}"</p>
                      <p className="text-xs text-gray-600 dark:text-slate-400 italic mb-4 relative z-10 sm:hidden">"{test.text}"</p>
                     <div>
                       <p className="font-bold text-gray-900 dark:text-white text-sm">{test.name}</p>
                       <p className="text-[10px] text-gray-500 dark:text-slate-500 uppercase tracking-widest">{test.role}</p>
                     </div>
                   </div>
                 ))}
               </div>
            </motion.div>
            
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-blue-600 dark:bg-[#0B0F1A] border-t border-gray-200 dark:border-slate-800/50">
        <div className="mx-auto max-w-[1024px] px-6 lg:px-10 text-center relative z-10">
          <motion.div {...fadeIn}>
            <h3 className="text-[10px] font-bold text-blue-200 dark:text-slate-500 uppercase tracking-[0.25em] mb-4">Connect</h3>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-6">
              Ready to elevate your digital presence?
            </h2>
            <p className="text-blue-100 dark:text-slate-400 text-lg mb-10 max-w-2xl mx-auto">
              Whether you need a complete website overhaul or a dynamic application built from scratch, our team is ready to bring your vision to life.
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center justify-center px-8 py-4 text-xs font-bold uppercase tracking-[0.3em] rounded-md bg-white text-blue-900 border border-transparent dark:bg-blue-600 dark:text-white dark:hover:bg-blue-500 hover:bg-gray-100 transition-all shadow-xl"
            >
              Send Inquiry
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
