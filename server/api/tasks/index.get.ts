export default defineEventHandler(async () => {
  return await prisma.task.findMany({
    orderBy: { createdAt: 'desc' },
  })
})
