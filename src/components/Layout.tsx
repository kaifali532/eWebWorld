import { Link, Outlet, useLocation } from "react-router-dom";
import { ThemeToggle } from "./ThemeToggle";
import { Globe2, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

export function Layout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Careers", path: "/careers" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 dark:border-slate-800/50 dark:bg-[#0D1117]/90 backdrop-blur-md transition-colors">
        <div className="mx-auto max-w-[1024px] px-6 lg:px-10">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link to="/" className="flex items-center gap-2 group">
                <img src="https://rest.techbehemoths.com/storage/images/companies/54305/86fec33a04e29083599f674bf4d8f672.png" alt="eWebWorld Logo" className="h-10 w-10 object-contain p-0.5 rounded-lg bg-white/80 dark:bg-white shadow-sm transition-transform group-hover:scale-105" />
                <span className="font-display text-xl font-bold tracking-tight text-gray-900 dark:text-white ml-1">eWeb<span className="text-blue-500">World</span></span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <div className="flex gap-8 text-sm font-medium uppercase tracking-widest text-gray-600 dark:text-slate-400">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`transition-colors hover:text-gray-900 dark:hover:text-white ${
                      location.pathname === link.path
                        ? "text-primary-600 dark:text-blue-400"
                        : "text-gray-600 dark:text-slate-400"
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
              <div className="pl-4 border-l border-gray-200 dark:border-slate-800/50 flex items-center gap-4">
                <ThemeToggle />
                <Link to="/contact" className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full text-xs font-bold uppercase tracking-tighter transition-all">
                  Get Started
                </Link>
              </div>
            </nav>

            {/* Mobile menu button */}
            <div className="flex items-center gap-4 md:hidden">
              <ThemeToggle />
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 -mr-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 overflow-hidden"
            >
              <div className="space-y-1 px-4 pb-3 pt-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`block rounded-md px-3 py-2 text-base font-medium ${
                      location.pathname === link.path
                        ? "bg-primary-50 text-primary-600 dark:bg-primary-900/50 dark:text-primary-400"
                        : "text-gray-600 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-900"
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Main Content */}
      <main className="flex-1 overflow-x-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="h-full"
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 dark:border-slate-800/50 bg-gray-50 dark:bg-[#06080A] py-12">
        <div className="mx-auto max-w-[1024px] px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <Link to="/" className="flex items-center gap-2 mb-4">
                <img src="https://rest.techbehemoths.com/storage/images/companies/54305/86fec33a04e29083599f674bf4d8f672.png" alt="eWebWorld Logo" className="w-6 h-6 object-contain p-0.5 rounded bg-white/80 dark:bg-white shadow-sm" />
                <span className="font-display text-lg font-bold tracking-tight text-gray-900 dark:text-white ml-1">eWeb<span className="text-blue-500">World</span></span>
              </Link>
              <p className="text-gray-500 dark:text-slate-400 text-sm max-w-sm leading-relaxed">
                Empowering businesses through cutting-edge web development, intuitive design systems, and scalable digital solutions.
              </p>
            </div>
            <div>
              <h3 className="text-xs font-bold text-gray-900 dark:text-slate-500 uppercase tracking-[0.25em] mb-4">Company</h3>
              <ul className="space-y-3 test-sm text-gray-500 dark:text-slate-400">
                <li><a href="/#about" className="hover:text-primary-600 dark:hover:text-white transition-colors">About Us</a></li>
                <li><Link to="/careers" className="hover:text-primary-600 dark:hover:text-white transition-colors">Careers</Link></li>
                <li><Link to="/contact" className="hover:text-primary-600 dark:hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xs font-bold text-gray-900 dark:text-slate-500 uppercase tracking-[0.25em] mb-4">Services</h3>
              <ul className="space-y-3 test-sm text-gray-500 dark:text-slate-400">
                <li><span className="hover:text-primary-600 dark:hover:text-white transition-colors cursor-pointer">Web Development</span></li>
                <li><span className="hover:text-primary-600 dark:hover:text-white transition-colors cursor-pointer">UI/UX Design Systems</span></li>
                <li><span className="hover:text-primary-600 dark:hover:text-white transition-colors cursor-pointer">Consulting</span></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-slate-800/50 flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] uppercase font-bold tracking-[0.2em] text-gray-400 dark:text-slate-600">
            <div>© {new Date().getFullYear()} eWebWorld. Website made by MD KAIF.</div>
            <div className="flex gap-6">
              <a href="https://github.com/kaifali532" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-1">GitHub</a>
              <a href="https://www.linkedin.com/in/md-kaif-8ab734264/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-1">LinkedIn</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
