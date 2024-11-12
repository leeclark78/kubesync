import express from 'express'
import { Storage } from '@google-cloud/storage'
import { PubSub } from '@google-cloud/pubsub'

const app = express()
const storage = new Storage()
const pubsub = new PubSub()

app.use(express.json())

app.get('/api/health', (req, res) => {
  res.json({ status: 'healthy' })
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`KubeSync API running on port ${PORT}`)
})