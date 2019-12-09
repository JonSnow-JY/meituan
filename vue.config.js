const resolve = dir => require("path").join(__dirname, dir);

module.exports = {
  chainWebpack: config => {
    config.resolve.alias
      .set("@", resolve("src"))
      .set("directive", resolve("src/directive"));
  }
};
