exports.getUsers = (req, res) => {
  res.set('Cache-Control', 'public, max-age=300, s-maxage=600');
  res.status(200).json([{
    firstName: 'Todd',
    lastName: 'Albert',
    id: '08hf9eufbve',
    email: 'todd@bocacode.com',
  }, {
    firstName: 'Michelle',
    lastName: 'Bakels',
    id: '089rhf98ehr',
    email: 'michelle@bocacode.com',
  }])
}

exports.createUser = (req, res) => {
  // for now... let's send back the data we receive 
  // TODO: save the data we get to a database
  const newUser = req.body
  res.status(200).send(newUser)
}
