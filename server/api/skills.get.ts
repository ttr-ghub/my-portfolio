import type { Skill } from '../utils/types'

export default defineEventHandler((): Skill[] => {
  return [
    { id: 1, name: 'Vue.js', category: 'frontend', level: 'advanced', icon: '🟢' },
    { id: 2, name: 'Nuxt', category: 'frontend', level: 'advanced', icon: '💚' },
    { id: 3, name: 'TypeScript', category: 'frontend', level: 'intermediate', icon: '🔷' },

    { id: 4, name: 'Node.js', category: 'backend', level: 'intermediate', icon: '🟩' },
    { id: 5, name: 'Nitro', category: 'backend', level: 'intermediate', icon: '⚡' },
    { id: 6, name: 'Entra ID (MSAL)', category: 'backend', level: 'intermediate', icon: '🔐' },

    { id: 7, name: 'PostgreSQL', category: 'database', level: 'learning', icon: '🐘' },
    { id: 8, name: 'Prisma', category: 'database', level: 'learning', icon: '🔺' },

    { id: 9, name: 'Vercel', category: 'devops', level: 'learning', icon: '▲' },
    { id: 10, name: 'GitHub Actions', category: 'devops', level: 'learning', icon: '🐙' },
  ]
})
