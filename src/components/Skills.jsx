import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories = [
    {
      title: 'Frontend Development',
      skills: [
        { name: 'React.js', percentage: 90 },
        { name: 'JavaScript', percentage: 85 },
        { name: 'HTML/CSS', percentage: 95 },
        { name: 'TypeScript', percentage: 80 },
        { name: 'Tailwind CSS', percentage: 88 },
      ],
    },
    {
      title: 'Backend Development',
      skills: [
        { name: 'Node.js', percentage: 85 },
        { name: 'Python', percentage: 90 },
        { name: 'Express.js', percentage: 82 },
        { name: 'MongoDB', percentage: 78 },
        { name: 'PostgreSQL', percentage: 75 },
      ],
    },
    {
      title: 'Data Analysis',
      skills: [
        { name: 'Python (Pandas)', percentage: 92 },
        { name: 'SQL', percentage: 88 },
        { name: 'Tableau', percentage: 85 },
        { name: 'Power BI', percentage: 80 },
        { name: 'Excel', percentage: 95 },
      ],
    },
    {
      title: 'Tools & Others',
      skills: [
        { name: 'Git/GitHub', percentage: 90 },
        { name: 'Figma', percentage: 75 },
        { name: 'Docker', percentage: 70 },
        { name: 'AWS', percentage: 65 },
        { name: 'Jira', percentage: 85 },
      ],
    },
  ];

  const SkillBar = ({ skill, index }) => (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="mb-6"
    >
      <div className="flex justify-between items-center mb-2">
                          <span className="text-gray-300 font-medium">{skill.name}</span>
                  <span className="text-purple-400 font-semibold">{skill.percentage}%</span>
      </div>
      <div className="skill-bar">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${skill.percentage}%` } : {}}
          transition={{ delay: index * 0.1 + 0.3, duration: 1 }}
          className="skill-progress"
        />
      </div>
    </motion.div>
  );

    return (
    <section id="skills" className="section-padding relative">
      {/* 3D Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            rotate: 360,
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/4 left-1/4 w-40 h-40 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-2xl"
        />
        <motion.div
          animate={{
            rotate: -360,
            scale: [1, 0.8, 1],
          }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-full blur-2xl"
        />
      </div>
      
      <div className="container-custom relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            A comprehensive set of technical skills that enable me to deliver exceptional results
            in web development and data analysis projects.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: categoryIndex * 0.2, duration: 0.8 }}
                                        className="bg-gray-900/50 backdrop-blur-md p-8 rounded-xl shadow-lg border border-purple-500/20"
            >
                                        <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                            <span className="text-3xl mr-3">
                              {categoryIndex === 0 && '🌐'}
                              {categoryIndex === 1 && '⚙️'}
                              {categoryIndex === 2 && '📊'}
                              {categoryIndex === 3 && '🛠️'}
                            </span>
                            {category.title}
                          </h3>
              <div>
                {category.skills.map((skill, index) => (
                  <SkillBar
                    key={skill.name}
                    skill={skill}
                    index={categoryIndex * 5 + index}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-16"
        >
                                <h3 className="text-2xl font-bold text-white text-center mb-8">
                        Additional Skills & Technologies
                      </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              'Redux', 'Next.js', 'GraphQL', 'REST APIs', 'Jest', 'Cypress',
              'NumPy', 'Scikit-learn', 'Matplotlib', 'Seaborn', 'Jupyter', 'Apache Spark',
              'Sass', 'Bootstrap', 'Material-UI', 'Ant Design', 'Storybook', 'Webpack',
              'Nginx', 'Redis', 'Elasticsearch', 'Kubernetes', 'Jenkins', 'CI/CD'
            ].map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 1 + index * 0.05, duration: 0.3 }}
                                            className="bg-gray-900/50 backdrop-blur-md px-4 py-3 rounded-lg text-center shadow-sm border border-purple-500/20 hover:shadow-md transition-shadow duration-200"
                          >
                            <span className="text-sm font-medium text-gray-300">{skill}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 