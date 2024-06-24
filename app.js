const express = require('express')
const cors = require('cors')
const app = express()
const port = 3758
const lessonRouter = require('./routes/lesson')
const userRouter = require('./routes/user')
var helmet = require('helmet')
app.use(helmet())
app.use(express.json())
const sequelize = require('./database')
const Lesson = require('./models/lesson')
const User = require('./models/user')
const Role = require('./models/role')

// Use the CORS middleware
app.use(
  cors({
    origin: 'http://localhost:3000' // Allow requests from this origin
  })
)
app.use('/lesson', lessonRouter)
app.use('/users', userRouter)

app.use((req, res, next) => {
  res.status(404).send('Not Found')
})

;(async () => {
  await sequelize
    .sync({ alter: true })
    // .then(result => console.log(result))
    .catch(err => console.log(err))
})()


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
