// - This is the main Sequelize class used to connect to a database and define models.
// imports the contents of the config.json file located in the parent directory (../config.json).
// imports a module from the student.js file located in the same directory (./student)

const { Sequelize, DataTypes } = require('sequelize')
const configJson = require('../config.json')
const createStudentModel = require('./student')

//sets the env variable based on the environment configuration

const env = process.env.NODE_ENV || 'development'

// selects the configuration for the current environment (development, test, or production) from the config.json file
const config = configJson[env]

// creates a new Sequelize instance using the configuration for the current environment
const sequelize = new Sequelize(config)

// checks if the connection to the database is successful and logs a message to the console
const database = {
    sequelize: sequelize,
    Sequelize: Sequelize,
}

// checks if the connection to the database is successful and logs a message to the console
const studentModel = createStudentModel(sequelize, DataTypes)
const studentModelName = studentModel.name
database[studentModelName] = studentModel

// creates the database tables based on the defined models and logs a message to the console
module.exports = database
