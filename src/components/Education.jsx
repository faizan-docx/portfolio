import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiBook, FiAward, FiCalendar, FiMapPin } from 'react-icons/fi';

const Education = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const education = [
    {
      degree: 'Bachelors of Technology in Computer Science',
      institution: 'Guru Gobind Singh Indraprastha University',
      period: 'July 2022 - June 2026',
      location: 'New Delhi, India',
      description: 'Currently in 3rd year, pursuing comprehensive study of computer science fundamentals, algorithms, data structures, and software development methodologies.',
      icon: '🎓',
    },
    {
      degree: '12th CBSE',
      institution: 'Rukmani Devi Jaipuria Public School',
      period: '2021',
      location: 'New Delhi, India',
      description: 'Completed higher secondary education with focus on science stream.',
      icon: '📚',
    },
    {
      degree: '10th CBSE',
      institution: 'Rukmani Devi Jaipuria Public School',
      period: '2019',
      location: 'New Delhi, India',
      description: 'Completed secondary education with excellent academic performance.',
      icon: '📚',
    },
    {
      degree: 'Primary School',
      institution: 'United English Medium School',
      period: '-2018',
      location: 'New Delhi, India',
      description: 'Completed my Primary education.',
      icon: '📖',
    },
  ];

  const certifications = [
    
    {
      name: 'Full-Stack Web Development',
      issuer: 'BrainMentors Private Limited',
      date: 'June-2024',
      icon: '☁️',
      image:'Brainmentors.jpeg'
    },
    {
      name: 'PowerBI',
      issuer: 'Online Workshop',
      date: 'June-2025',
      icon: '📄',
      image: 'PowerBI.jpeg'
    },
    {
      name: 'Letter of Appreciation',
      issuer: 'Recognition of Excellence',
      date: '2025',
      icon: '🏆',
      image: 'LOA.jpg'
    }
  ];

  const TimelineItem = ({ item, index, isLast }) => (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay: index * 0.2, duration: 0.8 }}
      className="relative"
    >
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0">
          <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mb-4">
            <span className="text-2xl">{item.icon}</span>
          </div>
          {!isLast && (
            <div className="w-0.5 h-16 bg-purple-500/30 mx-auto mt-2"></div>
          )}
        </div>
        
        <div className="flex-1 bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-gray-700 mb-4">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-xl font-bold text-white">{item.degree}</h3>
          </div>
          
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-300 mb-3">
            <div className="flex items-center space-x-1">
              <FiBook className="text-purple-400" />
              <span>{item.institution}</span>
            </div>
            <div className="flex items-center space-x-1">
              <FiCalendar className="text-purple-400" />
              <span>{item.period}</span>
            </div>
            <div className="flex items-center space-x-1">
              <FiMapPin className="text-purple-400" />
              <span>{item.location}</span>
            </div>
          </div>
          
          <p className="text-gray-300 leading-relaxed">{item.description}</p>
        </div>
      </div>
    </motion.div>
  );

  const CertificationCard = ({ cert, index }) => (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
      className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-gray-700 card-hover"
    >
      {cert.image ? (
        <>
          <div className="mb-4">
            <img 
              src={`/${cert.image}`} 
              alt={`${cert.name} certificate`}
              className="w-full h-auto rounded-lg border border-gray-600"
            />
          </div>
          <div className="flex items-center space-x-2">
            <div className="text-xl">{cert.icon}</div>
            <div>
              <h4 className="text-lg font-bold text-white">{cert.name}</h4>
              <p className="text-sm text-gray-300">{cert.issuer}</p>
            </div>
          </div>
        </>
      ) : (
        <div className="flex items-center space-x-4 mb-4">
          <div className="text-3xl">{cert.icon}</div>
          <div>
            <h4 className="text-lg font-bold text-white">{cert.name}</h4>
            <p className="text-sm text-gray-300">{cert.issuer}</p>
          </div>
        </div>
      )}
      
      <div className="space-y-2 mt-4">
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-300">Date:</span>
          <span className="text-sm font-medium text-white">{cert.date}</span>
        </div>
        {cert.credential && (
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium text-purple-400">{cert.credential}</span>
          </div>
        )}
      </div>
    </motion.div>
  );

  return (
    <section id="education" className="section-padding relative">
      {/* Cyberpunk Grid Background */}
      <div className="fixed inset-0 w-full h-full -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a14] to-[#121220]"></div>
        <div className="absolute inset-0 bg-[length:40px_40px] bg-[linear-gradient(rgba(20,255,236,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(20,255,236,0.1)_1px,transparent_1px)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(20,255,236,0.15)_0%,transparent_15%),radial-gradient(circle_at_70%_80%,rgba(255,20,236,0.15)_0%,transparent_15%),radial-gradient(circle_at_50%_50%,rgba(120,20,255,0.1)_0%,transparent_15%)]"></div>
      </div>

      {/* Floating particles */}
      <div className="fixed inset-0 w-full h-full -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(2px_2px_at_20px_30px,#eee,transparent),radial-gradient(2px_2px_at_40px_70px,rgba(255,255,255,0.8),transparent),radial-gradient(1px_1px_at_90px_40px,#fff,transparent),radial-gradient(1px_1px_at_130px_80px,rgba(255,255,255,0.6),transparent),radial-gradient(2px_2px_at_160px_30px,#ddd,transparent)] bg-repeat bg-[length:200px_100px]"></div>
      </div>

      {/* Content */}
      <div className="container-custom relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Education & <span className="gradient-text">Certifications</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            My academic journey and professional certifications that have shaped my expertise 
            in web development and data analysis.
          </p>
        </motion.div>

        {/* Education Timeline */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            Academic Background
          </h3>
          <div className="max-w-4xl mx-auto">
            {education.map((item, index) => (
              <TimelineItem
                key={item.degree}
                item={item}
                index={index}
                isLast={index === education.length - 1}
              />
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            Professional Certifications
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <CertificationCard key={`${cert.name}-${index}`} cert={cert} index={index} />
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-16 text-center">
          <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-gray-700 max-w-2xl mx-auto">
            <FiAward className="text-4xl text-purple-400 mx-auto mb-4" />
            <h4 className="text-xl font-bold text-white mb-2">
              Continuous Learning
            </h4>
            <p className="text-gray-300">
              I believe in staying updated with the latest technologies and industry trends. 
              Currently pursuing advanced certifications in cloud computing and machine learning 
              to expand my skill set and deliver better solutions.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Animation styles */}
      <style jsx>{`
        @keyframes gridScan {
          0% { background-position: 0 0, 0 0, 0 0; }
          100% { background-position: 0 0, 0 800px, 800px 0; }
        }
        @keyframes nodePulse {
          0% { opacity: 0.8; }
          100% { opacity: 1; }
        }
        @keyframes sparkle {
          0% { transform: translateY(0px); }
          100% { transform: translateY(-100px); }
        }
        .card-hover:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px rgba(159, 122, 234, 0.3);
          transition: all 0.3s ease;
        }
      `}</style>
    </section>
  );
};

export default Education;