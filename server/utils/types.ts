export interface Profile {
  name: string
  title: string
  bio: string
  location: string
  githubUrl: string
  email?: string
}

export interface Skill {
  id: number
  name: string
  category: 'frontend' | 'backend' | 'database' | 'devops'
  level: 'learning' | 'intermediate' | 'advanced'
  icon: string
}

export interface Project {
  id: number
  title: string
  description: string
  techStack: string[]
  githubUrl?: string
  liveUrl?: string
}
