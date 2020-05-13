const createExpoWebpackConfig = require("@expo/webpack-config");
const path = require("path");

module.exports = async function (env, argv) {
  const config = await createExpoWebpackConfig(env, argv);
  config.resolve.alias = Object.assign(
    {},
    {
      "~": path.join(__dirname, "src"),
      "~components": path.join(__dirname, "src", "components"),
      "~constants": path.join(__dirname, "src", "constants"),
      "~hooks": path.join(__dirname, "src", "hooks"),
    }
  );
  return config;
};
