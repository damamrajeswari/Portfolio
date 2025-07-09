import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Database, Globe, Smartphone, Server, Palette, Cloud, PenTool } from 'lucide-react';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skills = [
    { name: 'Frontend Development', icon: Globe, description: 'React, TypeScript, Tailwind CSS' },
    { name: 'Backend Development', icon: Server, description: 'Node.js, Express, Python, REST APIs' },
    { name: 'Database Management', icon: Database, description: 'MongoDB, MySQL' },
    { name: 'Cloud', icon: Cloud, description: 'Azure' },
    { name: 'Programming Languages', icon: Code, description: 'JavaScript, TypeScript, Python, Java' },
    { name: 'Tools', icon: PenTool, description: 'Git, GitHub' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-16"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </motion.div>

          {/* About Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                Passionate Developer & Problem Solver
              </h3>
              
              <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                <p>
                  I'm a Full Stack Developer with a strong focus on building smart, scalable, and user-friendly web applications. I enjoy solving real-world problems through clean and maintainable code, and I'm always looking for ways to enhance the user experience by integrating intelligent features.
                </p>
                
                <p>
                  With a solid foundation in both frontend and backend development, my journey has also included hands-on experience with AI, Machine Learning, and IoT-based systems. I believe in learning by doing and continuously pushing myself to grow through new challenges and meaningful projects.


                </p>
                
                <p>
                  When I’m not coding, I spend time learning at my own pace, staying updated with emerging tech trends, or working on projects that help me apply what I’ve learned. I enjoy building things that solve real problems and reflect my growth as a developer.


                </p>
              </div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="inline-block"
              >
                <a
                  href="/Resume Final.pdf"
                  download
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  View Full Resume
                </a>
              </motion.div>
            </motion.div>

            <motion.div variants={itemVariants} className="relative">
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                  Quick Facts
                </h4>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-600 dark:text-gray-300">
                      <strong>Location:</strong> Hyderabad, Telangana
                    </span>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                    <span className="text-gray-600 dark:text-gray-300">
                      <strong>Experience:</strong> Full Stack Development, ML & Generative AI 
                    </span>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                    <span className="text-gray-600 dark:text-gray-300">
                      <strong>Focus:</strong> Modern Web Technologies & AI integration,
                    </span>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-pink-600 rounded-full"></div>
                    <span className="text-gray-600 dark:text-gray-300">
                      <strong>Passion:</strong> Clean Code, Smart Automation & User Experience
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Skills Section */}
          <motion.div variants={itemVariants} className="space-y-8">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white text-center">
              Skills & Expertise
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg">
                      <skill.icon size={24} className="text-white" />
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {skill.name}
                    </h4>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {skill.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;