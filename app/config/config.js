import dotenv from "dotenv"
dotenv.config()

// Database Configuration
export const DATABASE_URI = process.env.DATABASE_URI

// Authentication
export const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY
export const JWT_EXPIRATION_TIME = process.env.JWT_EXPIRATION_TIME

// Email Server Configuration
export const EMAIL_SERVER_HOST = process.env.EMAIL_SERVER_HOST
export const EMAIL_SERVER_PORT = process.env.EMAIL_SERVER_PORT
export const EMAIL_ACCOUNT_USERNAME = process.env.EMAIL_ACCOUNT_USERNAME
export const EMAIL_ACCOUNT_PASSWORD = process.env.EMAIL_ACCOUNT_PASSWORD

// Payload Limits
export const MAX_JSON_PAYLOAD_SIZE = process.env.MAX_JSON_PAYLOAD_SIZE
export const ALLOW_URL_ENCODED = process.env.ALLOW_URL_ENCODED

// Request Limits
export const REQUEST_LIMIT_TIME = process.env.REQUEST_LIMIT_TIME
export const MAX_REQUEST_LIMIT_NUMBER = process.env.MAX_REQUEST_LIMIT_NUMBER

// Caching
export const ENABLE_CACHING = process.env.ENABLE_CACHING

// Server Port
export const SERVER_PORT = process.env.SERVER_PORT || 4000