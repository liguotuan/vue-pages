const chalk = require("chalk");
const { execSync } = require("child_process");
var inquirer = require("inquirer");
const action = process.argv[2];

const FN_MAP = {
  serve: vueServe,
  build: vueBuild,
};
if (!FN_MAP[action]) {
  return;
}

inquirer.prompt([
    {
      type: action == 'serve' ? "list" : 'checkbox',
      name: "modules",
      default: 0,
      choices: [
        { value: "client", name: "client" },
        { value: "user", name: "user" },
      ],
    },
  ]).then((result) => {
    FN_MAP[action](result.modules);
  });

function vueServe(PAGE_NAME = []) {
  execSync(`cross-env PAGE_NAME=${PAGE_NAME} vue-cli-service serve`, {
    stdio: "inherit",
  });
}

function vueBuild(pageName = []) {
  pageName.forEach((name) => {
    console.log(`${chalk.blue.bold('Waiting For Server Build...')}`);
    execSync(`cross-env PAGE_NAME=${name} vue-cli-service build`, {
      stdio: "inherit",
    });
  });
}

