inquirer.prompt([{
    type: 'list',
    name: 'package',
    default: 0,
    choices: [
        { value: 'client', name: 'client' },
        { value: 'admin', name: 'admin' }
    ]
  }]).then((error, result) => {
    console.log('---error--->', error)
    console.log('---result--->', result)
    resolve(result)
  })