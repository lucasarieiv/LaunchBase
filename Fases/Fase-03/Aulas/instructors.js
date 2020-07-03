const fs = require('fs')
const data = require('./data.json')

exports.show = function(req, res) {
  // req.query.id - http://localhost:5000/instructors?id=1
  // req.body - Pega no formulário, quando mandamos através do POST
  // req.params.id - /:id - http://localhost:5000/instructors/1

  const { id } = req.params

  const foundInstructor = data.instructors.find(function(instructor) {
    return instructor.id == id
  })

  if (!foundInstructor) return res.send('Instructor not found!')

  return res.send(foundInstructor)
}

// Create
exports.post = function(req, res) {
    const keys = Object.keys(req.body)
  
    for (key of keys) {
      if (req.body[key] == "") {
        return res.send("Please, fill the field")
      }
    }
    
    let { avatar_url, birth, name, services, gender } = req.body

    birth = Date.parse(birth)
    const created_at = Date.now() 
    const id = Number(data.instructors.length + 1)

    data.instructors.push({
      id,
      avatar_url,
      name,
      birth,
      gender,
      services,
      created_at
    })

    fs.writeFile('data.json', JSON.stringify(data, null, 2), function(err) {
      if (err) return res.send("Write file error!")

      return res.redirect("instructors")
    })

    // return res.send(req.body)
}