import type { Skill } from '../utils/types'

export default defineEventHandler((): Skill[] => {
  return [
    { id: 1, name: 'Vue.js', category: 'frontend', level: 'intermediate', icon: '🟢' },
    { id: 2, name: 'Nuxt', category: 'frontend', level: 'intermediate', icon: '💚' },
    { id: 3, name: 'JavaScript', category: 'frontend', level: 'advanced', icon: '🟡' },
    { id: 4, name: 'TypeScript', category: 'frontend', level: 'intermediate', icon: '🔷' },
    { id: 5, name: 'Sass / SCSS', category: 'frontend', level: 'advanced', icon: '🎨' },

    { id: 6, name: 'Node.js', category: 'backend', level: 'learning', icon: '🟩' },
    { id: 7, name: 'Nitro', category: 'backend', level: 'learning', icon: '⚡' },
    { id: 8, name: 'Entra ID (MSAL)', category: 'backend', level: 'intermediate', icon: '🔐' },

    { id: 9, name: 'PostgreSQL', category: 'database', level: 'learning', icon: '🐘' },
    { id: 10, name: 'Prisma', category: 'database', level: 'learning', icon: '🔺' },

    { id: 15, name: 'Figma', category: 'design', level: 'learning', icon: '🎭' },

    { id: 11, name: 'Git', category: 'devops', level: 'intermediate', icon: '🔀' },
    { id: 12, name: 'Netlify', category: 'devops', level: 'learning', icon: '🌐' },
    { id: 13, name: 'Vercel', category: 'devops', level: 'learning', icon: '▲' },
    { id: 14, name: 'GitHub Actions', category: 'devops', level: 'learning', icon: '🐙' },
  ]
})
