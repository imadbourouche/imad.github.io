import { useState } from 'react';
import { ExternalLink, Github, Monitor, Code2 } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const projects = [
  {
    title: 'OntoPortal',
    description: 'OntoPortal is an open-source platform for managing and publishing semantic data and ontologies. It provides a web interface and REST APIs for storing, visualizing, and searching structured data. Supports ontology versioning, metadata management, and advanced search capabilities. Deployed in over 10 organizations across 6 countries, serving diverse domains.',
    image: '',
    tags: ['Ruby on Rails', 'Hotwire', 'Redis', 'NoSQL', 'Solr', 'Sidekiq'],
    github: 'https://ontoportal.org',
    demo: '',
    category: 'professional'
  },
  {
    title: 'Luceed.ai',
    description: 'A LinkedIn scraping and automation platform architected using microservices. Developed as a freelance project, it includes complex admin/user dashboards, real-time notification services, and robust third-party API integrations.',
    tags: ['Next.js', 'Nest.js', 'Microservices', 'PostgreSQL', 'Redis'],
    github: 'https://luceed.ai',
    demo: '',
    category: 'professional'
  },
  {
    title: 'Redis Implementation in Java',
    description: 'A custom implementation of the Redis key-value store built in Java, featuring core data structure support and TCP networking.',
    tags: ['Java', 'Redis', 'TCP/IP', 'Data Structures', 'Pub/Sub'],
    github: 'https://github.com/imadbourouche/redis-java',
    demo: '',
    category: 'personal'
  },
  {
    title: 'Simple Proxy Server',
    description: 'A dedicated forward proxy server written in Python that allows for interception and logging of HTTP requests and responses.',
    tags: ['Python', 'Networking', 'HTTP', 'Proxy'],
    github: 'https://github.com/imadbourouche/simple_proxy_server',
    demo: '',
    category: 'personal'
  },
  {
    title: 'QR Code attendance checking system',
    description: 'An interactive application for generating and scanning QR codes using a webcam, designed for event attendance tracking.',
    tags: ['Python', 'Computer Vision', 'OpenCV', 'Qt'],
    github: 'https://github.com/imadbourouche/QR_code',
    demo: '',
    category: 'personal'
  }
];

export function Projects() {
  const [activeTab, setActiveTab] = useState<'professional' | 'personal'>('professional');

  const filteredProjects = activeTab === 'professional'
    ? projects.filter(p => p.category === 'professional')
    : projects.filter(p => p.category === 'personal');


  const cols =
    filteredProjects.length === 1
      ? "grid-cols-1"
      : filteredProjects.length === 2
      ? "grid-cols-2"
      : "grid-cols-3";

  return (
    <section id="projects" className="py-32 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-20">
          <p className="text-teal-600 tracking-wider uppercase text-sm">Portfolio</p>
          <h2 className="text-5xl tracking-tight text-slate-900">
            Featured Projects
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            A selection of projects that i worked on
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-16">
          <div className="inline-flex p-1 bg-white border border-slate-200 rounded-xl shadow-sm">
            <button
              onClick={() => setActiveTab('professional')}
              className={`px-6 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-2 ${activeTab === 'professional'
                ? 'bg-teal-500 text-white shadow-md'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
            >
              <Monitor className="w-4 h-4" />
              Professional
            </button>
            <button
              onClick={() => setActiveTab('personal')}
              className={`px-6 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-2 ${activeTab === 'personal'
                ? 'bg-teal-500 text-white shadow-md'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
            >
              <Code2 className="w-4 h-4" />
              Personal
            </button>
          </div>
        </div>


        <div className={`grid ${cols} gap-8 justify-items-center`}>
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="group bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col h-full w-full max-w-sm lg:max-w-none"
            >
              {/* <div className="relative h-48 overflow-hidden bg-slate-100">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div> */}

              <div className="p-8 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {project.title}
                </h3>

                <p className="text-slate-600 mb-6 leading-relaxed flex-1 text-sm">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6 justify-center">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-teal-50 text-teal-700 rounded-full text-xs font-medium border border-teal-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 mt-auto">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex justify-center items-center gap-2 px-4 py-2 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors text-sm font-medium"
                  >
                    <Github className="w-4 h-4" />
                    {project.category === 'professional' ? 'Website' : 'Code'}
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex justify-center items-center gap-2 px-4 py-2 bg-white text-slate-900 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors text-sm font-medium"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
