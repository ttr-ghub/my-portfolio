export default defineEventHandler(async (event) => {
  const body = await readBody<{ title: string }>(event)
  if (!body?.title?.trim()) {
    throw createError({ statusCode: 400, message: 'title is required' })
  }
  return await prisma.task.create({
    data: { title: body.title.trim() },
  })
})
