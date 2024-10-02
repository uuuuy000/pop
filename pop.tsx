'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Linkedin, Github, Mail, MapPin } from 'lucide-react'
import Image from 'next/image'

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home')
  const [isHovered, setIsHovered] = useState(false)

  const sections = ['Home', 'About', 'Skills', 'Works', 'Contact']

  const skills = [
    "Machine Learning", "Deep Learning", "Python", "R", "Data Analysis", "Natural Language Processing",
    "Java", "AWS", "Google Cloud", "Azure", "Hadoop", "Spark", "HTML/CSS", "JavaScript", "React",
    "Vue.js", "Angular", "Git", "RESTful API", "GraphQL", "Jest", "Mocha", "Cypress"
  ]

  const projects = [
    {
      title: "E-Commerce Customer Segmentation and Recommendation System",
      description: "Developed a machine learning-based system to segment customers and provide personalized recommendations using Python.",
      link: "#"
    },
    {
      title: "Image Classification using Deep Learning",
      description: "Developed an image classification model using CNNs with TensorFlow and Keras, achieving 95% accuracy on a dataset of 10,000 images.",
      link: "#"
    },
    {
      title: "AI-Powered Customer Segmentation and Recommendation System",
      description: "Developed an AI solution using Python and TensorFlow, boosting customer retention by 20% and cross-selling by 15% through personalized recommendations, deployed on AWS for scalability and efficiency.",
      link: "#"
    }
  ]

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <h1 className="text-xl font-semibold">Rahul Gour</h1>
          <nav>
            <ul className="flex space-x-6">
              {sections.map((item) => (
                <li key={item}>
                  <button
                    onClick={() => setActiveSection(item.toLowerCase())}
                    className={`text-sm ${
                      activeSection === item.toLowerCase() ? 'text-purple-600 border-b-2 border-purple-600' : 'text-gray-600 hover:text-purple-600'
                    }`}
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-12">
        {activeSection === 'home' && (
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                Hi,<br />
                I'm <span className="text-purple-600">Rahul Gour</span><br />
                AI Engineer & Business Development
              </h2>
              <Button size="lg" className="mt-4 bg-purple-600 hover:bg-purple-700" onClick={() => setActiveSection('contact')}>
                Contact
              </Button>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative w-80 h-80 overflow-hidden rounded-full">
                <div 
                  className="absolute inset-0 bg-gradient-to-br from-purple-400 via-pink-500 to-yellow-500"
                  style={{
                    clipPath: isHovered ? 'circle(70.7% at 50% 50%)' : 'circle(0% at 50% 50%)',
                    transition: 'clip-path 0.5s ease-in-out'
                  }}
                />
                <div className="absolute inset-0">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202024-10-01%20at%2015.33.48-eGpEGEfBi2N9GlDrQVe5Ap7ooY6bxj.jpeg"
                    alt="Rahul Gour's portrait"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-full"
                  />
                </div>
                <div 
                  className="absolute inset-0 bg-black opacity-0 transition-opacity duration-500 ease-in-out"
                  style={{ opacity: isHovered ? 0.3 : 0 }}
                />
                <Button
                  className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10 opacity-0 transition-opacity duration-500 ease-in-out bg-purple-600 hover:bg-purple-700"
                  style={{ opacity: isHovered ? 1 : 0 }}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  View Profile
                </Button>
              </div>
            </div>
          </div>
        )}

        {activeSection === 'about' && (
          <div>
            <h2 className="text-3xl font-bold mb-4 text-purple-600">About Me</h2>
            <p className="text-lg mb-4">
              Seasoned Artificial Intelligence and Software Engineer with hands-on experience in sector-agnostic research support,
              financial analysis, and strategic business due diligence. Demonstrated proficiency in Machine Learning, Deep Learning, and
              cloud platforms such as AWS and Google Cloud. Developed high-impact AI projects including an image classification model
              achieving 95% accuracy and a customer segmentation and recommendation system, showcasing strong problem-solving and
              research skills.
            </p>
            <h3 className="text-2xl font-semibold mb-2 text-purple-600">Education</h3>
            <p>Babu Banarsi Das University, Lucknow, India - B.Tech, Artificial Intelligence</p>
            <p>Relevant Coursework: Deep Learning, Machine Learning, Natural Language Processing, Computer Vision, Data Structures and Algorithms.</p>
          </div>
        )}

        {activeSection === 'skills' && (
          <div>
            <h2 className="text-3xl font-bold mb-4 text-purple-600">Skills</h2>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <span key={index} className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        )}

        {activeSection === 'works' && (
          <div>
            <h2 className="text-3xl font-bold mb-4 text-purple-600">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects.map((project, index) => (
                <Card key={index} className="border-purple-200">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-purple-600">{project.title}</h3>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <a href={project.link} className="text-purple-600 hover:underline">Learn more</a>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeSection === 'contact' && (
          <div>
            <h2 className="text-3xl font-bold mb-4 text-purple-600">Contact</h2>
            <div className="space-y-4">
              <p className="flex items-center"><Mail className="w-5 h-5 mr-2 text-purple-600" /> gaurr210@gmail.com</p>
              <p className="flex items-center"><MapPin className="w-5 h-5 mr-2 text-purple-600" /> HSR LAYOUT, Bengaluru, Karnataka, 560103, India</p>
            </div>
          </div>
        )}
      </main>

      <footer className="bg-white shadow-sm mt-12">
        <div className="container mx-auto px-4 py-6">
          <div className="flex justify-center space-x-4">
            <a href="#linkedin" aria-label="LinkedIn profile">
              <Linkedin className="w-6 h-6 text-gray-600 hover:text-purple-600" />
            </a>
            <a href="#github" aria-label="GitHub profile">
              <Github className="w-6 h-6 text-gray-600 hover:text-purple-600" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}