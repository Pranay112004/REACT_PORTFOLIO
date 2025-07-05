import React, { useState, useEffect, useRef } from 'react';
import { 
  FaHtml5, 
  FaCss3Alt, 
  FaJs, 
  FaReact, 
  FaNodeJs, 
  FaPython,
  FaJava 
} from 'react-icons/fa';
import { 
  SiMongodb, 
  SiMysql, 
  SiExpress, 
  SiNextdotjs 
} from 'react-icons/si';
import Lightning from './Lightning';
import './Lightning.css';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const skillsRef = useRef(null);

  const skills = [
    { name: 'HTML5', icon: FaHtml5, color: 'text-orange-500' },
    { name: 'CSS3', icon: FaCss3Alt, color: 'text-blue-500' },
    { name: 'JavaScript', icon: FaJs, color: 'text-yellow-500' },
    { name: 'React', icon: FaReact, color: 'text-cyan-500' },
    { name: 'Node.js', icon: FaNodeJs, color: 'text-green-600' },
    { name: 'Python', icon: FaPython, color: 'text-blue-600' },
    { name: 'MongoDB', icon: SiMongodb, color: 'text-green-500' },
    { name: 'MySQL', icon: SiMysql, color: 'text-blue-700' },
    { name: 'Express.js', icon: SiExpress, color: 'text-gray-600' },
    { name: 'Next.js', icon: SiNextdotjs, color: 'text-black' },
    { name: 'Java', icon: FaJava, color: 'text-red-500' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const currentRef = skillsRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <section id="skills" className="py-20 bg-gray-900 lightning-background" ref={skillsRef}>
      <Lightning hue={270} xOffset={-2} speed={0.8} intensity={0.3} size={2} />
      <Lightning hue={190} xOffset={2} speed={0.6} intensity={0.2} size={1.5} />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 relative inline-block">
            My Skills
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-blue-500 to-green-500 rounded-full"></div>
          </h2>
          <p className="text-xl text-gray-300 mt-6">Technologies I work with</p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => {
            const IconComponent = skill.icon;
            return (
              <div
                key={skill.name}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg hover:shadow-xl hover:bg-white/20 transition-all duration-300 p-6 transform hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Icon and Name */}
                <div className="flex flex-col items-center text-center">
                  <IconComponent 
                    className={`text-5xl ${skill.color} mb-4 animate-pulse hover:scale-110 transition-transform duration-300`} 
                  />
                  <h3 className="text-xl font-semibold text-white mb-3">{skill.name}</h3>
                  
                  {/* Skill Description */}
                  <p className="text-sm text-gray-300 leading-relaxed">
                    {getSkillDescription(skill.name)}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-8 animate-fade-in">
            <h3 className="text-2xl font-bold text-white mb-4">Always Learning</h3>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Technology evolves rapidly, and I'm committed to staying current with the latest trends, 
              frameworks, and best practices in web development. I believe in continuous learning and 
              adapting to new challenges.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

// Helper function to get skill descriptions
const getSkillDescription = (skillName) => {
  const descriptions = {
    'HTML5': 'Semantic markup and modern web standards',
    'CSS3': 'Advanced styling, animations, and responsive design',
    'JavaScript': 'Modern ES6+ features and asynchronous programming',
    'React': 'Component-based UI development and state management',
    'Node.js': 'Server-side JavaScript and API development',
    'Python': 'Backend development and automation scripts',
    'MongoDB': 'NoSQL database design and operations',
    'MySQL': 'Relational database management and optimization',
    'Express.js': 'Web framework for Node.js applications',
    'Next.js': 'React framework for production applications',
    'Java': 'Object-oriented programming and enterprise applications'
  };
  return descriptions[skillName] || 'Professional experience and expertise';
};

export default Skills;
