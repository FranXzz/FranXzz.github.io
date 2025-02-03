import React from 'react';
import { LanguageToggle } from './components/LanguageToggle';
import { Github, Linkedin, Mail, MapPin, ExternalLink, Gamepad2 } from 'lucide-react';
import { useLanguage } from './hooks/useLanguage';
import { translations } from './translations';

const skills = [
  { category: 'Programming', items: ['Java', 'C#', 'JavaScript','Unity'] },
  { category: 'Frontend', items: ['HTML', 'CSS', 'JavaFX','JavaScript'] },
  { category: 'Databases', items: ['MySQL','MongoDB'] },
  { category: 'Operating Systems', items: ['Linux', 'Windows'] },
  { category: 'Tools', items: ['GitHub','VSCode','NetBeans','Odoo'] },
  { category: 'Languages', items: ['English', 'Spanish', 'Portuguese'] },
];

const projects = [
  {
    title: 'Desertion: Escape from Duty',
    descriptionKey: 'desertion',
    technologies: ['Unity', 'C#', 'Game Design', '3D Animation'],
    imageUrl: 'https://i.ibb.co/TBzg8syF/Desertion.webp',
    githubUrl: 'https://github.com/FranXzz/Desertion-Escape-from-Duty',
    demoUrl: 'https://fraanxzz.itch.io/desertionescapefromduty'
  },
  {
    title: 'GymWizz',
    descriptionKey: 'gymwizz',
    technologies: ['Java', 'JavaFX', 'MySQL', 'UI/UX Design'],
    imageUrl: 'https://i.ibb.co/j9ZQrtZ3/407573433-2a57c753-1622-4c15-a61b-bc8bac77c968.webp',
    githubUrl: 'https://github.com/FranXzz/GymWizz',
  },
];

const experiences = [
  {
    company: 'Insetec',
    positionKey: 'intern',
    period: 'April 2024 - June 2024',
    descriptionKey: 'insetec',
  },
  {
    company: 'Phone and Fun',
    positionKey: 'teleoperator',
    period: 'July 2022 - September 2022',
    descriptionKey: 'phoneAndFun',
  },
];

function App() {
  const { language, toggleLanguage } = useLanguage();
  const t = translations[language];

  return (
    <div className="min-h-screen gradient-background text-gray-100">
      <LanguageToggle language={language} toggleLanguage={toggleLanguage} />
      
      <header className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <img
            src="https://avatars.githubusercontent.com/u/165948545?v=4"
            alt="Franco Milazzo"
            className="w-48 h-48 rounded-full object-cover border-4 border-blue-500"
          />
          <div>
            <h1 className="text-4xl font-bold mb-2">Franco Milazzo</h1>
            <p className="text-xl text-gray-300 mb-2">
              {t.role}
            </p>
            <div className="flex items-center gap-2 text-gray-300 mb-2">
              <MapPin className="w-5 h-5" />
              <span>{t.location}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300 mb-4">
              <Mail className="w-5 h-5" />
              <span>{t.email}</span>
            </div>
            <div className="flex gap-4">
              <a
                href="https://github.com/FranXzz"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-blue-400 transition-colors"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://linkedin.com/in/francorubenmilazzo"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-blue-400 transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </header>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">{t.experience}</h2>
          <div className="space-y-8">
            {experiences.map((exp) => (
              <div
                key={exp.company}
                className="border-l-4 border-blue-500 pl-4 space-y-2"
              >
                <h3 className="text-xl font-semibold">{t.positions[exp.positionKey]}</h3>
                <p className="text-blue-400">{exp.company}</p>
                <p className="text-gray-300">{exp.period}</p>
                <ul className="list-disc list-inside text-gray-300">
                  {t.experienceDescriptions[exp.descriptionKey].map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">{t.projects}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div
                key={project.title}
                className="bg-gray-800/50 rounded-lg overflow-hidden shadow-lg group hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-2 border border-gray-700"
              >
                <div className="aspect-video w-full overflow-hidden">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold">{project.title}</h3>
                    <div className="flex gap-2">
                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
                        >
                          <Gamepad2 className="w-4 h-4" />
                          {t.playDemo}
                        </a>
                      )}
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-300 transition-colors"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-4">
                    {t.projectDescriptions[project.descriptionKey]}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-900/50 text-blue-200 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">{t.education}</h2>
          <div className="space-y-6">
            <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg shadow-lg border border-gray-700 hover:bg-gray-700/50 transform hover:-translate-y-1 hover:shadow-xl transition-all duration-300 cursor-pointer group">
              <h3 className="text-xl font-semibold group-hover:text-blue-400 transition-colors">
                {t.degree}
              </h3>
              <p className="text-blue-400 group-hover:text-blue-300 transition-colors">
                IES Augusto González de Linares, Santander
              </p>
              <p className="text-gray-300">2022 - 2024</p>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg shadow-lg border border-gray-700 hover:bg-gray-700/50 transform hover:-translate-y-1 hover:shadow-xl transition-all duration-300 cursor-pointer group">
              <h3 className="text-xl font-semibold group-hover:text-blue-400 transition-colors">
                {t.highSchool}
              </h3>
              <p className="text-blue-400 group-hover:text-blue-300 transition-colors">
                Instituto Manuel Belgrano, Quilmes, Argentina
              </p>
              <p className="text-gray-300">2013 - 2019</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">{t.aboutMe}</h2>
          <p className="text-lg text-gray-300 max-w-3xl">
            {t.aboutText}
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">{t.skills}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill) => (
              <div
                key={skill.category}
                className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg shadow-lg border border-gray-700 hover:bg-gray-700/50 transform hover:-translate-y-1 hover:shadow-xl transition-all duration-300 group"
              >
                <h3 className="text-xl font-semibold mb-4 group-hover:text-blue-400 transition-colors">{skill.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1 bg-blue-900/50 text-blue-200 rounded-full text-sm group-hover:bg-blue-800/50 transition-colors"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="py-8 text-center text-gray-400">
        <p>© {new Date().getFullYear()} Franco Milazzo. {t.rights}</p>
      </footer>
    </div>
  );
}

export default App;