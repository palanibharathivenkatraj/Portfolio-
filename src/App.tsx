import { motion, AnimatePresence } from "motion/react";
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Code2, 
  BrainCircuit, 
  Database, 
  Cpu,
  ChevronRight,
  GraduationCap,
  User,
  Calendar
} from "lucide-react";
import { useState, useEffect } from "react";

const projects = [
  {
    title: "AI Image Classifier",
    description: "A deep learning model built with TensorFlow to classify images into various categories with high accuracy.",
    tech: ["Python", "TensorFlow", "Keras"],
    link: "#"
  },
  {
    title: "Predictive Analytics Dashboard",
    description: "Real-time dashboard for visualizing market trends and predicting future movements using LSTM networks.",
    tech: ["React", "D3.js", "FastAPI"],
    link: "#"
  },
  {
    title: "Natural Language Processor",
    description: "A custom NLP pipeline for sentiment analysis and entity recognition in multi-lingual datasets.",
    tech: ["PyTorch", "HuggingFace", "NLTK"],
    link: "#"
  }
];

const skills = [
  { name: "Machine Learning", icon: BrainCircuit, color: "text-blue-400" },
  { name: "Deep Learning", icon: Cpu, color: "text-purple-400" },
  { name: "Python Programming", icon: Code2, color: "text-yellow-400" },
  { name: "Data Science", icon: Database, color: "text-green-400" },
];

