// form_repository.js

class FormRepository {  
  constructor(dao) {
    this.dao = dao
  }
  
  // create table if it isn't already
  createTable() {
    const sql = `
    CREATE TABLE IF NOT EXISTS forms (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      caller_name TEXT,
	  caller_phone TEXT,
	  is_complete INTEGER
	  )`
    return this.dao.run(sql)
  }
  
  // INSERT INTO the database
  create(caller_name, caller_phone, is_complete) {
    return this.dao.run(
      'INSERT INTO forms (caller_name, caller_phone, is_complete) VALUES (?, ?, ?)',
      [caller_name, caller_phone, is_complete])
  }
  
  // updating data
    update(form) {
    const { id, caller_name, caller_phone, is_complete } = form
    return this.dao.run(
      `UPDATE forms 
	  SET 	caller_name = ?,
			caller_phone = ?,
			is_complete = ?,
	  WHERE id = ?`,
      [caller_name, caller_phone, is_complete, id]
    )
  }
  
  getById(id) {
    return this.dao.get(
      `SELECT * 
	  FROM forms 
	  WHERE id = ?`,
      [id])
  }
    getAll() {
    return this.dao.all(`SELECT * FROM forms`)
  }
	// get all Forms
	getForms(formId) {
		return this.dao.all(
			`SELECT * 
			FROM forms 
			WHERE (projectId = ? AND isComplete = 0)`,
      [formId])
  }
  
}

module.exports = FormRepository;  