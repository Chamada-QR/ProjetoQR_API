const Lesson = require('../models/lesson')
const User = require('../models/user')

exports.getAllPresentUsers = async (req, res) => {
  const { lessonId } = req.params

  try {
    const lesson = await Lesson.findByPk(lessonId, {
      include: {
        model: User,
        through: {
          where: { status: 'presente' }
        }
      }
    })

    if (!lesson) {
      return res
        .status(404)
        .json({ error: `Lesson with id: ${lessonId} not found.` })
    }

    const presentUsers = lesson.Users // Users is the name of the associated model
    return res.json(presentUsers)
  } catch (error) {
    console.error('Error fetching present users:', error)
    return res
      .status(500)
      .json({ error: 'An error occurred while fetching present users.' })
  }
}
