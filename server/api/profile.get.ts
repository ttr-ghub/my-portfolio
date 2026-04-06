import type { Profile } from '../utils/types'

export default defineEventHandler((): Profile => {
  return {
    name: 'Eiji TSUCHIDA',
    title: 'Full-Stack Engineer',
    bio: 'Vue/Nuxt をメインに、Node.js・TypeScript でバックエンドも担当するフルスタックエンジニア。Prisma + PostgreSQL による DB 設計から、Entra ID (MSAL) を使った認証基盤の構築まで幅広く対応します。',
    location: 'Japan',
    githubUrl: 'https://github.com/implmbp197',
  }
})