export default function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 overflow-x-hidden">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "glass py-4" : "py-6"}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-display font-bold tracking-tighter"
          >
            PB<span className="text-indigo-500">.</span>
          </motion.div>
          <div className="flex gap-8 items-center">
            <motion.a 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              href="#about" 
              className="text-sm font-medium hover:text-indigo-400 transition-colors"
            >
              About
            </motion.a>
            <motion.a 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              href="#projects" 
              className="text-sm font-medium hover:text-indigo-400 transition-colors"
            >
              Projects
            </motion.a>
            <motion.a 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              href="#contact" 
              className="px-4 py-2 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium transition-all"
            >
              Contact
            </motion.a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px]" />
        </div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
              </span>
              AVAILABLE FOR PROJECTS
            </div>
            <h1 className="text-6xl md:text-8xl font-display font-bold tracking-tight mb-6 leading-[1.1]">
              Crafting the <span className="text-gradient">Future</span> with AI.
            </h1>
            <p className="text-xl text-slate-400 mb-8 max-w-lg leading-relaxed">
              I'm <span className="text-white font-semibold">Palanibharathi</span>, a CSE student specializing in Artificial Intelligence and Machine Learning.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#projects" className="px-8 py-4 rounded-xl bg-white text-slate-950 font-bold hover:scale-105 transition-transform flex items-center gap-2">
                View My Work <ChevronRight size={20} />
              </a>
              <div className="flex gap-4 items-center px-4">
                <a href="https://www.linkedin.com/in/palanibharathi-venkatraj-92165b2a5?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl glass hover:bg-white/10 transition-colors">
                  <Linkedin size={24} />
                </a>
                <a href="mailto:palanibharathivenkatraj@gmail.com" className="p-3 rounded-xl glass hover:bg-white/10 transition-colors">
                  <Mail size={24} />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative hidden lg:block"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-indigo-500/20">
              <img 
                src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1000" 
                alt="AI Concept" 
                className="w-full h-auto"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
            </div>
            {/* Floating Cards */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 glass p-4 rounded-2xl shadow-xl z-20"
            >
              <BrainCircuit className="text-indigo-400 mb-2" size={32} />
              <div className="text-xs font-bold">Neural Networks</div>
            </motion.div>
            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-6 -left-6 glass p-4 rounded-2xl shadow-xl z-20"
            >
              <Code2 className="text-purple-400 mb-2" size={32} />
              <div className="text-xs font-bold">Clean Code</div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-display font-bold">About Me</h2>
              <p className="text-lg text-slate-400 leading-relaxed">
                I am an 18-year-old developer currently pursuing my degree in <span className="text-white">Computer Science and Engineering (AIML)</span> at <span className="text-white">K S Rangaswamy College of Technology</span>. 
                My passion lies at the intersection of data science and software engineering, where I strive to build intelligent systems that solve real-world problems.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="glass p-6 rounded-2xl">
                  <GraduationCap className="text-indigo-400 mb-4" size={32} />
                  <h3 className="font-bold mb-1">Education</h3>
                  <p className="text-sm text-slate-400">KSR College of Technology</p>
                </div>
                <div className="glass p-6 rounded-2xl">
                  <BrainCircuit className="text-purple-400 mb-4" size={32} />
                  <h3 className="font-bold mb-1">Specialization</h3>
                  <p className="text-sm text-slate-400">AI & Machine Learning</p>
                </div>
                <div className="glass p-6 rounded-2xl">
                  <User className="text-pink-400 mb-4" size={32} />
                  <h3 className="font-bold mb-1">Age</h3>
                  <p className="text-sm text-slate-400">18 Years Old</p>
                </div>
                <div className="glass p-6 rounded-2xl">
                  <Calendar className="text-green-400 mb-4" size={32} />
                  <h3 className="font-bold mb-1">Experience</h3>
                  <p className="text-sm text-slate-400">Student Developer</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="glass p-8 rounded-3xl flex flex-col items-center text-center group"
                >
                  <skill.icon className={`${skill.color} mb-4 group-hover:scale-110 transition-transform`} size={48} />
                  <span className="font-bold">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl font-display font-bold mb-4">Featured Projects</h2>
              <p className="text-slate-400">A selection of my recent technical explorations.</p>
            </div>
            <a href="#" className="text-indigo-400 font-semibold flex items-center gap-2 hover:gap-3 transition-all">
              View All <ChevronRight size={20} />
            </a>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass rounded-3xl overflow-hidden group"
              >
                <div className="h-48 bg-slate-800 relative overflow-hidden">
                  <img 
                    src={`https://picsum.photos/seed/${project.title}/800/600`} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-slate-950/40 group-hover:bg-slate-950/20 transition-colors" />
                </div>
                <div className="p-8">
                  <div className="flex gap-2 mb-4">
                    {project.tech.map((t, i) => (
                      <span key={i} className="text-[10px] font-bold tracking-widest uppercase px-2 py-1 rounded bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                        {t}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                  <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  <a href={project.link} className="inline-flex items-center gap-2 text-white font-bold text-sm hover:text-indigo-400 transition-colors">
                    View Project <ExternalLink size={16} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-indigo-600/10 to-transparent -z-10" />
        
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-5xl md:text-7xl font-display font-bold mb-8">Let's build something <span className="text-gradient">amazing</span> together.</h2>
          <p className="text-xl text-slate-400 mb-12">
            Currently looking for internship opportunities and collaborative projects in the field of AI/ML.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a 
              href="mailto:palanibharathivenkatraj@gmail.com" 
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold transition-all flex items-center justify-center gap-3"
            >
              <Mail size={20} /> Email Me
            </a>
            <a 
              href="https://www.linkedin.com/in/palanibharathi-venkatraj-92165b2a5?utm_source=share_via&utm_content=profile&utm_medium=member_android" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl glass hover:bg-white/10 text-white font-bold transition-all flex items-center justify-center gap-3"
            >
              <Linkedin size={20} /> LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:row justify-between items-center gap-8">
          <div className="text-xl font-display font-bold">
            PB<span className="text-indigo-500">.</span>
          </div>
          <div className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Palanibharathi. All rights reserved.
          </div>
          <div className="flex gap-6">
            <a href="#" className="text-slate-400 hover:text-white transition-colors"><Github size={20} /></a>
            <a href="https://www.linkedin.com/in/palanibharathi-venkatraj-92165b2a5?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors"><Linkedin size={20} /></a>
            <a href="mailto:palanibharathivenkatraj@gmail.com" className="text-slate-400 hover:text-white transition-colors"><Mail size={20} /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}
