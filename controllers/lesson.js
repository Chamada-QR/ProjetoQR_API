const Lesson = require('../models/lesson');

exports.addLesson = async (req, res, next) => {
  const {date} = req.body;
  
  const lesson = await Lesson.create({
    qr_code: 'aaa',
    status: 1,
    date: date
  });
  return res.json(lesson)
};


exports.getQr = async (req, res, next) => {
  const { date } = req.params;

  const lesson = await Lesson.findOne({
    where: { 
      date,
      status:1
    } 
  });

  if (!lesson) {
    return res.status(404).json({ error: `Not found lesson active by date: ${date}.` });
  }

  let now =  new Date();
  if(lesson.updatedAt < now.setMinutes(now.getMinutes() + 5)) {
    lesson.qr_code = 'bbb';
    await lesson.save();
  }

  return res.json(lesson);
}

exports.registerPresence = (req, res, next) => {
  
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