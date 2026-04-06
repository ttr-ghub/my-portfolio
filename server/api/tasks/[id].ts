export default defineEventHandler(async (event) => {
  const id = Number(getRouterParam(event, 'id'))

  if (event.method === 'DELETE') {
    await prisma.task.delete({ where: { id } })
    return { success: true }
  }

  if (event.method === 'PATCH') {
    const body = await readBody<{ completed: boolean }>(event)
    return await prisma.task.update({
      where: { id },
      data: { completed: body.completed },
    })
  }

  throw createError({ statusCode: 405, message: 'Method Not Allowed' })
})
