require('dotenv').config();

module.exports = {
  development: {
    username: 'joe1',
    password: '1234',
    database: 'primedeck',
    host: '127.0.0.1',
    dialect: 'postgres',
    port: 5432
  },
  production: {
    use_env_variable: 'DATABASE_URL',
    dialect: 'postgres'
  }

};
