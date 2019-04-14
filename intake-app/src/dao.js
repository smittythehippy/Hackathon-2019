// dao.js
const Promise = require('bluebird')
const sqlite3 = require('sqlite3').verbose()

class AppDAO {  
  constructor(dbFilePath) {
	  // db is a connection object
    this.db = new sqlite3.Database(dbFilePath, (err) => {
      if (err) {
        console.log('Could not connect to database', err)
      } else {
        console.log('Connected to database')
      }
    })
  }
  
  // to run a sql command
  run(sql, params = []) {
	return new Promise((resolve, reject) => {
      this.db.run(sql, params, function (err) {
        if (err) {
          console.log('Error running sql ' + sql)
          console.log(err)
          reject(err)
        } else {
          resolve({ id: this.lastID })
        }
      })
    })
  }
	// can now use this method in FormsRepository
	// to retrieve data from SQLite database
  all(sql, params = []) {
    return new Promise((resolve, reject) => {
      this.db.all(sql, params, (err, rows) => {
        if (err) {
          console.log('Error running sql: ' + sql)
          console.log(err)
          reject(err)
        } else {
          resolve(rows)
        }
      })
    })
  }
}

module.exports = AppDAO 