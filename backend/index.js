const express = require("express")
const mongoose = require("mongoose")
const config = require("config")
const authRouter = require("./routes/auth.routes")
const app = express()
const PORT = config.get('PORT')
const corsMiddleware = require('./middleware/cors.middleware')

app.use(corsMiddleware)
app.use(express.json())
app.use("/api/auth", authRouter)


const start = async () => {
  try {
    //   Подключаемся к Базе Данных
    await mongoose.connect(config.get('DataBaseURL'), {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    app.listen(PORT, () => {
      console.log('server run in port:', PORT)
    })
  }
  catch (e) {

  }
}

start()