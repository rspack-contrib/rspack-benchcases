/** @type {import("@rspack/cli").Configuration} */
module.exports = {
  entry: { main: "./src/Three.js" },
  resolve: {
    alias: {
      "@swc/helpers": require.resolve("@swc/helpers"),
    },
  },
};
