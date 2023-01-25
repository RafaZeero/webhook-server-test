import express, { Request, Response } from 'express'

const app = express()
const PORT = 8000

// Public
app.get('/webhook', (req: Request, res: Response) => {
  console.log('Webhook accessed!')

  res.status(200).send('Henloo!')
})

app.listen(PORT, () => console.log(`Listening on port ${PORT}`))
