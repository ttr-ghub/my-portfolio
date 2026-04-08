import prisma from '../utils/prisma'

export default defineEventHandler(async () => {
  // すでにデータがある場合は、重複登録を防ぐために何もしない
  const count = await prisma.skill.count()
  if (count > 0) {
    return { message: 'すでにデータが存在するため、スキップしました。' }
  }

  // 初期データ（20個）
  const skills = [
    { name: 'Vue.js', category: 'frontend', level: 'intermediate', icon: '🟢' },
    { name: 'Nuxt', category: 'frontend', level: 'intermediate', icon: '💚' },
    { name: 'JavaScript', category: 'frontend', level: 'advanced', icon: '🟡' },
    { name: 'TypeScript', category: 'frontend', level: 'intermediate', icon: '🔷' },
    { name: 'Sass / SCSS', category: 'frontend', level: 'advanced', icon: '🎨' },
    { name: 'jQuery', category: 'frontend', level: 'advanced', icon: '📜' },
    { name: 'React Native', category: 'frontend', level: 'learning', icon: '📱' },
    
    { name: 'Node.js', category: 'backend', level: 'learning', icon: '🟩' },
    { name: 'Nitro', category: 'backend', level: 'learning', icon: '⚡' },
    { name: 'Entra ID (MSAL)', category: 'backend', level: 'intermediate', icon: '🔐' },
    { name: 'PHP', category: 'backend', level: 'learning', icon: '🐘' },
    { name: 'Laravel', category: 'backend', level: 'learning', icon: '🔴' },
    
    { name: 'PostgreSQL', category: 'database', level: 'learning', icon: '🐘' },
    { name: 'Prisma', category: 'database', level: 'learning', icon: '🔺' },
    
    { name: 'Figma', category: 'design', level: 'learning', icon: '🎭' },
    
    { name: 'Git', category: 'devops', level: 'intermediate', icon: '🔀' },
    { name: 'Netlify', category: 'devops', level: 'learning', icon: '🌐' },
    { name: 'Vercel', category: 'devops', level: 'learning', icon: '▲' },
    { name: 'GitHub Actions', category: 'devops', level: 'learning', icon: '🐙' },
    { name: 'Nginx', category: 'devops', level: 'learning', icon: '⚙️' },
  ]

  // createMany で一気にDBへ書き込む
  const result = await prisma.skill.createMany({
    data: skills,
  })

  return { 
    message: '初期データの投入が完了しました！',
    count: result.count
  }
})
