const fs = require('fs')
const data = require('./data.json')

// Create
exports.post = function(req, res) {
  const keys = Object.keys(req.body)

  for (key in keys) {
    if (req.body[key] == "") {
      return res.send("Please, fill the field")
    }
  }

  let { avatar_url, name, birth, educational_level, education, ocupation } = req.body

  birth = Date.parse(birth)
  const created_at = Date.now()
  const id = Number(data.teachers.length + 1)

  data.teachers.push({
    id,
    avatar_url,
    name,
    birth,
    educational_level,
    education,
    ocupation,
    created_at
  })

  fs.writeFile('data.json', JSON.stringify(data, null, 2), function(err) {
    if (err) return res.send("Write file error!")

    return res.redirect("teachers")
  })
}