import prisma from '../utils/prisma'

export default defineEventHandler(async () => {
  // DBのSkillテーブルから全件取得して返す。ついでにID順に並び替え
  const skills = await prisma.skill.findMany({
    orderBy: { id: 'asc' }
  })

  return skills
})
