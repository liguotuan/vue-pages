const { defineConfig } = require('@vue/cli-service')
const pages = require('./config/pages');
var inquirer = require('inquirer');

// function prompt() {
//   return new Promise((resolve, reject) => {
//     inquirer.prompt([{
//       type: 'list',
//       name: 'package',
//       default: 0,
//       choices: [
//           { value: 'client', name: 'client' },
//           { value: 'admin', name: 'admin' }
//       ]
//     }]).then((error, result) => {
//       console.log('---error--->', error)
//       console.log('---result--->', result)
//       resolve(result)
//     })
//   })
// }

const pagePackage = process.argv[3];


module.exports = defineConfig({
  outputDir: `dist/${pagePackage}`,
  pages,
})
