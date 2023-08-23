module.exports = (api) => {
  const isWeb = api.caller((caller) => caller && caller.target === "isWeb");

  return {
    presets: [
      [
        "@babel/env",
      ],
      "@babel/typescript",
      [
        "@babel/react",
        {
          runtime: "automatic",
        },
      ],
    ],
    plugins: ["@loadable/babel-plugin", "@babel/plugin-transform-runtime"],
    env: {
      development: {
        plugins: isWeb ? ["react-refresh/babel"] : undefined,
      },
    },
  };
};
