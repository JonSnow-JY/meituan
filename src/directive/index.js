const modulesFiles = require.context("directive/modules", false, /\.js$/);
const path = require("path");
console.log(modulesFiles);
// modulesFiles.keys().reduce((modules, modulePath) => {
//   const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, "$1");
//   const value = modulesFiles(modulePath);
//   modules[moduleName] = value.default;
//   return modules;
// }, {});

modulesFiles.keys().map(item => {
  require("directive/modules" + item);
  require(path.join("directive/modules", item));
});
