const express = require('express')
const app = express()
const port = 3000
const lessonRouter = require('./routes/lesson')
var helmet = require('helmet');
app.use(helmet());
app.use(express.json());
const sequelize = require('./database');
const Lesson = require('./models/lesson');
const User = require('./models/user');
const Role = require('./models/role');

(async () => {
  await sequelize.sync({alter:true})
  // .then(result => console.log(result))
  .catch(err => console.log(err))
})();

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.use('/lesson', lessonRouter)

app.use((req, res, next) => {
  res.status(404).send("Not Found")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

