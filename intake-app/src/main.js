const Promise = require('bluebird')
const AppDAO = require('./dao')  
const FormRepository = require('./form_repository') 

function main(){
	
	const dao = new AppDAO('./database.sqlite3')
	const formRepo = new FormRepository(dao)
	const formData = { name: 'testName' }
	let formId
	
	formRepo.createTable()
    .then(() => formRepo.createTable())
    .then(() => formRepo.create(formData.name))
    .then((data) => {
      formId = data.id
      const forms = [
        {
          caller_name: 'Outline',
		      caller_phone: '310-559-0210',
          is_complete: 0,
          formId
        },
		{
          caller_name: 'Write',
          caller_phone: '1234567890',
          is_complete: 0,
          formId
        }
      ]

		return Promise.all(forms.map((form) => {
        const { caller_name, caller_phone, is_complete, formId } = form
        return formRepo.create(caller_name, caller_phone, is_complete)
    }))		
	})
    .then(() => formRepo.getById(formId))
    .then((form) => {
      console.log(`\nRetreived form from database`)
      console.log(`form id = ${form.id}`)
      console.log(`form name = ${form.caller_name}`)
      return formRepo.getForms(form.id)
    })
    .then((forms) => {
      console.log('\nRetrieved forms from database')
        forms.forEach((form) => {
          console.log(`form id = ${form.id}`)
          console.log(`form caller_name = ${form.caller_name}`)
          console.log(`form caller_phone = ${form.caller_phone}`)
          console.log(`form is_complete = ${form.is_complete}`)
          console.log(`form formId = ${form.formId}`)
        })

      resolve('success')
    })
    .catch((err) => {
      console.log('Error: ')
      console.log(JSON.stringify(err))
    })
}

main()