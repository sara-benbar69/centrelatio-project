// ===========================
// CHARGEZ .env IMMÉDIATEMENT (avant toute autre chose!)
// ===========================
const dotenv = require('dotenv')
dotenv.config()

// ===========================
// Import modules
// ===========================
const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const rateLimit = require('express-rate-limit')

const app = express()
const PORT = process.env.PORT || 5000

app.set('trust proxy', 1)

// ===========================
// Security middleware
// ===========================
app.use(helmet())
//app.use(xss())
app.use(cors({
  origin: process.env.ALLOWED_ORIGINS?.split(',') || ['http://localhost:5173', 'http://localhost:3000'],
  credentials: true,
}))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const limiter = rateLimit({
  windowMs: 1 * 60 * 1000,
  max: 120,
  message: { success: false, error: 'Trop de requêtes. Réessayez dans une minute.' },
})
app.use('/api', limiter)

// ===========================
// Public routes
// ===========================
app.get('/api', (req, res) => {
  res.json({ message: 'Welcome to the Centrelatio API!' })
})

app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
  })
})

// 404 Handler
app.use((req, res) => {
  res.status(404).json({ success: false, error: 'Route not found' })
})

app.listen(PORT, () => {
  console.log(`
╔════════════════════════════════════════════════╗
║  🚀 Centrelatio API Server Started             ║
╠════════════════════════════════════════════════╣
║  Server: http://localhost:${PORT}           
║  Env:    ${process.env.NODE_ENV || 'development'}
╚════════════════════════════════════════════════╝
  `)
})
