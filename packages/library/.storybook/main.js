module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: "@storybook/react",
  env: (config) => {
    console.log("*****HELLO DOES THIS WORK???******");
    console.log(config);

    return {
      ...config,
      STORYBOOK_ENV: true,
      EXAMPLE_VAR: "An environment variable configured in Storybook",
    };
  },
};
