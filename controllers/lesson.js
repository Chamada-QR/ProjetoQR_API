const Lesson = require('../models/lesson')
const User = require('../models/user')

exports.addLesson = async (req, res, next) => {
  const { date } = req.body

  const randomico = Math.random()
  const [lesson, created] = await Lesson.findOrCreate({
    where: { date: date },
    defaults: {
      qr_code: `${randomico}`,
      status: 1
    }
  })
  return res.json(lesson)
}

exports.getQr = async (req, res, next) => {
  const { id } = req.params

  const lesson = await Lesson.findByPk(id, {
    include: User
  })

  if (!lesson) {
    return res
      .status(404)
      .json({ error: `Not found lesson active by id: ${id}.` })
  }

  let now = new Date()
  // Atualizada para 10 segundos
  let updatedPlus5Minutes = new Date(lesson.updatedAt.getTime() + 30000)

  if (now > updatedPlus5Minutes) {
    const randomico = Math.random()
    lesson.qr_code = `${randomico}`
    await lesson.save()
  }

  return res.json(lesson)
}

exports.registerPresence = async (req, res, next) => {
  const { id, qrcode } = req.params
  const { user_id } = req.body

  const lesson = await Lesson.findByPk(id)
  const student = await User.findByPk(user_id)

  if (student && lesson) {
    await lesson.addUser(student, { through: { status: 'presente' } })

    const lessonStudents = await Lesson.findByPk(id, {
      include: User
    })

    return res.json(lessonStudents)
  } else {
    console.log('Student or Lesson not found')
  }
}

// exports.getEditLesson = (req, res, next) => {
//   const editMode = req.query.edit;
//   if (!editMode) {
//     return res.redirect('/');
//   }
//   const prodId = req.params.lessonId;
//   Lesson.findById(prodId, lesson => {
//     if (!lesson) {
//       return res.redirect('/');
//     }
//     res.render('admin/edit-lesson', {
//       pageTitle: 'Edit Lesson',
//       path: '/admin/edit-lesson',
//       editing: editMode,
//       lesson: lesson
//     });
//   });
// };

// exports.postEditLesson = (req, res, next) => {
//   const prodId = req.body.lessonId;
//   const updatedTitle = req.body.title;
//   const updatedPrice = req.body.price;
//   const updatedImageUrl = req.body.imageUrl;
//   const updatedDesc = req.body.description;
//   const updatedLesson = new Lesson(
//     prodId,
//     updatedTitle,
//     updatedImageUrl,
//     updatedDesc,
//     updatedPrice
//   );
//   updatedLesson.save();
//   res.redirect('/admin/lessons');
// };

// exports.getLessons = (req, res, next) => {
//   Lesson.fetchAll(lessons => {
//     res.render('admin/lessons', {
//       prods: lessons,
//       pageTitle: 'Admin Lessons',
//       path: '/admin/lessons'
//     });
//   });
// };

// exports.postDeleteLesson = (req, res, next) => {
//   const prodId = req.body.lessonId;
//   Lesson.deleteById(prodId);
//   res.redirect('/admin/lessons');
// };
