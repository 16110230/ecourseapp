require('dotenv').config()

const {
    HOSTNAME,
    DB_NAME,
    DB_PASSWORD,
    DB_USERNAME
} = process.env

module.exports = {
  "development": {
    "username": DB_USERNAME,
    "password": DB_PASSWORD,
    "database": DB_NAME,
    "host": HOSTNAME,
    "dialect": "mysql"
  },
  "test": {
    "username": DB_USERNAME,
    "password": DB_PASSWORD,
    "database": DB_NAME,
    "host": HOSTNAME,
    "dialect": "mysql"
  },
  "production": {
    "username": DB_USERNAME,
    "password": DB_PASSWORD,
    "database": DB_NAME,
    "host": HOSTNAME,
    "dialect": "mysql"
  }
}
