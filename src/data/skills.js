import { 
  SiJavascript, 
  SiPython, 
  SiHtml5, 
  SiCss3, 
  SiTailwindcss, 
  SiReact, 
  SiNodedotjs, 
  SiExpress, 
  SiDjango,
  SiMongodb, 
  SiMysql, 
  SiGit, 
  SiDocker,
  SiAppwrite
} from 'react-icons/si'
import { FaGithub } from 'react-icons/fa'
import { TbApi, TbBrain } from 'react-icons/tb'

export const skillCategories = {
  Languages: 'Languages',
  Frontend: 'Frontend',
  Backend: 'Backend',
  Databases: 'Databases',
  Tools: 'Tools & Platforms',
  AI: 'AI & Intelligence'
}

export const skills = [
  // Languages
  { name: 'JavaScript', category: skillCategories.Languages, icon: SiJavascript, brandColor: '#F7DF1E' },
  { name: 'Python', category: skillCategories.Languages, icon: SiPython, brandColor: '#3776AB' },
  
  // Frontend
  { name: 'HTML5', category: skillCategories.Frontend, icon: SiHtml5, brandColor: '#E34F26' },
  { name: 'CSS3', category: skillCategories.Frontend, icon: SiCss3, brandColor: '#1572B6' },
  { name: 'Tailwind CSS', category: skillCategories.Frontend, icon: SiTailwindcss, brandColor: '#06B6D4' },
  { name: 'React.js', category: skillCategories.Frontend, icon: SiReact, brandColor: '#61DAFB' },
  
  // Backend
  { name: 'Node.js', category: skillCategories.Backend, icon: SiNodedotjs, brandColor: '#339933' },
  { name: 'Express.js', category: skillCategories.Backend, icon: SiExpress, brandColor: '#000000' },
  { name: 'Django', category: skillCategories.Backend, icon: SiDjango, brandColor: '#092E20' },
  
  // Databases
  { name: 'MongoDB', category: skillCategories.Databases, icon: SiMongodb, brandColor: '#47A248' },
  { name: 'MySQL', category: skillCategories.Databases, icon: SiMysql, brandColor: '#4479A1' },
  
  // Tools & Platforms
  { name: 'Git', category: skillCategories.Tools, icon: SiGit, brandColor: '#F05032' },
  { name: 'GitHub', category: skillCategories.Tools, icon: FaGithub, brandColor: '#181717' },
  { name: 'Docker', category: skillCategories.Tools, icon: SiDocker, brandColor: '#2496ED' },
  { name: 'Appwrite', category: skillCategories.Tools, icon: SiAppwrite, brandColor: '#FD366E' },
  
  // AI & Intelligence
  { name: 'API-based AI Integration', category: skillCategories.AI, icon: TbApi, brandColor: null },
  { name: 'Rule-based AI Systems', category: skillCategories.AI, icon: TbBrain, brandColor: null },
]
