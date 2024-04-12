import express,{Application} from 'express'
import dotenv from 'dotenv'
import mainRouter from './src/routes/main.router'
import { connectMongoose } from './src/configs/mongoose.config'
import bodyParser from 'body-parser'
import cors from 'cors'
import path from 'path'

dotenv.config()

const main = () => {
  const app : Application = express()
  app.use(cors({origin : '*'}))
  app.use(bodyParser.json())
  app.use(express.json())
  const port = process.env.PORT || 5000
  connectMongoose()
  app.use('/api', mainRouter)
  app.use('/uploads', express.static(path.join('uploads')))
  app.listen(port, () => console.log(`server running on port ${port}`))
}

main()