import express from 'express'

import database from './database'

import authorization from './modules/authorization'
import profile from './modules/profile'
import commissions from './modules/commissions'
import department from './modules/department'

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())

database
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.')
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err)
  })

authorization(app, database)
profile(app)
commissions(app)
department(app)

app.listen(port)
