import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Briefcase, MapPin, Clock, ArrowRight, UserPlus } from "lucide-react";

export function Careers() {
  const jobs = [
    {
      id: "fe-dev-1",
      title: "Frontend Developer (HTML/CSS/JS)",
      department: "Engineering",
      location: "Remote / New York",
      type: "Full-time",
      experience: "2-4 years",
      description: "We are looking for a passionate Frontend Developer with strong skills in HTML, CSS, JavaScript, and modern layout techniques like Flexbox and Grid. You will be responsible for creating responsive, accessible, and highly interactive user interfaces.",
      skills: ["HTML5", "CSS3", "JavaScript", "React", "Responsive Design"]
    },
    {
      id: "uiux-designer",
      title: "UI/UX Designer",
      department: "Design",
      location: "Remote",
      type: "Full-time",
      experience: "3+ years",
      description: "Join our creative team to design intuitive and engaging digital experiences. You will collaborate with developers to translate your stunning Figma designs into structural prototypes and production-ready components.",
      skills: ["Figma", "Prototyping", "User Research", "Wireframing"]
    },
    {
      id: "be-dev-1",
      title: "Backend Engineer",
      department: "Engineering",
      location: "London, UK",
      type: "Full-time",
      experience: "4+ years",
      description: "Help us build the scalable APIs that power our next-generation web applications. You should have a deep understanding of Node.js, databases, and microservices architecture.",
      skills: ["Node.js", "Express", "PostgreSQL", "Docker", "REST APIs"]
    }
  ];

  const fadeUpContainer = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { staggerChildren: 0.1, duration: 0.5 }
  };

  const jobItem = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.4 }
  };

  return (
    <div className="bg-gray-50 dark:bg-[#0A0C10] min-h-screen py-16 sm:py-24">
      <div className="mx-auto max-w-[1024px] px-6 lg:px-10">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h3 className="text-[10px] font-bold text-gray-500 dark:text-slate-500 uppercase tracking-[0.25em] mb-4">Join the Team</h3>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Help us build the future.
          </h1>
          <p className="text-lg text-gray-600 dark:text-slate-400">
            We're always looking for talented, passionate individuals to help us build the future of the web. Explore our open positions below.
          </p>
        </motion.div>

        {/* Job Listings */}
        <motion.div 
          variants={fadeUpContainer}
          initial="initial"
          whileInView="whileInView"
          className="max-w-4xl mx-auto space-y-6"
        >
          {jobs.map((job) => (
            <motion.div 
              key={job.id}
              variants={jobItem}
              className="neon-card-wrapper"
            >
              <div className="neon-card-alt-inner p-6 sm:p-8 flex flex-col md:flex-row md:items-start justify-between gap-6">
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] bg-blue-500 text-white px-2 py-0.5 rounded uppercase font-bold">New Opening</span>
                    <span className="text-[10px] text-gray-500 dark:text-slate-500 font-mono tracking-widest uppercase">{job.department}</span>
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {job.title}
                  </h2>
                  <div className="text-[10px] text-gray-500 dark:text-slate-400 mb-4 italic uppercase tracking-widest">
                    Experience: {job.experience} • {job.location} • {job.type}
                  </div>
                  <p className="text-sm text-gray-600 dark:text-slate-400 leading-relaxed mb-6">
                    {job.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {job.skills.map((skill) => (
                      <span 
                        key={skill}
                        className="px-2 py-1 bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-slate-400 text-[9px] rounded font-mono uppercase tracking-widest"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-4 md:mt-0 pt-6 border-t md:border-t-0 md:pl-6 border-gray-100 dark:border-slate-800 md:border-l flex flex-row md:flex-col items-center md:items-stretch justify-between md:justify-center md:w-32 shrink-0">
                  <a 
                    href={`mailto:careers@ewebworld.com?subject=Application for ${job.title} role`}
                    className="w-full py-2 bg-blue-600 dark:bg-white text-white dark:text-black text-xs font-bold uppercase tracking-widest rounded-md hover:bg-blue-700 dark:hover:bg-slate-200 transition-colors text-center inline-block"
                  >
                    Apply Now
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Can't find role CTA */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-20 text-center bg-gray-100 dark:bg-slate-900/50 rounded-xl p-8 border border-gray-200 dark:border-slate-800 max-w-4xl mx-auto"
        >
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
            Don't see a perfect fit?
          </h3>
          <p className="text-sm text-gray-600 dark:text-slate-400 mb-6 max-w-xl mx-auto">
            We are always interested in meeting great talent. Send us your resume and tell us how you can make a difference.
          </p>
          <Link 
            to="/contact" 
            className="inline-flex items-center justify-center font-bold text-[10px] uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
          >
            Contact us directly <ArrowRight className="w-3 h-3 ml-2" />
          </Link>
        </motion.div>

      </div>
    </div>
  );
}
