const express = require('express')
const app = express()
const port = 3000
const qrcode = require('./routes/qrcode')
var helmet = require('helmet');
app.use(helmet());

const sequelize = require('./database');
const Lesson = require('./models/lesson');

(async () => {
  await sequelize.sync()
  // .then(result => console.log(result))
  .catch(err => console.log(err))
})();

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.use('/qrcode', qrcode)

app.use((req, res, next) => {
  res.status(404).send("Not Found")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

